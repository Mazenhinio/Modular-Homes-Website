const fs = require('fs')
const path = require('path')

// Video optimization recommendations
const videoOptimizationGuide = {
  recommendations: [
    {
      file: 'Pine 1 & 2 Final.mp4',
      currentSize: '4.6 MB',
      targetSize: '2-3 MB',
      suggestions: [
        'Reduce bitrate to 1-2 Mbps',
        'Lower resolution to 1080p if currently higher',
        'Use H.264 codec with optimized settings',
        'Consider WebM format for better compression'
      ]
    },
    {
      file: 'Pine 3 Final.mp4',
      currentSize: '20.4 MB',
      targetSize: '5-8 MB',
      suggestions: [
        'CRITICAL: This file is too large for web use',
        'Reduce bitrate to 1-1.5 Mbps',
        'Lower resolution to 1080p maximum',
        'Shorten video duration if possible',
        'Use more aggressive compression',
        'Consider creating a shorter preview version'
      ]
    }
  ],
  
  ffmpegCommands: {
    'Pine 1 & 2 Final.mp4': [
      // High quality optimization
      'ffmpeg -i "Pine 1 & 2 Final.mp4" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart "Pine 1 & 2 Final_optimized.mp4"',
      
      // WebM alternative (better compression)
      'ffmpeg -i "Pine 1 & 2 Final.mp4" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k "Pine 1 & 2 Final.webm"'
    ],
    
    'Pine 3 Final.mp4': [
      // Aggressive optimization for large file
      'ffmpeg -i "Pine 3 Final.mp4" -c:v libx264 -crf 32 -preset slow -vf "scale=1920:1080" -c:a aac -b:a 96k -movflags +faststart "Pine 3 Final_optimized.mp4"',
      
      // WebM with aggressive compression
      'ffmpeg -i "Pine 3 Final.mp4" -c:v libvpx-vp9 -crf 35 -b:v 0 -vf "scale=1920:1080" -c:a libopus -b:a 96k "Pine 3 Final.webm"',
      
      // Create shorter preview version (first 10 seconds)
      'ffmpeg -i "Pine 3 Final.mp4" -t 10 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart "Pine 3 Final_preview.mp4"'
    ]
  },
  
  performanceTips: [
    'Use poster images to show content immediately',
    'Implement lazy loading with Intersection Observer',
    'Add preload="none" to prevent automatic loading',
    'Consider using WebM format for better compression',
    'Use multiple quality versions for different devices',
    'Implement progressive loading for large files'
  ]
}

// Generate optimization report
function generateReport() {
  console.log('🎬 Video Optimization Report\n')
  console.log('=' .repeat(50))
  
  videoOptimizationGuide.recommendations.forEach(rec => {
    console.log(`\n📹 ${rec.file}`)
    console.log(`Current Size: ${rec.currentSize}`)
    console.log(`Target Size: ${rec.targetSize}`)
    console.log('Suggestions:')
    rec.suggestions.forEach(suggestion => {
      console.log(`  • ${suggestion}`)
    })
  })
  
  console.log('\n🔧 FFmpeg Commands:')
  console.log('=' .repeat(50))
  
  Object.entries(videoOptimizationGuide.ffmpegCommands).forEach(([file, commands]) => {
    console.log(`\n${file}:`)
    commands.forEach((cmd, index) => {
      console.log(`  ${index + 1}. ${cmd}`)
    })
  })
  
  console.log('\n💡 Performance Tips:')
  console.log('=' .repeat(50))
  videoOptimizationGuide.performanceTips.forEach(tip => {
    console.log(`  • ${tip}`)
  })
  
  console.log('\n📊 Expected Performance Improvements:')
  console.log('=' .repeat(50))
  console.log('  • 60-80% reduction in initial page load time')
  console.log('  • 50-70% reduction in bandwidth usage')
  console.log('  • Better mobile performance')
  console.log('  • Improved Core Web Vitals scores')
  console.log('  • Better user experience on slow connections')
}

// Check if videos exist and their sizes
function checkVideoFiles() {
  const videosDir = path.join(process.cwd(), 'public', 'videos')
  
  if (!fs.existsSync(videosDir)) {
    console.log('❌ Videos directory not found')
    return
  }
  
  const files = fs.readdirSync(videosDir)
  const videoFiles = files.filter(file => file.endsWith('.mp4'))
  
  console.log('\n📁 Current Video Files:')
  console.log('=' .repeat(50))
  
  videoFiles.forEach(file => {
    const filePath = path.join(videosDir, file)
    const stats = fs.statSync(filePath)
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2)
    console.log(`  ${file}: ${sizeInMB} MB`)
  })
}

// Main execution
if (require.main === module) {
  checkVideoFiles()
  generateReport()
  
  console.log('\n🚀 Next Steps:')
  console.log('=' .repeat(50))
  console.log('1. Install FFmpeg if not already installed')
  console.log('2. Run the optimization commands above')
  console.log('3. Test the optimized videos')
  console.log('4. Update the video sources in your components')
  console.log('5. Consider implementing WebM format for better compression')
}

module.exports = { videoOptimizationGuide, generateReport, checkVideoFiles }
