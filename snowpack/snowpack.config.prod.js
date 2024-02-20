const commonConfig = require("./snowpack.config.common.js");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  ...commonConfig,
  mode: "production",
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020"
  },
  buildOptions: {
    out: "./build",
    clean: true,
    cacheDirPath: "./node_modules/.cache/learncache",
    sourcemap: false
  }
};
