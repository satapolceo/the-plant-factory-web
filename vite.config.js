import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/the-plant-factory-web/",
  plugins: [react()]
});