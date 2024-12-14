export const ANALYTICS_CONFIG = {
  MEASUREMENT_ID: 'G-XPLLHFGGZX',
  DEBUG_MODE: process.env.NODE_ENV === 'development',
  EVENTS: {
    FORM_SUBMISSION: 'form_submission',
    GPT_IDEA_SUBMISSION: 'gpt_idea_submission',
  },
  CATEGORIES: {
    ENGAGEMENT: 'Engagement',
    CONVERSION: 'Conversion',
  },
} as const;