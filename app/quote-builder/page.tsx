'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Check, Home, MapPin, Users, Building, Palette, Zap, DollarSign, Calendar } from 'lucide-react'

interface FormData {
  // Step 1: Contact Info
  name: string
  email: string
  phone: string
  
  // Step 2: Property Details
  location: string
  landStatus: string
  
  // Step 3: Intended Use
  intendedUse: string
  
  // Step 4: Model Selection
  model: string
  
  // Step 5: Specifications
  bedrooms: string
  sqft: string
  
  // Step 6: Add-ons
  addons: string[]
  
  // Step 7: Budget
  budget: string
  
  // Step 8: Timeline
  timeline: string
}

export default function QuoteBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '',
    location: '', landStatus: '',
    intendedUse: '',
    model: '',
    bedrooms: '', sqft: '',
    addons: [],
    budget: '',
    timeline: ''
  })
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const totalSteps = 8

  const steps = [
    { number: 1, title: 'Contact Info', icon: Users },
    { number: 2, title: 'Property Details', icon: MapPin },
    { number: 3, title: 'Intended Use', icon: Home },
    { number: 4, title: 'Model Selection', icon: Building },
    { number: 5, title: 'Specifications', icon: Palette },
    { number: 6, title: 'Add-ons', icon: Zap },
    { number: 7, title: 'Budget Range', icon: DollarSign },
    { number: 8, title: 'Timeline', icon: Calendar }
  ]

  const calculatePrice = () => {
    let basePrice = 0
    
    // Base model pricing
    switch (formData.model) {
      case 'pine1':
        basePrice = 174000
        break
      case 'pine2':
        basePrice = 179000
        break
      case 'pine3':
        basePrice = 99000
        break
      case 'custom':
        basePrice = 200000
        break
    }
    
    // Add-on pricing
    let addonCost = 0
    formData.addons.forEach(addon => {
      switch (addon) {
        case 'solar':
          addonCost += 25000
          break
        case 'net-zero':
          addonCost += 35000
          break
        case 'off-grid':
          addonCost += 40000
          break
      }
    })
    
    return basePrice + addonCost
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final step - calculate price
      const price = calculatePrice()
      setEstimatedPrice(price)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    const finalPrice = calculatePrice()
    setEstimatedPrice(finalPrice)
    
    // In production, this would send to CRM and email system
    console.log('Quote submitted:', { ...formData, estimatedPrice: finalPrice })
    
    // Show completion message
    alert(`Thank you ${formData.name}! Your estimated quote is $${finalPrice.toLocaleString()} CAD. A detailed PDF quote will be emailed to ${formData.email}.`)
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleAddon = (addon: string) => {
    const currentAddons = formData.addons
    if (currentAddons.includes(addon)) {
      updateFormData('addons', currentAddons.filter(a => a !== addon))
    } else {
      updateFormData('addons', [...currentAddons, addon])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            Quote Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your personalized quote in just a few minutes. We'll guide you through each step 
            to create the perfect modular home solution.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-[#D4AF37]">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-[#D4AF37] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          
          {/* Step Icons */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {steps.map((step) => {
              const Icon = step.icon
              const isCompleted = currentStep > step.number
              const isCurrent = currentStep === step.number
              
              return (
                <div key={step.number} className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    isCompleted ? 'bg-[#D4AF37] text-white' :
                    isCurrent ? 'bg-[#D4AF37] text-white' :
                    'bg-gray-200 text-gray-400'
                  }`}>
                    {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                  </div>
                  <p className="text-xs text-gray-600 hidden md:block">{step.title}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          
          {/* Step 1: Contact Info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Property Details */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Property Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Location *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    required
                  >
                    <option value="">Select your province</option>
                    <option value="alberta">Alberta</option>
                    <option value="saskatchewan">Saskatchewan</option>
                    <option value="british-columbia">British Columbia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Land Status *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'own-land', label: 'I own the land' },
                      { value: 'buying-land', label: 'I\'m buying land' },
                      { value: 'need-help', label: 'I need help finding land' },
                      { value: 'reserve-land', label: 'Reserve/First Nations land' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="landStatus"
                          value={option.value}
                          checked={formData.landStatus === option.value}
                          onChange={(e) => updateFormData('landStatus', e.target.value)}
                          className="mr-3"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Intended Use */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Intended Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'family-home', label: 'Family Home', icon: '🏠' },
                  { value: 'rental-property', label: 'Rental Property', icon: '🏘️' },
                  { value: 'resort-cabin', label: 'Resort/Airbnb', icon: '🏕️' },
                  { value: 'workforce-housing', label: 'Workforce Housing', icon: '🏗️' },
                  { value: 'office-space', label: 'Office Space', icon: '💼' },
                  { value: 'other', label: 'Other', icon: '❓' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="intendedUse"
                      value={option.value}
                      checked={formData.intendedUse === option.value}
                      onChange={(e) => updateFormData('intendedUse', e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Model Selection */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Choose Your Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    value: 'pine1', 
                    name: 'Pine 1 - The Efficient One',
                    specs: '504 sq ft • 1 Bedroom',
                    price: '$174,000 CAD',
                    description: 'Perfect for singles, couples, or resort units'
                  },
                  { 
                    value: 'pine2', 
                    name: 'Pine 2 - The Versatile One',
                    specs: '504 sq ft • 2 Bedroom with Loft',
                    price: '$179,000 CAD',
                    description: 'Ideal for families or rental markets'
                  },
                  { 
                    value: 'pine3', 
                    name: 'Pine 3 - The Minimalist',
                    specs: '240 sq ft with Loft',
                    price: '$99,000 CAD',
                    description: 'Modern tiny home solution'
                  },
                  { 
                    value: 'custom', 
                    name: 'Custom Build',
                    specs: 'Your specifications',
                    price: 'Quote on request',
                    description: 'Fully tailored to your needs'
                  }
                ].map((model) => (
                  <label key={model.value} className={`block p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.model === model.value 
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                      : 'border-gray-300 hover:border-[#D4AF37]/50'
                  }`}>
                    <input
                      type="radio"
                      name="model"
                      value={model.value}
                      checked={formData.model === model.value}
                      onChange={(e) => updateFormData('model', e.target.value)}
                      className="sr-only"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">{model.name}</h3>
                      <p className="text-gray-600 mb-2">{model.specs}</p>
                      <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                      <p className="text-xl font-bold text-[#D4AF37]">{model.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Continue with remaining steps... */}
          {/* Step 5: Specifications */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Specifications</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Number of Bedrooms</label>
                  <div className="grid grid-cols-4 gap-4">
                    {['1', '2', '3', '4+'].map((bed) => (
                      <label key={bed} className={`text-center p-4 border rounded-lg cursor-pointer ${
                        formData.bedrooms === bed ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="bedrooms"
                          value={bed}
                          checked={formData.bedrooms === bed}
                          onChange={(e) => updateFormData('bedrooms', e.target.value)}
                          className="sr-only"
                        />
                        <span className="font-semibold">{bed}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Square Footage</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['240 sq ft', '500 sq ft', '800 sq ft', '1200+ sq ft'].map((sqft) => (
                      <label key={sqft} className={`text-center p-4 border rounded-lg cursor-pointer ${
                        formData.sqft === sqft ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="sqft"
                          value={sqft}
                          checked={formData.sqft === sqft}
                          onChange={(e) => updateFormData('sqft', e.target.value)}
                          className="sr-only"
                        />
                        <span className="font-semibold">{sqft}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Add-ons */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Add-ons & Upgrades</h2>
              <div className="space-y-4">
                {[
                  { value: 'solar', label: 'Solar Panels', price: '+$25,000', description: 'Reduce energy costs with solar power' },
                  { value: 'net-zero', label: 'Net-Zero Package', price: '+$35,000', description: 'Complete energy independence' },
                  { value: 'off-grid', label: 'Off-Grid Kit', price: '+$40,000', description: 'Water, power, and waste systems' }
                ].map((addon) => (
                  <label key={addon.value} className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                    formData.addons.includes(addon.value) ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.addons.includes(addon.value)}
                      onChange={() => toggleAddon(addon.value)}
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{addon.label}</span>
                        <span className="font-bold text-[#D4AF37]">{addon.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Budget */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Budget Range</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '$75,000 - $125,000',
                  '$125,000 - $200,000',
                  '$200,000 - $300,000',
                  '$300,000+'
                ].map((budget) => (
                  <label key={budget} className={`text-center p-4 border rounded-lg cursor-pointer ${
                    formData.budget === budget ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="budget"
                      value={budget}
                      checked={formData.budget === budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-semibold">{budget}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Timeline */}
          {currentStep === 8 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Project Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'ASAP (within 3 months)',
                  '3-6 months',
                  '6-12 months',
                  '12+ months'
                ].map((timeline) => (
                  <label key={timeline} className={`text-center p-4 border rounded-lg cursor-pointer ${
                    formData.timeline === timeline ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="timeline"
                      value={timeline}
                      checked={formData.timeline === timeline}
                      onChange={(e) => updateFormData('timeline', e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-semibold">{timeline}</span>
                  </label>
                ))}
              </div>

              {/* Final Price Display */}
              {currentStep === 8 && estimatedPrice > 0 && (
                <div className="mt-8 p-6 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Your Estimated Quote</h3>
                  <div className="text-3xl font-bold text-[#D4AF37]">
                    ${estimatedPrice.toLocaleString()} CAD
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This is a preliminary estimate. Final pricing may vary based on site conditions, permits, and customizations.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                currentStep === 1 
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
              }`}
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex items-center px-8 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F] transition-colors"
              >
                Next Step
                <ChevronRight size={20} className="ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F] transition-colors font-semibold"
              >
                Get My Quote
              </button>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Need help or have questions? Our team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2D2D2D] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  )
} 