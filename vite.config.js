import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  // base: '/andrestatix_v2', // На Github
  // base: '/', // На хостинг
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 55,
      },
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
