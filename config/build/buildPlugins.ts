import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/build";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export default function buildPlugins(buildPaths: BuildPaths): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin()
  ];

};
