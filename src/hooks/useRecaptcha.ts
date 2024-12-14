import { useState } from 'react';
import { RECAPTCHA_CONFIG } from '../config/recaptcha.config';

export function useRecaptcha() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const validateRecaptcha = (): boolean => {
    if (!recaptchaToken) {
      setError(RECAPTCHA_CONFIG.ERROR_MESSAGES.NOT_COMPLETED);
      return false;
    }
    setError('');
    return true;
  };

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    setError('');
  };

  return {
    recaptchaToken,
    setRecaptchaToken,
    error,
    validateRecaptcha,
    resetRecaptcha,
  };
}