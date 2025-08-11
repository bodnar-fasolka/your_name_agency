const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'public';
  const outputDir = 'public/optimized';
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const images = ['solomiya.jpg', 'iryna.jpg'];
  
  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const name = path.parse(image).name;
    
    if (fs.existsSync(inputPath)) {
      // Generate multiple sizes and formats
      const sizes = [256, 512];
      
      for (const size of sizes) {
        // AVIF format
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover' })
          .avif({ quality: 80 })
          .toFile(path.join(outputDir, `${name}-${size}.avif`));
        
        // WebP format
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover' })
          .webp({ quality: 85 })
          .toFile(path.join(outputDir, `${name}-${size}.webp`));
        
        // Optimized JPEG fallback
        await sharp(inputPath)
          .resize(size, size, { fit: 'cover' })
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(outputDir, `${name}-${size}.jpg`));
      }
      
      console.log(`Optimized ${image}`);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
