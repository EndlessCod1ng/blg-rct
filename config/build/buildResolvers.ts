import { resolve } from "path";
import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/build";

export function buildResolvers(buildPaths: BuildPaths): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    // modules: [buildPaths.src, "node_modules"],
    // mainFiles:["index"],
    alias: {
      '@': buildPaths.src
    }
  };
}