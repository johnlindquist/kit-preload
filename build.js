require("esbuild").build({
  entryPoints: ["./src/mac-app.ts"],
  bundle: true,
  platform: "node",
  outfile: "/Users/johnlindquist/.kit/preload/mac-app.cjs",
  sourcemap: true,
  target: "node15",
  external: Object.keys(
    require("./package.json").dependencies
  ),
  watch: true,
})
require("esbuild").build({
  entryPoints: ["./src/mac-terminal.ts"],
  bundle: true,
  platform: "node",
  outfile:
    "/Users/johnlindquist/.kit/preload/mac-terminal.cjs",
  sourcemap: true,
  target: "node15",
  external: Object.keys(
    require("./package.json").dependencies
  ),
  watch: true,
})
