import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logo-footer-white.webp"
              alt="Discovery Homes"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Discovery Homes believes a home is more than walls and a roof — it&apos;s a foundation 
              for stronger families, thriving communities, and a better future.
            </p>
            <p className="text-[#D4AF37] font-semibold">
              Affordable. Modular. Ready When You Are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-builds" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Our Builds
                </Link>
              </li>
              <li>
                <Link href="/quote-builder" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+1-780-870-0524" className="hover:text-[#D4AF37] transition-colors">
                  +1 (780) 870 0524
                </a>
              </li>
              <li>
                <a href="mailto:info@discoveryhomes.ca" className="hover:text-[#D4AF37] transition-colors">
                  info@discoveryhomes.ca
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <Link href="/meet-the-owners" className="hover:text-[#D4AF37] transition-colors">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Discovery Homes. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a 
              href="https://app.gohighlevel.com/v2/preview/c0BIvl4xjKStFMrCsqHY?notrack=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms and Conditions
            </a>
            <span>|</span>
            <a 
              href="https://app.gohighlevel.com/v2/preview/jryFzO5ua2DdePIov9hr?notrack=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 