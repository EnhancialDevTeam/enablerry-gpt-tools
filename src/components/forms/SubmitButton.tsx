import React from 'react';
import { FormStatus } from '../../types';

interface SubmitButtonProps {
  status: FormStatus['status'];
  text: string;
  loadingText?: string;
  className?: string;
}

export function SubmitButton({
  status,
  text,
  loadingText = 'Sending...',
  className = '',
}: SubmitButtonProps) {
  const baseClasses = "w-full py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  return (
    <button
      type="submit"
      disabled={status === 'loading'}
      className={`${baseClasses} ${className}`}
    >
      {status === 'loading' ? loadingText : text}
    </button>
  );
}