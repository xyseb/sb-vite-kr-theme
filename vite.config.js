import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style";',
      },
    },
  },
  resolve: {
    alias: {
      //      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '~bootstrap': 'bootstrap',
      '~@progress/kendo-theme-fluent': '@progress/kendo-theme-fluent',
      '~@progress/kendo-theme-fluent/scss/all.scss':
        '@progress/kendo-theme-fluent/scss/all.scss',
      // '~@progress/kendo-theme-bootstrap': '@progress/kendo-theme-bootstrap',
      // '~@progress/kendo-theme-fluent/scss/common/_base.scss': '@progress/kendo-theme-fluent/scss/common/_base.scss',
    },
  },
});
