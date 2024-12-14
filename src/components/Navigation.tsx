import React from 'react';
import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tools" className="text-neutral-600 hover:text-primary transition-colors">
              Tools
            </a>
            <a href="#feedback" className="text-neutral-600 hover:text-primary transition-colors">
              Feedback
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}