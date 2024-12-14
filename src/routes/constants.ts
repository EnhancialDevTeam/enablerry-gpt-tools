// Route path constants
export const ROUTES = {
  HOME: '/',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  // Legacy routes
  LEGACY_PRIVACY: '/privacy-policy',
  LEGACY_TERMS: '/terms-of-use',
} as const;

// Navigation items
export const NAV_ITEMS = [
  {
    label: 'Home',
    path: ROUTES.HOME,
  },
  {
    label: 'Privacy Policy',
    path: ROUTES.PRIVACY,
  },
  {
    label: 'Terms of Use',
    path: ROUTES.TERMS,
  },
] as const;