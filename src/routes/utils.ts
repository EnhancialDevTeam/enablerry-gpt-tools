import { ROUTES } from './constants';

export const isLegacyRoute = (path: string): boolean => {
  return [ROUTES.LEGACY_PRIVACY, ROUTES.LEGACY_TERMS].includes(path as any);
};

export const getLegacyRouteRedirect = (path: string): string => {
  switch (path) {
    case ROUTES.LEGACY_PRIVACY:
      return ROUTES.PRIVACY;
    case ROUTES.LEGACY_TERMS:
      return ROUTES.TERMS;
    default:
      return ROUTES.HOME;
  }
};