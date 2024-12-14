// Email service configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_yjrm30n',
  TEMPLATE_IDS: {
    FEEDBACK: 'template_927yn1g',
    GPT_IDEA: 'template_4eru8cs',
  },
  PUBLIC_KEY: 'MCMDp53ezb_n5AmJ2',
} as const;

// Email template field mappings - MUST match EmailJS template variables exactly
export const EMAIL_TEMPLATE_FIELDS = {
  // Common fields across all templates
  COMMON: {
    TO_NAME: 'to_name',       // {{to_name}}
    FROM_NAME: 'from_name',   // {{from_name}}
    FROM_EMAIL: 'from_email', // {{from_email}}
  },
  // Feedback form specific fields
  FEEDBACK: {
    MESSAGE: 'message',       // {{message}}
    RATING: 'rating',         // {{rating}}
  },
  // GPT Idea form specific fields
  GPT_IDEA: {
    TOOL_NAME: 'tool_name',   // {{tool_name}}
    DESCRIPTION: 'message',   // {{message}} - reusing message field for description
    USE_CASE: 'use_case',     // {{use_case}}
  },
} as const;