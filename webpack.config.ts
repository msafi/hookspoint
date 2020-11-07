import { Configuration, DefinePlugin, IgnorePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { join } from "path";

const { PROJECT } = process.env;
const targetDirname = `content/js/${PROJECT}`;
const isProd = process.env.NODE_ENV === "production";

export const config: Configuration = {
  entry: join(__dirname, targetDirname, `${PROJECT}.tsx`),

  output: {
    filename: "bundle.js",
    path: join(__dirname, targetDirname),
  },

  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  devtool: isProd ? undefined : "inline-source-map",

  performance: {
    hints: false,
  },

  target: "web",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "content/js/tsconfig.json",
        },
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ["url-loader"],
      },
    ],
  },

  plugins: [
    // new BundleAnalyzerPlugin(),

    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),

    new IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
};

export default config;
