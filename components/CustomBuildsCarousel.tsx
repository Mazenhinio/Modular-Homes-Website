'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import Image from 'next/image'

interface CustomBuildsCarouselProps {
  images: {
    src: string
    alt: string
    title?: string
    description?: string
  }[]
}

export default function CustomBuildsCarousel({ images }: CustomBuildsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set())

  // Preload images for better modal performance
  useEffect(() => {
    const preloadImage = (src: string) => {
      if (!preloadedImages.has(src)) {
        const img = new window.Image()
        img.src = src
        img.onload = () => {
          setPreloadedImages(prev => new Set(Array.from(prev).concat([src])))
        }
      }
    }

    // Preload current and adjacent images
    const currentImage = images[currentIndex]?.src
    const nextImage = images[(currentIndex + 1) % images.length]?.src
    const prevImage = images[(currentIndex - 1 + images.length) % images.length]?.src

    if (currentImage) preloadImage(currentImage)
    if (nextImage) preloadImage(nextImage)
    if (prevImage) preloadImage(prevImage)
  }, [currentIndex, images, preloadedImages])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      {/* 3D Carousel */}
      <div className="relative w-full h-[600px] overflow-hidden rounded-2xl bg-gradient-to-br from-discovery-charcoal to-discovery-charcoal-light">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-20 p-3 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white hover:bg-discovery-gold/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-20 p-3 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white hover:bg-discovery-gold/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Images */}
          {images.map((image, index) => {
            const distance = Math.abs(index - currentIndex)
            const isActive = index === currentIndex
            const isAdjacent = distance === 1
            const isFar = distance >= 2

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out cursor-pointer group ${
                  isActive
                    ? 'z-10 scale-100 opacity-100 translate-x-0'
                    : isAdjacent
                    ? 'z-5 scale-75 opacity-60 translate-x-12'
                    : isFar
                    ? 'z-0 scale-50 opacity-20 translate-x-24'
                    : 'z-0 scale-50 opacity-20 -translate-x-24'
                } ${index < currentIndex ? '-translate-x-12' : index > currentIndex ? 'translate-x-12' : ''}`}
                onClick={() => openModal(index)}
              >
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-discovery-gold/20 bg-discovery-charcoal">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority={isActive}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-discovery-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-discovery-white">
                      <h3 className="text-xl font-serif font-bold mb-2">
                        {image.title || `Custom Build ${index + 1}`}
                      </h3>
                      <p className="text-discovery-sage text-sm">
                        {image.description || 'Luxurious custom modular home design'}
                      </p>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            )
          })}

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-discovery-gold scale-125'
                    : 'bg-discovery-white/50 hover:bg-discovery-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-discovery-charcoal/95 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-7xl min-h-screen py-8 px-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 z-10 p-3 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white hover:bg-discovery-gold/40 transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Modal Navigation */}
            <button
              onClick={prevModalImage}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white hover:bg-discovery-gold/40 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextModalImage}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-discovery-gold/20 backdrop-blur-sm rounded-full text-discovery-white hover:bg-discovery-gold/40 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Image Container */}
            <div className="relative w-full bg-discovery-charcoal rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full">
                <Image
                  src={images[modalImageIndex].src}
                  alt={images[modalImageIndex].alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              
              {/* Modal Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-discovery-charcoal/90 to-transparent p-8">
                <h3 className="text-2xl font-serif font-bold text-discovery-white mb-2">
                  {images[modalImageIndex].title || `Custom Build ${modalImageIndex + 1}`}
                </h3>
                <p className="text-discovery-sage">
                  {images[modalImageIndex].description || 'Luxurious custom modular home design'}
                </p>
              </div>
            </div>

            {/* Modal Indicators */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === modalImageIndex
                        ? 'bg-discovery-gold scale-125'
                        : 'bg-discovery-white/50 hover:bg-discovery-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 