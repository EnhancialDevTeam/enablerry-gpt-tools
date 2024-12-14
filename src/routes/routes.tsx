import React from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse';
import { NotFound } from '../pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms',
        element: <TermsOfUse />,
      },
      // Legacy route redirects
      {
        path: 'privacy-policy',
        element: <Navigate to="/privacy" replace />,
      },
      {
        path: 'terms-of-use',
        element: <Navigate to="/terms" replace />,
      },
      // 404 page
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];