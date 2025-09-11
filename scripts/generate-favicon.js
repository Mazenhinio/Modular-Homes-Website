#!/usr/bin/env node

/**
 * Script to generate all favicon sizes from a source image
 * Requires the Sharp library for image processing
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, '../public/favicon.png');
const publicDir = path.join(__dirname, '../public');

// Define all the favicon sizes we need to generate
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-64x64.png', size: 64 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 }
];

async function generateFavicons() {
  try {
    console.log('🎨 Generating favicon files from:', sourceImage);
    
    // Check if source file exists
    if (!fs.existsSync(sourceImage)) {
      throw new Error(`Source image not found: ${sourceImage}`);
    }
    
    // Generate each favicon size
    for (const favicon of faviconSizes) {
      const outputPath = path.join(publicDir, favicon.name);
      
      await sharp(sourceImage)
        .resize(favicon.size, favicon.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png()
        .toFile(outputPath);
        
      console.log(`✅ Generated: ${favicon.name} (${favicon.size}x${favicon.size})`);
    }
    
    // Also create a traditional favicon.ico file
    const faviconIcoPath = path.join(publicDir, 'favicon.ico');
    await sharp(sourceImage)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(faviconIcoPath);
    
    console.log('✅ Generated: favicon.ico (32x32)');
    
    console.log('\n🎉 All favicon files generated successfully!');
    console.log('\n📋 Generated files:');
    faviconSizes.forEach(favicon => {
      console.log(`   - ${favicon.name}`);
    });
    console.log('   - favicon.ico');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the favicon generation
generateFavicons();
