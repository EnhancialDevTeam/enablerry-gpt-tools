import { useState } from 'react';
import { emailService } from '../services/email/emailService';
import { trackEvent } from '../utils/analytics';
import type { FormStatus } from '../types';

interface UseFormSubmissionProps {
  onSuccess?: () => void;
  eventName?: string;
  eventCategory?: string;
  eventLabel?: string;
}

export function useFormSubmission({
  onSuccess,
  eventName,
  eventCategory,
  eventLabel,
}: UseFormSubmissionProps = {}) {
  const [status, setStatus] = useState<FormStatus['status']>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (formData: {
    from_name: string;
    from_email: string;
    message: string;
    rating?: number;
    form_type: 'feedback' | 'gpt_idea';
    recaptcha_token: string;
  }) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const { success, error } = await emailService.sendEmail({
        fromName: formData.from_name,
        fromEmail: formData.from_email,
        message: formData.message,
        rating: formData.rating,
        recaptchaToken: formData.recaptcha_token,
        formType: formData.form_type,
      });

      if (success) {
        setStatus('success');
        onSuccess?.();
        
        if (eventName && eventCategory && eventLabel) {
          trackEvent(eventName, eventCategory, eventLabel);
        }
      } else {
        setStatus('error');
        setErrorMessage(error || 'Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return {
    status,
    errorMessage,
    handleSubmit,
  };
}