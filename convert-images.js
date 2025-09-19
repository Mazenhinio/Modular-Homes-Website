const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImages() {
  const images = [
    {
      input: 'public/images/blog/resort-modular-hero.png',
      output: 'public/images/blog/resort-modular-hero.webp'
    },
    {
      input: 'public/images/blog/acreage-success-hero.png',
      output: 'public/images/blog/acreage-success-hero.webp'
    }
  ];

  for (const image of images) {
    try {
      console.log(`Converting ${image.input} to ${image.output}...`);
      await sharp(image.input)
        .webp({ quality: 80 })
        .toFile(image.output);
      
      // Get file sizes
      const originalSize = fs.statSync(image.input).size;
      const webpSize = fs.statSync(image.output).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ Converted ${path.basename(image.input)}`);
      console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   WebP: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Savings: ${savings}%`);
      console.log('');
    } catch (error) {
      console.error(`❌ Error converting ${image.input}:`, error.message);
    }
  }
}

convertImages();
