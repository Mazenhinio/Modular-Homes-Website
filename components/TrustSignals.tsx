'use client'

import { useEffect, useRef, useState } from 'react'
import { Home, Users, Award, Heart } from 'lucide-react'

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: "100+", label: "Homes Delivered", icon: <Home className="w-6 h-6" /> },
    { number: "10+", label: "Communities Served", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Customer Satisfaction", icon: <Heart className="w-6 h-6" /> }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-sm glass-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-4 left-10 w-16 h-16 bg-discovery-gold/20 rounded-full blur-lg"></div>
        <div className="floating-element absolute bottom-4 right-10 w-20 h-20 bg-discovery-gold/15 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-cards grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="card-item card-luxury micro-interaction group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="card-body text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-discovery-white">
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold text-gradient mb-2 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                  {stat.number}
                </div>
                <div className="text-discovery-charcoal font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex justify-center items-center space-x-8 opacity-70">
          <div className="flex items-center space-x-2 micro-interaction">
            <div className="w-3 h-3 bg-discovery-gold rounded-full"></div>
            <span className="text-discovery-white text-sm font-medium">Licensed & Insured</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-discovery-white/30"></div>
          <div className="flex items-center space-x-2 micro-interaction">
            <div className="w-3 h-3 bg-discovery-gold rounded-full"></div>
            <span className="text-discovery-white text-sm font-medium">CSA Certified</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-discovery-white/30"></div>
          <div className="flex items-center space-x-2 micro-interaction">
            <div className="w-3 h-3 bg-discovery-gold rounded-full"></div>
            <span className="text-discovery-white text-sm font-medium">Energy Star Ready</span>
          </div>
        </div>
      </div>
    </section>
  )
} 