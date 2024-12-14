import React from 'react';

interface CTAButtonProps {
  href: string;
  text: string;
  primary?: boolean;
  outlined?: boolean;
}

export function CTAButton({ href, text, primary = false, outlined = false }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center px-6 py-3 text-base font-medium rounded-md transition-all duration-200";
  
  if (primary) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} bg-secondary text-white hover:bg-secondary-dark shadow-lg hover:shadow-xl`}
      >
        {text}
      </a>
    );
  }

  if (outlined) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} border-2 border-primary text-primary hover:bg-primary hover:text-white`}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} bg-white text-primary border border-primary hover:bg-primary hover:text-white`}
    >
      {text}
    </a>
  );
}