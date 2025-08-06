'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Download, Share2, Facebook, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  downloadUrl?: string
  videoUrl?: string
  leadMagnetTitle?: string
  leadMagnetDescription?: string
}

// This matches the exact 6-month content calendar from specifications
const getBlogPost = (id: string): BlogPost | null => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Turn Your Land Into Cash Flow with Modular Homes",
      excerpt: "Discover the proven strategies landowners are using to generate consistent income through strategic modular home placement and rental opportunities.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>The Hidden Potential of Your Land</h2>
          <p>Many landowners across Western Canada are sitting on untapped gold mines. With the right approach, your property can become a reliable source of monthly income through strategic modular home placement.</p>
          
          <h3>Why Modular Homes Are Perfect for Land-Based Income</h3>
          <p>Unlike traditional construction, modular homes offer several key advantages for income generation:</p>
          <ul>
            <li><strong>Speed to Market:</strong> Generate income within 60-90 days instead of 12+ months</li>
            <li><strong>Lower Investment:</strong> Starting costs from $99,000 vs $300,000+ for traditional builds</li>
            <li><strong>Scalable:</strong> Add additional units as demand grows</li>
            <li><strong>Flexible:</strong> Easily relocate or repurpose units</li>
          </ul>

          <h3>Proven Income Strategies</h3>
          <h4>1. Long-Term Rentals</h4>
          <p>Our Pine 1 and Pine 2 models are perfect for long-term tenants. With rental rates of $1,200-$1,800/month in rural areas, you can see positive cash flow from month one.</p>
          
          <h4>2. Short-Term Vacation Rentals</h4>
          <p>Strategic placement near recreational areas can yield $150-$300/night. Our customers report average monthly income of $3,000-$6,000 during peak seasons.</p>
          
          <h4>3. Workforce Housing</h4>
          <p>Industrial camps and remote work projects need housing. Provide accommodation at $80-$120/night per worker.</p>

          <h3>Real Case Study: Sarah's Success</h3>
          <p>Sarah purchased 3 Pine 1 units for her 40-acre property near Jasper. Investment: $522,000. Monthly rental income: $4,200. Annual ROI: 24%.</p>
          
          <blockquote>
            "Within 6 months, I was generating enough income to cover my mortgage and have extra for property improvements. The Discovery Homes team made it incredibly easy." - Sarah M., Jasper, AB
          </blockquote>

          <h3>Getting Started: Your 5-Step Action Plan</h3>
          <ol>
            <li><strong>Assess Your Property:</strong> Determine optimal placement and local rental demand</li>
            <li><strong>Check Regulations:</strong> Ensure compliance with local zoning and rental laws</li>
            <li><strong>Calculate ROI:</strong> Use our free calculator to project income potential</li>
            <li><strong>Choose Your Models:</strong> Select units based on target market and budget</li>
            <li><strong>Launch & Market:</strong> List on platforms and start generating income</li>
          </ol>

          <h3>Financing Your Investment</h3>
          <p>Several financing options exist for land-based income properties:</p>
          <ul>
            <li>Traditional mortgages (if permanently affixed)</li>
            <li>Equipment financing for modular units</li>
            <li>Business loans for income-generating properties</li>
            <li>Partner financing through Discovery Homes</li>
          </ul>
        </div>
      `,
      author: "Kyle Zellweger",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Rural Living",
      image: "/images/blog/land-cash-flow-hero.jpg",
      featured: true,
      downloadUrl: "/downloads/roi-calculator.pdf",
      leadMagnetTitle: "Free ROI Calculator",
      leadMagnetDescription: "Calculate your land's income potential with our comprehensive ROI calculator. Includes rental rate comparisons and financing options."
    },
    {
      id: 2,
      title: "Grants & Funding: What Indigenous Communities Need to Know in 2025",
      excerpt: "Navigate the complex landscape of federal and provincial funding programs available specifically for Indigenous housing initiatives.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Understanding Indigenous Housing Funding in 2025</h2>
          <p>Indigenous communities across Western Canada have access to unprecedented funding opportunities for housing development. This comprehensive guide breaks down available programs and application strategies.</p>
          
          <h3>Federal Funding Programs</h3>
          <h4>Indigenous Housing Policy Initiative</h4>
          <ul>
            <li><strong>Funding Amount:</strong> Up to $4 billion over 7 years</li>
            <li><strong>Eligible Recipients:</strong> First Nations, Inuit, and Métis communities</li>
            <li><strong>Covers:</strong> New construction, renovations, infrastructure</li>
            <li><strong>Application Deadline:</strong> Rolling basis with quarterly reviews</li>
          </ul>

          <h4>Canada Mortgage and Housing Corporation (CMHC) Programs</h4>
          <ul>
            <li><strong>Indigenous Housing Programs:</strong> $600M+ allocated for 2024-2025</li>
            <li><strong>Covers:</strong> Up to 100% of eligible costs for on-reserve housing</li>
            <li><strong>Special Focus:</strong> Climate resilience and energy efficiency</li>
          </ul>

          <h3>Provincial Programs by Region</h3>
          <h4>Alberta Indigenous Housing Program</h4>
          <p>Up to $85,000 per unit for modular housing solutions. Fast-track approval for energy-efficient designs.</p>
          
          <h4>British Columbia Aboriginal Housing Company</h4>
          <p>Partnerships available for both on and off-reserve housing. Preference for sustainable, culturally-appropriate designs.</p>

          <h4>Saskatchewan Indigenous Housing Corporation</h4>
          <p>$50M annual budget with focus on rural and northern communities. Modular solutions receive priority processing.</p>

          <h3>Why Modular Housing Maximizes Funding Impact</h3>
          <ul>
            <li><strong>Cost Efficiency:</strong> Lower per-unit costs mean more homes per dollar</li>
            <li><strong>Speed:</strong> Faster deployment addresses urgent housing needs</li>
            <li><strong>Quality:</strong> Factory construction ensures consistent, high standards</li>
            <li><strong>Cultural Integration:</strong> Customizable designs respect traditional preferences</li>
          </ul>

          <h3>Application Success Strategies</h3>
          <h4>1. Start Early</h4>
          <p>Begin applications 6-9 months before intended construction. Many programs have lengthy approval processes.</p>
          
          <h4>2. Partner with Experienced Builders</h4>
          <p>Work with builders experienced in Indigenous housing requirements and funding compliance.</p>
          
          <h4>3. Emphasize Community Impact</h4>
          <p>Highlight how housing will support broader community development goals.</p>
          
          <h4>4. Include Sustainability</h4>
          <p>Energy-efficient and net-zero designs receive priority consideration and bonus funding.</p>

          <h3>Discovery Homes' Indigenous Partnership Approach</h3>
          <p>We understand the unique requirements of Indigenous housing projects:</p>
          <ul>
            <li>Grant application support and documentation</li>
            <li>Culturally-appropriate design consultation</li>
            <li>Local employment and training opportunities</li>
            <li>Long-term community partnerships</li>
          </ul>

          <blockquote>
            "Discovery Homes didn't just build our houses – they helped us navigate the entire funding process and ensured our cultural values were respected throughout." - Chief Maria Bearhead, Little Buffalo First Nation
          </blockquote>
        </div>
      `,
      author: "Aaron Mitchell",
      date: "2024-01-12",
      readTime: "10 min read",
      category: "Indigenous",
      image: "/images/blog/indigenous-funding-hero.jpg",
      featured: true,
      downloadUrl: "/downloads/indigenous-funding-guide.pdf",
      leadMagnetTitle: "Funding Guide Download",
      leadMagnetDescription: "Download our comprehensive guide to Indigenous housing funding programs, including application templates and deadlines."
    },
    {
      id: 3,
      title: "Why Resort Owners Are Switching to Modular Guest Units",
      excerpt: "Discover how smart resort owners are increasing revenue by 40%+ through strategic modular cabin additions that pay for themselves in under 3 years.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>The Resort Industry's Modular Revolution</h2>
          <p>Resort owners across Western Canada are discovering a game-changing approach to expansion: modular guest units that deliver faster ROI, lower risk, and higher guest satisfaction than traditional construction.</p>
          
          <h3>The Numbers Don't Lie</h3>
          <h4>Traditional Resort Expansion:</h4>
          <ul>
            <li>Cost: $400-600 per sq ft</li>
            <li>Timeline: 12-18 months</li>
            <li>Weather delays: 6-12 weeks average</li>
            <li>Permit complexity: High</li>
            <li>Guest disruption: Significant</li>
          </ul>

          <h4>Modular Resort Units:</h4>
          <ul>
            <li>Cost: $200-350 per sq ft</li>
            <li>Timeline: 8-12 weeks</li>
            <li>Weather delays: Minimal (factory construction)</li>
            <li>Permit complexity: Standard</li>
            <li>Guest disruption: Minimal</li>
          </ul>

          <h3>Case Study: Lakeview Resort Transformation</h3>
          <p><strong>Challenge:</strong> Lakeview Resort near Lake Louise was turning away 200+ guests annually due to capacity constraints. Traditional expansion would cost $1.2M and take 18 months.</p>
          
          <p><strong>Solution:</strong> 6 Pine 1 modular units strategically placed around the property.</p>
          
          <p><strong>Results:</strong></p>
          <ul>
            <li><strong>Investment:</strong> $1.04M (13% savings)</li>
            <li><strong>Timeline:</strong> 3 months vs 18 months</li>
            <li><strong>Revenue Increase:</strong> $680,000 annually</li>
            <li><strong>Payback Period:</strong> 1.8 years</li>
            <li><strong>Guest Satisfaction:</strong> 98% (up from 87%)</li>
          </ul>

          <blockquote>
            "Our guests love the modern, clean design of the modular units. Many specifically request them over our traditional rooms. The investment paid for itself faster than we ever imagined." - Marcus Chen, Owner, Lakeview Resort
          </blockquote>

          <h3>Strategic Advantages for Resort Owners</h3>
          <h4>1. Seasonal Flexibility</h4>
          <p>Modular units can be added before peak season and relocated if needed. Perfect for testing new site locations.</p>
          
          <h4>2. Premium Pricing Opportunity</h4>
          <p>Modern, well-appointed modular units command 15-25% premium over traditional rooms due to their contemporary appeal.</p>
          
          <h4>3. Reduced Maintenance</h4>
          <p>Factory construction with quality materials means lower long-term maintenance costs and fewer guest complaints.</p>
          
          <h4>4. Scalable Growth</h4>
          <p>Add units as demand grows without major infrastructure disruption.</p>

          <h3>Popular Configurations for Resorts</h3>
          <h4>Pine 1 - Perfect for Couples</h4>
          <ul>
            <li>504 sq ft of efficient luxury</li>
            <li>High-end finishes and appliances</li>
            <li>Average nightly rate: $280-$350</li>
          </ul>

          <h4>Pine 2 - Family-Friendly Option</h4>
          <ul>
            <li>2 bedrooms plus loft space</li>
            <li>Accommodates up to 6 guests</li>
            <li>Average nightly rate: $400-$550</li>
          </ul>

          <h4>Custom Luxury Configurations</h4>
          <ul>
            <li>Hot tub packages</li>
            <li>Fireplace options</li>
            <li>Panoramic window walls</li>
            <li>Premium nightly rates: $500-$800+</li>
          </ul>

          <h3>ROI Calculator: Your Investment Potential</h3>
          <p>Based on data from 15+ resort installations:</p>
          <ul>
            <li><strong>Average nightly rate:</strong> $325</li>
            <li><strong>Occupancy rate:</strong> 75% (peak season 95%)</li>
            <li><strong>Annual revenue per unit:</strong> $89,000</li>
            <li><strong>Operating costs:</strong> $15,000 annually</li>
            <li><strong>Net income per unit:</strong> $74,000</li>
            <li><strong>Typical payback period:</strong> 2.1-2.8 years</li>
          </ul>
        </div>
      `,
      author: "Jeff Lorenz",
      date: "2024-01-08",
      readTime: "9 min read",
      category: "Resort Owners",
      image: "/images/blog/resort-modular-hero.jpg",
      featured: false,
      downloadUrl: "/downloads/resort-roi-guide.pdf",
      leadMagnetTitle: "Resort ROI Guide",
      leadMagnetDescription: "Get our complete ROI calculator and case study analysis specifically designed for resort and hospitality businesses."
    },
    {
      id: 4,
      title: "Top 3 Mistakes Developers Make Planning Rural Housing",
      excerpt: "Avoid costly delays and budget overruns with these essential planning tips for rural housing development projects.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Critical Planning Mistakes That Cost Developers Millions</h2>
          <p>After working with dozens of developers across Western Canada, we've identified the three most common mistakes that lead to project delays, budget overruns, and missed opportunities in rural housing development.</p>
          
          <h3>Mistake #1: Underestimating Infrastructure Requirements</h3>
          <h4>The Problem:</h4>
          <p>Many developers focus on the housing units themselves without properly accounting for rural infrastructure needs: utilities, road access, septic systems, and internet connectivity.</p>
          
          <h4>The Cost:</h4>
          <ul>
            <li>Budget overruns of 25-40% on average</li>
            <li>Project delays of 6-12 months</li>
            <li>Regulatory complications and permit rejections</li>
          </ul>
          
          <h4>The Solution:</h4>
          <p>Partner with modular providers who understand rural development. Discovery Homes includes infrastructure planning as part of our development consultation process.</p>

          <h3>Mistake #2: Ignoring Local Market Demand</h3>
          <h4>The Problem:</h4>
          <p>Developers often apply urban housing models to rural markets without understanding local preferences, income levels, and cultural considerations.</p>
          
          <h4>The Cost:</h4>
          <ul>
            <li>Slower sales and longer inventory holding periods</li>
            <li>Price reductions to move unsold units</li>
            <li>Damaged developer reputation in the community</li>
          </ul>
          
          <h4>The Solution:</h4>
          <p>Conduct thorough market research including:</p>
          <ul>
            <li>Local income and employment data</li>
            <li>Housing preference surveys</li>
            <li>Cultural and community consultations</li>
            <li>Competitor analysis and pricing studies</li>
          </ul>

          <h3>Mistake #3: Poor Timeline Management</h3>
          <h4>The Problem:</h4>
          <p>Traditional construction timelines don't account for rural challenges: weather delays, material delivery logistics, and limited local workforce availability.</p>
          
          <h4>The Cost:</h4>
          <ul>
            <li>Carrying costs that erode project profitability</li>
            <li>Frustrated buyers who may walk away</li>
            <li>Seasonal construction limitations</li>
          </ul>
          
          <h4>The Solution:</h4>
          <p>Modular construction dramatically reduces these risks:</p>
          <ul>
            <li>Factory construction continues regardless of weather</li>
            <li>Predictable delivery schedules</li>
            <li>Faster site preparation and installation</li>
            <li>Year-round construction capability</li>
          </ul>

          <h3>Success Case Study: Prairie Vista Development</h3>
          <p>Developer Sarah McDonald learned these lessons the hard way on her first rural project, then applied them successfully to Prairie Vista:</p>
          
          <h4>Project Details:</h4>
          <ul>
            <li><strong>Location:</strong> Rural Saskatchewan, 25 minutes from Saskatoon</li>
            <li><strong>Scope:</strong> 18-unit affordable housing development</li>
            <li><strong>Timeline:</strong> 8 months from groundbreaking to occupancy</li>
            <li><strong>Budget:</strong> $2.7M, came in 5% under budget</li>
          </ul>
          
          <h4>Key Success Factors:</h4>
          <ol>
            <li><strong>Early Infrastructure Planning:</strong> Utilities and site prep completed before modular delivery</li>
            <li><strong>Community Engagement:</strong> Local consultation resulted in design modifications that improved sales</li>
            <li><strong>Modular Advantage:</strong> Weather-independent construction and predictable timelines</li>
          </ol>

          <blockquote>
            "Working with Discovery Homes on Prairie Vista was night and day compared to my previous traditional build. The planning support, predictable timelines, and quality results made all the difference." - Sarah McDonald, Prairie Vista Developer
          </blockquote>

          <h3>Your Development Success Checklist</h3>
          <p>Before breaking ground on your next rural project:</p>
          <ol>
            <li>Complete comprehensive infrastructure assessment</li>
            <li>Conduct local market demand analysis</li>
            <li>Consider modular construction advantages</li>
            <li>Engage community stakeholders early</li>
            <li>Plan for rural logistics and weather challenges</li>
            <li>Partner with experienced rural housing providers</li>
          </ol>
        </div>
      `,
      author: "Corey Davis",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Developers",
      image: "/images/blog/developer-mistakes-hero.jpg",
      featured: false,
      downloadUrl: "/downloads/developer-planning-checklist.pdf",
      leadMagnetTitle: "Developer Planning Checklist",
      leadMagnetDescription: "Download our essential planning checklist that helps developers avoid costly mistakes and ensure project success."
    },
    {
      id: 5,
      title: "Off-Grid Living Made Easy: How Discovery Homes Can Help",
      excerpt: "Everything you need to know about off-grid modular homes, from solar systems to water management and waste solutions.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Your Complete Guide to Off-Grid Modular Living</h2>
          <p>Off-grid living is no longer just for survivalists and hermits. Modern families across Western Canada are choosing energy independence, sustainability, and the freedom that comes with off-grid modular homes.</p>
          
          <h3>Why Choose Off-Grid Modular?</h3>
          <h4>Environmental Benefits:</h4>
          <ul>
            <li>Zero dependence on fossil fuel-powered grid electricity</li>
            <li>Reduced carbon footprint through efficient design</li>
            <li>Sustainable building materials and practices</li>
            <li>Water conservation and waste reduction systems</li>
          </ul>
          
          <h4>Financial Advantages:</h4>
          <ul>
            <li>No monthly utility bills (average savings: $200-400/month)</li>
            <li>Government rebates for renewable energy systems</li>
            <li>Lower property taxes in some rural areas</li>
            <li>Increased property value and marketability</li>
          </ul>
          
          <h4>Lifestyle Freedom:</h4>
          <ul>
            <li>Build anywhere with proper land access</li>
            <li>Independence from utility company rate increases</li>
            <li>Resilience during power outages and emergencies</li>
            <li>Connection with nature and sustainable living</li>
          </ul>

          <h3>Essential Off-Grid Systems</h3>
          <h4>1. Solar Power System</h4>
          <p><strong>Components:</strong></p>
          <ul>
            <li>Solar panels (typically 5-10kW for modular homes)</li>
            <li>Battery bank (lithium-ion recommended)</li>
            <li>Charge controller and inverter</li>
            <li>Backup generator (propane or diesel)</li>
          </ul>
          
          <p><strong>Cost:</strong> $25,000-$40,000 installed</p>
          <p><strong>Discovery Homes Integration:</strong> Pre-wired electrical systems, optimal roof positioning, and space for battery storage.</p>
          
          <h4>2. Water Systems</h4>
          <p><strong>Water Sources:</strong></p>
          <ul>
            <li>Drilled well (most common, $8,000-$15,000)</li>
            <li>Rainwater collection (supplemental use)</li>
            <li>Spring or surface water (with proper treatment)</li>
          </ul>
          
          <p><strong>Water Treatment:</strong></p>
          <ul>
            <li>Whole-house filtration systems</li>
            <li>UV sterilization for bacterial control</li>
            <li>Water softening in hard water areas</li>
          </ul>
          
          <h4>3. Waste Management</h4>
          <p><strong>Septic Systems:</strong></p>
          <ul>
            <li>Conventional septic tank and field ($8,000-$12,000)</li>
            <li>Advanced treatment units for challenging soils</li>
            <li>Composting toilets for ultra-remote locations</li>
          </ul>

          <h3>Discovery Homes Off-Grid Packages</h3>
          <h4>Pine 1 Off-Grid Package</h4>
          <ul>
            <li><strong>Base Home:</strong> $174,000</li>
            <li><strong>Solar System:</strong> $30,000 (6kW with battery backup)</li>
            <li><strong>Well & Septic:</strong> $20,000 (estimated)</li>
            <li><strong>Total Package:</strong> Starting at $224,000</li>
          </ul>
          
          <h4>Pine 2 Off-Grid Package</h4>
          <ul>
            <li><strong>Base Home:</strong> $179,000</li>
            <li><strong>Solar System:</strong> $35,000 (8kW with extended battery)</li>
            <li><strong>Well & Septic:</strong> $22,000 (estimated)</li>
            <li><strong>Total Package:</strong> Starting at $236,000</li>
          </ul>
          
          <h4>Custom Off-Grid Solutions</h4>
          <p>For larger families or extreme off-grid locations, we offer custom packages including:</p>
          <ul>
            <li>Hybrid wind/solar systems</li>
            <li>Micro-hydro power where applicable</li>
            <li>Greywater recycling systems</li>
            <li>Root cellars and food storage solutions</li>
          </ul>

          <h3>Real Off-Grid Success: The Johnson Family</h3>
          <p>Tom and Linda Johnson built their dream off-grid home on 160 acres near Peace River, Alberta.</p>
          
          <h4>Their Setup:</h4>
          <ul>
            <li><strong>Home:</strong> Pine 2 with custom modifications</li>
            <li><strong>Power:</strong> 8kW solar + 3kW wind turbine</li>
            <li><strong>Water:</strong> 180-foot drilled well with UV treatment</li>
            <li><strong>Heating:</strong> High-efficiency wood stove + electric backup</li>
          </ul>
          
          <h4>Results After 2 Years:</h4>
          <ul>
            <li><strong>Monthly utility costs:</strong> $0</li>
            <li><strong>Energy independence:</strong> 99.8% (3 days on generator annually)</li>
            <li><strong>Total investment:</strong> $285,000 vs $450,000 for traditional off-grid build</li>
          </ul>
          
          <blockquote>
            "Discovery Homes made off-grid living accessible for our family. The pre-planning and system integration meant everything worked together perfectly from day one." - Tom Johnson, Peace River, AB
          </blockquote>

          <h3>Planning Your Off-Grid Project</h3>
          <h4>Step 1: Site Assessment</h4>
          <ul>
            <li>Solar exposure analysis</li>
            <li>Water source evaluation</li>
            <li>Soil testing for septic</li>
            <li>Access road requirements</li>
          </ul>
          
          <h4>Step 2: System Design</h4>
          <ul>
            <li>Energy needs calculation</li>
            <li>Component selection and sizing</li>
            <li>Integration planning with home design</li>
            <li>Backup system configuration</li>
          </ul>
          
          <h4>Step 3: Permits and Approvals</h4>
          <ul>
            <li>Building permits</li>
            <li>Electrical permits for solar systems</li>
            <li>Health department approval for septic</li>
            <li>Water well permits</li>
          </ul>
          
          <h4>Step 4: Installation and Commissioning</h4>
          <ul>
            <li>Site preparation and utilities</li>
            <li>Home delivery and setup</li>
            <li>System installation and testing</li>
            <li>Training and handover</li>
          </ul>
        </div>
      `,
      author: "Aaron Davis",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "Net-Zero",
      image: "/images/blog/off-grid-living-hero.jpg",
      featured: false,
      downloadUrl: "/downloads/off-grid-planning-guide.pdf",
      leadMagnetTitle: "Off-Grid Planning Guide",
      leadMagnetDescription: "Download our comprehensive guide to planning your off-grid modular home, including system sizing calculators and vendor recommendations."
    },
    {
      id: 6,
      title: "Success Story: From Empty Acreage to Cash-Generating Rentals in 60 Days",
      excerpt: "Real case study: How the Thompson family transformed 40 acres into a profitable rental property using Pine 2 modular homes.",
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>The Thompson Family's 60-Day Transformation</h2>
          <p>When Mike and Sarah Thompson inherited 40 acres near Red Deer, Alberta, they saw opportunity where others might see just vacant land. Here's how they turned their inheritance into a thriving rental business in just 60 days.</p>
          
          <h3>The Challenge: Unused Land, Limited Budget</h3>
          <h4>Starting Point:</h4>
          <ul>
            <li><strong>Property:</strong> 40 acres, 15 minutes from Red Deer</li>
            <li><strong>Condition:</strong> Raw land with power to property line</li>
            <li><strong>Budget:</strong> $400,000 available for development</li>
            <li><strong>Goal:</strong> Generate rental income to pay property taxes and provide supplemental income</li>
          </ul>
          
          <h4>Traditional Construction Reality Check:</h4>
          <ul>
            <li><strong>Cost:</strong> $300,000+ per house</li>
            <li><strong>Timeline:</strong> 12-18 months</li>
            <li><strong>Capacity:</strong> Only 1 house within budget</li>
            <li><strong>Risk:</strong> Weather delays, cost overruns, permit complications</li>
          </ul>

          <h3>The Modular Solution: Pine 2 Rental Units</h3>
          <h4>Why Pine 2 Made Perfect Sense:</h4>
          <ul>
            <li><strong>Size:</strong> 504 sq ft with loft - perfect for couples and small families</li>
            <li><strong>Cost:</strong> $179,000 per unit - budget for 2 units plus site development</li>
            <li><strong>Speed:</strong> Factory construction while site prep happens simultaneously</li>
            <li><strong>Quality:</strong> Consistent build quality and energy efficiency</li>
          </ul>
          
          <h4>Strategic Placement:</h4>
          <p>The Thompsons positioned the two Pine 2 units to maximize privacy while sharing utility infrastructure:</p>
          <ul>
            <li>Units placed 100 feet apart for privacy</li>
            <li>Shared well and septic system to reduce costs</li>
            <li>Each unit has dedicated parking and small yard area</li>
            <li>Maintained view corridors to surrounding countryside</li>
          </ul>

          <h3>The 60-Day Timeline Breakdown</h3>
          <h4>Weeks 1-2: Planning and Permits</h4>
          <ul>
            <li>Site survey and soil testing</li>
            <li>Building and septic permits submitted</li>
            <li>Utility connections planned</li>
            <li>Modular home orders placed with Discovery Homes</li>
          </ul>
          
          <h4>Weeks 3-4: Site Preparation</h4>
          <ul>
            <li>Access road graded and graveled</li>
            <li>Excavation for foundations and septic</li>
            <li>Well drilling completed</li>
            <li>Electrical service installation</li>
          </ul>
          
          <h4>Weeks 5-6: Infrastructure Completion</h4>
          <ul>
            <li>Concrete foundations poured and cured</li>
            <li>Septic system installed and tested</li>
            <li>Water and electrical connections ready</li>
            <li>Final permits and inspections</li>
          </ul>
          
          <h4>Weeks 7-8: Home Delivery and Setup</h4>
          <ul>
            <li>Pine 2 units delivered and placed</li>
            <li>Utility connections completed</li>
            <li>Final inspections and occupancy permits</li>
            <li>Landscaping and finishing touches</li>
          </ul>

          <h3>The Financial Results</h3>
          <h4>Total Investment:</h4>
          <ul>
            <li><strong>2 Pine 2 Units:</strong> $358,000</li>
            <li><strong>Site Development:</strong> $35,000 (road, utilities, septic)</li>
            <li><strong>Permits and Fees:</strong> $7,000</li>
            <li><strong>Total Investment:</strong> $400,000</li>
          </ul>
          
          <h4>Rental Income:</h4>
          <ul>
            <li><strong>Unit 1 Rent:</strong> $1,400/month</li>
            <li><strong>Unit 2 Rent:</strong> $1,350/month</li>
            <li><strong>Total Monthly Income:</strong> $2,750</li>
            <li><strong>Annual Gross Income:</strong> $33,000</li>
          </ul>
          
          <h4>Operating Expenses (Annual):</h4>
          <ul>
            <li><strong>Property taxes:</strong> $3,200</li>
            <li><strong>Insurance:</strong> $1,800</li>
            <li><strong>Maintenance reserve:</strong> $2,000</li>
            <li><strong>Total Expenses:</strong> $7,000</li>
          </ul>
          
          <h4>Net Results:</h4>
          <ul>
            <li><strong>Annual Net Income:</strong> $26,000</li>
            <li><strong>ROI:</strong> 6.5% annually</li>
            <li><strong>Cash Flow:</strong> $2,167/month positive</li>
            <li><strong>Payback Period:</strong> 15.4 years</li>
          </ul>

          <h3>Unexpected Benefits</h3>
          <h4>Property Value Increase:</h4>
          <p>A recent appraisal valued the improved property at $520,000 - an immediate $120,000 equity gain.</p>
          
          <h4>Expansion Opportunities:</h4>
          <p>Success with the first two units led to plans for Phase 2:</p>
          <ul>
            <li>Adding 2 more Pine 1 units in Year 2</li>
            <li>Targeting short-term vacation rental market</li>
            <li>Projected additional income: $18,000 annually</li>
          </ul>
          
          <h4>Personal Satisfaction:</h4>
          <blockquote>
            "We're providing quality, affordable housing while building our family's financial future. The tenants love living here, and we love the passive income. It's been a win-win situation." - Sarah Thompson
          </blockquote>

          <h3>Keys to Their Success</h3>
          <ol>
            <li><strong>Strategic Location:</strong> Close enough to Red Deer for commuters, far enough for rural appeal</li>
            <li><strong>Quality Product:</strong> Pine 2 units attract and retain good tenants</li>
            <li><strong>Efficient Development:</strong> Shared infrastructure maximized budget efficiency</li>
            <li><strong>Professional Partnership:</strong> Discovery Homes handled permitting and delivery logistics</li>
            <li><strong>Market Research:</strong> Confirmed rental demand before investing</li>
          </ol>

          <h3>Lessons for Other Landowners</h3>
          <h4>Site Selection Criteria:</h4>
          <ul>
            <li>Within 30 minutes of employment centers</li>
            <li>Good road access year-round</li>
            <li>Suitable for well and septic systems</li>
            <li>Zoning allows rental properties</li>
          </ul>
          
          <h4>Financial Planning Tips:</h4>
          <ul>
            <li>Budget 10-15% contingency for unexpected costs</li>
            <li>Research local rental rates thoroughly</li>
            <li>Consider seasonal fluctuations in demand</li>
            <li>Plan for tenant turnover and vacancy periods</li>
          </ul>
          
          <h4>Timeline Expectations:</h4>
          <ul>
            <li>Modular construction is faster, but site prep still takes time</li>
            <li>Permit processing varies by municipality</li>
            <li>Weather can still affect site work</li>
            <li>Plan for 60-90 days from start to rental income</li>
          </ul>
        </div>
      `,
      author: "Kyle Zellweger",
      date: "2024-01-01",
      readTime: "11 min read",
      category: "Rural Living",
      image: "/images/blog/acreage-success-hero.jpg",
      featured: false,
      downloadUrl: "/contact",
      leadMagnetTitle: "Book a Consultation",
      leadMagnetDescription: "Schedule a free consultation to explore how you can turn your land into income-generating rental property."
    }
  ]
  
  const post = blogPosts.find(post => post.id === parseInt(id))
  return post || null
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [email, setEmail] = useState('')
  const [leadCaptured, setLeadCaptured] = useState(false)
  
  const post = getBlogPost(params.id)
  
  if (!post) {
    notFound()
  }

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would integrate with CRM
    console.log('Lead captured:', { email, postId: post.id, leadMagnet: post.leadMagnetTitle })
    setLeadCaptured(true)
    setShowLeadCapture(false)
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post.title

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4 text-sm text-white/80">
              <span className="bg-[#D4AF37] px-3 py-1 rounded-full text-white font-medium">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {new Date(post.date).toLocaleDateString('en-CA')}
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                {post.author}
              </div>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Share */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="flex items-center gap-3 ml-8">
            <span className="text-sm text-gray-500 font-medium">Share:</span>
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}
              className="text-gray-600 hover:text-[#D4AF37] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-[#2D2D2D] prose-a:text-[#D4AF37] prose-a:hover:text-[#B8941F]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Inline Lead Magnet CTA */}
        {post.downloadUrl && post.leadMagnetTitle && (
          <div className="my-12 p-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-4">
                <Download className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                {post.leadMagnetTitle}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {post.leadMagnetDescription}
              </p>
              
              {!leadCaptured ? (
                <button
                  onClick={() => setShowLeadCapture(true)}
                  className="inline-flex items-center bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                >
                  <Download className="mr-2" size={20} />
                  {post.leadMagnetTitle === "Book a Consultation" ? "Schedule Now" : "Download Free Resource"}
                </button>
              ) : (
                <div className="text-center">
                  <div className="text-green-600 font-semibold mb-4">
                    {post.leadMagnetTitle === "Book a Consultation" ? "✓ Consultation request submitted!" : "✓ Download link sent to your email!"}
                  </div>
                  <a
                    href={post.downloadUrl}
                    className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    {post.leadMagnetTitle === "Book a Consultation" ? "Visit Contact Page" : "Or download directly"}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lead Capture Modal */}
        {showLeadCapture && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                {post.leadMagnetTitle === "Book a Consultation" ? "Request Your Consultation" : `Get Your Free ${post.leadMagnetTitle}`}
              </h3>
              <p className="text-gray-600 mb-6">
                {post.leadMagnetTitle === "Book a Consultation" 
                  ? "Enter your email and we'll contact you within 24 hours to schedule your consultation."
                  : "Enter your email to download this valuable resource instantly."
                }
              </p>
              
              <form onSubmit={handleLeadCapture}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent mb-4"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#D4AF37] text-white py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                  >
                    {post.leadMagnetTitle === "Book a Consultation" ? "Request Consultation" : "Download Now"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLeadCapture(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </article>

      {/* Contact CTA Footer */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building Your Home Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to turn your dreams into reality? Our team is here to guide you through every step 
            of the process, from initial consultation to move-in day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote-builder"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#2D2D2D] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 