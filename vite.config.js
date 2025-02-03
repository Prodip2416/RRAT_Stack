import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { config } from "./public/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    outDir: "build",
  },
  base:
    config.ENVIRONMENT === "prod"
      ? config.BASE_PATH_PROD
      : config.BASE_PATH_DEV,
});
