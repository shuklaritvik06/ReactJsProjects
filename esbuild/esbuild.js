const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

esbuild
  .build({
    entryPoints: ["./src/index.tsx"],
    bundle: true,
    splitting: true,
    // outfile: "dist/bundle.js",
    platform: "browser",
    target: "es2015",
    loader: {
      ".js": "jsx",
      ".jsx": "jsx",
      ".css": "css"
    },
    format: "esm",
    banner: {
      js: "//comment",
      css: "/*comment*/"
    },
    charset: "utf8",
    legalComments: "eof",
    logLevel: "info",
    outdir: "./public",
    outExtension: { ".js": ".prod.js", ".css": ".prod.css" },
    minify: true,
    treeShaking: true,

    footer: {
      js: "//comment",
      css: "/*comment*/"
    },
    plugins: [
      postCssPlugin({
        plugins: [tailwindcss, autoprefixer],
        inject: true
      })
    ]
  })
  .catch(() => process.exit(1));
