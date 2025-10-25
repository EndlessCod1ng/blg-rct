import { Configuration } from "webpack";
import { BuildOptions } from "./types/build";
import buildPlugins from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
  const { mode, buildPaths, isDev, port } = buildOptions;
  return {
    mode: mode,
    entry: buildPaths.entry,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: buildPaths.build,
      clean: true
    },
    plugins: buildPlugins(buildPaths),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(buildPaths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined
  };
}
