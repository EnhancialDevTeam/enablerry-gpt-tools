// Email service configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_enablerry',
  TEMPLATE_IDS: {
    FEEDBACK: 'template_feedback',
    GPT_IDEA: 'template_gpt_idea',
  },
  PUBLIC_KEY: 'MCMDp53ezb_n5AmJ2',
  TO_EMAIL: 'hello@enablerry.com',
} as const;

// Email template field mappings
export const EMAIL_TEMPLATE_FIELDS = {
  FEEDBACK: {
    TO_NAME: 'to_name',
    FROM_NAME: 'from_name',
    FROM_EMAIL: 'from_email',
    MESSAGE: 'message',
    RATING: 'rating',
  },
  GPT_IDEA: {
    TO_NAME: 'to_name',
    FROM_NAME: 'from_name',
    FROM_EMAIL: 'from_email',
    TOOL_NAME: 'tool_name',
    DESCRIPTION: 'description',
    USE_CASE: 'use_case',
  },
} as const;