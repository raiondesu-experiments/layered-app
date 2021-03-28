import { createWebHistory, RouterOptions } from 'vue-router';

export const config: Omit<RouterOptions, 'routes'> = {
  history: createWebHistory(),
};
