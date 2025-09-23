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

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Simple error handling
    const handleError = () => {
      console.warn('Video failed to load:', src)
    }

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    video.addEventListener('error', handleError)
    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      style={style}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
