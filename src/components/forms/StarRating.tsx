import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
  required?: boolean;
  error?: string;
}

export function StarRating({ rating, onChange, required = false, error }: StarRatingProps) {
  return (
    <div className="mb-6">
      <label className="block text-neutral-700 mb-2">
        Rating {required && '*'}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="focus:outline-none transition-transform hover:scale-110"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              className={`h-6 w-6 ${
                star <= rating ? 'text-secondary fill-current' : 'text-neutral-300'
              }`}
            />
          </button>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}