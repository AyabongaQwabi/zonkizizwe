import sharp from "sharp";

// 1) Trim the baked-in white border from the soup-kitchen close-up.
//    Then re-pad to a clean square so object-cover has no white edge.
const src = "public/images/gallery-1.png";
const trimmed = await sharp(src)
  .trim({ background: "#ffffff", threshold: 20 })
  .toBuffer();
const meta = await sharp(trimmed).metadata();
const side = Math.min(meta.width, meta.height);
await sharp(trimmed)
  .resize(side, side, { fit: "cover", position: "attention" })
  .toFile("public/images/gallery-1-fixed.png");
console.log("gallery-1 trimmed:", meta.width, "x", meta.height, "-> square", side);

// 2) Build a soft, contained crest watermark: feather the edges with a radial
//    alpha mask so no hard rasterized oval outline is visible at large scale.
const crest = "public/brand/crest-t.png";
const cm = await sharp(crest).metadata();
const w = cm.width;
const h = cm.height;
const mask = Buffer.from(
  `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <radialGradient id="g" cx="50%" cy="50%" r="60%">
         <stop offset="55%" stop-color="#fff" stop-opacity="1"/>
         <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
       </radialGradient>
     </defs>
     <rect width="${w}" height="${h}" fill="url(#g)"/>
   </svg>`
);
await sharp(crest)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile("public/brand/crest-soft.png");
console.log("crest-soft created:", w, "x", h);
