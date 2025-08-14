'use client'

import { useState } from 'react'
import { Play, Quote, MapPin, Calendar, Users, Star } from 'lucide-react'

export default function SuccessStoriesPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Chief Margaret Bearhead",
      title: "Chief, Bigstone Cree Nation",
      location: "Alberta",
      image: "/images/testimonials/chief-margaret.jpg",
      quote: "Discovery Homes understood our community's needs and cultural values. They delivered affordable, respectful housing that our families are proud to call home.",
      project: "24 Family Homes",
      timeline: "Completed in 60 days",
      rating: 5,
      category: "Indigenous Community"
    },
    {
      id: 2,
      name: "David & Sarah Thompson",
      title: "Homeowners",
      location: "Rural Saskatchewan",
      image: "/images/testimonials/thompson-family.jpg",
      quote: "We thought owning a home was impossible until we found Discovery Homes. The Pine 2 model is perfect for our family, and the off-grid package lets us live sustainably.",
      project: "Pine 2 with Off-Grid Package",
      timeline: "Move-in ready in 45 days",
      rating: 5,
      category: "Rural Family"
    },
    {
      id: 3,
      name: "Marcus Chen",
      title: "Resort Owner",
      location: "British Columbia",
      image: "/images/testimonials/marcus-chen.jpg",
      quote: "Adding Discovery Homes cabins to my resort was the best investment decision I've made. Guests love them, and my booking revenue has increased by 40%.",
      project: "6 Pine 1 Resort Cabins",
      timeline: "All units delivered in 3 weeks",
      rating: 5,
      category: "Resort Owner"
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Bigstone Cree Nation Housing Project",
      location: "Alberta",
      description: "24 culturally-respectful homes delivered to address housing shortage",
      beforeImage: "/images/case-studies/bigstone-before.jpg",
      afterImage: "/images/case-studies/bigstone-after.jpg",
      stats: {
        homes: 24,
        timeline: "60 days",
        families: 86,
        investment: "$4.2M CAD"
      },
      features: ["Cultural consultation", "Grant funding assistance", "Community training", "Ongoing support"],
      videoUrl: "https://example.com/bigstone-video"
    },
    {
      id: 2,
      title: "Lakeview Resort Expansion",
      location: "British Columbia",
      description: "Premium cabin units that transformed a struggling resort into a thriving destination",
      beforeImage: "/images/case-studies/lakeview-before.jpg",
      afterImage: "/images/case-studies/lakeview-after.jpg",
      stats: {
        homes: 8,
        timeline: "4 weeks",
        families: 32,
        investment: "$1.6M CAD"
      },
      features: ["Revenue optimization", "Guest experience design", "Fast deployment", "Tourism grade finishes"],
      videoUrl: "https://example.com/lakeview-video"
    },
    {
      id: 3,
      title: "Rural Development Project",
      location: "Saskatchewan",
      description: "Net-zero homes for families seeking sustainable rural living",
      beforeImage: "/images/case-studies/rural-before.jpg",
      afterImage: "/images/case-studies/rural-after.jpg",
      stats: {
        homes: 12,
        timeline: "8 weeks",
        families: 38,
        investment: "$2.8M CAD"
      },
      features: ["Net-zero energy", "Off-grid capabilities", "Land development", "Community planning"],
      videoUrl: "https://example.com/rural-video"
    }
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "Elder Joseph Crowfeather",
      title: "Community Elder",
      location: "Mikisew Cree First Nation",
      thumbnail: "/images/video-thumbs/elder-joseph.jpg",
      videoUrl: "https://example.com/elder-joseph-video",
      duration: "3:45"
    },
    {
      id: 2,
      name: "Jennifer & Mike Kowalski",
      title: "First-Time Homeowners",
      location: "Rural Alberta",
      thumbnail: "/images/video-thumbs/kowalski-family.jpg",
      videoUrl: "https://example.com/kowalski-video",
      duration: "2:30"
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      title: "Airbnb Host",
      location: "Whistler, BC",
      thumbnail: "/images/video-thumbs/amanda-rodriguez.jpg",
      videoUrl: "https://example.com/amanda-video",
      duration: "4:12"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Real families, real communities, real results. See how Discovery Homes is transforming 
            lives across Western Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-[#D4AF37] px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">500+ Homes Delivered</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Built in 60 Days Average</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">98% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Hear Their Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to our customers share their experiences building with Discovery Homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.videoUrl)}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#D4AF37] rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#2D2D2D]">{video.name}</h3>
                  <p className="text-gray-600">{video.title}</p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from families and communities we've served
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#2D2D2D]">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-current" size={16} />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="text-[#D4AF37] mb-2" size={24} />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="font-medium">{testimonial.project}</span>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded">
                      {testimonial.category}
                    </span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {testimonial.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              In-depth looks at our most impactful projects
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Before/After Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">BEFORE</h4>
                      <img
                        src={study.beforeImage}
                        alt="Before"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">AFTER</h4>
                      <img
                        src={study.afterImage}
                        alt="After"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Play Video Button */}
                  <button
                    onClick={() => setSelectedVideo(study.videoUrl)}
                    className="mt-4 flex items-center justify-center w-full bg-[#D4AF37] text-white py-3 rounded-lg hover:bg-[#B8941F] transition-colors"
                  >
                    <Play className="mr-2" size={20} />
                    Watch Project Video
                  </button>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <MapPin className="text-[#D4AF37] mr-2" size={20} />
                    <span className="text-gray-600">{study.location}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#2D2D2D] mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37]">{study.stats.homes}</div>
                      <div className="text-sm text-gray-600">Homes Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37]">{study.stats.timeline}</div>
                      <div className="text-sm text-gray-600">Completion Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37]">{study.stats.families}</div>
                      <div className="text-sm text-gray-600">People Housed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#D4AF37]">{study.stats.investment}</div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {study.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join hundreds of satisfied customers who chose Discovery Homes for their modular housing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote-builder"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8941F] transition-colors"
            >
              Start Building My Home
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2D2D2D] transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#2D2D2D]">Customer Story</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Video Player (Development Mode)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 