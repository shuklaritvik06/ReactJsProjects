import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "source-map",
  name: "Common Configuration",
  target: ["web", "es5"],
  entry: {
    main: "./src/index.js",
    vendor: ["react", "react-dom"]
  },
  experiments: {
    buildHttp: {
      allowedUris: ["https://www.google.com"]
    },
    topLevelAwait: true,
    backCompat: true
  },
  bail: true,
  parallelism: 2,
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./index.html",
      title: "Build Tools"
    })
  ]
};

export default config;
