'use client'

import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2D2D2D] to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
                         {/* GHL Contact Form */}
             <div className="bg-white rounded-2xl p-10 shadow-lg">
               <h2 className="text-3xl font-bold text-[#2D2D2D] mb-0">Send Us a Message</h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/YhVFMsmHW8sz26gUbqdJ"
                style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
                id="inline-YhVFMsmHW8sz26gUbqdJ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Form"
                data-height="758"
                data-layout-iframe-id="inline-YhVFMsmHW8sz26gUbqdJ"
                data-form-id="YhVFMsmHW8sz26gUbqdJ"
                title="Contact Form"
                className="w-full min-h-[758px]"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>

                         {/* GHL Booking Calendar ONLY */}
             <div className="bg-white rounded-2xl p-10 shadow-lg">
               <h2 className="text-3xl font-bold text-[#2D2D2D] mb-0">Book a Consultation</h2>
                               <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/PTZ3zcQLwvLZ7CizfIdf" 
                  style={{width: '100%', height: '800px', border: 'none', overflow: 'hidden'}} 
                  scrolling="no" 
                  id="PTZ3zcQLwvLZ7CizfIdf_1753871801578"
                  className="w-full"
                />
               <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
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
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
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