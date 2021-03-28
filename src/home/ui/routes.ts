import { defineRoutes } from '@/_shared/ui/router';

export const homeRoutes = defineRoutes([
  {
    name: 'Home',
    path: '/',
    component: () => import('@/home/ui/page.vue')
  }
]);
