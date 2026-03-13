import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [keystatic()],
});
