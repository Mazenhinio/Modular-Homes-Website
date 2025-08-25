'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ImageCarousel } from '@/components/ImageCarousel'
import { PDFDownloads } from '@/components/PDFDownloads'

export function Pine1Client() {

  const specifications = [
    { label: 'Total Area', value: '504 sq/ft' },
    { label: 'Bedrooms', value: '1' },
    { label: 'Bathrooms', value: '1' },
    { label: 'Starting Price', value: '$174,000 CAD' },
    { label: 'Ideal For', value: 'Singles, Couples, Resort Units' },
    { label: 'Delivery Time', value: '6-8 weeks' }
  ]

  const features = [
    'Efficient 504 sq/ft layout',
    '1 spacious bedroom',
    'Modern kitchen design',
    'Energy-efficient systems',
    'Perfect for singles or couples',
    'Ideal for resort units',
    'Open concept living',
    'High-quality finishes',
    'Large windows for natural light',
    'Durable construction materials'
  ]

  const gallery = [
          { src: '/images/pine1/exterior-1.webp', alt: 'Pine Front Exterior View' },
      { src: '/images/pine1/exterior-2.webp', alt: 'Pine Side Exterior View' },
      { src: '/images/pine1/kitchen.webp', alt: 'Pine Modern Kitchen' },
      { src: '/images/pine1/bedroom.webp', alt: 'Pine Spacious Bedroom' },
      { src: '/images/pine1/living-room.webp', alt: 'Pine Living Room' },
      { src: '/images/pine1/Loft.webp', alt: 'Pine Loft Space' },
      { src: '/images/pine1/Main Floor.webp', alt: 'Pine Main Floor Layout' }
  ]

  const pdfDownloads = [
    {
      title: 'Main Floor Plan',
      description: 'Detailed architectural floor plan with dimensions and room layouts',
      filename: '/images/pine1/Floor Plan.pdf',
      category: 'floorplan' as const,
      size: '2.1 MB'
    },
    {
      title: 'Utilities Perspective',
      description: 'Technical drawings showing utility connections and specifications',
      filename: '/images/pine1/Utilities Perspective.pdf',
      category: 'technical' as const,
      size: '1.8 MB'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-discovery-white hero-element">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translateX(-50%) translateY(-50%)',
            top: '50%',
            left: '50%'
          }}
        >
          <source src="/videos/Pine 1 & 2.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/our-builds"
              className="inline-flex items-center text-discovery-gold hover:text-discovery-gold-light mb-8 transition-colors micro-interaction"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Our Builds
            </Link>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-discovery-gold font-semibold text-xl">Pine</span>
                <span className="text-discovery-white-soft">•</span>
                <span className="text-discovery-white-soft">The Efficient One</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-discovery-lime nature-shimmer">
                Pine — The Efficient One
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-discovery-sage">
                Ideal for singles, couples, or resort units — blending simplicity with style in a compact footprint.
              </p>
              <div className="text-3xl font-bold text-discovery-forest mb-8">
                Starting at $174,000 CAD
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/quote-builder"
                  className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
                >
                  Get My Pine Quote
                </Link>
                <Link
                  href="/contact"
                  className="card-item btn-forest text-lg px-8 py-4 micro-interaction"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section bg-discovery-white animate-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 scale-on-scroll">
              <h2 className="text-3xl font-serif font-bold text-discovery-charcoal mb-8">
                Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6 animate-cards">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-discovery-gold pl-4 card-item micro-interaction">
                    <div className="text-sm text-neutral-600 mb-1">{spec.label}</div>
                    <div className="text-lg font-semibold text-discovery-charcoal">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scale-on-scroll">
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-6">
                Key Features
              </h3>
              <ul className="space-y-3 animate-cards">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start card-item micro-interaction">
                    <div className="w-2 h-2 bg-discovery-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="section bg-neutral-50 animate-section">
        <div className="container-custom">
          <ImageCarousel images={gallery} title="Pine Photo Gallery" />
        </div>
      </section>

      {/* PDF Downloads */}
      <PDFDownloads downloads={pdfDownloads} modelName="Pine" />

      {/* CTA Section */}
      <section className="section bg-discovery-charcoal text-discovery-white animate-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center scale-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Build Your Pine?
            </h2>
            <p className="text-xl mb-8 text-discovery-white-soft">
              Get a personalized quote for your Pine modular home, including delivery to your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-cards">
              <Link
                href="/quote-builder"
                className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
              >
                Get My Pine Quote
              </Link>
              <Link
                href="/contact"
                className="card-item btn-forest text-lg px-8 py-4 micro-interaction"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}