import { routerFor } from '@/_shared/ui';
import { routes } from './routes';

export const router = routerFor(routes);

export { default as App } from './ui/adapter.vue';
