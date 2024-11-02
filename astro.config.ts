import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://asyomei.org",
  devToolbar: { enabled: false },
  vite: {
    define: {
      "import.meta.env.VITE_BUILD_DATE": JSON.stringify(getBuildDate()),
    },
  },
});

function getBuildDate(): string {
  const date = new Date().toISOString();
  return date.slice(0, date.indexOf("T"));
}
