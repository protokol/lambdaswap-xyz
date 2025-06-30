import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.message.includes('/*#__PURE__*/')) return;
        warn(warning);
      }
    }
  },
  resolve: {
    alias: {
      '@ui': resolve(__dirname, './src/components/ui'),
      '@composed': resolve(__dirname, './src/components/composed'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/lib/utils'),
      '@lib': resolve(__dirname, './src/lib'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@gql': resolve(__dirname, './src/gql/')
    }
  }
});
