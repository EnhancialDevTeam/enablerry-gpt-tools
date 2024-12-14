import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  button?: boolean;
}

export function NavLink({ href, children, button = false }: NavLinkProps) {
  if (button) {
    return (
      <a
        href={href}
        className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-secondary hover:bg-secondary-dark transition-colors shadow-md hover:shadow-lg"
      >
        {children}
      </a>
    );
  }

  return (
    <a 
      href={href} 
      className="text-neutral-600 hover:text-primary font-medium transition-colors"
    >
      {children}
    </a>
  );
}