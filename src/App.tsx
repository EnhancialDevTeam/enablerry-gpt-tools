import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { CookieConsentManager } from './components/analytics/CookieConsentManager';

export function App() {
  return (
    <>
      <CookieConsentManager />
      <RouterProvider router={router} />
    </>
  );
}