import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is required for Vite to work correctly with CodeSandbox
const server = process.env.APP_ENV === "sandbox" ? { hmr: { clientPort: 443 } } : {};

// https://vitejs.dev/config/
export default defineConfig({
  server: server,
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src/packages/kits/default") },
      { find: "@src", replacement: path.resolve(__dirname, "./src") },
    ],
  },
  plugins: [react()],
});
