// Form validation configuration
export const FORM_CONFIG = {
  FEEDBACK: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 1000,
    REQUIRED_FIELDS: ['name', 'email', 'feedback', 'rating'] as const,
  },
  GPT_IDEA: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 1000,
    REQUIRED_FIELDS: ['name', 'email', 'title', 'description', 'useCase'] as const,
  },
} as const;