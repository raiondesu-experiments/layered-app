import { createApp } from 'vue';
import { App, router } from '@/app/service';

createApp(App)
  .use(router)
  .mount('#app');
