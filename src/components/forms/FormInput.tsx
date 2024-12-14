import React, { useState } from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minLength?: number;
  rows?: number;
  className?: string;
  error?: string;
  onBlur?: () => void;
}

export function FormInput({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
  minLength,
  rows,
  className = '',
  error,
  onBlur,
}: FormInputProps) {
  const [touched, setTouched] = useState(false);
  const showError = touched && error;
  const baseClasses = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary";
  const borderColor = showError ? "border-red-500" : "border-neutral-300 focus:border-primary";
  
  const handleBlur = () => {
    setTouched(true);
    onBlur?.();
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-neutral-700 mb-2">
        {label} {required && '*'}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          required={required}
          minLength={minLength}
          rows={rows || 4}
          className={`${baseClasses} ${borderColor}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          minLength={minLength}
          className={`${baseClasses} ${borderColor}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      )}
      {showError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}