import { Metadata } from 'next'
import { SegmentHero } from '@/components/sections/SegmentHero'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import { DownloadCTA } from '@/components/DownloadCTA'

export const metadata: Metadata = {
  title: 'Scalable Modular Housing Solutions for Developers & Builders | Discovery Homes',
  description: 'Affordable, efficient modular homes delivered in just 60 days. Maximize ROI on every acre with Discovery Homes flexible, high-quality solutions.',
}

const benefits = [
  {
    icon: 'Clock',
    title: 'Build Faster',
    description: 'Reduce construction timelines by up to 60% compared to traditional builds'
  },
  {
    icon: 'DollarSign',
    title: 'Lower Cost Per Unit',
    description: 'Predictable pricing and reduced labor costs mean better margins for your projects'
  },
  {
    icon: 'Leaf',
    title: 'Sustainable & Efficient',
    description: 'Energy-efficient homes that meet modern sustainability standards and buyer expectations'
  },
  {
    icon: 'Layout',
    title: 'Flexible Layouts',
    description: 'Customize layouts for different buyer segments and market demands'
  },
  {
    icon: 'Target',
    title: 'Market-Ready Designs',
    description: 'Proven designs that appeal to Western Canadian buyers and renters'
  },
  {
    icon: 'Shield',
    title: 'Quality Assurance',
    description: 'Factory-controlled construction ensures consistent quality and reduced defects'
  }
]

const projectTypes = [
  {
    title: 'Rural Subdivisions',
    description: 'Perfect for developing rural land with efficient, attractive homes that buyers want',
    image: '/images/segments/rural-subdivision.jpg'
  },
  {
    title: 'Infill Projects',
    description: 'Maximize density in urban areas with smart, space-efficient modular solutions',
    image: '/images/segments/infill-project.jpg'
  },
  {
    title: 'Vacation Rental Communities',
    description: 'Create revenue-generating vacation rental properties with proven rental appeal',
    image: '/images/segments/vacation-rental.jpg'
  }
]

export default function DevelopersPage() {
  return (
    <>
      <SegmentHero 
        title="Scalable Modular Housing Solutions for Developers & Builders"
        subtitle="Affordable, efficient, and delivered in just 60 days — Discovery Homes helps you maximize ROI on every acre."
        backgroundImage="/images/segments/developers-hero.jpg"
        primaryCTA="Request a Developer Proposal"
        secondaryCTA="Download Planning Guide"
      />
      
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Built for Your Success
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              As a developer or builder in Western Canada, your success depends on timely delivery, 
              predictable costs, and housing that meets market demand. Discovery Homes provides flexible, 
              high-quality modular homes that allow you to:
            </p>
          </div>
          
          <BenefitsGrid benefits={benefits} />
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
              Perfect for Your Next Project
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Whether you're planning a rural subdivision, infill project, or vacation rental community, 
              our team is here to partner with you — from planning to delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="card group hover:shadow-gold-lg transition-all duration-300">
                <div className="aspect-video bg-neutral-200 rounded-t-xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-6">
                Ready to Discuss Your Next Project?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Let's explore how Discovery Homes can help you deliver quality housing faster and more 
                efficiently. Our team will work with you to understand your project requirements and 
                provide a detailed proposal tailored to your needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom project assessment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Detailed cost analysis</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Timeline planning</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-discovery-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Ongoing partnership support</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-6">
                  Request a Developer Proposal
                </h3>
                <LeadCaptureForm 
                  segment="developer"
                  submitText="Request Proposal"
                  fields={[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                    { name: 'company', label: 'Company Name', type: 'text', required: false },
                    { name: 'projectType', label: 'Project Type', type: 'select', options: ['Rural Subdivision', 'Infill Project', 'Vacation Rental Community', 'Mixed Development', 'Other'], required: true },
                    { name: 'timeline', label: 'Project Timeline', type: 'select', options: ['0-6 months', '6-12 months', '1-2 years', '2+ years', 'Just exploring'], required: true },
                    { name: 'units', label: 'Estimated Units', type: 'select', options: ['1-5 units', '6-20 units', '21-50 units', '50+ units'], required: false },
                    { name: 'message', label: 'Project Details', type: 'textarea', required: false }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA 
        title="Developer's Planning Checklist: Building Smarter with Modular"
        description="Get our comprehensive planning guide with key steps, timelines, and cost considerations for modular housing projects."
        benefits={[
          'How modular compares to stick‑built construction',
          'Key planning steps and timeline considerations',
          'Site preparation requirements',
          'Cost analysis frameworks',
          'Success stories and case studies'
        ]}
        downloadUrl="/resources/developer-planning-checklist"
        leadMagnet="developer-checklist"
      />
    </>
  )
} 