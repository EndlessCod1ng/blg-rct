import { Configuration } from "webpack";

import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from "webpack";
type BuildMode = "development" | "production";
interface BuildEnv {
  port: number;
  mode: BuildMode;
}

const config = (env: BuildEnv): Configuration => {

  const mode = env.mode || "development";
  const isDev = mode === "development";
  
  const buildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico")
  };

  return {
    mode: mode,
    entry: buildPaths.entry,
    output: {
      filename: '[name].[contenhas].js',
      path: buildPaths.build,
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: buildPaths.html,
        favicon: buildPaths.favicon,
      }),
      new ProgressPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
export default config;