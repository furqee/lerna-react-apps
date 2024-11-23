import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import storyBookPlugin from "eslint-plugin-storybook";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    // files: ["src/**/*.{ts,tsx}"], // Target TypeScript files
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
      "import/resolver": {
        typescript: {
          project: "packages/*/tsconfig.json",
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
      storybook: storyBookPlugin,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react/react-in-jsx-scope": ["off"],
      "react/jsx-uses-react": ["off"],
      "react/jsx-props-no-spreading": ["warn"],
      "react/no-unescaped-entities": ["off"],
      "import/no-dynamic-require": "warn",
      "import/no-nodejs-modules": "warn",
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
