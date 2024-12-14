import { FormStatus } from '../types';

export const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return undefined;
};

export const getFormStatusMessage = (status: FormStatus['status'], defaultError: string): string => {
  switch (status) {
    case 'success':
      return 'Thank you for your submission!';
    case 'error':
      return defaultError;
    default:
      return '';
  }
};