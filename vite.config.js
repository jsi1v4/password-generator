import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const src = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: src }]
  },
  base: "password-generator"
});
