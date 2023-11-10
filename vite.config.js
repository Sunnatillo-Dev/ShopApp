import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  optimizeDeps: {
    exclude: ["axios"],
  },
  build: {
    rollupOptions: {
      external: ["axios"],
    },
  },
});