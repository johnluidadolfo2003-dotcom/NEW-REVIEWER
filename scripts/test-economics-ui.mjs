import { buildSync } from "esbuild";
import { mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
mkdirSync("node_modules/.cache", { recursive: true });
const outfile = "node_modules/.cache/economics-ui-test.mjs";
buildSync({
  entryPoints: ["scripts/test-economics-ui.tsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  outfile,
});
const result = spawnSync(process.execPath, [outfile], { stdio: "inherit" });
process.exit(result.status ?? 1);
