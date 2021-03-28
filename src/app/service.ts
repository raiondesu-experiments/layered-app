import { routerFor } from '@/_shared/ui/router';
import { routes } from './ui/service/routes';

export const router = routerFor(routes);

export { default as App } from './ui/adapter.vue';
