import { Metadata } from 'next'
import { SegmentHero } from '@/components/sections/SegmentHero'
import { ROICalculator } from '@/components/ROICalculator'
import { RevenueStats } from '@/components/RevenueStats'
import { PropertyTypes } from '@/components/PropertyTypes'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import { DownloadCTA } from '@/components/DownloadCTA'

export const metadata: Metadata = {
  title: 'Turn Your Property Into a Cash‑Generating Destination | Discovery Homes',
  description: 'Stylish, durable modular units designed to delight guests and boost nightly rates. Perfect for resort owners, campgrounds, and Airbnb operators.',
}

const revenueFeatures = [
  {
    icon: 'TrendingUp',
    title: 'Increase Capacity',
    description: 'Add rental units to maximize your property potential and accommodate more guests',
    benefit: 'Up to 40% capacity increase'
  },
  {
    icon: 'DollarSign',
    title: 'Boost Nightly Rates',
    description: 'Quality modular units command premium rates compared to basic accommodations',
    benefit: 'Average 25% rate increase'
  },
  {
    icon: 'Clock',
    title: 'Faster Payback',
    description: 'Quick deployment means you start generating revenue sooner than traditional builds',
    benefit: 'ROI in 18-36 months'
  },
  {
    icon: 'Wrench',
    title: 'Easy Maintenance',
    description: 'Durable construction and quality materials mean lower ongoing maintenance costs',
    benefit: 'Reduced maintenance by 40%'
  }
]

const propertyTypes = [
  {
    type: 'Resort & Hotel',
    description: 'Add luxury cabins and guest suites to increase accommodation capacity',
    image: '/images/segments/resort-property.jpg',
    benefits: ['Premium guest experience', 'Flexible room inventory', 'Seasonal expansion'],
    caseStudy: {
      property: 'Mountain View Resort, BC',
      result: '6 Pine 1 units generated $180,000 additional annual revenue'
    }
  },
  {
    type: 'Campground & RV Park',
    description: 'Offer comfortable cabin alternatives to tent and RV sites',
    image: '/images/segments/campground-property.jpg',
    benefits: ['Weather-independent revenue', 'Higher profit margins', 'Extended season'],
    caseStudy: {
      property: 'Lakeside Campground, AB',
      result: '4 Pine 3 units increased average nightly rate by 35%'
    }
  },
  {
    type: 'Airbnb & Vacation Rental',
    description: 'Create multiple rental units on larger properties for diversified income',
    image: '/images/segments/vacation-rental-property.jpg',
    benefits: ['Multiple revenue streams', 'Risk diversification', 'Scalable investment'],
    caseStudy: {
      property: 'Prairie View Rentals, SK',
      result: '3 Pine 2 units on 10 acres generating $95,000 annually'
    }
  }
]

export default function ResortOwnersPage() {
  return (
    <>
      <SegmentHero 
        title="Turn Your Property Into a Cash‑Generating Destination"
        subtitle="Stylish, durable modular units designed to delight guests and boost nightly rates."
        backgroundImage="/images/segments/resort-hero.jpg"
        primaryCTA="Get a Rental ROI Estimate"
        secondaryCTA="Download Revenue Guide"
      />
      
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Your Land Has Revenue Potential
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Resort and campground owners know that guests demand quality and comfort — and Discovery Homes delivers. 
              Our modular units are designed to blend into your natural setting, enhance guest experience, and deliver strong ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revenueFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-discovery-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    {feature.icon === 'TrendingUp' && (
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    )}
                    {feature.icon === 'DollarSign' && (
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    )}
                    {feature.icon === 'Clock' && (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    )}
                    {feature.icon === 'Wrench' && (
                      <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 01-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 11-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 015.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 00-.11.494 3.01 3.01 0 001.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382zM4 17a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 mb-2">
                  {feature.description}
                </p>
                <p className="text-discovery-gold font-semibold">
                  {feature.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevenueStats />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Perfect for Your Property Type
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Whether you operate a resort, campground, or vacation rental business, our modular units 
              can help you maximize your property's revenue potential.
            </p>
          </div>
          
          <PropertyTypes properties={propertyTypes} />
        </div>
      </section>

      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Calculate Your Revenue Potential
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Use our ROI calculator to estimate how modular units could impact your property's revenue.
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
                Ready to Maximize Your Property's Potential?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Let's discuss how Discovery Homes can help you add revenue-generating units to your property. 
                Our team will provide a detailed ROI analysis tailored to your specific situation and goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom ROI analysis for your property</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Site assessment and placement planning</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Design consultation for guest appeal</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Financing and timeline planning</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-6">
                  Get a Rental ROI Estimate
                </h3>
                <LeadCaptureForm 
                  segment="resort-owner"
                  submitText="Get ROI Estimate"
                  fields={[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                    { name: 'businessName', label: 'Business Name', type: 'text', required: false },
                    { name: 'propertyType', label: 'Property Type', type: 'select', options: ['Resort/Hotel', 'Campground/RV Park', 'Vacation Rental', 'Event Venue', 'Other'], required: true },
                    { name: 'location', label: 'Property Location', type: 'text', required: true },
                    { name: 'currentUnits', label: 'Current Accommodation Units', type: 'select', options: ['1-10', '11-25', '26-50', '51-100', '100+'], required: false },
                    { name: 'desiredUnits', label: 'Additional Units Desired', type: 'select', options: ['1-3 units', '4-6 units', '7-10 units', '10+ units'], required: true },
                    { name: 'season', label: 'Operating Season', type: 'select', options: ['Year-round', 'Seasonal (May-Oct)', 'Seasonal (Dec-Mar)', 'Peak season only'], required: true },
                    { name: 'currentRate', label: 'Current Average Nightly Rate', type: 'select', options: ['Under $100', '$100-150', '$150-200', '$200-300', '$300+'], required: false },
                    { name: 'timeline', label: 'Desired Timeline', type: 'select', options: ['ASAP (0-6 months)', 'Next season (6-12 months)', 'Next year (1-2 years)', 'Just exploring'], required: true },
                    { name: 'message', label: 'Additional Details', type: 'textarea', required: false }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA 
        title="Resort Owner's Guide to Adding Revenue‑Generating Units"
        description="Complete guide to increasing capacity and nightly rates with quality modular guest accommodations."
        benefits={[
          'How to increase capacity & nightly rates',
          'Design ideas for maximum guest appeal',
          'Maintenance tips and best practices',
          'ROI calculations and financing options',
          'Success stories from other resort owners'
        ]}
        downloadUrl="/resources/resort-roi-guide"
        leadMagnet="resort-revenue"
      />

      {/* Contact Form & Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Ready to Maximize Your Property's Potential?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss how modular units can boost your property's revenue and schedule a consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* GHL Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6">Send Us a Message</h3>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/YhVFMsmHW8sz26gUbqdJ"
                style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
                id="inline-YhVFMsmHW8sz26gUbqdJ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="758"
                data-layout-iframe-id="inline-YhVFMsmHW8sz26gUbqdJ"
                data-form-id="YhVFMsmHW8sz26gUbqdJ"
                title="Contact Form"
                className="w-full min-h-[758px]"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>

            {/* GHL Booking Calendar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6">Book a Consultation</h3>
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/PTZ3zcQLwvLZ7CizfIdf" 
                style={{ width: '100%', height: '800px', border: 'none', overflow: 'auto' }} 
                scrolling="yes" 
                id="PTZ3zcQLwvLZ7CizfIdf_1753871801578"
                className="w-full"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 