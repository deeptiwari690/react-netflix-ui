import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "/react-netflix-ui/",
  plugins: [react(), viteSingleFile()],
  build: {
    minify: false,
  },
});