import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/andrestatix', // На Github
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
        quality: 80,
      },
      jpeg: {
        quality: 80,
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
          filename: 'street-basic.html',
          template: `street-basic.html`,
          injectOptions: {
            data: {
              title: 'street-basic',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-easy.html',
          template: `street-easy.html`,
          injectOptions: {
            data: {
              title: 'street-easy',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-middle.html',
          template: `street-middle.html`,
          injectOptions: {
            data: {
              title: 'street-middle',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'street-pro.html',
          template: `street-pro.html`,
          injectOptions: {
            data: {
              title: 'street-pro',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'force-basic.html',
          template: `force-basic.html`,
          injectOptions: {
            data: {
              title: 'force-basic',
              injectScript: `<script src="/src/js/index.js" type="module"></script>`,
            },
          },
        },
        {
          entry: '/src/js/index.js',
          filename: 'force-pro.html',
          template: `force-pro.html`,
          injectOptions: {
            data: {
              title: 'force-pro',
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
