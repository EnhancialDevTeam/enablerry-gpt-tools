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

  const handleSubmit = async (formData: any) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const { success, error } = formData.form_type === 'feedback'
        ? await emailService.sendFeedback(formData)
        : await emailService.sendGPTIdea(formData);

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
      console.error('Submission error:', error);
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