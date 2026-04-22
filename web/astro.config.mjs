// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.heberhodejeger.no',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.heberhodejeger.no/takk',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});