import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_CONFIG } from '../config/router.config';
import { routes } from './routes';

export const router = createBrowserRouter(routes, {
  future: ROUTER_CONFIG.FUTURE_FLAGS,
});