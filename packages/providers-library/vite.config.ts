/* eslint-disable import/no-nodejs-modules */
import * as path from "path";
import { getBaseConfig } from "../../vite.config";

export default getBaseConfig({
  resolve: {
    alias: {
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "ProvidersLibrary",
    fileName: "providers-library",
  },
});
