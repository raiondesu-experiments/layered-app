import { defineRoutes } from '@/_shared/ui';

export const homeRoutes = defineRoutes([
  {
    name: 'Home',
    path: '/',
    component: () => import('@/home/ui/page.vue')
  }
]);
