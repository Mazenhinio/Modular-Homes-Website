'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Calendar, MessageCircle, Star, Users, Home, Heart, Shield, Award, DollarSign, TrendingUp, Building, Calculator, MapPin } from 'lucide-react'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'


import { CTABanner } from '@/components/CTABanner'

export default function RealEstateRentalLandingPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch('/api/forms/real-estate-rental', {
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
            src="/images/new-content/Landing Page - Real Estate Rental/CB-ResortCluster-Hero__Resort Cluster – Hero__Resort Cluster__v01.webp"
            alt="Real Estate Rental Investment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-discovery-charcoal/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-discovery-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-discovery-white">
            Scale Your Rental 
            <span className="block text-discovery-gold">Portfolio Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Discovery Homes helps real estate rental businesses expand their portfolios with 
            high-quality modular homes that deliver exceptional ROI and minimal maintenance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-discovery-gold hover:bg-discovery-gold-dark text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 group">
              Calculate Your ROI
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-discovery-white text-discovery-white hover:bg-discovery-white hover:text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Investment Guide
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

      {/* ROI Calculator Preview */}
      <section className="py-16 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">12-18%</div>
              <div className="text-sm">Average Annual ROI</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">60 Days</div>
              <div className="text-sm">From Order to Rental Ready</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">$2,500+</div>
              <div className="text-sm">Monthly Rental Income</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">95%</div>
              <div className="text-sm">Occupancy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Why Rental Investors Choose Discovery Homes
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              Our modular homes are designed specifically for rental markets, offering 
              superior returns, faster deployment, and hassle-free management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Superior ROI
              </h3>
              <p className="text-discovery-charcoal-light">
                Our modular homes deliver 12-18% annual returns with lower upfront costs 
                and faster time-to-market compared to traditional construction.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Rapid Deployment
              </h3>
              <p className="text-discovery-charcoal-light">
                Get rental properties to market in 60 days vs. 6-12 months with 
                traditional construction. Start earning income faster.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Low Maintenance
              </h3>
              <p className="text-discovery-charcoal-light">
                Built with premium materials and modern systems, our homes require 
                minimal maintenance and attract quality tenants.
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
              Investor Success Stories
            </h2>
            <p className="text-xl text-discovery-sage max-w-3xl mx-auto">
              See how rental property investors are scaling their portfolios with 
              Discovery Homes modular solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sarah Chen - Portfolio Investor",
                description: "Added 15 modular units in 6 months, achieving 15.2% average ROI",
                image: "/images/hero-carousel/hero-slide-6.webp"
              },
              {
                title: "Mike Rodriguez - Property Manager",
                description: "Reduced vacancy rates to 2% with premium modular rentals",
                image: "/images/hero-carousel/hero-slide-7.webp"
              },
              {
                title: "Jennifer Park - REIT Executive",
                description: "Scaled portfolio by 200 units with 60-day deployment timeline",
                image: "/images/hero-carousel/hero-slide-8.webp"
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

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-discovery-sage/20 to-discovery-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
                Calculate Your Investment Returns
              </h2>
              <p className="text-xl text-discovery-charcoal-light mb-8">
                Use our advanced ROI calculator to see how Discovery Homes can transform 
                your rental property investment strategy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Instant ROI calculations with real market data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Compare modular vs traditional construction costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Get financing options and payment schedules</span>
                </div>
              </div>
            </div>

            <div className="bg-discovery-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-2">
                  Get Your ROI Calculator
                </h3>
                <p className="text-discovery-charcoal-light">
                  Download our investment calculator and connect with our rental property specialists
                </p>
              </div>

              <div className="h-[1050px] overflow-hidden">
                {isClient && (
                  <>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/nldT1N3iWuerAKgQHLAp"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '0px',
                        overflow: 'hidden',
                      }}
                      id="inline-nldT1N3iWuerAKgQHLAp"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Real Estate Rental"
                      data-height="1050"
                      data-layout-iframe-id="inline-nldT1N3iWuerAKgQHLAp"
                      data-form-id="nldT1N3iWuerAKgQHLAp"
                      title="Real Estate Rental"
                      scrolling="no"
                    />
                    <script src="https://link.msgsndr.com/js/form__embed.js"></script>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Flexible Financing Solutions
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              We partner with leading lenders to provide competitive financing options 
              that work for rental property investors of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Portfolio Loans", icon: DollarSign, description: "Up to $10M for qualified investors" },
              { title: "Construction Financing", icon: Building, description: "Interest-only during build phase" },
              { title: "Bridge Loans", icon: TrendingUp, description: "Quick funding for opportunities" },
              { title: "Refinancing", icon: Calculator, description: "Lower rates on existing properties" }
            ].map((option, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-discovery-gold/10 to-discovery-sage/10">
                <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-discovery-charcoal" />
                </div>
                <h3 className="font-semibold text-discovery-charcoal mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-discovery-charcoal-light">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Management Services */}
      <section className="py-20 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-white mb-6">
              End-to-End Rental Solutions
            </h2>
            <p className="text-xl text-discovery-sage max-w-3xl mx-auto">
              From property acquisition to tenant management, we provide comprehensive 
              services to maximize your rental property returns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Acquisition",
                description: "Site selection, zoning analysis, and market research",
                icon: MapPin
              },
              {
                title: "Construction Management",
                description: "Turnkey project delivery with quality guarantees",
                icon: Building
              },
              {
                title: "Tenant Screening",
                description: "Comprehensive background checks and credit analysis",
                icon: Users
              },
              {
                title: "Property Management",
                description: "24/7 maintenance and tenant support services",
                icon: Shield
              },
              {
                title: "Financial Reporting",
                description: "Monthly ROI tracking and performance analytics",
                icon: TrendingUp
              },
              {
                title: "Portfolio Optimization",
                description: "Strategic advice for portfolio growth and diversification",
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



      {/* CTA Banner */}
      <CTABanner
        title="Ready to Scale Your Rental Portfolio?"
        description="Join hundreds of successful rental property investors who trust Discovery Homes for their portfolio growth."
        primaryAction={{
          text: "Schedule Investment Consultation",
          href: "#"
        }}
        secondaryAction={{
          text: "Download Investment Guide",
          href: "#"
        }}
      />

    </div>
  )
} 