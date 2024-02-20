const commonConfig = require("./snowpack.config.common.js");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  ...commonConfig,
  mode: "production",
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018"
  },
  buildOptions: {
    out: "./dist",
    clean: true,
    cacheDirPath: "./node_modules/.cache/learncache",
    sourcemap: false
  }
};
