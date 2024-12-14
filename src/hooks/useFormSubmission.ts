import { useState } from 'react';
import { emailService } from '../services/email/emailService';
import { trackEvent } from '../utils/analytics';
import type { FormStatus, EmailTemplateData } from '../types';

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

  const handleSubmit = async (formData: Omit<EmailTemplateData, 'to_name'>) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      console.log('Submitting form data:', formData);

      const { success, error } = await emailService.sendEmail(formData);

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