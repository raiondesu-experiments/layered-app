import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { getAliases } from 'vite-aliases';

const aliases = getAliases({
  prefix: '@/',
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: aliases,
  },
})
