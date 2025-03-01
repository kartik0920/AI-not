import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Explicitly externalize it
    },
  },
  // base: process.env.NODE_ENV === 'production' ? '/your-app/' : '/',
});
