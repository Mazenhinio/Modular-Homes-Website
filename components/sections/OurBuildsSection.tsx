import Link from 'next/link'

export function OurBuildsSection() {
  const builds = [
    {
      name: "Pine 1",
      subtitle: "The Efficient One",
      description: "Ideal for singles, couples, or resort units — blending simplicity with style in a compact footprint.",
      specs: "504 sq ft • 1 Bedroom",
      price: "Starting at $174,000 CAD",
      image: "/images/pine1/exterior-1.webp",
      href: "/our-builds/pine-1",
      features: ["Compact design", "Energy efficient", "Perfect for couples"]
    },
    {
      name: "Pine 2", 
      subtitle: "The Versatile One",
      description: "Perfect for families or rental markets, with extra space and a flexible layout.",
      specs: "504 sq ft • 2 Bedroom with Loft",
      price: "Starting at $179,000 CAD",
      image: "/images/pine2/Front Elevation.webp",
      href: "/our-builds/pine-2",
      features: ["Flexible layout", "Family friendly", "Loft space"]
    },
    {
      name: "Pine 3",
      subtitle: "The Minimalist",
      description: "A modern, tiny-home solution — perfect as an office, rental, or weekend retreat.",
      specs: "240 sq ft with Loft",
      price: "Starting at $99,000 CAD",
      image: "/images/pine3/exterior-front.webp", 
      href: "/our-builds/pine-3",
      features: ["Tiny home design", "Affordable option", "Multi-purpose"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Our Builds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our proven designs or create your custom dream home. 
            Built to respect the land, empower communities, and unlock opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {builds.map((build) => (
            <div key={build.name} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={build.image}
                  alt={`${build.name} - ${build.subtitle}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {build.name}
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">{build.name}</h3>
                  <p className="text-lg text-[#D4AF37] font-semibold mb-2">{build.subtitle}</p>
                  <p className="text-gray-600 font-medium">{build.specs}</p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{build.description}</p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {build.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-[#2D2D2D]">{build.price}</div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={build.href}
                      className="flex-1 text-center bg-[#D4AF37] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/quote-builder"
                      className="flex-1 text-center border-2 border-[#D4AF37] text-[#D4AF37] px-4 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Build Options */}
        <div className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Custom Build Options</h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Fully tailored modular homes: larger footprints, net-zero ready kits, off-grid solutions, 
            or culturally-specific Indigenous designs — crafted to fit each customer's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote-builder"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8941F] transition-colors"
            >
              Start Custom Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2D2D2D] transition-colors"
            >
              Speak with Expert
            </Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/our-builds"
            className="inline-block bg-[#2D2D2D] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Build Details & Floor Plans
          </Link>
        </div>
      </div>
    </section>
  )
} 