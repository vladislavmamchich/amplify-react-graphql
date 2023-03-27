import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      buffer: "buffer",
      http: "stream-http",
      https: "https-browserify",
      url: "url",
      util: "util",
    },
  },
  plugins: [react()],
  define: {
    global: {},
  },
});
