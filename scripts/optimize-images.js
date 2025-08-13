const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const customImagesDir = path.join(__dirname, '../public/images/custom');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(customImagesDir);
    
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(customImagesDir, file);
        const outputPath = path.join(customImagesDir, file.replace('.png', '.webp'));
        
        console.log(`Optimizing ${file}...`);
        
        await sharp(inputPath)
          .webp({ 
            quality: 85,
            effort: 6,
            nearLossless: false
          })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${file} optimized: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction)`);
      }
    }
    
    console.log('\n🎉 All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 