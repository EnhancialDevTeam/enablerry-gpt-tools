import { useState } from 'react';
import { RECAPTCHA_CONFIG } from '../config/recaptcha.config';
import { RecaptchaValidator } from '../utils/validation/recaptcha';

export function useRecaptcha() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const validator = RecaptchaValidator.getInstance();

  const validateRecaptcha = (): boolean => {
    const result = validator.validate(recaptchaToken);
    if (!result.isValid) {
      setError(result.error || RECAPTCHA_CONFIG.ERROR_MESSAGES.NOT_COMPLETED);
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