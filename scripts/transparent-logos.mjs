import sharp from "sharp";
import path from "node:path";

const jobs = [
  ["public/brand/crest.png", "public/brand/crest-t.png"],
  ["public/brand/logo-horizontal.png", "public/brand/logo-horizontal-t.png"],
];

const THRESHOLD = 238; // pixels brighter than this on all channels become transparent

for (const [input, output] of jobs) {
  const img = sharp(path.resolve(input)).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
      data[i + 3] = 0; // fully transparent
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(path.resolve(output));
  console.log(`wrote ${output} (${width}x${height})`);
}
