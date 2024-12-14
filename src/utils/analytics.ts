import { ANALYTICS_CONFIG } from '../config/analytics.config';

interface EventParams {
  [key: string]: string | number | boolean;
}

class Analytics {
  private static instance: Analytics;
  private initialized: boolean = false;

  private constructor() {
    this.init();
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private init() {
    if (!this.initialized && typeof window !== 'undefined') {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      
      // Set debug mode in development
      if (ANALYTICS_CONFIG.DEBUG_MODE) {
        gtag('config', ANALYTICS_CONFIG.MEASUREMENT_ID, { debug_mode: true });
      }

      this.initialized = true;
      console.log('Analytics initialized successfully');
    }
  }

  public trackEvent(
    eventName: string,
    category: string,
    label: string,
    additionalParams: EventParams = {}
  ): void {
    if (typeof gtag === 'undefined') {
      console.warn('Google Analytics not loaded');
      return;
    }

    try {
      gtag('event', eventName, {
        event_category: category,
        event_label: label,
        ...additionalParams,
      });

      if (ANALYTICS_CONFIG.DEBUG_MODE) {
        console.log('Event tracked:', { eventName, category, label, additionalParams });
      }
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  public trackPageView(path: string): void {
    if (typeof gtag === 'undefined') {
      console.warn('Google Analytics not loaded');
      return;
    }

    try {
      gtag('config', ANALYTICS_CONFIG.MEASUREMENT_ID, {
        page_path: path,
      });

      if (ANALYTICS_CONFIG.DEBUG_MODE) {
        console.log('Page view tracked:', path);
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }
}

export const analytics = Analytics.getInstance();

// Convenience wrapper for trackEvent
export function trackEvent(
  eventName: string,
  category: string,
  label: string,
  additionalParams: EventParams = {}
): void {
  analytics.trackEvent(eventName, category, label, additionalParams);
}