import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  // base: '/andrestatix', // На Github
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
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/js/index.js',
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script src="./index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'faq.html',
          template: `faq.html`,
          injectOptions: {
            data: {
              title: 'faq',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'about.html',
          template: `about.html`,
          injectOptions: {
            data: {
              title: 'about',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-zero.html',
          template: `street-zero.html`,
          injectOptions: {
            data: {
              title: 'street-zero',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-beginner.html',
          template: `street-beginner.html`,
          injectOptions: {
            data: {
              title: 'street-beginner',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-medium.html',
          template: `street-medium.html`,
          injectOptions: {
            data: {
              title: 'street-medium',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-advanced.html',
          template: `street-advanced.html`,
          injectOptions: {
            data: {
              title: 'street-advanced',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'force-beginner.html',
          template: `force-beginner.html`,
          injectOptions: {
            data: {
              title: 'force-beginner',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'force-advanced.html',
          template: `force-advanced.html`,
          injectOptions: {
            data: {
              title: 'force-advanced',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
