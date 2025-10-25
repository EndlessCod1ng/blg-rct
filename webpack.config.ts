import { resolve } from "path";
import { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

import { BuildEnv, BuildPaths } from "./config/build/types/build";

export default (env: BuildEnv): Configuration => {
  const PORT = env.port;
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const buildPaths: BuildPaths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, "public", "index.html"),
    favicon: resolve(__dirname, "public", "favicon.ico"),
    src: resolve(__dirname, "src")
  };

  const config = buildWebpackConfig({ mode, isDev, buildPaths, port: PORT });

  return config;
};