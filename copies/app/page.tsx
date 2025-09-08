import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Discovery Homes Copy Pages
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Select a landing page to view:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            href="/copies/first-nations-v2"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              First Nations
            </h2>
            <p className="text-gray-600">
              Community housing solutions
            </p>
          </Link>
          
          <Link 
            href="/copies/land-owners-v2"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Land Owners
            </h2>
            <p className="text-gray-600">
              Land development opportunities
            </p>
          </Link>
          
          <Link 
            href="/copies/resort-owners-v2"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Resort Owners
            </h2>
            <p className="text-gray-600">
              Resort expansion solutions
            </p>
          </Link>
          
          <Link 
            href="/copies/quote-builder-v2"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Quote Builder
            </h2>
            <p className="text-gray-600">
              Interactive pricing tool
            </p>
          </Link>
          
          <Link 
            href="/copies/home-v2"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Home Page
            </h2>
            <p className="text-gray-600">
              Main homepage copy
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
