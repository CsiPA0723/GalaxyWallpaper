/* eslint-disable @typescript-eslint/no-var-requires */
const WebpackDefaultConfig = require("./webpack.config");
const { WebpackPluginServe } = require("webpack-plugin-serve");

/** @type {import("webpack").Configuration} */
const Development = {
  ...WebpackDefaultConfig,
  entry: ["webpack-plugin-serve/client", WebpackDefaultConfig.entry],
  mode: "development",
  watch: true,
  plugins: [
    ...WebpackDefaultConfig.plugins,
    new WebpackPluginServe({
      client: {
        address: "127.0.0.1:9000",
      },
      liveReload: true,
      host: "localhost",
      port: 9000,
      static: WebpackDefaultConfig.output.path,
    }),
  ],
};

module.exports = Development;
