import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ImageCarousel } from '@/components/ImageCarousel'
import { PDFDownloads } from '@/components/PDFDownloads'

export const metadata: Metadata = {
  title: 'Pine 1 - The Efficient One | 504 sq/ft Modular Home | Discovery Homes',
  description: 'Pine 1: 1 bedroom, 504 sq/ft modular home starting at $174,000 CAD. Perfect for singles, couples, or resort units. View floor plans and specifications.',
}

export default function Pine1Page() {
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
    { src: '/images/pine1/exterior-1.webp', alt: 'Pine 1 Front Exterior View' },
    { src: '/images/pine1/exterior-2.webp', alt: 'Pine 1 Side Exterior View' },
    { src: '/images/pine1/kitchen.webp', alt: 'Pine 1 Modern Kitchen' },
    { src: '/images/pine1/bedroom.webp', alt: 'Pine 1 Spacious Bedroom' },
    { src: '/images/pine1/living-room.webp', alt: 'Pine 1 Living Room' },
    { src: '/images/pine1/Loft.webp', alt: 'Pine 1 Loft Space' },
    { src: '/images/pine1/Main Floor.webp', alt: 'Pine 1 Main Floor Layout' }
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
    <div className="animate-section">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-discovery-charcoal via-discovery-charcoal-light to-discovery-charcoal text-discovery-white hero-element">
        <div className="container-custom">
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
                <span className="text-discovery-gold font-semibold text-xl">Pine 1</span>
                <span className="text-discovery-white-soft">•</span>
                <span className="text-discovery-white-soft">The Efficient One</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
                Pine 1 — The Efficient One
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-shadow">
                Ideal for singles, couples, or resort units — blending simplicity with style in a compact footprint.
              </p>
              <div className="text-3xl font-bold text-discovery-gold mb-8 text-shimmer">
                Starting at $174,000 CAD
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
          <ImageCarousel images={gallery} title="Pine 1 Photo Gallery" />
        </div>
      </section>

      {/* PDF Downloads */}
      <PDFDownloads downloads={pdfDownloads} modelName="Pine 1" />

      {/* CTA Section */}
      <section className="section bg-discovery-charcoal text-discovery-white animate-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center scale-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Build Your Pine 1?
            </h2>
            <p className="text-xl mb-8 text-discovery-white-soft">
              Get a personalized quote for your Pine 1 modular home, including delivery to your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-cards">
              <Link
                href="/quote-builder"
                className="card-item btn-luxury text-lg px-8 py-4 shadow-gold hover:shadow-luxury-lg micro-interaction"
              >
                Get My Pine 1 Quote
              </Link>
              <Link
                href="/contact"
                className="card-item glass border-2 border-discovery-white text-discovery-white px-8 py-4 rounded-lg text-lg font-semibold hover:glass-dark transition-all duration-500 micro-interaction"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 