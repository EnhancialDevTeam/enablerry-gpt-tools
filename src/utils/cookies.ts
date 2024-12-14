import { ANALYTICS_CONFIG } from '../config/analytics.config';

declare global {
  interface Window {
    Cookiebot: any;
  }
}

export const CookieConsent = {
  isAnalyticsAllowed(): boolean {
    return window.Cookiebot?.consent?.statistics || false;
  },

  isMarketingAllowed(): boolean {
    return window.Cookiebot?.consent?.marketing || false;
  },

  onConsentChanged(callback: (consent: any) => void) {
    window.addEventListener('CookiebotOnAccept', () => {
      callback(window.Cookiebot.consent);
    });

    window.addEventListener('CookiebotOnDecline', () => {
      callback(window.Cookiebot.consent);
    });
  },

  initializeAnalytics() {
    if (this.isAnalyticsAllowed()) {
      gtag('config', ANALYTICS_CONFIG.MEASUREMENT_ID, {
        cookie_flags: 'SameSite=None;Secure'
      });
    }
  }
};