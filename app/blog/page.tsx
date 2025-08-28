'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Filter, Search, Download, Play } from 'lucide-react'

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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  // Updated categories to match specification exactly
  const categories = [
    'All',
    'Indigenous',
    'Developers', 
    'Resort Owners',
    'Rural Living',
    'Net-Zero'
  ]

  // Updated blog posts to match the exact 6-month content calendar from specifications
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Turn Your Land Into Cash Flow with Modular Homes",
      excerpt: "Discover the proven strategies landowners are using to generate consistent income through strategic modular home placement and rental opportunities.",
      content: "Comprehensive guide content...",
      author: "Kyle Zellweger",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Rural Living",
      image: "/images/new-content/Blog/BL-COV-4__Solar-install__No-Model__v01.webp",
      featured: true,
      downloadUrl: "/downloads/roi-calculator.pdf",
      leadMagnetTitle: "Free ROI Calculator",
      leadMagnetDescription: "Calculate your land's income potential with our comprehensive ROI calculator. Includes rental rate comparisons and financing options."
    },
    {
      id: 2,
      title: "Grants & Funding: What Indigenous Communities Need to Know in 2025",
      excerpt: "Navigate the complex landscape of federal and provincial funding programs available specifically for Indigenous housing initiatives.",
      content: "Indigenous housing funding content...",
      author: "Aaron Mitchell",
      date: "2024-02-10",
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
      content: "Resort modular units content...",
      author: "Jeff Lorenz",
      date: "2024-03-05",
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
      content: "Developer mistakes content...",
      author: "Corey Davis",
      date: "2024-04-12",
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
      content: "Off-grid living content...",
      author: "Aaron Davis",
      date: "2024-05-20",
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
      content: "Success story content...",
      author: "Kyle Zellweger",
      date: "2024-06-08",
      readTime: "11 min read",
      category: "Rural Living",
      image: "/images/blog/acreage-success-hero.jpg",
      featured: false,
      downloadUrl: "/contact",
      leadMagnetTitle: "Book a Consultation",
      leadMagnetDescription: "Schedule a free consultation to explore how you can turn your land into income-generating rental property."
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Expert insights on modular housing, funding opportunities, and industry updates 
            to help you make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-[#D4AF37] px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Educational Resources</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Industry Expertise</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Free Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#D4AF37] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'All' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    {post.videoUrl && (
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center">
                        <Play size={14} className="mr-1" />
                        Video
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('en-CA')}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <div className="flex items-center gap-3">
                        {post.downloadUrl && (
                          <a
                            href={post.downloadUrl}
                            className="flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                          >
                            <Download size={16} className="mr-1" />
                            {post.leadMagnetTitle === "Book a Consultation" ? "Consult" : "Download"}
                          </a>
                        )}
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center text-[#D4AF37] hover:text-[#B8941F] transition-colors font-semibold"
                        >
                          Read More
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.videoUrl && (
                    <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Play size={12} className="mr-1" />
                      Video
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-CA')}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User size={12} className="mr-1" />
                      {post.author} • {post.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      {post.downloadUrl && (
                        <a
                          href={post.downloadUrl}
                          className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                        >
                          <Download size={16} />
                        </a>
                      )}
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#D4AF37] hover:text-[#B8941F] transition-colors"
                      >
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Newsletter CTA */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sign Up for Monthly Insights & Opportunities
              </h2>
              <p className="text-xl text-white opacity-90 mb-8">
                Get the latest insights on modular housing, funding opportunities, and industry updates 
                delivered directly to your inbox every month.
              </p>
            </div>
            
            {/* Newsletter Signup Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-gray-600">
                  <option value="">Select your interest (optional)</option>
                  <option value="indigenous">Indigenous Community</option>
                  <option value="developer">Developer</option>
                  <option value="resort-owner">Resort Owner</option>
                  <option value="rural-living">Rural Living</option>
                  <option value="net-zero">Net-Zero/Off-Grid</option>
                  <option value="general">General Interest</option>
                </select>
                <button className="w-full bg-[#D4AF37] text-white py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors">
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-sm text-white opacity-70 mt-4 text-center">
                Join 2,500+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
              Free Resource Library
            </h2>
            <p className="text-xl text-gray-600">
              Download our comprehensive guides and resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free ROI Calculator",
                description: "Calculate your land's income potential with modular homes",
                downloadUrl: "/downloads/roi-calculator.pdf",
                icon: "💰"
              },
              {
                title: "Indigenous Funding Guide",
                description: "Complete guide to housing grants and funding programs for Indigenous communities",
                downloadUrl: "/downloads/indigenous-funding-guide.pdf",
                icon: "🏠"
              },
              {
                title: "Off-Grid Planning Guide",
                description: "Your complete guide to energy independence and sustainable living",
                downloadUrl: "/downloads/off-grid-planning-guide.pdf",
                icon: "🌱"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center bg-[#D4AF37] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
                >
                  <Download className="mr-2" size={20} />
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 