import { homeRoutes } from '@/home/ui/service/routes';
import { userRoutes } from '@/users/ui/service/routes';

export const routes = [
  ...homeRoutes,
  ...userRoutes,
];
