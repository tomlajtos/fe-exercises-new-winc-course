import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./tests/setup.js",
  },
  server: {
    open: false,
    port: 3000,
    strictPort: true,
  },
});
