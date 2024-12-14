import { useState, useCallback } from 'react';

interface ValidationResult {
  isValid: boolean;
  error: string | undefined;
}

export function useFeedbackValidation(minLength: number = 4) {
  const [error, setError] = useState<string>();

  const validateFeedback = useCallback((feedback: string): ValidationResult => {
    if (!feedback.trim()) {
      setError('Feedback is required');
      return { isValid: false, error: 'Feedback is required' };
    }

    if (feedback.trim().length < minLength) {
      setError(`Feedback must be at least ${minLength} characters long`);
      return { isValid: false, error: `Feedback must be at least ${minLength} characters long` };
    }

    setError(undefined);
    return { isValid: true, error: undefined };
  }, [minLength]);

  return {
    error,
    validateFeedback,
  };
}