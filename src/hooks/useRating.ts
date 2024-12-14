import { useState } from 'react';

export function useRating(required = false) {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState<string>('');

  const validateRating = (): boolean => {
    if (required && rating === 0) {
      setError('Please select a rating');
      return false;
    }
    setError('');
    return true;
  };

  return {
    rating,
    setRating,
    error,
    validateRating,
  };
}