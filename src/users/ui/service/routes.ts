import { defineRoutes } from '@/_shared/ui/router';

export const userRoutes = defineRoutes([
  {
    name: 'Users',
    path: '/users',
    component: () => import('@/users/ui/adapters/main.vue')
  }
]);
