'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    segment: ''
  })
  const [status, setStatus] = useState('')

  const segments = [
    { value: '', label: 'Select your interest (optional)' },
    { value: 'indigenous', label: 'Indigenous Community' },
    { value: 'developer', label: 'Developer' },
    { value: 'resort-owner', label: 'Resort Owner' },
    { value: 'rural-living', label: 'Rural Living' },
    { value: 'net-zero', label: 'Net-Zero/Off-Grid' },
    { value: 'general', label: 'General Interest' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would integrate with CRM
    console.log('Newsletter signup:', formData)
    setStatus('Thanks for subscribing! You\'ll receive monthly insights and opportunities. (Development mode)')
    setFormData({ name: '', email: '', segment: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-[#2D2D2D] text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sign Up for Monthly Insights & Opportunities
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Get the latest insights on modular housing, funding opportunities, and industry updates delivered to your inbox every month
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
          
          <div className="mb-6">
            <select
              name="segment"
              value={formData.segment}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {segments.map((segment) => (
                <option key={segment.value} value={segment.value}>
                  {segment.label}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="bg-[#D4AF37] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#B8941F] transition-colors"
          >
            Subscribe to Newsletter
          </button>
          
          {status && (
            <p className="mt-4 text-[#D4AF37]">{status}</p>
          )}
        </form>
        
        <p className="text-sm opacity-70 mt-4">
          Join 2,500+ subscribers. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
} 