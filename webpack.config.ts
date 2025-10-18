import path from "path";
import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

import { BuildEnv, BuildPaths } from "./config/build/types/build";

export default () => {
  const config = (env: BuildEnv): Configuration => {
    const PORT = env.port;
    const mode = env.mode || "development";
    const isDev = mode === "development";

    const buildPaths: BuildPaths = {
      entry: path.resolve(__dirname, "src", "index.ts"),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico")
    };

    return buildWebpackConfig({ mode, isDev, buildPaths, port: PORT });
  };
  return config;
};