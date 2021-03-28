import { defineRoutes } from '@/_shared/ui';

export const userRoutes = defineRoutes([
  {
    name: 'Users',
    path: '/users',
    component: () => import('@/users/ui/page.vue')
  }
]);
