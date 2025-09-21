const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert PNG/JPG to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${savings}%`);
    console.log('');
    
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

// List of all PNG/JPG images found in the project
const imagesToConvert = [
  // Eco-friendly page images
  'public/images/eco-friendly/hero-image.png',
  'public/images/eco-friendly/unplugged.png',
  'public/images/eco-friendly/independence.png',
  
  // Meet the owners images
  'public/images/new-content/Owners/Aaron Davis.jpeg',
  
  // Resort owners images
  'public/images/segments/resort-property.jpg',
  'public/images/segments/campground-property.jpg',
  'public/images/segments/vacation-rental-property.jpg',
  'public/images/segments/resort-hero.jpg',
  
  // Layout images
  'public/images/OG PIC.png',
  
  // Blog images
  'public/images/blog/land-cash-flow-hero.jpg',
  'public/images/blog/indigenous-funding-hero.jpg',
  'public/images/blog/resort-modular-hero.jpg',
  'public/images/blog/developer-mistakes-hero.jpg',
  'public/images/blog/off-grid-living-hero.jpg',
  'public/images/blog/acreage-success-hero.jpg',
  
  // Testimonials and case studies
  'public/images/testimonials/chief-margaret.jpg',
  'public/images/testimonials/thompson-family.jpg',
  'public/images/testimonials/marcus-chen.jpg',
  'public/images/case-studies/bigstone-before.jpg',
  'public/images/case-studies/bigstone-after.jpg',
  'public/images/case-studies/lakeview-before.jpg',
  'public/images/case-studies/lakeview-after.jpg',
  'public/images/case-studies/rural-before.jpg',
  'public/images/case-studies/rural-after.jpg',
  'public/images/video-thumbs/elder-joseph.jpg',
  'public/images/video-thumbs/kowalski-family.jpg',
  'public/images/video-thumbs/amanda-rodriguez.jpg',
  
  // Component images
  'public/images/rural-haus-logo.png',
  'public/images/logo-footer-white.png',
  'public/images/partnerships-hero.png',
  'public/images/partnerships/blue-spruce-builder-color.jpg',
  'public/images/partnerships/d3_gen-removebg-preview.png',
  'public/images/partnerships/kondro.png',
  'public/images/partnerships/geordies.png',
  
  // Additional images found in directory scan
  'public/images/font (transparent background).png',
  'public/images/white font (transparent background).png',
  'public/images/discovery-homes-logo.png',
  'public/images/discovery-homes-watermark.png',
];

// Main execution
async function main() {
  console.log('🔄 Starting comprehensive image conversion to WebP...');
  console.log(`📊 Found ${imagesToConvert.length} images to convert`);
  console.log('');
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const imagePath of imagesToConvert) {
    if (fs.existsSync(imagePath)) {
      const outputPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const success = await convertToWebP(imagePath, outputPath);
      
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${imagePath}`);
      errorCount++;
    }
  }
  
  console.log('🎉 Image conversion completed!');
  console.log(`✅ Successfully converted: ${successCount} images`);
  console.log(`❌ Failed conversions: ${errorCount} images`);
  
  if (successCount > 0) {
    console.log('');
    console.log('📝 Next steps:');
    console.log('1. Update all code references to use .webp extensions');
    console.log('2. Test the website to ensure all images load correctly');
    console.log('3. Consider removing original PNG/JPG files after testing');
  }
}

// Run the script
main().catch(console.error);
