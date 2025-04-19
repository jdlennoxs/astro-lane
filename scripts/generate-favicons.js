import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceSvg = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read and modify the SVG to use the plum color
const svgContent = fs.readFileSync(sourceSvg, 'utf8');
const plumColorSvg = svgContent.replace(/currentColor/g, '#5162FF');
const tempSvgPath = path.join(__dirname, 'temp-icon.svg');
fs.writeFileSync(tempSvgPath, plumColorSvg);

// Function to generate PNG favicon with white background
async function generatePng(size, filename) {
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{ input: await sharp(tempSvgPath).resize(size, size).toBuffer() }])
    .png()
    .toFile(path.join(outputDir, filename));
  console.log(`Generated ${filename}`);
  return path.join(outputDir, filename);
}

// Function to generate ICO file
async function generateIco() {
  const sizes = [16, 32];
  const pngPaths = await Promise.all(
    sizes.map(size => generatePng(size, `favicon-${size}x${size}.png`))
  );

  // Create ICO file by combining the PNGs
  const icoBuffer = await sharp(pngPaths[1]) // Use the 32x32 version as base
    .resize(32, 32)
    .toFormat('png')
    .toBuffer();

  // Write the ICO file
  fs.writeFileSync(path.join(outputDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');
}

// Generate all favicons
async function generateAll() {
  try {
    // Generate PNG favicons
    await Promise.all([
      generatePng(16, 'favicon-16x16.png'),
      generatePng(32, 'favicon-32x32.png'),
      generatePng(180, 'apple-touch-icon.png'),
      generatePng(192, 'android-chrome-192x192.png'),
      generatePng(256, 'android-chrome-256x256.png'),
      generatePng(150, 'mstile-150x150.png'),
      generateIco()
    ]);

    // Copy modified SVG for Safari pinned tab
    fs.copyFileSync(tempSvgPath, path.join(outputDir, 'safari-pinned-tab.svg'));
    console.log('Generated safari-pinned-tab.svg');

    // Clean up temporary file
    fs.unlinkSync(tempSvgPath);

    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    // Clean up temporary file in case of error
    if (fs.existsSync(tempSvgPath)) {
      fs.unlinkSync(tempSvgPath);
    }
  }
}

generateAll(); 