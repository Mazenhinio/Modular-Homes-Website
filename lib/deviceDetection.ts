// Device Detection and Analytics
// This utility detects device types and tracks device information for analytics

export interface DeviceInfo {
  type: 'mobile' | 'tablet' | 'desktop'
  os: string
  browser: string
  screenWidth: number
  screenHeight: number
  userAgent: string
  isTouchDevice: boolean
}

export interface DeviceDetectionResult {
  deviceInfo: DeviceInfo
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

// Device detection function
export function detectDevice(): DeviceDetectionResult {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return {
      deviceInfo: {
        type: 'desktop',
        os: 'unknown',
        browser: 'unknown',
        screenWidth: 1920,
        screenHeight: 1080,
        userAgent: 'server-side',
        isTouchDevice: false
      },
      isMobile: false,
      isTablet: false,
      isDesktop: true
    }
  }

  const userAgent = navigator.userAgent
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  
  // Detect OS
  let os = 'unknown'
  if (userAgent.includes('Windows')) os = 'Windows'
  else if (userAgent.includes('Mac')) os = 'macOS'
  else if (userAgent.includes('Linux')) os = 'Linux'
  else if (userAgent.includes('Android')) os = 'Android'
  else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS'

  // Detect Browser
  let browser = 'unknown'
  if (userAgent.includes('Chrome')) browser = 'Chrome'
  else if (userAgent.includes('Firefox')) browser = 'Firefox'
  else if (userAgent.includes('Safari')) browser = 'Safari'
  else if (userAgent.includes('Edge')) browser = 'Edge'
  else if (userAgent.includes('Opera')) browser = 'Opera'

  // Detect touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Device type detection based on screen size and user agent
  let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop'
  
  if (screenWidth <= 768 || userAgent.includes('Mobile')) {
    deviceType = 'mobile'
  } else if (screenWidth <= 1024 || userAgent.includes('Tablet') || userAgent.includes('iPad')) {
    deviceType = 'tablet'
  }

  const deviceInfo: DeviceInfo = {
    type: deviceType,
    os,
    browser,
    screenWidth,
    screenHeight,
    userAgent,
    isTouchDevice
  }

  return {
    deviceInfo,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop'
  }
}

// Hook for React components
export function useDeviceDetection() {
  const [deviceData, setDeviceData] = useState<DeviceDetectionResult | null>(null)

  useEffect(() => {
    const detection = detectDevice()
    setDeviceData(detection)
  }, [])

  return deviceData
}

// Analytics tracking for device information
export function trackDeviceInfo(deviceInfo: DeviceInfo) {
  if (typeof window === 'undefined') return

  // Track device type
  if (window.gtag) {
    window.gtag('event', 'device_detected', {
      device_type: deviceInfo.type,
      os: deviceInfo.os,
      browser: deviceInfo.browser,
      screen_width: deviceInfo.screenWidth,
      screen_height: deviceInfo.screenHeight,
      is_touch_device: deviceInfo.isTouchDevice
    })
  }

  // Track with Vercel Analytics
  if (window.va) {
    window.va('event', {
      name: 'device_detected',
      device_type: deviceInfo.type,
      os: deviceInfo.os,
      browser: deviceInfo.browser,
      screen_width: deviceInfo.screenWidth,
      screen_height: deviceInfo.screenHeight,
      is_touch_device: deviceInfo.isTouchDevice
    })
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Device Detected:', deviceInfo)
  }
}

// Auto-track device info on page load
export function initializeDeviceTracking() {
  if (typeof window === 'undefined') return

  const detection = detectDevice()
  trackDeviceInfo(detection.deviceInfo)
  
  return detection
}

// Import React hooks
import { useState, useEffect } from 'react'
