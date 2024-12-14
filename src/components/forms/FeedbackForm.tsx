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

export function FeedbackForm() {
  const { rating, setRating, error: ratingError, validateRating } = useRating(true);
  const { recaptchaToken, setRecaptchaToken, validateRecaptcha } = useRecaptcha();
  const { error: feedbackError, validateFeedback } = useFeedbackValidation(4);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid } = validateFeedback(formData.feedback);
    if (!isValid) return;

    if (!validateRating()) return;
    if (!validateRecaptcha()) return;

    setStatus('loading');

    try {
      const { success } = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.feedback,
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
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleFeedbackChange = (value: string) => {
    setFormData(prev => ({ ...prev, feedback: value }));
    validateFeedback(value);
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
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        />

        <FormInput
          id="feedback"
          label="Your Feedback"
          type="textarea"
          required
          minLength={4}
          value={formData.feedback}
          onChange={handleFeedbackChange}
          error={feedbackError}
          onBlur={() => validateFeedback(formData.feedback)}
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
          <p className="mt-4 text-red-600">Failed to send feedback. Please try again.</p>
        )}

        <p className="mt-4 text-sm text-neutral-500">
          By submitting this form, you agree to our Privacy Policy and Terms of Use.
        </p>
      </div>
    </form>
  );
}