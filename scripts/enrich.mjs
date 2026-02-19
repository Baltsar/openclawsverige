#!/usr/bin/env node
/**
 * Agent Radar — ensure enriched.json exists.
 * Run from repo root: node scripts/enrich.mjs
 * If public/radar/data/enriched.json is missing, writes minimal valid JSON
 * so the radar page loads (no 404). Otherwise no-op.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = path.join(root, "public", "radar", "data", "enriched.json");

const minimal = {
  generated_at: new Date().toISOString(),
  frameworks: [],
};

if (fs.existsSync(outPath)) {
  console.log("OK: public/radar/data/enriched.json exists.");
  process.exit(0);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(minimal, null, 2), "utf-8");
console.log("Wrote minimal enriched.json (0 frameworks). Add real data or run full enrichment.");
process.exit(0);
