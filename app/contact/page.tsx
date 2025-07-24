'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Calendar, Clock, Users, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consultationType: '',
    preferredContact: 'email'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const consultationTypes = [
    'General Inquiry',
    'Quote Request',
    'Indigenous Community Project',
    'Resort/Tourism Development',
    'Rural/Acreage Development',
    'Off-Grid/Net-Zero Solutions',
    'Custom Build Consultation'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to CRM
    console.log('Contact form submitted:', { ...formData, selectedDate, selectedTime })
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '', email: '', phone: '', subject: '', message: '',
        consultationType: '', preferredContact: 'email'
      })
      setSelectedDate('')
      setSelectedTime('')
    }, 3000)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Ready to start your modular home journey? Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-[#D4AF37] px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Expert Consultation</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Free Quote</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Fast Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a href="tel:1-800-DISCOVERY" className="text-2xl font-bold text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                1-800-DISCOVERY
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri: 8:00 AM - 6:00 PM MST</p>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a href="mailto:info@discoveryhomes.ca" className="text-lg font-bold text-[#D4AF37] hover:text-[#B8941F] transition-colors">
                info@discoveryhomes.ca
              </a>
              <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come see our showroom</p>
              <p className="font-medium text-[#2D2D2D]">
                123 Discovery Drive<br />
                Calgary, AB T2P 1B8
              </p>
              <p className="text-sm text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Send Us a Message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                      <select
                        value={formData.consultationType}
                        onChange={(e) => updateFormData('consultationType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      >
                        <option value="">Select a type</option>
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => updateFormData('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Contact Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => updateFormData('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => updateFormData('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-white py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting Discovery Homes. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Booking Calendar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Book a Consultation</h2>
              
              <div className="space-y-6">
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-[#D4AF37] mr-2" size={20} />
                    <span className="font-semibold text-[#2D2D2D]">Free 30-Minute Consultation</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Discuss your project requirements with our expert team
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Date</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(14)].map((_, index) => {
                      const date = new Date()
                      date.setDate(date.getDate() + index + 1)
                      const dateStr = date.toISOString().split('T')[0]
                      const isWeekend = date.getDay() === 0 || date.getDay() === 6
                      
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(dateStr)}
                          disabled={isWeekend}
                          className={`p-3 text-sm rounded-lg border transition-colors ${
                            selectedDate === dateStr
                              ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                              : isWeekend
                              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37]'
                          }`}
                        >
                          <div className="font-medium">
                            {date.toLocaleDateString('en-CA', { weekday: 'short' })}
                          </div>
                          <div className="text-xs">
                            {date.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-sm rounded-lg border transition-colors ${
                            selectedTime === time
                              ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">Consultation Summary:</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {new Date(selectedDate).toLocaleDateString('en-CA', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-2" />
                        {selectedTime} MST (30 minutes)
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-2" />
                        Discovery Homes Expert Team
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        alert(`Consultation booked for ${new Date(selectedDate).toLocaleDateString('en-CA')} at ${selectedTime}! We'll send you a confirmation email.`)
                        setSelectedDate('')
                        setSelectedTime('')
                      }}
                      className="w-full bg-[#D4AF37] text-white py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors mt-4"
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a modular home?",
                answer: "Our modular homes are typically completed within 45-60 days from order confirmation. This includes manufacturing and on-site assembly."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we work with several financing partners and can help you navigate mortgage options. We also assist with grant applications for Indigenous communities."
              },
              {
                question: "Can you build on any type of land?",
                answer: "We can build on most types of land, including rural acreage, Indigenous reserves, and developed lots. We'll assess your site during the consultation."
              },
              {
                question: "What's included in the base price?",
                answer: "Our base prices include the complete modular home structure, basic electrical and plumbing, and standard finishes. Add-ons like solar panels are extra."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Our expert team is standing by to help you build your dream modular home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote-builder"
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B8941F] transition-colors"
            >
              Get Your Quote
            </a>
            <a
              href="tel:1-800-DISCOVERY"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#2D2D2D] transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 