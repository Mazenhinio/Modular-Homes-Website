import Link from 'next/link'
import { ArrowRight, Heart, Users, Home } from 'lucide-react'

export function PartnershipsHero() {
  return (
    <section className="relative py-20 text-discovery-white hero-element overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/partnerships-hero.webp"
          alt="Partnerships Success Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6 py-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-discovery-gold" size={32} />
            <span className="text-discovery-gold font-semibold text-xl">Partnerships</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient leading-relaxed overflow-visible pb-2">
            Building Communities Together
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-shadow">
            Culturally‑aligned, grant‑ready housing solutions that respect the land, 
            empower people, and strengthen Indigenous communities across Western Canada.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <Users className="text-discovery-gold mx-auto mb-3" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-discovery-lime">Cultural Respect</h3>
              <p className="text-discovery-white-soft">Built with Indigenous values and traditional knowledge</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <Home className="text-discovery-gold mx-auto mb-3" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-discovery-lime">Grant Ready</h3>
              <p className="text-discovery-white-soft">CMHC, ISC, and provincial funding compatible</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 text-center micro-interaction">
              <Heart className="text-discovery-gold mx-auto mb-3" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-discovery-lime">Community Focus</h3>
              <p className="text-discovery-white-soft">Partnerships that strengthen and empower</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="btn-luxury text-lg px-8 py-4 shadow-gold hover:shadow-luxury-lg micro-interaction"
            >
              Book a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 