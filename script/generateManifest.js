import fs from "fs";
import path from "path";

const slideshowDir = path.resolve("public/slideshow");
if (!fs.existsSync(slideshowDir)) {
  console.error("❌ No slideshow folder found in /public");
  process.exit(1);
}

const files = fs.readdirSync(slideshowDir);
const images = files
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
  .map((file) => `/slideshow/${file}`);

const manifestPath = path.resolve(slideshowDir, "manifest.json");
fs.writeFileSync(manifestPath, JSON.stringify(images, null, 2));

console.log(`✅ Generated manifest.json with ${images.length} images`);
