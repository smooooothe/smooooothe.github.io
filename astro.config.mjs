// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Pages configuration
// Set BASE_PATH to '/your-repo-name/' if using a project page
// Set BASE_PATH to '/' if using a custom domain or username.github.io
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