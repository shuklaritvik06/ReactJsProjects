/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: ["README.md"],
  env: {
    API_URL: ""
  },
  mount: {
    public: { url: "/", static: true, resolve: false },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-postcss"
  ],
  alias: { "@app": "./src" },
  routes: [],
  packageOptions: {
    polyfillNode: true,
    sourceMap: true,
    treeshake: true
  }
};
