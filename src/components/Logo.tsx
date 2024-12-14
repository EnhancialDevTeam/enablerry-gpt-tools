import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export function Logo({ className = 'h-8', linkClassName }: LogoProps) {
  // For footer (dark background), we'll use a white version of the logo
  const isDarkBackground = className.includes('footer');
  
  const logo = (
    <img
      src="https://enablerry.com/wp-content/uploads/2024/09/enablerry_logo_full_colour.png"
      alt="Enablerry"
      className={className}
      style={{ 
        objectFit: 'contain',
        filter: isDarkBackground ? 'brightness(0) invert(1)' : 'none'
      }}
    />
  );

  return (
    <Link 
      to="/" 
      className={`inline-block transition-opacity hover:opacity-80 ${linkClassName || ''}`}
      aria-label="Go to homepage"
    >
      {logo}
    </Link>
  );
}