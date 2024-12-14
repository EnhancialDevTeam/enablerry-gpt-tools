import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../navigation/Navigation';
import { Footer } from '../Footer';
import { RouteTracker } from '../analytics/RouteTracker';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <RouteTracker />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}