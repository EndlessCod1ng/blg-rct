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
