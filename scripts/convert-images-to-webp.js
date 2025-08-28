const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert PNG to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✅ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

// Function to process a directory
async function processDirectory(dirPath, outputDir) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subOutputDir = path.join(outputDir, file);
      await processDirectory(filePath, subOutputDir);
    } else if (file.toLowerCase().endsWith('.png')) {
      // Convert PNG to WebP
      const outputPath = path.join(outputDir, file.replace(/\.png$/i, '.webp'));
      await convertToWebP(filePath, outputPath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      // Convert JPG to WebP
      const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
      await convertToWebP(filePath, outputPath);
    }
  }
}

// Main execution
async function main() {
  const inputDir = path.join(__dirname, '..', 'New Images');
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'new-content');
  
  console.log('🔄 Starting image conversion to WebP...');
  console.log(`📁 Input directory: ${inputDir}`);
  console.log(`📁 Output directory: ${outputDir}`);
  
  if (!fs.existsSync(inputDir)) {
    console.error('❌ Input directory does not exist!');
    return;
  }
  
  try {
    await processDirectory(inputDir, outputDir);
    console.log('🎉 Image conversion completed successfully!');
  } catch (error) {
    console.error('❌ Error during conversion:', error);
  }
}

// Run the script
main();
