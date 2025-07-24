import { Metadata } from 'next'
import { BuildsHero } from '@/components/sections/BuildsHero'
import { BuildCard } from '@/components/BuildCard'
import { CustomBuildsSection } from '@/components/sections/CustomBuildsSection'
import { CTABanner } from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Our Builds | Discovery Homes Modular Housing',
  description: 'Explore Pine 1, Pine 2, Pine 3, and Custom modular home options. Quality builds starting at $99,000 CAD with flexible layouts and energy-efficient designs.',
}

const builds = [
  {
    id: 'pine-1',
    name: 'Pine 1',
    subtitle: 'The Efficient One',
    sqft: '504 sq/ft',
    bedrooms: '1 Bedroom',
    startingPrice: '$174,000 CAD',
    description: 'Ideal for singles, couples, or resort units — blending simplicity with style in a compact footprint.',
    features: [
      'Efficient 504 sq/ft layout',
      '1 spacious bedroom',
      'Modern kitchen design',
      'Energy-efficient systems',
      'Perfect for singles or couples',
      'Ideal for resort units'
    ],
    images: [
      '/images/pine1/exterior-1.webp',
      '/images/pine1/kitchen.webp',
      '/images/pine1/bedroom.webp',
      '/images/pine1/living-room.webp'
    ],
    floorPlan: '/images/pine1/Floor Plan.pdf',
    gallery: [
      { src: '/images/pine1/exterior-1.webp', alt: 'Pine 1 Exterior' },
      { src: '/images/pine1/exterior-2.webp', alt: 'Pine 1 Side View' },
      { src: '/images/pine1/kitchen.webp', alt: 'Pine 1 Kitchen' },
      { src: '/images/pine1/bedroom.webp', alt: 'Pine 1 Bedroom' },
      { src: '/images/pine1/living-room.webp', alt: 'Pine 1 Living Room' },
      { src: '/images/pine1/Loft.webp', alt: 'Pine 1 Loft Space' }
    ]
  },
  {
    id: 'pine-2',
    name: 'Pine 2',
    subtitle: 'The Versatile One',
    sqft: '504 sq/ft',
    bedrooms: '2 Bedroom with Loft',
    startingPrice: '$179,000 CAD',
    description: 'Perfect for families or rental markets, with extra space and a flexible layout.',
    features: [
      'Versatile 504 sq/ft main floor',
      '2 bedrooms plus loft space',
      'Flexible family layout',
      'Perfect for rental markets',
      'Extra storage solutions',
      'Customizable loft usage'
    ],
    images: [
      '/images/pine2/Front Elevation.webp',
      '/images/pine2/Kitchen.webp',
      '/images/pine2/Primary Bedroom.webp',
      '/images/pine2/Living Room.webp'
    ],
    floorPlan: '/images/pine2/Main Floor and Loft Plan.pdf',
    gallery: [
      { src: '/images/pine2/Front Elevation.webp', alt: 'Pine 2 Front Elevation' },
      { src: '/images/pine2/Rear Elevation.webp', alt: 'Pine 2 Rear Elevation' },
      { src: '/images/pine2/Kitchen.webp', alt: 'Pine 2 Kitchen' },
      { src: '/images/pine2/Primary Bedroom.webp', alt: 'Pine 2 Primary Bedroom' },
      { src: '/images/pine2/Living Room.webp', alt: 'Pine 2 Living Room' },
      { src: '/images/pine2/Upper Floor.webp', alt: 'Pine 2 Upper Floor' }
    ]
  },
  {
    id: 'pine-3',
    name: 'Pine 3',
    subtitle: 'The Minimalist',
    sqft: '240 sq/ft with Loft',
    bedrooms: 'Loft Bedroom',
    startingPrice: '$99,000 CAD',
    description: 'A modern, tiny‑home solution — perfect as an office, rental, or weekend retreat.',
    features: [
      'Compact 240 sq/ft design',
      'Efficient loft bedroom',
      'Modern minimalist aesthetic',
      'Perfect for office use',
      'Ideal weekend retreat',
      'Affordable entry point'
    ],
    images: [
      '/images/pine3/exterior-front.webp',
      '/images/pine3/kitchen.webp',
      '/images/pine3/living-room.webp',
      '/images/pine3/loft.webp'
    ],
    floorPlan: '/images/pine3/Loft Bedroom Modular Floorplan.pdf',
    gallery: [
      { src: '/images/pine3/exterior-front.webp', alt: 'Pine 3 Front Exterior' },
      { src: '/images/pine3/exterior-front-alt.webp', alt: 'Pine 3 Alternative View' },
      { src: '/images/pine3/exterior-rear.webp', alt: 'Pine 3 Rear View' },
      { src: '/images/pine3/kitchen.webp', alt: 'Pine 3 Kitchen' },
      { src: '/images/pine3/living-room.webp', alt: 'Pine 3 Living Room' },
      { src: '/images/pine3/loft.webp', alt: 'Pine 3 Loft Bedroom' }
    ]
  }
]

export default function OurBuildsPage() {
  return (
    <>
      <BuildsHero />
      
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="space-y-24">
            {builds.map((build, index) => (
              <BuildCard 
                key={build.id} 
                build={build} 
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CustomBuildsSection />

      <CTABanner 
        title="Ready to Choose Your Perfect Home?"
        description="Start with our Quote Builder to get a personalized estimate for your dream home."
        primaryAction={{
          text: "Start Your Quote",
          href: "/quote-builder"
        }}
        secondaryAction={{
          text: "Download Brochure",
          href: "/resources/brochure"
        }}
        className="bg-discovery-charcoal text-discovery-white"
      />
    </>
  )
} 