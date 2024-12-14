export const RECAPTCHA_CONFIG = {
  SITE_KEY: '6LcTspsqAAAAADieUs8CLqLnV1JFtyBdXCPYbcO7',
  THEME: 'light' as const,
  SIZE: 'normal' as const,
  ERROR_MESSAGES: {
    VERIFICATION_FAILED: 'reCAPTCHA verification failed. Please try again.',
    NOT_COMPLETED: 'Please complete the reCAPTCHA verification.',
  },
} as const;