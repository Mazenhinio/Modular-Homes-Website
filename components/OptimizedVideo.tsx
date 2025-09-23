'use client'

import { useEffect, useRef, useState } from 'react'

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
}

export function OptimizedVideo({
  src,
  poster,
  className = '',
  style = {},
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            // Delay loading on mobile to save bandwidth
            const delay = isMobile ? 1000 : 500
            setTimeout(() => setShouldLoad(true), delay)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [isMobile])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    // Load video when conditions are met
    const loadVideo = () => {
      video.load()
      setIsLoaded(true)
    }

    // Add error handling
    const handleError = () => {
      console.warn('Video failed to load:', src)
      // Could fallback to poster image here
    }

    video.addEventListener('loadeddata', loadVideo)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', loadVideo)
      video.removeEventListener('error', handleError)
    }
  }, [shouldLoad, src])

  // Don't render video on mobile if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (isMobile && prefersReducedMotion) {
    return (
      <div 
        className={`absolute inset-0 w-full h-full object-cover bg-cover bg-center ${className}`}
        style={{
          backgroundImage: poster ? `url(${poster})` : 'none',
          backgroundColor: '#1a1a1a',
          ...style
        }}
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      style={style}
      autoPlay={autoPlay && shouldLoad}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? 'metadata' : 'none'}
      poster={poster}
      onLoadStart={() => setIsLoaded(true)}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  )
}
