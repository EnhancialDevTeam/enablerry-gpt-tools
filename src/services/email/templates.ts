// Email template configuration
export const EMAIL_TEMPLATES = {
  FEEDBACK: {
    FIELDS: {
      TO_NAME: 'Enablerry Team',
      FROM_NAME: 'from_name',
      FROM_EMAIL: 'from_email',
      MESSAGE: 'message',
      RATING: 'rating',
    },
  },
  GPT_IDEA: {
    FIELDS: {
      TO_NAME: 'Enablerry Team',
      FROM_NAME: 'from_name',
      FROM_EMAIL: 'from_email',
      TOOL_NAME: 'tool_name',
      DESCRIPTION: 'description',
      USE_CASE: 'use_case',
    },
  },
} as const;