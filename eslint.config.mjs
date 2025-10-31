
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js },
    extends: ["js/recommended", "plugin:i18next/recommended"], languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "i18next/no-literal-string": ["error", { markupOnly: true }]
    },
    plugins: ["i18next"]
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  pluginReact.configs.flat['jsx-runtime'],
  {
    files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"]
  },
]);
