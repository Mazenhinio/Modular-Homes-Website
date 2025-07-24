'use client'

import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize smooth scrolling
    const initSmoothScroll = async () => {
      try {
        // For now, we'll use CSS smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth'
      } catch (error) {
        console.log('Smooth scroll initialization skipped:', error)
      }
    }

    initSmoothScroll()

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return <>{children}</>
} 