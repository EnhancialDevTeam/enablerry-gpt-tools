import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      {/* Redirect /privacy-policy to /privacy for backwards compatibility */}
      <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
      {/* Redirect /terms-of-use to /terms for backwards compatibility */}
      <Route path="/terms-of-use" element={<Navigate to="/terms" replace />} />
      {/* Catch all other routes and redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}