import { Metadata } from 'next'
import { SegmentHero } from '@/components/sections/SegmentHero'
import { CulturalValues } from '@/components/sections/CulturalValues'
import { FundingSupport } from '@/components/sections/FundingSupport'
import { CommunityTestimonials } from '@/components/sections/CommunityTestimonials'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import { DownloadCTA } from '@/components/DownloadCTA'

export const metadata: Metadata = {
  title: 'Culturally‑Respectful, Grant‑Ready Housing for Indigenous Communities | Discovery Homes',
  description: 'Built with care, designed to honor community needs, and eligible for government funding programs. Partnering with Indigenous communities across Western Canada.',
}

const culturalCommitments = [
  {
    icon: 'Users',
    title: 'Community Consultation',
    description: 'We work directly with Chiefs, councils, and community members to ensure homes reflect your cultural values and needs.'
  },
  {
    icon: 'Heart',
    title: 'Cultural Respect',
    description: 'Every design decision considers traditional values, family structures, and community connections.'
  },
  {
    icon: 'Home',
    title: 'Dignified Housing',
    description: 'Homes that families are proud to live in, built with quality materials and craftsmanship.'
  },
  {
    icon: 'Handshake',
    title: 'Partnership Approach',
    description: 'We build relationships, not just houses. Your success is our success.'
  }
]

const fundingPrograms = [
  {
    program: 'CMHC First Nations Housing',
    description: 'Federal funding for on-reserve housing construction and renovation',
    eligibility: 'First Nations communities',
    maxFunding: 'Up to 95% of project costs'
  },
  {
    program: 'Indigenous Services Canada (ISC)',
    description: 'Housing subsidies and infrastructure support programs',
    eligibility: 'Status First Nations, Inuit, Métis',
    maxFunding: 'Varies by program'
  },
  {
    program: 'Provincial Housing Programs',
    description: 'Province-specific Indigenous housing initiatives',
    eligibility: 'Varies by province',
    maxFunding: 'Varies by program'
  },
  {
    program: 'Métis Settlements Funding',
    description: 'Specialized funding for Métis Settlement communities',
    eligibility: 'Métis Settlement members',
    maxFunding: 'Up to $200,000 per unit'
  }
]

export default function IndigenousCommunitiesPage() {
  return (
    <>
      <SegmentHero 
        title="Culturally‑Respectful, Grant‑Ready Housing for Indigenous Communities"
        subtitle="Built with care, designed to honor community needs, and eligible for government funding programs."
        backgroundImage="/images/segments/indigenous-hero.jpg"
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Download Funding Guide"
      />
      
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Honoring Your Community's Values
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Discovery Homes is proud to partner with Indigenous communities across Western Canada 
              to deliver safe, sustainable, and dignified housing. Our homes help Chiefs, councils, 
              and housing managers meet the needs of their people while preserving resources for future generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalCommitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-discovery-charcoal" fill="currentColor" viewBox="0 0 20 20">
                    {commitment.icon === 'Users' && (
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    )}
                    {commitment.icon === 'Heart' && (
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    )}
                    {commitment.icon === 'Home' && (
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    )}
                    {commitment.icon === 'Handshake' && (
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                  {commitment.title}
                </h3>
                <p className="text-neutral-600">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CulturalValues />

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Grant-Ready Housing Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our homes are designed to meet all requirements for major government funding programs, 
              helping your community maximize available resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fundingPrograms.map((program, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                    {program.program}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Eligibility:</span>
                      <span className="text-discovery-charcoal font-medium">{program.eligibility}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Max Funding:</span>
                      <span className="text-discovery-gold font-medium">{program.maxFunding}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-600 mb-6">
              Need help navigating funding applications? Our team has experience working with all major programs.
            </p>
            <a href="/resources/indigenous-funding-guide" className="btn-primary">
              Download Complete Funding Guide
            </a>
          </div>
        </div>
      </section>

      <CommunityTestimonials />

      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
                Ready to Start Your Community's Housing Project?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Let's work together to create housing solutions that honor your community's values 
                and serve your people's needs. Our team is ready to provide culturally-respectful 
                consultation and support throughout your entire project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Free community consultation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Funding application support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Cultural design consultation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Ongoing project support</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-6">
                  Schedule a Consultation
                </h3>
                <LeadCaptureForm 
                  segment="indigenous-community"
                  submitText="Book Consultation"
                  fields={[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'title', label: 'Title/Position', type: 'text', required: false },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                    { name: 'community', label: 'Community Name', type: 'text', required: true },
                    { name: 'province', label: 'Province', type: 'select', options: ['Alberta', 'Saskatchewan', 'British Columbia', 'Manitoba'], required: true },
                    { name: 'housingNeeds', label: 'Housing Needs', type: 'select', options: ['1-5 homes', '6-15 homes', '16-30 homes', '30+ homes', 'Not sure yet'], required: false },
                    { name: 'timeline', label: 'Timeline', type: 'select', options: ['Immediate (0-6 months)', 'Soon (6-12 months)', 'Planning (1-2 years)', 'Future (2+ years)'], required: true },
                    { name: 'funding', label: 'Funding Status', type: 'select', options: ['Funding secured', 'Funding in progress', 'Need funding guidance', 'Just exploring'], required: false },
                    { name: 'message', label: 'Additional Information', type: 'textarea', required: false }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA 
        title="Funding Programs for Indigenous Housing in Western Canada"
        description="Complete guide to CMHC, ISC, and provincial housing grants available to Indigenous communities."
        benefits={[
          'Overview of CMHC, ISC, and provincial grants',
          'Application tips & timelines',
          'Example success stories',
          'Contact information for program administrators',
          'Required documentation checklists'
        ]}
        downloadUrl="/resources/indigenous-funding-guide"
        leadMagnet="indigenous-funding"
      />

      {/* Contact Form & Booking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Ready to Start Your Community's Housing Project?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss your community's housing needs and schedule a consultation.
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