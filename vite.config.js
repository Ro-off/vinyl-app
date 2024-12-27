import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
});
