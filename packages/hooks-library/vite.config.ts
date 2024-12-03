/* eslint-disable import/no-nodejs-modules */
import * as path from "path";
import { getBaseConfig } from "../../vite.config";
import dts from "vite-plugin-dts";

export default getBaseConfig({
  lib: {
    entry: path.resolve(__dirname, "src/index.ts"),
    name: "HooksLibrary",
    fileName: "hooks-library",
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.json", outDir: "dist/types" })],
});
