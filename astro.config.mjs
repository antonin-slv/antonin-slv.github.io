// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
        prefixDefaultLocale: true, 
      redirectToDefaultLocale: false
    }
  },

  site: 'https://antonin-slv.github.io',
  integrations: [icon()],
});