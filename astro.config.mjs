import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://asyomei.github.io",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
});
