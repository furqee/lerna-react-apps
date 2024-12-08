/* eslint-disable import/no-nodejs-modules */
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  resolve: {
    alias: {
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "HooksLibrary",
    fileName: "hooks-library",
  },
});
