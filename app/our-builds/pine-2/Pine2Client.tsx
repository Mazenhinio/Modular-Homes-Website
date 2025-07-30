'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ImageCarousel } from '@/components/ImageCarousel'
import { PDFDownloads } from '@/components/PDFDownloads'

export function Pine2Client() {

  const specifications = [
    { label: 'Main Floor', value: '504 sq/ft' },
    { label: 'Bedrooms', value: '2 + Loft' },
    { label: 'Bathrooms', value: '1' },
    { label: 'Starting Price', value: '$179,000 CAD' },
    { label: 'Ideal For', value: 'Families, Rental Markets' },
    { label: 'Delivery Time', value: '6-8 weeks' }
  ]

  const features = [
    'Versatile 504 sq/ft main floor',
    '2 bedrooms plus loft space',
    'Flexible family layout',
    'Perfect for rental markets',
    'Extra storage solutions',
    'Customizable loft usage',
    'Open concept main floor',
    'Energy-efficient design',
    'High-quality finishes',
    'Scalable living space'
  ]

  const gallery = [
    { src: '/images/pine2/Front Elevation.webp', alt: 'Pine 2 Front Elevation View' },
    { src: '/images/pine2/Rear Elevation.webp', alt: 'Pine 2 Rear Elevation View' },
    { src: '/images/pine2/Kitchen.webp', alt: 'Pine 2 Modern Kitchen' },
    { src: '/images/pine2/Primary Bedroom.webp', alt: 'Pine 2 Primary Bedroom' },
    { src: '/images/pine2/Living Room.webp', alt: 'Pine 2 Living Room' },
    { src: '/images/pine2/Upper Floor.webp', alt: 'Pine 2 Upper Floor Loft' },
    { src: '/images/pine2/Main Floor.webp', alt: 'Pine 2 Main Floor Layout' },
    { src: '/images/pine2/Main Floor Detailed.webp', alt: 'Pine 2 Detailed Main Floor' },
    { src: '/images/pine2/Loft Plan.webp', alt: 'Pine 2 Loft Plan Overview' },
    { src: '/images/pine2/Loft Plan Detailed.webp', alt: 'Pine 2 Detailed Loft Plan' },
    { src: '/images/pine2/Floor plan.webp', alt: 'Pine 2 Complete Floor Plan' }
  ]

  const pdfDownloads = [
    {
      title: 'Main Floor & Loft Plan',
      description: 'Complete floor plan showing both main floor and loft layouts with dimensions',
      filename: '/images/pine2/Main Floor and Loft Plan.pdf',
      category: 'floorplan' as const,
      size: '2.8 MB'
    },
    {
      title: '2 Bedroom Modular Floor Plan',
      description: 'Detailed modular construction specifications and room layouts',
      filename: '/images/pine2/2 Bedroom Modular Floor Plan.pdf',
      category: 'floorplan' as const,
      size: '2.5 MB'
    },
    {
      title: 'Architectural Perspectives',
      description: '3D perspective views and elevation drawings for visualization',
      filename: '/images/pine2/Perspectives.pdf',
      category: 'perspective' as const,
      size: '3.2 MB'
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
                <span className="text-discovery-gold font-semibold text-xl">Pine 2</span>
                <span className="text-discovery-white-soft">•</span>
                <span className="text-discovery-white-soft">The Versatile One</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-discovery-lime nature-shimmer">
                Pine 2 — The Versatile One
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-discovery-sage">
                Perfect for families or rental markets, with extra space and a flexible layout.
              </p>
              <div className="text-3xl font-bold text-discovery-forest mb-8">
                Starting at $179,000 CAD
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/quote-builder"
                  className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
                >
                  Get My Pine 2 Quote
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
          <ImageCarousel images={gallery} title="Pine 2 Photo Gallery" />
        </div>
      </section>

      {/* PDF Downloads */}
      <PDFDownloads downloads={pdfDownloads} modelName="Pine 2" />

      {/* CTA Section */}
      <section className="section bg-discovery-charcoal text-discovery-white animate-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center scale-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Build Your Pine 2?
            </h2>
            <p className="text-xl mb-8 text-discovery-white-soft">
              Get a personalized quote for your Pine 2 modular home, perfect for growing families or rental income.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-cards">
              <Link
                href="/quote-builder"
                className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
              >
                Get My Pine 2 Quote
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