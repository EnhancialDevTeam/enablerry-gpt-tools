import { useState } from 'react';
import { FormValidator } from '../utils/validation/form.validator';
import type { ValidationResult } from '../utils/validation/form.validator';

interface UseFormValidationProps {
  minLength?: number;
  required?: boolean;
  isEmail?: boolean;
}

export function useFormValidation(fieldName: string, options: UseFormValidationProps = {}) {
  const [error, setError] = useState<string>();

  const validate = (value: string): ValidationResult => {
    if (options.required) {
      const result = FormValidator.validateRequired(value, fieldName);
      if (!result.isValid) {
        setError(result.error);
        return result;
      }
    }

    if (options.isEmail) {
      const result = FormValidator.validateEmail(value);
      if (!result.isValid) {
        setError(result.error);
        return result;
      }
    }

    if (options.minLength) {
      const result = FormValidator.validateMinLength(value, options.minLength, fieldName);
      if (!result.isValid) {
        setError(result.error);
        return result;
      }
    }

    setError(undefined);
    return { isValid: true };
  };

  return {
    error,
    validate,
    setError,
  };
}