import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_CONFIG } from '../../constants/config';

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

export function ReCaptcha({ onChange }: ReCaptchaProps) {
  const handleChange = (token: string | null) => {
    if (token) {
      console.log('reCAPTCHA verified');
    }
    onChange(token);
  };

  return (
    <div className="mb-6">
      <ReCAPTCHA
        sitekey={RECAPTCHA_CONFIG.SITE_KEY}
        onChange={handleChange}
        theme={RECAPTCHA_CONFIG.THEME}
        size={RECAPTCHA_CONFIG.SIZE}
      />
    </div>
  );
}