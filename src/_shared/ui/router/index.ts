import { createRouter, RouteRecordRaw } from 'vue-router';
import { config } from './config';

export const routerFor = (routes: RouteRecordRaw[]) => createRouter({
  ...config,
  routes,
})

export const defineRoutes = <T extends RouteRecordRaw[]>(routes: T) => routes;
