import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://asyomei.github.io",
	devToolbar: { enabled: false },
	vite: {
		define: {
			"import.meta.env.VITE_BUILD_DATE": JSON.stringify(
				new Date().toISOString().split("T")[0],
			),
		},
	},
});
