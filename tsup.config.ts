import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === "esm" ? ".esm.js" : ".cjs",
    };
  },
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-slot",
    "clsx",
    "tailwind-merge",
    "class-variance-authority",
  ],
});

