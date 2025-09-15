'use client'

import { PartnershipsHero } from '@/components/sections/PartnershipsHero'
import { IndigenousPartnerships } from '@/components/sections/IndigenousPartnerships'
import { PartnershipLogos } from '@/components/sections/PartnershipLogos'
import { CommunityImpact } from '@/components/sections/CommunityImpact'
import { CTABanner } from '@/components/CTABanner'

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-discovery-white">
      <PartnershipsHero />
      
      <div className="animate-section">
        <IndigenousPartnerships />
      </div>
      
      <div className="animate-section">
        <PartnershipLogos />
      </div>
      
      {/* Hidden sections under "Serving Indigenous Communities Across Western Canada" */}
      {/* 
      <div className="animate-section">
        <CommunityImpact />
      </div>
      
      <div className="animate-section">
        <CTABanner 
          title="Ready to Partner with Discovery Homes?"
          description="Let's work together to create sustainable, culturally-appropriate housing solutions for your community."
          primaryAction={{
            text: "Start Partnership Discussion",
            href: "/contact"
          }}
          secondaryAction={{
            text: "Learn About Our Process",
            href: "/first-nations"
          }}
        />
      </div>
      */}
    </div>
  )
}
