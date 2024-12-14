export function trackEvent(eventName: string, category: string, label: string) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      'event_category': category,
      'event_label': label,
    });
  }
}