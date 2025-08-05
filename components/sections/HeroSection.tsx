'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, ChevronUp } from 'lucide-react'

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showText, setShowText] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()
  
  const slides = [
    {
      image: '/images/hero-carousel/hero-slide-1.webp',
      title: 'Smart, Sustainable Modular Homes',
      subtitle: 'Built for Western Canada'
    },
    {
      image: '/images/hero-carousel/hero-slide-2.webp',
      title: 'Culturally-Respectful Design',
      subtitle: 'Honoring Indigenous Communities'
    },
    {
      image: '/images/hero-carousel/hero-slide-3.webp',
      title: 'Off-Grid Ready Solutions',
      subtitle: 'Independence & Sustainability'
    },
    {
      image: '/images/hero-carousel/hero-slide-4.webp',
      title: 'Resort & Rental Opportunities',
      subtitle: 'Unlock Your Land\'s Potential'
    },
    {
      image: '/images/hero-carousel/hero-slide-5.webp',
      title: 'Premium Modular Construction',
      subtitle: 'Quality Without Compromise'
    },
    {
      image: '/images/hero-carousel/hero-slide-6.webp',
      title: 'Energy-Efficient Living',
      subtitle: 'Net-Zero Ready Homes'
    },
    {
      image: '/images/hero-carousel/hero-slide-7.webp',
      title: 'Rural Living Made Easy',
      subtitle: 'Perfect for Acreage Owners'
    },
    {
      image: '/images/hero-carousel/hero-slide-8.webp',
      title: 'Modern Tiny Home Solutions',
      subtitle: 'Minimalist Luxury'
    },
    {
      image: '/images/hero-carousel/hero-slide-9.webp',
      title: 'Dream Homes, Delivered',
      subtitle: 'Your Vision, Our Expertise'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const hideText = useCallback(() => {
    setShowText(false)
  }, [])

  const showTextOverlay = useCallback(() => {
    setShowText(true)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      return
    }

    intervalRef.current = setInterval(nextSlide, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide, isPlaying])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${showText ? 'blur-sm' : 'blur-none'}`}
          >
            <img
              src={slide.image}
              alt={`Discovery Homes Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-nature text-discovery-lime p-3 rounded-full hover:glow-green transition-all duration-300 z-10 micro-interaction"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-nature text-discovery-lime p-3 rounded-full hover:glow-green transition-all duration-300 z-10 micro-interaction"
      >
        <ChevronRight size={24} />
      </button>

      {/* Play/Pause Control */}
      <button
        onClick={togglePlayPause}
        className="absolute top-6 right-6 glass-nature text-discovery-lime p-3 rounded-full hover:glow-green transition-all duration-300 z-10 micro-interaction"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Show Text Arrow Button - Smooth animation */}
      <button
        onClick={showTextOverlay}
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 glass-eco text-discovery-lime p-4 rounded-full hover:glow-lime transition-all duration-500 ease-out z-20 growth-pulse ${
          !showText 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Text Content - Smooth animation */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-700 ease-out ${
        showText 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <div className={`text-center text-yellow-400 max-w-4xl px-8 py-12 transition-all duration-500 ease-out delay-100 relative ${
          showText ? 'scale-100' : 'scale-95'
        }`}>
          {/* Dark backdrop for better contrast */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl -z-10 -m-4"></div>
          
          <h1 className={`text-6xl font-black mb-6 transition-all duration-600 ease-out drop-shadow-2xl text-discovery-lime nature-shimmer ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            {slides[currentSlide].title}
          </h1>
          <p className={`text-2xl mb-4 font-bold transition-all duration-600 ease-out delay-100 text-discovery-sage ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            {slides[currentSlide].subtitle}
          </p>
          <p className={`text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-discovery-forest transition-all duration-600 ease-out delay-150 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            High-quality, culturally-respectful modular housing that respects the land, empowers communities, and helps Canadians unlock the potential of their property.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-600 ease-out delay-200 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <a 
              href="/quote-builder"
              className="btn-nature px-8 py-3 rounded-lg text-lg font-semibold glow-green growth-pulse transition-all duration-300 hover:scale-105"
            >
              Start Building My Home →
            </a>
            <a 
              href="/success-stories"
              className="btn-forest px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Watch Success Stories
            </a>
          </div>
          
          {/* Hide Text Button - Smooth animation */}
          <button
            onClick={hideText}
            className={`glass-eco text-discovery-lime px-6 py-2 rounded-full hover:glow-lime transition-all duration-600 ease-out delay-300 hover:scale-105 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Hide Text
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 micro-interaction ${
              index === currentSlide 
                ? `scale-110 leaf-sway ${
                    index % 3 === 0 ? 'bg-discovery-lime glow-lime' : 
                    index % 3 === 1 ? 'bg-discovery-sage glow-green' : 
                    'bg-discovery-forest glow-forest'
                  }` 
                : 'bg-white/50 hover:bg-discovery-lime/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
} 