import { useState } from 'react';
import { FormStatus } from '../types';
import { emailService } from '../services/emailService';
import { trackEvent } from '../utils/analytics';

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

  const handleSubmit = async (emailData: any) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const { success, error } = await emailService.sendEmail(emailData);

      if (success) {
        setStatus('success');
        onSuccess?.();
        
        if (eventName && eventCategory && eventLabel) {
          trackEvent(eventName, eventCategory, eventLabel);
        }
      } else {
        setStatus('error');
        setErrorMessage(error?.message || 'Failed to send. Please try again.');
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
    setStatus,
    setErrorMessage,
  };
}