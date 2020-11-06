import { Configuration, DefinePlugin, IgnorePlugin } from "webpack";
import { join } from "path";

const { PROJECT } = process.env;
const targetDirname = `content/js/${PROJECT}`;

export const config: Configuration = {
  entry: join(__dirname, targetDirname, `${PROJECT}.tsx`),

  output: {
    filename: "bundle.js",
    path: join(__dirname, targetDirname),
  },

  mode: "development",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  devtool: "inline-source-map",

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
