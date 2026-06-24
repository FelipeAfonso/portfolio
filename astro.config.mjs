import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), sitemap(), mdx()],
  site: "https://www.felipeafonso.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
