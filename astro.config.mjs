// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://smooooothe.github.io',
  base: BASE_PATH,
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});