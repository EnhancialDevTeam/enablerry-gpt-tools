import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../../utils/analytics';

export function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location]);

  return null;
}