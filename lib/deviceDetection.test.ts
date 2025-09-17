// Test file for device detection functionality
// This can be used to verify device detection is working correctly

import { detectDevice, useDeviceDetection } from '@/lib/deviceDetection'

// Test device detection function
export function testDeviceDetection() {
  const result = detectDevice()
  
  console.log('Device Detection Test Results:')
  console.log('Device Type:', result.deviceInfo.type)
  console.log('OS:', result.deviceInfo.os)
  console.log('Browser:', result.deviceInfo.browser)
  console.log('Screen Size:', `${result.deviceInfo.screenWidth}x${result.deviceInfo.screenHeight}`)
  console.log('Is Touch Device:', result.deviceInfo.isTouchDevice)
  console.log('Is Mobile:', result.isMobile)
  console.log('Is Tablet:', result.isTablet)
  console.log('Is Desktop:', result.isDesktop)
  
  return result
}

// Test analytics integration
export function testAnalyticsIntegration() {
  const result = detectDevice()
  
  // Simulate analytics tracking
  if (typeof window !== 'undefined') {
    console.log('Analytics Test - Device Info:', result.deviceInfo)
    
    // Test Google Analytics integration
    if (window.gtag) {
      window.gtag('event', 'test_device_detection', {
        device_type: result.deviceInfo.type,
        os: result.deviceInfo.os,
        browser: result.deviceInfo.browser
      })
      console.log('Google Analytics event sent')
    }
    
    // Test Vercel Analytics integration
    if (window.va) {
      window.va('event', {
        name: 'test_device_detection',
        device_type: result.deviceInfo.type,
        os: result.deviceInfo.os,
        browser: result.deviceInfo.browser
      })
      console.log('Vercel Analytics event sent')
    }
  }
  
  return result
}

// Export for use in browser console or testing
if (typeof window !== 'undefined') {
  (window as any).testDeviceDetection = testDeviceDetection
  (window as any).testAnalyticsIntegration = testAnalyticsIntegration
}

