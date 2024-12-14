import { useState } from 'react';

export function useRecaptcha() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const validateRecaptcha = (): boolean => {
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return false;
    }
    return true;
  };

  return {
    recaptchaToken,
    setRecaptchaToken,
    validateRecaptcha,
  };
}