import { Configuration } from "webpack";

import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/build";
import buildPlugins from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";


const config = (env: BuildEnv): Configuration => {

  const mode = env.mode || "development";
  const isDev = mode === "development";

  const buildPaths: BuildPaths = {
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
    plugins: buildPlugins(buildPaths),
    module: {
      rules: buildLoaders(),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
export default config;