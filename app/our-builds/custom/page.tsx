import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check } from 'lucide-react'
import CustomBuildsCarousel from '@/components/CustomBuildsCarousel'

export const metadata: Metadata = {
  title: 'Custom Build Options | Tailored Modular Homes | Discovery Homes',
  description: 'Create your perfect modular home with custom builds: larger footprints, net-zero kits, off-grid solutions, and Indigenous-specific designs crafted for your unique needs.',
}

export default function CustomBuildsPage() {
  const customImages = [
    {
      src: '/images/new-content/Custom Builds/CB-ResortCluster-Hero__Resort Cluster – Hero__Resort Cluster__v01.webp',
      alt: 'Resort Cluster Custom Build',
      title: 'Resort Cluster Development',
      description: 'Multiple modular units designed for resort and rental properties'
    },
    {
      src: '/images/new-content/Custom Builds/CB-LakesideRetreat-Hero__Lakeside-Retreat–Hero__CustomBuild__v01.webp',
      alt: 'Lakeside Retreat Custom Build',
      title: 'Lakeside Retreat',
      description: 'Custom modular home designed for lakeside living and relaxation'
    },
    {
      src: '/images/new-content/Custom Builds/cb lakeside.webp',
      alt: 'Lakeside Custom Build',
      title: 'Lakeside Custom Home',
      description: 'Beautiful lakeside custom modular home with scenic views'
    },
    {
      src: '/images/new-content/Custom Builds/cb coastal.webp',
      alt: 'Coastal Custom Build',
      title: 'Coastal Custom Home',
      description: 'Custom modular home designed for coastal environments'
    },
    {
      src: '/images/custom/1000017133.webp',
      alt: 'Custom Modular Home Design 1',
      title: 'Luxury Custom Build',
      description: 'Premium modular home with expansive living spaces and modern amenities'
    },
    {
      src: '/images/custom/1000017134.webp',
      alt: 'Custom Modular Home Design 2',
      title: 'Contemporary Custom Home',
      description: 'Sleek design featuring open-concept living and premium finishes'
    },
    {
      src: '/images/custom/1000017135.webp',
      alt: 'Custom Modular Home Design 3',
      title: 'Modern Family Residence',
      description: 'Spacious family home with multiple bedrooms and entertainment areas'
    },
    {
      src: '/images/custom/1000017136.webp',
      alt: 'Custom Modular Home Design 4',
      title: 'Elegant Custom Build',
      description: 'Sophisticated design with luxury features and attention to detail'
    },
    {
      src: '/images/custom/1000017137.webp',
      alt: 'Custom Modular Home Design 5',
      title: 'Premium Custom Home',
      description: 'High-end modular construction with custom architectural elements'
    },
    {
      src: '/images/custom/1000017138.webp',
      alt: 'Custom Modular Home Design 6',
      title: 'Luxury Family Estate',
      description: 'Expansive custom home designed for multi-generational living'
    },
    {
      src: '/images/custom/1000017139.webp',
      alt: 'Custom Modular Home Design 7',
      title: 'Contemporary Luxury Build',
      description: 'Modern architectural design with premium materials and finishes'
    },
    {
      src: '/images/custom/hero-slide-1.webp',
      alt: 'Custom Build Exterior View',
      title: 'Exterior Custom Design',
      description: 'Stunning exterior showcasing modern modular architecture'
    },
    {
      src: '/images/custom/hero-slide-2.webp',
      alt: 'Custom Build Interior View',
      title: 'Interior Custom Design',
      description: 'Beautiful interior spaces with custom lighting and finishes'
    },
    {
      src: '/images/custom/hero-slide-3.webp',
      alt: 'Custom Build Living Area',
      title: 'Living Area Design',
      description: 'Open-concept living space with premium amenities'
    },
    {
      src: '/images/custom/hero-slide-4.webp',
      alt: 'Custom Build Kitchen',
      title: 'Kitchen Design',
      description: 'Gourmet kitchen with high-end appliances and custom cabinetry'
    },
    {
      src: '/images/custom/hero-slide-5.webp',
      alt: 'Custom Build Bedroom',
      title: 'Master Suite Design',
      description: 'Luxurious master bedroom with custom features and amenities'
    },
    {
      src: '/images/custom/hero-slide-6.webp',
      alt: 'Custom Build Bathroom',
      title: 'Bathroom Design',
      description: 'Spa-inspired bathroom with premium fixtures and finishes'
    },
    {
      src: '/images/custom/hero-slide-7.webp',
      alt: 'Custom Build Outdoor Space',
      title: 'Outdoor Living Design',
      description: 'Seamless indoor-outdoor living with custom landscaping'
    },
    {
      src: '/images/custom/hero-slide-8.webp',
      alt: 'Custom Build Night View',
      title: 'Evening Ambiance',
      description: 'Beautiful evening lighting showcasing the custom home design'
    },
    {
      src: '/images/custom/hero-slide-9.webp',
      alt: 'Custom Build Aerial View',
      title: 'Aerial Perspective',
      description: 'Bird\'s eye view of the complete custom modular home'
    }
  ]

  const customOptions = [
    {
      title: "Larger Footprints",
      description: "Expandable designs for growing families or multi-generational living. Scale up with additional modules and flexible configurations.",
      icon: "🏠",
      features: [
        "Multi-module configurations",
        "Expandable designs",
        "Family-focused layouts",
        "Future expansion ready"
      ],
      priceRange: "Contact for pricing"
    },
    {
      title: "Net-Zero Ready Kits", 
      description: "Energy-efficient packages with solar panels, high-performance insulation, and sustainable building systems.",
      icon: "🌱",
      features: [
        "Solar panel systems",
        "High-efficiency HVAC",
        "Advanced insulation",
        "Energy monitoring"
      ],
      priceRange: "+$25,000 - $50,000"
    },
    {
      title: "Off-Grid Solutions",
      description: "Complete independence with water wells, solar power, septic systems, and backup generators for remote living.",
      icon: "⚡",
      features: [
        "Solar + battery systems",
        "Water well integration",
        "Septic system design",
        "Backup generator"
      ],
      priceRange: "+$40,000 - $80,000"
    },
    {
      title: "Indigenous-Specific Designs",
      description: "Culturally-respectful layouts honoring traditional values, community needs, and ceremonial spaces.",
      icon: "🪶",
      features: [
        "Cultural consultation",
        "Traditional layouts",
        "Community gathering spaces",
        "Ceremonial considerations"
      ],
      priceRange: "Contact for pricing"
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your vision, land, budget, and specific requirements in detail."
    },
    {
      step: "2", 
      title: "Site Assessment",
      description: "Our team evaluates your property for optimal placement and utility connections."
    },
    {
      step: "3",
      title: "Custom Design",
      description: "We create detailed plans and 3D renderings tailored to your needs."
    },
    {
      step: "4",
      title: "Quote & Timeline",
      description: "Receive a comprehensive quote with materials, labor, and delivery timeline."
    },
    {
      step: "5",
      title: "Construction",
      description: "Your custom home is built in our facility with regular progress updates."
    },
    {
      step: "6",
      title: "Delivery & Setup",
      description: "Professional delivery and setup on your property with final walkthrough."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-28 text-discovery-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/new-content/Custom Builds/CB-LakesideRetreat-Front__Lakeside-Retreat__CustomBuild__v01.webp"
            alt="Lakeside Retreat Front View - Custom Modular Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-discovery-charcoal/90 via-discovery-charcoal/80 to-discovery-charcoal/90" />
        </div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/our-builds"
              className="inline-flex items-center text-discovery-gold hover:text-discovery-gold-light mb-8 sm:mb-10 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Our Builds
            </Link>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-discovery-lime nature-shimmer leading-normal pt-4 pb-2">
                Custom Build Options
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 text-discovery-sage max-w-3xl mx-auto">
                Fully tailored modular homes crafted to fit your unique needs, land, and vision.
              </p>
              <p className="text-base sm:text-lg text-discovery-forest max-w-3xl mx-auto leading-relaxed">
                From larger family compounds to off-grid retreats, net-zero energy homes to culturally-specific Indigenous designs — we bring your dream home to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Explore Our Custom Designs
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our portfolio of luxurious custom modular homes. Click on any image to view it in full detail.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <CustomBuildsCarousel images={customImages} />
          </div>

                     <div className="text-center mt-8">
             <p className="text-discovery-gold font-semibold">
               ✨ Interactive 3D Carousel • Click to Enlarge • Full Gallery
             </p>
           </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Customize Your Perfect Home
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our custom build options or combine multiple features to create your ideal modular home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {customOptions.map((option, index) => (
              <div key={index} className="bg-discovery-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl flex-shrink-0">{option.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-2">
                      {option.title}
                    </h3>
                    <p className="text-discovery-gold font-semibold mb-3">
                      {option.priceRange}
                    </p>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-discovery-gold mr-3 flex-shrink-0" size={16} />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Our Custom Build Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From initial consultation to move-in day, we guide you through every step of creating your custom modular home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-discovery-charcoal font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-discovery-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
                Timeline & Investment
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-discovery-gold pl-6">
                  <h3 className="text-xl font-semibold text-discovery-charcoal mb-2">Design Phase</h3>
                  <p className="text-neutral-600">2-4 weeks for custom design and engineering</p>
                </div>
                <div className="border-l-4 border-discovery-gold pl-6">
                  <h3 className="text-xl font-semibold text-discovery-charcoal mb-2">Construction</h3>
                  <p className="text-neutral-600">8-16 weeks depending on complexity and customization</p>
                </div>
                <div className="border-l-4 border-discovery-gold pl-6">
                  <h3 className="text-xl font-semibold text-discovery-charcoal mb-2">Delivery & Setup</h3>
                  <p className="text-neutral-600">1-2 weeks for delivery and site setup</p>
                </div>
              </div>
            </div>

            <div className="bg-discovery-white rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-6">
                Investment Ranges
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-neutral-700">Base Custom Home</span>
                  <span className="font-semibold text-discovery-charcoal">$200,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-neutral-700">With Net-Zero Package</span>
                  <span className="font-semibold text-discovery-charcoal">$250,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                  <span className="text-neutral-700">With Off-Grid Systems</span>
                  <span className="font-semibold text-discovery-charcoal">$280,000+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-neutral-700">Luxury Custom</span>
                  <span className="font-semibold text-discovery-charcoal">$350,000+</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                *Prices vary based on size, features, and location. Contact us for a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-discovery-charcoal text-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Design Your Custom Home?
            </h2>
            <p className="text-xl mb-8 text-discovery-white-soft">
              Let's discuss your vision and create a home that's uniquely yours. Schedule a free consultation to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote-builder"
                className="btn-eco px-8 py-4 rounded-lg text-lg font-semibold glow-lime growth-pulse micro-interaction"
              >
                Start Custom Quote
              </Link>
              <Link
                href="/contact"
                className="btn-forest px-8 py-4 rounded-lg text-lg font-semibold micro-interaction"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 