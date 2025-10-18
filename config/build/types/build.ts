type BuildMode = "development" | "production";

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
}

export interface BuildOptions {
  buildPaths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
}
