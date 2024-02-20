/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  env: {
    API_URL: ""
  },
  mount: {
    public: { url: "/" },
    src: { url: "/" }
  },
  plugins: ["@snowpack/plugin-dotenv", "@snowpack/plugin-postcss"],
  alias: { "@app": "./src" },
  routes: [],
  packageOptions: {
    polyfillNode: true,
    sourceMap: true
  }
};
