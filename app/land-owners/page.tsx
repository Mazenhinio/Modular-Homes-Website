'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Calendar, MessageCircle, Star, Users, Home, Heart, Shield, Award, DollarSign, TrendingUp, Building, Calculator, MapPin, Leaf, Globe, Zap } from 'lucide-react'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import { CTABanner } from '@/components/CTABanner'

export default function LandOwnersLandingPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch('/api/forms/land-owners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsFormSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-discovery-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/new-content/Landing Page- Land Owners/CB-PrairieFarm-Hero__Prairie Farm – Hero__Custom-Build__v01.webp"
            alt="Land Development Investment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-discovery-charcoal/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-discovery-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-discovery-white">
            Transform Your Land 
            <span className="block text-discovery-gold">Into Opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Discovery Homes helps land owners unlock the full potential of their properties with 
            sustainable modular development solutions that maximize value and minimize environmental impact.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-discovery-gold hover:bg-discovery-gold-dark text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 group">
              Evaluate Your Land
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-discovery-white text-discovery-white hover:bg-discovery-white hover:text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Development Guide
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-discovery-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-discovery-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Development Statistics */}
      <section className="py-16 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">3-5x</div>
              <div className="text-sm">Land Value Increase</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">90 Days</div>
              <div className="text-sm">From Planning to Revenue</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">40%</div>
              <div className="text-sm">Lower Development Costs</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">100%</div>
              <div className="text-sm">Sustainable Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Land Development Benefits */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Why Land Owners Choose Discovery Homes
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              Our modular development approach transforms underutilized land into profitable, 
              sustainable communities while preserving your property's natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Maximize Land Value
              </h3>
              <p className="text-discovery-charcoal-light">
                Transform raw land into income-generating properties with 3-5x value increase 
                through strategic modular development and community planning.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Sustainable Development
              </h3>
              <p className="text-discovery-charcoal-light">
                Eco-friendly modular construction minimizes environmental impact while creating 
                beautiful, energy-efficient communities that respect your land's natural features.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Rapid Implementation
              </h3>
              <p className="text-discovery-charcoal-light">
                Go from concept to revenue in 90 days with our streamlined development process, 
                including zoning, permits, and infrastructure planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-white mb-6">
              Land Owner Success Stories
            </h2>
            <p className="text-xl text-discovery-sage max-w-3xl mx-auto">
              See how land owners across Canada are transforming their properties into 
              thriving communities with Discovery Homes modular solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Robert Thompson - Rural Land Owner",
                description: "Transformed 50 acres into a 20-unit modular community, achieving 4.2x land value increase",
                image: "/images/hero-carousel/hero-slide-4.webp"
              },
              {
                title: "Maria Rodriguez - Suburban Developer",
                description: "Converted family farm into sustainable housing community with 95% occupancy rate",
                image: "/images/hero-carousel/hero-slide-5.webp"
              },
              {
                title: "David Chen - Investment Property Owner",
                description: "Developed 15-acre parcel into mixed-use community with 300% ROI in 18 months",
                image: "/images/hero-carousel/hero-slide-6.webp"
              }
            ].map((story, index) => (
              <div key={index} className="bg-discovery-charcoal-light rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-discovery-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-discovery-sage mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-discovery-gold text-discovery-gold" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Land Evaluation Calculator */}
      <section className="py-20 bg-gradient-to-br from-discovery-sage/20 to-discovery-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
                Evaluate Your Land's Potential
              </h2>
              <p className="text-xl text-discovery-charcoal-light mb-8">
                Use our comprehensive land evaluation tool to discover the development potential 
                of your property and explore revenue-generating opportunities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Zoning analysis and development feasibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Revenue projections and ROI calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Infrastructure planning and cost estimates</span>
                </div>
              </div>
            </div>

            <div className="bg-discovery-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-2">
                  Get Your Land Evaluation
                </h3>
                <p className="text-discovery-charcoal-light">
                  Receive a comprehensive analysis of your property's development potential
                </p>
              </div>

              <div className="h-[1050px] overflow-hidden">
                {isClient && (
                  <>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/jAErXjbmlpADpcQcmstH"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '0px',
                        overflow: 'hidden',
                      }}
                      id="inline-jAErXjbmlpADpcQcmstH"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Land Owners"
                      data-height="1050"
                      data-layout-iframe-id="inline-jAErXjbmlpADpcQcmstH"
                      data-form-id="jAErXjbmlpADpcQcmstH"
                      title="Land Owners"
                      scrolling="no"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Comprehensive Development Services
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              From initial land assessment to final community completion, we provide 
              end-to-end development services tailored to your property and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Land Assessment & Planning",
                description: "Comprehensive site analysis, zoning research, and development feasibility studies",
                icon: MapPin
              },
              {
                title: "Zoning & Permits",
                description: "Navigate regulatory requirements and secure all necessary approvals",
                icon: Shield
              },
              {
                title: "Infrastructure Development",
                description: "Design and implement roads, utilities, and community amenities",
                icon: Building
              },
              {
                title: "Modular Construction",
                description: "High-quality, sustainable modular homes built to your specifications",
                icon: Home
              },
              {
                title: "Community Planning",
                description: "Create vibrant, walkable communities with shared spaces and amenities",
                icon: Users
              },
              {
                title: "Property Management",
                description: "Ongoing management services for rental income and community maintenance",
                icon: Calculator
              }
            ].map((service, index) => (
              <div key={index} className="bg-discovery-charcoal-light rounded-2xl p-6">
                <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-discovery-charcoal" />
                </div>
                <h3 className="text-xl font-serif font-bold text-discovery-white mb-3">
                  {service.title}
                </h3>
                <p className="text-discovery-sage">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-white mb-6">
                Sustainable Land Development
              </h2>
              <p className="text-xl text-discovery-sage mb-8">
                Our modular development approach prioritizes environmental stewardship while 
                maximizing your land's economic potential.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-discovery-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                         <Leaf className="w-4 h-4 text-discovery-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-discovery-white mb-2">Minimal Site Disruption</h3>
                    <p className="text-discovery-sage">Precision modular construction reduces land clearing and preserves natural features</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-discovery-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-discovery-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-discovery-white mb-2">Energy Efficient Design</h3>
                    <p className="text-discovery-sage">Sustainable building materials and renewable energy integration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-discovery-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-discovery-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-discovery-white mb-2">Green Infrastructure</h3>
                    <p className="text-discovery-sage">Stormwater management, native landscaping, and wildlife corridors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/hero-carousel/hero-slide-6.webp"
                alt="Sustainable Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Land?"
        description="Join successful land owners who have unlocked their property's full potential with Discovery Homes sustainable development solutions."
        primaryAction={{
          text: "Schedule Land Consultation",
          href: "#"
        }}
        secondaryAction={{
          text: "Download Development Guide",
          href: "#"
        }}
      />
    </div>
  )
} 