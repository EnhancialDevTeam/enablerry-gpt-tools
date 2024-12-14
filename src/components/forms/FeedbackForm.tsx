import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { sendEmail } from '../../utils/email';
import { ReCaptcha } from './ReCaptcha';
import { FormInput } from './FormInput';
import { SubmitButton } from './SubmitButton';
import { StarRating } from './StarRating';
import { useRating } from '../../hooks/useRating';
import { useRecaptcha } from '../../hooks/useRecaptcha';
import { useFeedbackValidation } from '../../hooks/useFeedbackValidation';
import { trackEvent } from '../../utils/analytics';
import { FormData } from '../../types';

export function FeedbackForm() {
  const { rating, setRating, error: ratingError, validateRating } = useRating(true);
  const { recaptchaToken, setRecaptchaToken, validateRecaptcha } = useRecaptcha();
  const { error: feedbackError, validateFeedback } = useFeedbackValidation(50); // Updated to 50 characters minimum
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    feedback: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid } = validateFeedback(formData.feedback);
    if (!isValid) return;

    if (!validateRating()) return;
    if (!validateRecaptcha()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { success, error } = await sendEmail({
        ...formData,
        rating,
        form_type: 'feedback',
        recaptcha_token: recaptchaToken!
      });

      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', feedback: '' });
        setRating(0);
        setRecaptchaToken(null);
        trackEvent('form_submission', 'Engagement', 'Feedback Form');
      } else {
        setStatus('error');
        setErrorMessage(error?.message || 'Failed to send feedback. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border border-neutral-200 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h3 className="text-2xl font-semibold text-neutral-900">Share Your Feedback</h3>
      </div>
      
      <div className="flex-grow">
        <FormInput
          id="name"
          label="Full Name"
          required
          value={formData.name}
          onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
        />

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        />

        <FormInput
          id="feedback"
          label="Your Feedback"
          type="textarea"
          required
          minLength={50}
          value={formData.feedback}
          onChange={(value) => setFormData(prev => ({ ...prev, feedback: value }))}
          error={feedbackError}
          onBlur={() => validateFeedback(formData.feedback)}
          placeholder="Please provide detailed feedback (minimum 50 characters)"
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
          <p className="mt-4 text-red-600">{errorMessage}</p>
        )}

        <p className="mt-4 text-sm text-neutral-500">
          By submitting this form, you agree to our Privacy Policy and Terms of Use.
        </p>
      </div>
    </form>
  );
}