const path = require('path');
const mode = "production";
// "development"
// "production"
const buildPath = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: path.resolve(__dirname, "build",)
};

module.exports = {
  mode: mode,
  entry: buildPath.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath.output,
    clean: true
  },
};