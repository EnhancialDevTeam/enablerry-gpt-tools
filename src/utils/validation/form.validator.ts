export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class FormValidator {
  static validateRequired(value: string, fieldName: string): ValidationResult {
    if (!value.trim()) {
      return {
        isValid: false,
        error: `${fieldName} is required`
      };
    }
    return { isValid: true };
  }

  static validateEmail(email: string): ValidationResult {
    if (!email) {
      return {
        isValid: false,
        error: 'Email is required'
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        isValid: false,
        error: 'Please enter a valid email address'
      };
    }

    return { isValid: true };
  }

  static validateMinLength(value: string, minLength: number, fieldName: string): ValidationResult {
    const trimmedLength = value.trim().length;
    if (trimmedLength < minLength) {
      return {
        isValid: false,
        error: `Please lengthen this ${fieldName.toLowerCase()} to ${minLength} characters or more (you are currently using ${trimmedLength} characters).`
      };
    }
    return { isValid: true };
  }
}