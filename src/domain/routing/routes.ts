import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/features/home/Home.vue')
  },
  {
    name: 'Users',
    path: '/users',
    component: () => import('@/features/users/Users.vue')
  },
];
