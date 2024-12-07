/* eslint-disable import/no-nodejs-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import fs from "fs";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

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
    plugins: [react(), ...plugins],
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
