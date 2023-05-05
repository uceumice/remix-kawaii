import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  dts: true,
  external: ["@remix-run/dev"],
  clean: true,
  minify: true,
});
