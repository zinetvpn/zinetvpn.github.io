import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zinetvpn.github.io',
  output: 'static',
  integrations: [mdx(), sitemap({ filter: (page) => !page.endsWith('/404/') })],
  trailingSlash: 'always',
});
