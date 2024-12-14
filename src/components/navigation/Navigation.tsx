import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { NAV_ITEMS } from '../../routes/constants';

export function Navigation() {
  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo 
              className="h-8" 
              linkClassName="focus:outline-none focus:ring-2 focus:ring-primary rounded"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-neutral-600 hover:text-primary transition-colors ${
                    isActive ? 'font-semibold text-primary' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}