import Link from 'next/link'

export function WhoWeServeSection() {
  const segments = [
    {
      title: "Indigenous Communities",
      description: "Culturally-aligned, grant-ready housing solutions with dedicated support and funding guidance for First Nations across Western Canada.",
      href: "/indigenous-communities",
      icon: "🏘️",
      features: ["Cultural respect", "Grant assistance", "Community partnerships"],
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Resort & Airbnb Owners", 
      description: "High-ROI cabins and rental units designed to enhance guest experiences and maximize revenue potential.",
      href: "/resort-owners",
      icon: "🏕️",
      features: ["Revenue optimization", "Guest experience", "Quick deployment"],
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      title: "Acreage & Rural Buyers",
      description: "Affordable homes for private land, perfect for those seeking peaceful rural living with modern conveniences.",
      href: "/rural-buyers", 
      icon: "🌲",
      features: ["Off-grid ready", "Land development", "Rural lifestyle"],
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      title: "Industrial Camps",
      description: "Workforce housing delivered fast — durable, comfortable accommodations for remote work sites and camps.",
      href: "/industrial-camps",
      icon: "🏗️", 
      features: ["Fast delivery", "Durable construction", "Worker comfort"],
      color: "bg-orange-100 text-orange-800 border-orange-200"
    },
    {
      title: "Eco-Conscious Buyers",
      description: "Net-zero and off-grid enthusiasts seeking sustainable, energy-smart modular housing solutions.",
      href: "/eco-conscious",
      icon: "🌱",
      features: ["Net-zero ready", "Sustainable materials", "Energy efficient"],
      color: "bg-teal-100 text-teal-800 border-teal-200"
    },
    {
      title: "Developers & Builders",
      description: "Scalable housing solutions for new developments, subdivisions, and large-scale residential projects.",
      href: "/developers",
      icon: "🏘️",
      features: ["Scalable solutions", "Project management", "Timeline certainty"],
      color: "bg-indigo-100 text-indigo-800 border-indigo-200"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Indigenous communities to eco-conscious buyers, we deliver culturally-respectful, 
            sustainable housing solutions tailored to diverse needs across Western Canada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div key={segment.title} className="bg-white rounded-2xl p-10 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{segment.icon}</div>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 border ${segment.color}`}>
                  {segment.title}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4 text-center">{segment.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">{segment.description}</p>
              
              <div className="mb-6">
                <ul className="space-y-3">
                  {segment.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <Link
                  href={segment.href}
                  className="inline-block bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Future?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              No matter your vision or location, Discovery Homes has the expertise and solutions 
              to make your modular housing dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote-builder"
                className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Start Building My Home
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2D2D2D] transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 