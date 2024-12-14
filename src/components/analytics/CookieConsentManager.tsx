import { useEffect } from 'react';
import { CookieConsent } from '../../utils/cookies';

export function CookieConsentManager() {
  useEffect(() => {
    CookieConsent.onConsentChanged((consent) => {
      if (consent.statistics) {
        CookieConsent.initializeAnalytics();
      }
    });
  }, []);

  return null;
}