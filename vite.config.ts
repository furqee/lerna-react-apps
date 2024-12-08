/* eslint-disable import/no-nodejs-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import fs from "fs";
import dts from "vite-plugin-dts";

const getAliases = () => {
  const tsConfig = JSON.parse(fs.readFileSync("./tsconfig.json", "utf-8"));
  const paths = tsConfig.compilerOptions.paths || {};
  return Object.keys(paths).map((alias) => alias.replace("/*", ""));
};

const isExternal = (id: string) => {
  const aliases = getAliases();
  if (aliases.some((alias) => id.startsWith(alias))) {
    return false;
  }
  return !id.startsWith(".") && !path.isAbsolute(id);
};

const generateGlobals = () => {
  const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
  const dependencies = Object.keys(pkg.dependencies || {});
  const peerDependencies = Object.keys(pkg.peerDependencies || {});
  const deps = [...dependencies, ...peerDependencies];

  return deps.reduce(
    (globals: { [key: string]: string }, dep) => {
      if (!globals[dep]) {
        globals[dep] = dep.replace(/-/g, "_"); // Adjust naming logic as needed
      }
      return globals;
    },
    {
      react: "React",
      "react-dom": "ReactDOM",
      "react/jsx-runtime": "jsx",
    },
  );
};

export const getBaseConfig = ({
  plugins = [],
  resolve = null,
  lib,
}: {
  plugins?: any[];
  resolve?: any;
  lib: any;
}) =>
  defineConfig({
    plugins: [
      react(),
      dts({
        rollupTypes: true,
        tsconfigPath: "tsconfig.json",
        outDir: "dist/types",
      }),
      ...plugins,
    ],
    resolve,
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: generateGlobals(),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern", "legacy"
          importers: [
            // ...
          ],
        },
      },
    },
  });
