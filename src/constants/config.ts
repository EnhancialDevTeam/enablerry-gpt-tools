export const RECAPTCHA_CONFIG = {
  SITE_KEY: '6LcTspsqAAAAADieUs8CLqLnV1JFtyBdXCPYbcO7',
  THEME: 'light' as const,
  SIZE: 'normal' as const,
};

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_yjrm30n',
  TEMPLATE_IDS: {
    FEEDBACK: 'template_feedback',
    GPT_IDEA: 'template_gpt_idea',
  },
  PUBLIC_KEY: 'MCMDp53ezb_n5AmJ2',
  TO_EMAIL: 'hello@enablerry.com',
};

export const FORM_CONFIG = {
  FEEDBACK: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 1000,
  },
  IDEA: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 1000,
  },
};