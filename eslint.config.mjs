import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
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
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": ["off"],
      "react/jsx-uses-react": ["off"],
      "react/jsx-props-no-spreading": ["warn"],
      "react/no-unescaped-entities": ["off"],
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
