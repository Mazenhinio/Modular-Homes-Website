export function WhoWeAreSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discovery Homes believes a home is more than walls and a roof — it's a foundation 
            for stronger families, thriving communities, and a better future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Construction</h3>
            <p className="text-gray-600">Built to last with premium materials and expert craftsmanship.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cultural Respect</h3>
            <p className="text-gray-600">Honoring local values and traditions in every community we serve.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Future</h3>
            <p className="text-gray-600">Net-zero options and environmentally conscious building practices.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 