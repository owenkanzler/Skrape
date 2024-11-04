import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/skrape": "http://localhost:8080",
      // "/skrape": {
      //   target: "http://127.0.0.1:5000",
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/skrape/, ""),
      // },
    },
  },
});
