import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
        <p className="text-neutral-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}