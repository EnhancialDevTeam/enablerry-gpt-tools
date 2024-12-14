import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = 'h-8' }: LogoProps) {
  // For footer (dark background), we'll use a white version of the logo
  const isDarkBackground = className.includes('footer');
  
  return (
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
}