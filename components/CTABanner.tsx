import Link from 'next/link'

interface CTABannerProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

export function CTABanner({ title, description, primaryAction, secondaryAction }: CTABannerProps) {
  return (
    <section className="section bg-luxury-gradient relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-20 h-20 bg-white/15 rounded-full blur-lg"></div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-discovery-white mb-6 text-shadow-luxury scale-on-scroll">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-discovery-white mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed scale-on-scroll">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-cards">
          <Link
            href={primaryAction.href}
            className="card-item btn-luxury text-xl px-12 py-6 shadow-luxury-lg micro-interaction group bg-discovery-white text-discovery-charcoal hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-block font-semibold">
              {primaryAction.text} →
            </span>
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="card-item glass border-2 border-discovery-white text-discovery-white px-12 py-6 rounded-lg text-xl font-semibold hover:glass-dark transition-all duration-500 micro-interaction group hover:scale-105"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                {secondaryAction.text}
              </span>
            </Link>
          )}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-60">
          <div className="w-2 h-2 bg-discovery-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-discovery-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-discovery-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  )
} 