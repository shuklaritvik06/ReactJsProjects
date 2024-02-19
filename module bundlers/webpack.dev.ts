import path from "path";
import webpack from "webpack";
import common from "./webpack.common";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";
import "webpack-dev-server";

const config: webpack.Configuration = merge(common, {
  mode: "development",
  name: "Dev Configuration",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]"
  },
  // watchOptions: {
  //   poll: true,
  //   ignored: ["reportWebVitals.js"],
  //   aggregateTimeout: 100,
  //   followSymlinks: true
  // },
  devServer: {
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
    historyApiFallback: true,
    compress: true,
    allowedHosts: ["https://www.google.com"],
    liveReload: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/*.png",
          to: "./dist/",
          force: true
        }
      ]
    })
  ],
  // watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
});

export default config;
