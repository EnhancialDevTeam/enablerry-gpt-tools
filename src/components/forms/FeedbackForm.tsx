import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { FormInput } from './FormInput';
import { SubmitButton } from './SubmitButton';
import { StarRating } from './StarRating';
import { ReCaptcha } from './ReCaptcha';
import { useRating } from '../../hooks/useRating';
import { useRecaptcha } from '../../hooks/useRecaptcha';
import { useFeedbackValidation } from '../../hooks/useFeedbackValidation';
import { useFormSubmission } from '../../hooks/useFormSubmission';
import { FORM_CONFIG } from '../../config/form.config';
import type { FormData } from '../../types';

export function FeedbackForm() {
  const { rating, setRating, error: ratingError, validateRating } = useRating(true);
  const { recaptchaToken, setRecaptchaToken, validateRecaptcha } = useRecaptcha();
  const { error: feedbackError, validateFeedback } = useFeedbackValidation(FORM_CONFIG.FEEDBACK.MIN_LENGTH);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    feedback: ''
  });

  const resetForm = () => {
    setFormData({ name: '', email: '', feedback: '' });
    setRating(0);
    setRecaptchaToken(null);
  };

  const { status, errorMessage, handleSubmit } = useFormSubmission({
    onSuccess: resetForm,
    eventName: 'form_submission',
    eventCategory: 'Engagement',
    eventLabel: 'Feedback Form'
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid } = validateFeedback(formData.feedback);
    if (!isValid) return;
    if (!validateRating()) return;
    if (!validateRecaptcha()) return;

    await handleSubmit({
      from_name: formData.name,
      from_email: formData.email,
      message: formData.feedback,
      rating,
      form_type: 'feedback',
      recaptcha_token: recaptchaToken!
    });
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold text-neutral-900">Share Your Feedback</h3>
      </div>
      
      <div className="flex-grow">
        <FormInput
          id="from_name"
          name="from_name"
          label="Full Name"
          required
          value={formData.name}
          onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
        />

        <FormInput
          id="email"
          name="from_email"
          label="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        />

        <FormInput
          id="message"
          name="message"
          label="Your Feedback"
          type="textarea"
          required
          minLength={FORM_CONFIG.FEEDBACK.MIN_LENGTH}
          maxLength={FORM_CONFIG.FEEDBACK.MAX_LENGTH}
          value={formData.feedback}
          onChange={(value) => setFormData(prev => ({ ...prev, feedback: value }))}
          error={feedbackError}
          onBlur={() => validateFeedback(formData.feedback)}
          placeholder={`Please provide detailed feedback (minimum ${FORM_CONFIG.FEEDBACK.MIN_LENGTH} characters)`}
        />

        <StarRating
          rating={rating}
          onChange={setRating}
          required
          error={ratingError}
        />

        <ReCaptcha onChange={setRecaptchaToken} />
      </div>

      <div className="mt-auto">
        <SubmitButton
          status={status}
          text="Submit Feedback"
          className="bg-primary text-white hover:bg-primary-dark"
        />

        {status === 'success' && (
          <p className="mt-4 text-green-600">Thank you for your feedback!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">{errorMessage || 'Failed to send feedback. Please try again.'}</p>
        )}

        <p className="mt-4 text-sm text-neutral-500">
          By submitting this form, you agree to our Privacy Policy and Terms of Use.
        </p>
      </div>
    </form>
  );
}