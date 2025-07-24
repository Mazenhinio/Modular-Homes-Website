import { Metadata } from 'next'
import { PartnershipsHero } from '@/components/sections/PartnershipsHero'
import { IndigenousPartnerships } from '@/components/sections/IndigenousPartnerships'
import { FundingResources } from '@/components/sections/FundingResources'
import { CommunityImpact } from '@/components/sections/CommunityImpact'
import { CTABanner } from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Partnerships | Indigenous Communities & Cultural Respect | Discovery Homes',
  description: 'Discovery Homes partners with Indigenous communities across Western Canada, providing culturally-respectful housing with grant funding support.',
}

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      
      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-4">
              Building with Respect, Serving with Pride
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              At Discovery Homes, we believe that housing should honor the land, respect the culture, 
              and serve the community. Our partnerships with Indigenous communities across Western Canada 
              are built on trust, understanding, and a shared commitment to creating homes that families 
              are proud to call their own.
            </p>
          </div>
        </div>
      </section>

      <IndigenousPartnerships />
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-4">
              Our Commitment to Cultural Respect
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-600 mb-8">
                We understand that every community has unique needs, traditions, and values. 
                That's why we work closely with Chiefs, councils, and community members to ensure 
                our homes reflect and respect the cultural identity of each community we serve.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-discovery-charcoal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                      Cultural Consultation
                    </h3>
                    <p className="text-neutral-600">
                      We work directly with community leaders to understand cultural preferences 
                      and integrate them into our home designs.
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-body text-center">
                    <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-discovery-charcoal" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                      Grant Ready
                    </h3>
                    <p className="text-neutral-600">
                      Our homes meet all requirements for CMHC, ISC, and provincial housing grants, 
                      maximizing funding opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="card-body text-center">
                    <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-discovery-charcoal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-discovery-charcoal mb-2">
                      Community Support
                    </h3>
                    <p className="text-neutral-600">
                      From planning to delivery, we provide ongoing support to ensure successful 
                      project completion and community satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FundingResources />
      <CommunityImpact />

      <CTABanner 
        title="Ready to Partner with Us?"
        description="Let's work together to create housing solutions that honor your community's values and serve your people's needs."
        primaryAction={{
          text: "Book a Consultation",
          href: "/contact"
        }}
        secondaryAction={{
          text: "Download Funding Guide",
          href: "/resources/indigenous-funding-guide"
        }}
        className="bg-discovery-charcoal text-discovery-white"
      />
    </>
  )
} 