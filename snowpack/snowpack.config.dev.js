const commonConfig = require("./snowpack.config.common.js");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  ...commonConfig,
  mode: "development",
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018"
  },
  devOptions: {
    hostname: "localhost",
    port: 3000,
    openUrl: "/",
    open: "chrome",
    hmr: true,
    tailwindConfig: "./tailwind.config.js"
  },
  buildOptions: {
    out: "./dist",
    clean: true,
    cacheDirPath: "./node_modules/.cache/learncache",
    sourcemap: true
  }
};
