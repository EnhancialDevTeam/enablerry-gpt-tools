import { useState, useCallback } from 'react';

interface ValidationResult {
  isValid: boolean;
  error: string | undefined;
}

export function useFeedbackValidation(minLength: number = 5) {
  const [error, setError] = useState<string>();

  const validateFeedback = useCallback((feedback: string): ValidationResult => {
    if (!feedback.trim()) {
      setError('Feedback is required');
      return { isValid: false, error: 'Feedback is required' };
    }

    if (feedback.trim().length < minLength) {
      setError(`Please lengthen this text to ${minLength} characters or more (you are currently using ${feedback.trim().length} characters).`);
      return { 
        isValid: false, 
        error: `Please lengthen this text to ${minLength} characters or more (you are currently using ${feedback.trim().length} characters).`
      };
    }

    setError(undefined);
    return { isValid: true, error: undefined };
  }, [minLength]);

  return {
    error,
    validateFeedback,
  };
}