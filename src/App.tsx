import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { RouteTracker } from './components/analytics/RouteTracker';

export function App() {
  return (
    <Router>
      <RouteTracker />
      <AppRoutes />
    </Router>
  );
}