// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

import commercialNav from './src/data/blog-commercial-nav.json' with { type: 'json' };
import rehypeBlogMidCta from './src/plugins/rehype-blog-mid-cta.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    rehypePlugins: [[rehypeBlogMidCta, commercialNav]],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false
    }
  }),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  site: 'https://www.ignacioamatweb.com',
  image: {
    domains: ['images.unsplash.com'],
  },
});
