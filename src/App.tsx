import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { RouteTracker } from './components/analytics/RouteTracker';
import { CookieConsentManager } from './components/analytics/CookieConsentManager';

export function App() {
  return (
    <Router>
      <CookieConsentManager />
      <RouteTracker />
      <AppRoutes />
    </Router>
  );
}