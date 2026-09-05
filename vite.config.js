import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// This is a root user/organization GitHub Pages site (aaravshandilya.github.io),
// so the app is served from "/" — base must stay "/" (not a repo-name subpath).
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
