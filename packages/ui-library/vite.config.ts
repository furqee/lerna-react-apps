/* eslint-disable import/no-nodejs-modules */
import * as path from "path";
import { getBaseConfig } from "../../vite.config";
import dts from "vite-plugin-dts";
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default getBaseConfig({
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      outDir: "dist/types",
    }),
    libAssetsPlugin({
      limit: 0,
      name: (resourcePath, resourceQuery) => {
        if (process.env.NODE_ENV === "development") {
          return "[name].[ext]";
        }
        return resourceQuery
          ? "[name].[contenthash:8].[ext]?[query]"
          : "[name].[contenthash:8].[ext]";
      },
      outputPath: "assets",
    }),
    libInjectCss(),
  ],
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "UILibrary",
    fileName: "ui-library",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
