'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Download, Calendar, MessageCircle, Star, Users, Home, Heart, Shield, Award } from 'lucide-react'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'


import { CTABanner } from '@/components/CTABanner'

export default function FirstNationsLandingPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmit = async (formData: any) => {
    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.firstNationsAnalytics) {
        window.firstNationsAnalytics.trackFormSubmission(formData)
      }

      const response = await fetch('/api/forms/first-nations', {
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
            src="/images/hero-carousel/hero-slide-1.webp"
            alt="First Nations Community Housing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-discovery-charcoal/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-discovery-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Building Homes, 
            <span className="block text-discovery-gold">Building Communities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Discovery Homes proudly partners with First Nations communities to create sustainable, 
            culturally-appropriate housing solutions that honor tradition while embracing modern innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-discovery-gold hover:bg-discovery-gold-dark text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 group">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-discovery-white text-discovery-white hover:bg-discovery-white hover:text-discovery-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Guide
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

      {/* Trust Signals */}
      <section className="py-16 bg-discovery-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">50+</div>
              <div className="text-sm">First Nations Projects</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">100%</div>
              <div className="text-sm">Community Satisfaction</div>
            </div>
            <div className="text-discovery-white">
              <div className="text-4xl font-bold text-discovery-gold mb-2">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Our Commitment to First Nations Communities
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              We understand the unique cultural, environmental, and economic considerations that shape 
              housing needs in First Nations communities. Our approach is built on respect, collaboration, 
              and sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Cultural Respect
              </h3>
              <p className="text-discovery-charcoal-light">
                We honor traditional values and incorporate cultural elements into our designs, 
                ensuring each home reflects the community's heritage and identity.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Sustainable Development
              </h3>
              <p className="text-discovery-charcoal-light">
                Our modular homes are built with environmental responsibility in mind, 
                using sustainable materials and energy-efficient systems.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-discovery-sage/10 to-discovery-gold/10">
              <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-discovery-charcoal" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-4">
                Community Partnership
              </h3>
              <p className="text-discovery-charcoal-light">
                We work closely with community leaders and members to ensure our projects 
                meet the specific needs and aspirations of each First Nations community.
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
              Success Stories
            </h2>
            <p className="text-xl text-discovery-sage max-w-3xl mx-auto">
              See how we've helped First Nations communities across Canada create sustainable, 
              beautiful homes that strengthen their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nak'azdli Whut'en First Nation",
                description: "20 sustainable modular homes built with cultural consultation",
                image: "/images/hero-carousel/hero-slide-2.webp"
              },
              {
                title: "Tla'amin Nation",
                description: "Community center and residential complex with traditional design elements",
                image: "/images/hero-carousel/hero-slide-3.webp"
              },
              {
                title: "Ktunaxa Nation",
                description: "Energy-efficient homes incorporating local materials and cultural motifs",
                image: "/images/hero-carousel/hero-slide-4.webp"
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

      {/* Lead Capture Section */}
      <section className="py-20 bg-gradient-to-br from-discovery-sage/20 to-discovery-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
                Start Your Community's Housing Journey
              </h2>
              <p className="text-xl text-discovery-charcoal-light mb-8">
                Ready to explore how Discovery Homes can help your First Nations community? 
                Download our comprehensive guide and schedule a consultation with our experts.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Free consultation with our First Nations housing specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Comprehensive guide to First Nations housing solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-discovery-gold rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-discovery-charcoal rounded-full"></div>
                  </div>
                  <span className="text-discovery-charcoal">Funding and financing assistance for your project</span>
                </div>
              </div>
            </div>

            <div className="bg-discovery-white p-8 rounded-2xl shadow-2xl">
              <LeadCaptureForm
                onSubmit={handleFormSubmit}
                isSubmitted={isFormSubmitted}
                title="Get Your Free Guide"
                subtitle="Download our First Nations Housing Guide and connect with our specialists"
                fields={[
                  { name: 'firstName', label: 'First Name', type: 'text', required: true },
                  { name: 'lastName', label: 'Last Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  { name: 'community', label: 'Community Name', type: 'text', required: true },
                  { name: 'projectType', label: 'Project Type', type: 'select', required: true, options: [
                    'Residential Homes',
                    'Community Center',
                    'Elder Housing',
                    'Youth Housing',
                    'Mixed Development',
                    'Other'
                  ]},
                  { name: 'timeline', label: 'Project Timeline', type: 'select', required: true, options: [
                    'Immediate (0-6 months)',
                    'Short-term (6-12 months)',
                    'Medium-term (1-2 years)',
                    'Long-term (2+ years)',
                    'Just exploring options'
                  ]}
                ]}
                submitText="Download Guide & Get Consultation"
                successMessage="Thank you! Your guide is being prepared and our First Nations housing specialist will contact you within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              We maintain the highest standards and work with trusted partners to ensure 
              the best outcomes for First Nations communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Indigenous Business Certification", icon: Award },
              { title: "Sustainable Building Certified", icon: Shield },
              { title: "First Nations Housing Authority Partner", icon: Home },
              { title: "Cultural Consultation Certified", icon: Heart }
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-discovery-gold/10 to-discovery-sage/10">
                <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-6 h-6 text-discovery-charcoal" />
                </div>
                <h3 className="font-semibold text-discovery-charcoal">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Build Your Community's Future?"
        description="Join the many First Nations communities who have partnered with Discovery Homes to create sustainable, beautiful housing solutions."
        primaryAction={{
          text: "Schedule Consultation",
          href: "#"
        }}
        secondaryAction={{
          text: "Download Case Studies",
          href: "#"
        }}
      />
    </div>
  )
} 