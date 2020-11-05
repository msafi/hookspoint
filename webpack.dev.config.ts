import merge from "webpack-merge";
import { config } from "./webpack.config";

export default merge(config, {
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  // @ts-ignore
  devServer: {
    writeToDisk: true,
    port: 2003,
    compress: true,
    stats: "errors-only",
    inline: true,
    hot: true,
    historyApiFallback: {
      verbose: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    watchOptions: {
      poll: 1000,
      ignored: ["node_modules"],
    },
  },
});
