import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must match the repo name so assets resolve correctly on GitHub Pages
// (served from https://<user>.github.io/Converse/)
export default defineConfig({
  plugins: [react()],
  base: "/Converse/",
});
