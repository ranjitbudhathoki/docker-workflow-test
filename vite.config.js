// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // To use jest-dom matchers like expect
    environment: "jsdom", // For simulating a browser environment
    setupFiles: "./src/setupTests.js", // Optional setup for global testing configurations
  },
});
