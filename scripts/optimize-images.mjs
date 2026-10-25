#!/usr/bin/env node
/**
 * Generates optimised WebP versions of the raster images in `public/images`.
 *
 * Usage:
 *   pnpm optimize:images
 *   pnpm optimize:images --force   # re-encode existing .webp files
 *
 * Originals are kept so they can still be used where WebP is not supported
 * (for example social preview images referenced from index.html/useDocumentMeta).
 */
import { access, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");
const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const ICON_WIDTH = 320;
const SCREENSHOT_WIDTH = 1600;
const QUALITY = 82;
const force = process.argv.includes("--force");

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );
  return files.flat();
};

const exists = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

const formatBytes = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

const run = async () => {
  const files = await walk(IMAGES_DIR);
  const images = files.filter((file) =>
    RASTER_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );

  let before = 0;
  let after = 0;
  let converted = 0;
  let skipped = 0;

  for (const input of images) {
    const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
    const inputStats = await stat(input);

    before += inputStats.size;

    if (!force && (await exists(output))) {
      const outputStats = await stat(output);
      after += outputStats.size;
      skipped += 1;
      continue;
    }

    const isIcon = input.includes(`${path.sep}icons${path.sep}`);
    const maxWidth = isIcon ? ICON_WIDTH : SCREENSHOT_WIDTH;

    await sharp(input)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(output);

    const outputStats = await stat(output);
    after += outputStats.size;
    converted += 1;

    const saved = Math.max(
      0,
      Math.round((1 - outputStats.size / inputStats.size) * 100),
    );
    console.log(
      `✓ ${path.relative(IMAGES_DIR, input)} → .webp (${saved}% smaller)`,
    );
  }

  console.log("");
  console.log(`Converted: ${converted}, already up to date: ${skipped}`);
  console.log(`Original size: ${formatBytes(before)}`);
  console.log(`WebP size:     ${formatBytes(after)}`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
