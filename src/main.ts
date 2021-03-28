import { createApp } from 'vue'
import App from '@/features/app/App.vue'
import { router } from '@/domain/routing/business';

createApp(App)
  .use(router)
  .mount('#app');
