import React from 'react';
import { Logo } from '../Logo';
import { NavLink } from './NavLink';

export function Navigation() {
  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo className="h-8" />
          </div>
          <div className="hidden md:flex items-center">
            <NavLink href="#feedback" button>Feedback</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}