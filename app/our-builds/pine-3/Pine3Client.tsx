'use client'

import Link from 'next/link'
import { ArrowLeft, Building2, DollarSign, Mountain } from 'lucide-react'
import { ImageCarousel } from '@/components/ImageCarousel'
import { PDFDownloads } from '@/components/PDFDownloads'

export function Pine3Client() {

  const specifications = [
    { label: 'Total Area', value: '240 sq/ft with Loft' },
    { label: 'Bedrooms', value: 'Loft Bedroom' },
    { label: 'Bathrooms', value: '1' },
    { label: 'Starting Price', value: '$99,000 CAD' },
    { label: 'Ideal For', value: 'Office, Rental, Retreat' },
    { label: 'Delivery Time', value: '4-6 weeks' }
  ]

  const features = [
    'Compact 240 sq/ft design',
    'Efficient loft bedroom',
    'Modern minimalist aesthetic',
    'Perfect for office use',
    'Ideal weekend retreat',
    'Affordable entry point',
    'Smart storage solutions',
    'Energy-efficient systems',
    'High-quality finishes',
    'Quick delivery time'
  ]

  const gallery = [
    { src: '/images/new-content/Pine 3- Willow/XF pine 3 scandanavian front right .webp', alt: 'Willow Scandinavian Front Right View' },
    { src: '/images/new-content/Pine 3- Willow/IF pine 3 Nordic Whitw.webp', alt: 'Willow Nordic White Exterior' },
    { src: '/images/new-content/Pine 3- Willow/IF Pine3-kitchen-E&S.webp', alt: 'Willow Earth & Sky Kitchen' },
    { src: '/images/new-content/Pine 3- Willow/IF Pine3-kitchen-NW.webp', alt: 'Willow Nordic White Kitchen' },
    { src: '/images/new-content/Pine 3- Willow/IF Pine3-room-E&S.webp', alt: 'Willow Earth & Sky Living Room' }
  ]

  const pdfDownloads = [
    {
      title: 'Loft Bedroom Modular Floor Plan',
      description: 'Detailed modular floor plan with loft bedroom layout and dimensions',
      filename: '/images/pine3/Loft Bedroom Modular Floorplan.pdf',
      category: 'floorplan' as const,
      size: '1.9 MB'
    },
    {
      title: 'Loft Perspectives',
      description: '3D perspective views and visual layouts showing the loft design',
      filename: '/images/pine3/Loft Perspectives.pdf',
      category: 'perspective' as const,
      size: '2.3 MB'
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
          <source src="/videos/Pine 3.mp4" type="video/mp4" />
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
                <span className="text-discovery-gold font-semibold text-xl">Willow</span>
                <span className="text-discovery-white-soft">•</span>
                <span className="text-discovery-white-soft">The Minimalist</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-discovery-lime nature-shimmer">
                Willow — The Minimalist
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-discovery-sage">
                A modern, tiny‑home solution — perfect as an office, rental, or weekend retreat.
              </p>
              <div className="text-3xl font-bold text-discovery-forest mb-8">
                Starting at $99,000 CAD
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/quote-builder"
                  className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
                >
                  Get My Willow Quote
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

      {/* Use Cases */}
      <section className="section bg-neutral-50 animate-section">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-discovery-charcoal mb-12 text-center">
            Perfect For Multiple Uses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 animate-cards">
            <div className="bg-discovery-white rounded-2xl p-8 text-center shadow-luxury card-item micro-interaction">
              <div className="text-4xl mb-4 flex justify-center">
                <Building2 className="w-12 h-12 text-discovery-gold" />
              </div>
              <h3 className="text-xl font-semibold text-discovery-charcoal mb-4">Home Office</h3>
              <p className="text-neutral-600">
                Create the perfect remote work environment with a dedicated office space separate from your main home.
              </p>
            </div>
            <div className="bg-discovery-white rounded-2xl p-8 text-center shadow-luxury card-item micro-interaction">
              <div className="text-4xl mb-4 flex justify-center">
                <DollarSign className="w-12 h-12 text-discovery-gold" />
              </div>
              <h3 className="text-xl font-semibold text-discovery-charcoal mb-4">Rental Income</h3>
              <p className="text-neutral-600">
                Generate passive income with an attractive tiny home rental perfect for short-term or long-term guests.
              </p>
            </div>
            <div className="bg-discovery-white rounded-2xl p-8 text-center shadow-luxury card-item micro-interaction">
              <div className="text-4xl mb-4 flex justify-center">
                <Mountain className="w-12 h-12 text-discovery-gold" />
              </div>
              <h3 className="text-xl font-semibold text-discovery-charcoal mb-4">Weekend Retreat</h3>
              <p className="text-neutral-600">
                Your perfect getaway cabin with all the essentials for comfortable weekend and vacation stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="section bg-discovery-white animate-section">
        <div className="container-custom">
          <ImageCarousel images={gallery} title="Willow Photo Gallery" />
        </div>
      </section>

      {/* PDF Downloads */}
      <PDFDownloads downloads={pdfDownloads} modelName="Willow" />

      {/* CTA Section */}
      <section className="section bg-discovery-charcoal text-discovery-white animate-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center scale-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Build Your Willow?
            </h2>
            <p className="text-xl mb-8 text-discovery-white-soft">
              Start with our most affordable option — perfect for testing the waters or creating your ideal tiny space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-cards">
              <Link
                href="/quote-builder"
                className="card-item btn-eco text-lg px-8 py-4 shadow-lime glow-lime growth-pulse micro-interaction"
              >
                Get My Willow Quote
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