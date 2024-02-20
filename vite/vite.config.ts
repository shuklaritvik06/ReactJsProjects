import { defineConfig, createLogger } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const logger = createLogger();
const loggerWarn = logger.warn;
const loggerError = logger.error;
const loggerInfo = logger.info;

logger.warn = (msg, options) => {
  if (msg.includes("vite:css") && msg.includes(" is empty")) return;
  loggerWarn(msg, options);
};

logger.error = (msg, options) => {
  if (msg.includes("vite:css") && msg.includes(" is empty")) return;
  loggerError(msg, options);
};

logger.info = (msg, options) => {
  if (msg.includes("vite:css") && msg.includes(" is empty")) return;
  loggerInfo(msg, options);
};

export default defineConfig({
  base: "/",
  root: process.cwd(),
  mode: "development",
  customLogger: logger,
  server: {
    port: 3000,
    open: true,
    cors: true,
    fs: {
      allow: ["./public", "./src"]
    },
    hmr: true
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  },
  appType: "spa",
  publicDir: "public",
  logLevel: "error",
  cacheDir: "./.cache",
  envDir: "./envs",
  envPrefix: "VITE_",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src/")
      }
    ]
  },

  css: {
    devSourcemap: true,
    postcss: {}
  },
  define: {
    name: JSON.stringify("ramesh"),
    global: "globalThis",
    details: JSON.stringify({
      name: "Ramesh",
      age: 19
    })
  },
  json: {
    namedExports: true,
    stringify: true
  },
  preview: {
    cors: true,
    host: "localhost",
    port: 3000,
    open: true,
    strictPort: true
  },
  clearScreen: true,
  plugins: [react()]
});
