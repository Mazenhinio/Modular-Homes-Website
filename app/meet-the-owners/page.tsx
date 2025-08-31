import { Metadata } from 'next'
import { OwnerProfile } from '@/components/OwnerProfile'
import { QuoteCarousel } from '@/components/QuoteCarousel'

export const metadata: Metadata = {
  title: 'Meet the Owners | The Heart Behind Discovery Homes',
  description: 'Meet Aaron Davis, Corey Davis, and Jeff Lorenz - three family men and lifelong friends united by a shared vision to build homes that empower families and communities.',
}

const owners = [
  {
    name: 'Aaron Davis',
    title: 'Project Manager & Vice President',
    image: '/images/new-content/Owners/Aaron Davis.jpeg',
    bio: `Aaron's story starts on a farm just outside Lloydminster, where as a boy he and his brothers built everything they could imagine with their own two hands. Those early days instilled in him a love of building and creating — and a deep respect for what it means to build something that lasts.

After earning a BA with honours from the University of Alberta, Aaron explored the corporate world but quickly realized that sitting behind a desk wasn't for him. He returned to his roots and spent six years mastering his craft in Edmonton's construction industry: framing homes, crafting cabinetry, and learning what true craftsmanship looks like.

When his daughter was born, Aaron moved back to Lloydminster to raise his family near home. In 2017, alongside his brother Corey and cousin Jeff, he co-founded D3 General Contracting — and eventually Discovery Homes — to bring smarter, more efficient housing solutions to the community he loves.

Happily married since 2009, and a proud father of two, Aaron's commitment to family runs through everything he does. He believes every family deserves a home that's comfortable, affordable, and built with care — and he's dedicated to building them, one home at a time.`,
    quote: "For me, this isn't just about houses - it's about helping families find a better way to live, in the communities they already call home.",
    highlights: [
      'BA with honours from University of Alberta',
      '6 years mastering construction in Edmonton',
      'Co-founded D3 General Contracting in 2017',
      'Married since 2009, father of two',
      'Specializes in craftsmanship and quality'
    ]
  },
  {
    name: 'Corey Davis',
    title: 'Operations & Strategy',
    image: '/images/new-content/Owners/Corey Davis.webp',
    bio: `Corey's path to homebuilding wasn't linear — but it taught him the value of thoughtful, deliberate work. He spent over a decade working as an archaeologist, uncovering the stories of communities past. That experience gave him a unique perspective on how homes, land, and people are connected.

With a background in power engineering and a decade of hands‑on construction experience, Corey brings a quiet determination and deep strategic thinking to Discovery Homes. His passion lies in helping families and communities find better, smarter ways to live — ways that honour the land and the people on it.

When he's not overseeing operations or designing smarter building strategies, Corey enjoys working with his hands, creating custom furniture in his workshop, tending to his garden, and spending time with his family.`,
    quote: "We're not just building homes - we're building a smarter future, one that respects the land and serves the people who live on it.",
    highlights: [
      'Over a decade as an archaeologist',
      'Background in power engineering',
      'Decade of construction experience',
      'Specializes in operations and strategy',
      'Creates custom furniture in workshop'
    ]
  },
  {
    name: 'Jeff Lorenz',
    title: 'Community & Client Relations',
    image: '/images/new-content/Owners/Jeff Lorenz.webp',
    bio: `Jeff knows the value of discipline, teamwork, and hard work — lessons he learned on the ice playing competitive hockey at a high level, which eventually took him to Camrose where he earned his business degree.

His entrepreneurial spirit brought him back to Lloydminster, where he founded Blue Spruce Builders, pouring his passion for craftsmanship and community into every project.

At Discovery Homes, Jeff focuses on building relationships — with clients, partners, and the community. He believes deeply in giving back to the place he calls home, and he thrives on helping others see the untapped potential of their land, transforming it into something truly meaningful.`,
    quote: "My goal is simple: help people see what's possible - and then work with them to make it a reality.",
    highlights: [
      'Competitive hockey player',
      'Business degree from Camrose',
      'Founded Blue Spruce Builders',
      'Specializes in client relations',
      'Community-focused entrepreneur'
    ]
  }
]

const teamQuotes = [
  {
    quote: "We're family men, lifelong friends, and proud sons of Lloydminster.",
    author: "The Discovery Homes Team"
  },
  {
    quote: 'We believe that housing can — and should — be smarter, more sustainable, and more affordable.',
    author: 'The Discovery Homes Team'
  },
  {
    quote: 'We believe that your land has untapped potential.',
    author: 'The Discovery Homes Team'
  },
  {
    quote: 'We believe that by working together, we can build something that truly matters — for families, for communities, and for generations to come.',
    author: 'The Discovery Homes Team'
  }
]

export default function MeetTheOwnersPage() {
  return (
    <>
      <section className="section-lg bg-gradient-to-br from-discovery-charcoal via-discovery-charcoal-light to-discovery-charcoal text-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient-nature">
              Meet the Owners
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-discovery-gold mb-8">
              The Heart Behind Discovery Homes
            </h2>
            <p className="text-xl leading-relaxed">
              At Discovery Homes, we believe that a house is more than just walls and a roof — it's a foundation for family, for growth, and for a better future. We are three family men, lifelong neighbours and childhood friends, united by a shared vision: to build homes that empower families, respect communities, and make smarter, more sustainable living possible for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-discovery-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-4">
              Here's who we are, and why we do what we do.
            </h2>
          </div>
          
          <div className="space-y-24">
            {owners.map((owner, index) => (
              <OwnerProfile 
                key={owner.name}
                owner={owner}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-8">
              Why We Do This
            </h2>
            
            <QuoteCarousel quotes={teamQuotes} />
          </div>
        </div>
      </section>

      <section className="section bg-discovery-charcoal text-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Our Promise to You
            </h2>
            <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-discovery-gold mb-8">
              "We're proud to live here. We're proud to build here. And we're proud to help families, businesses, and communities across Western Canada unlock the full potential of their land — and their future."
            </blockquote>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <a 
                href="/quote-builder" 
                className="btn-primary btn text-lg py-4 px-8 w-full"
              >
                Start Your Quote
              </a>
              <a 
                href="/contact" 
                className="btn-outline btn text-lg py-4 px-8 w-full border-discovery-white text-discovery-white hover:bg-discovery-white hover:text-discovery-charcoal"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 