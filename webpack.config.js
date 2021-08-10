/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const tsNameof = require("ts-nameof");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/** @type {import("webpack").Configuration} */
const Default = {
  context: __dirname,
  entry: "index.ts",
  resolve: {
    extensions: [".js", ".ts", ".json", ".css"],
  },
  devtool: "source-map",
  output: {
    path: join(__dirname, "dist"),
    filename: "galaxy.js",
    assetModuleFilename: "resources/[name][ext]",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({ before: [tsNameof] }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/**/*.ts",
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ["src/index.html", "LICENSE", "package.json"],
    }),
  ],
};

module.exports = Default;
