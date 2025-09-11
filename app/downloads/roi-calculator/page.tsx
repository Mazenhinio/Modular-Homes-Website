'use client'

import { Metadata } from 'next'
import { Clock, Calculator, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ROICalculatorComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-discovery-charcoal via-discovery-charcoal-light to-discovery-charcoal text-discovery-white">
      {/* Navigation */}
      <div className="container-custom py-6">
        <Link 
          href="/"
          className="inline-flex items-center text-discovery-gold hover:text-discovery-gold-light transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container-custom flex items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-20 bg-discovery-gold rounded-full flex items-center justify-center">
              <Calculator className="w-10 h-10 text-discovery-charcoal" />
            </div>
            <div className="w-20 h-20 bg-discovery-gold/20 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-discovery-gold" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient-nature">
            ROI Calculator
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-serif font-light text-discovery-gold mb-8">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-discovery-white-soft max-w-3xl mx-auto">
            We're putting the finishing touches on our comprehensive ROI Calculator that will help you 
            calculate your land's income potential with modular homes. This powerful tool will provide 
            detailed projections, market analysis, and investment insights.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-discovery-charcoal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Calculations</h3>
              <p className="text-discovery-white-soft text-sm">
                Instant ROI projections based on current market data
              </p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-discovery-charcoal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Reports</h3>
              <p className="text-discovery-white-soft text-sm">
                Comprehensive PDF reports with actionable insights
              </p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-discovery-charcoal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Analysis</h3>
              <p className="text-discovery-white-soft text-sm">
                Regional market trends and occupancy projections
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get Notified When It's Ready
            </h3>
            <p className="text-lg text-discovery-white-soft mb-8">
              Be the first to access our ROI Calculator when it launches. 
              We'll send you an exclusive early access link.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-luxury text-lg px-8 py-4 shadow-gold hover:shadow-luxury-lg micro-interaction"
              >
                Get Early Access
              </Link>
              <Link
                href="/quote-builder"
                className="glass border-2 border-discovery-white text-discovery-white px-8 py-4 rounded-lg text-lg font-semibold hover:glass-dark transition-all duration-500 micro-interaction"
              >
                Start Your Quote Instead
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-discovery-gold">
              In the meantime, explore these resources:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="text-discovery-gold hover:text-discovery-gold-light transition-colors underline"
              >
                Read Our Blog
              </Link>
              <span className="text-discovery-white-soft">•</span>
              <Link
                href="/webinars"
                className="text-discovery-gold hover:text-discovery-gold-light transition-colors underline"
              >
                Join Our Webinars
              </Link>
              <span className="text-discovery-white-soft">•</span>
              <Link
                href="/our-builds"
                className="text-discovery-gold hover:text-discovery-gold-light transition-colors underline"
              >
                View Our Builds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
