import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/build";
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from "webpack"
  ;
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";


export default function buildPlugins({ buildPaths, isDev }: BuildOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: buildPaths.html,
      favicon: buildPaths.favicon,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),

  ];
  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }
  return plugins;
};
