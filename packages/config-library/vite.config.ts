/* eslint-disable import/no-nodejs-modules */
import * as path from "path";
import { getBaseConfig } from "../../vite.config";
import dts from "vite-plugin-dts";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "ConfigLibrary",
    fileName: "config-library",
  },
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      outDir: "dist/types",
    }),
  ],
});
