import { Metadata } from 'next'
import { Wrench, Lightbulb, Home, Leaf, Battery, MessageCircle, Calendar, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eco-Friendly Living | Sustainable Modular Homes | Discovery Homes',
  description: 'Discover sustainable modular homes built for Western Canada. Net-Zero Ready options, energy efficiency upgrades, and eco-friendly living solutions.',
}

export default function EcoFriendlyPage() {
  return (
    <div className="min-h-screen bg-discovery-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] text-discovery-white hero-element overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/eco-friendly/hero-image.webp"
            alt="Eco-Friendly Modular Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-discovery-charcoal/80 via-discovery-charcoal-light/70 to-discovery-charcoal/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-custom h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-6 py-8">
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient-nature leading-relaxed overflow-visible pb-2">
              Eco-Friendly Living Starts Here
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-serif font-light text-discovery-gold mb-8">
              Sustainable Modular Homes Built for Life in Western Canada
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-shadow">
              At Discovery Homes, we don't build bare-bones boxes — we build smarter, stronger homes that reduce energy use, 
              lower utility bills, and stand up to Western Canada's toughest conditions. Whether you're seeking lower monthly 
              costs or long-term environmental impact, we give you the options to build the home that aligns with your values.
            </p>
          </div>
        </div>
      </section>

      {/* Built Better from the Start */}
      <section className="py-20 bg-discovery-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-discovery-forest rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-discovery-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal">
                    Built Better from the Start
                  </h2>
                </div>
                
                <div className="bg-discovery-gold/10 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-discovery-charcoal mb-4">Upgraded Base Model Included</h3>
                  <p className="text-discovery-charcoal-light">
                    Our base homes already feature superior insulation, durable finishes, and a tighter building envelope — 
                    reducing energy waste and delivering more year-round comfort.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-discovery-charcoal mb-4">Energy Efficiency Upgrades Available</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Ductless mini-split heating & cooling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">High-efficiency windows & doors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Solar-ready wiring and hardware integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Energy Advisor review for Net-Zero Ready upgrades</span>
                  </li>
                </ul>

                <p className="text-lg text-discovery-charcoal-light mt-6">
                  All homes are engineered for Western Canada's extreme climate, helping you stay warm in winter, 
                  cool in summer, and energy-smart all year.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/eco-friendly/climate-ready-image.webp"
                  alt="Climate-Ready Modular Home Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-discovery-charcoal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-discovery-white mb-2">Climate-Ready Design</h3>
                  <p className="text-discovery-white/90">
                    Engineered specifically for Western Canada's challenging weather conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Net-Zero Home Section */}
      <section className="py-20 bg-gradient-to-br from-discovery-sage/10 to-discovery-lime/10">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-discovery-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-discovery-sage rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-discovery-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal">
                    What is a Net-Zero Home?
                  </h2>
                </div>
                
                <p className="text-lg text-discovery-charcoal-light mb-6">
                  A Net-Zero Home is one that produces as much clean energy as it consumes annually — typically by using 
                  on-site renewable energy systems like solar.
                </p>

                <p className="text-discovery-charcoal-light mb-6">
                  But it's not just about solar panels. Net-Zero Homes are built with:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Extra insulation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">High-performance windows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Advanced airtightness</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">High-efficiency mechanical systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Smart ventilation and energy flow</span>
                  </li>
                </ul>

                <div className="bg-discovery-gold/10 rounded-lg p-4">
                  <p className="text-discovery-charcoal font-semibold">
                    This combination makes Net-Zero Homes up to 80% more energy efficient than conventionally built homes.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-discovery-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-discovery-lime rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-discovery-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-discovery-charcoal">What is Net-Zero Ready?</h3>
                  </div>
                  
                  <p className="text-discovery-charcoal-light">
                    A Net-Zero Ready Home is built to all the same standards — but without the renewable energy system 
                    installed (yet). That means you're set up for solar and energy independence in the future, without 
                    needing major upgrades or renovations later.
                  </p>
                  
                  <p className="text-discovery-charcoal-light mt-4">
                    At Discovery Homes, we offer Net-Zero Ready upgrades that give you this flexibility — build smart today, 
                    go solar tomorrow.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-discovery-forest to-discovery-sage rounded-2xl p-8 text-discovery-white">
                  <div className="flex items-center gap-4 mb-4">
                    <Leaf className="w-8 h-8 text-discovery-gold" />
                    <h3 className="text-2xl font-bold">Why Choose Net-Zero?</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-discovery-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Consistent Comfort:</strong> Constant temperatures across the entire home</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-discovery-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Exceptional Air Quality:</strong> Built-in filtered fresh air system reduces allergens and pollutants</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-discovery-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Whisper Quiet:</strong> Tight construction keeps outside noise out</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-discovery-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Lower Energy Use:</strong> Heating typically accounts for ~50% of energy use in Canadian homes. In a Net-Zero home, that can drop to just 25%.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-discovery-gold mr-3 mt-1 flex-shrink-0" size={20} />
                      <span><strong>Long-Term Savings:</strong> Less energy used = smaller utility bills over time</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-discovery-gold/20 rounded-lg">
                    <p className="font-semibold">
                      And most importantly: You're helping protect the planet for future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-Grid Package */}
      <section className="py-20 bg-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-discovery-forest rounded-full flex items-center justify-center">
                <img 
                  src="/images/eco-friendly/unplugged.webp" 
                  alt="Unplugged Icon" 
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal">
                Off-Grid Package — Coming Soon
              </h2>
            </div>
            
            <p className="text-xl text-discovery-charcoal-light mb-8">
              We're currently developing a full Off-Grid package, designed for rural and remote properties. It will include:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-discovery-sage/20 to-discovery-lime/20 rounded-2xl p-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Solar + battery storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Backup power systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Off-grid plumbing & water heating</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-discovery-sage mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-discovery-charcoal-light">Smart energy monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <img 
                  src="/images/eco-friendly/independence.webp" 
                  alt="Independence Icon" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-discovery-forest/10 rounded-2xl p-8">
              <p className="text-lg text-discovery-charcoal-light mb-6">
                Interested in being among the first to go fully off-grid with Discovery? Contact us to learn more.
              </p>
              <Link
                href="/contact"
                className="btn-luxury text-lg px-8 py-4 shadow-gold hover:shadow-luxury-lg micro-interaction"
              >
                Learn About Off-Grid Options
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-discovery-charcoal via-discovery-charcoal-light to-discovery-charcoal text-discovery-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <MessageCircle className="w-12 h-12 text-discovery-gold" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-sage">
                Ready to Design a Greener Home?
              </h2>
            </div>
            
            <p className="text-xl text-discovery-white-soft mb-8">
              Our team is here to help you explore available upgrades, build your ideal plan, and understand the 
              long-term value of energy-smart living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-luxury text-lg px-8 py-4 shadow-gold hover:shadow-luxury-lg micro-interaction"
              >
                <Calendar className="mr-2" size={20} />
                Book a Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/quote-builder"
                className="glass border-2 border-discovery-white text-discovery-white px-8 py-4 rounded-lg text-lg font-semibold hover:glass-dark transition-all duration-500 micro-interaction"
              >
                Start Your Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
