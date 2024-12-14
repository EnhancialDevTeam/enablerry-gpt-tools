import React from 'react';

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
}: FormInputProps) {
  const baseClasses = "w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";
  
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
          className={baseClasses}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          className={baseClasses}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}