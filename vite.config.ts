/* eslint-disable import/no-nodejs-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export const getBaseConfig = ({
  plugins = [],
  lib,
}: {
  plugins?: any[];
  lib: any;
}) =>
  defineConfig({
    plugins: [react(), ...plugins],
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          globals: {
            react: "React",
          },
        },
      },
    },
  });
