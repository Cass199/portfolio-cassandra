// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cassandra-michel-portfolio.netlify.app',
  integrations: [mdx(), sitemap()],
});
