// Environment configuration using Vite's import.meta.env
export const ENV_CONFIG = {
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_TEST: import.meta.env.MODE === 'test',
  DISABLE_RECAPTCHA: import.meta.env.VITE_DISABLE_RECAPTCHA === 'true',
} as const;