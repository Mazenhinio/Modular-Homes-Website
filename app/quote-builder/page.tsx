'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Check, Home, MapPin, Users, Building, Palette, Zap, DollarSign, Calendar, Heart, CreditCard } from 'lucide-react'

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
  bathrooms: string
  sqft: string
  
  // Step 6: Add-ons
  addons: string[]
  
  // Step 7: Budget
  budget: string
  
  // Step 8: Timeline
  timeline: string
  
  // Step 9: Indigenous Community
  isIndigenous: string
  
  // Step 10: Number of Homes
  numberOfHomes: string
  
  // Step 11: Financing
  financing: string
}

export default function QuoteBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '',
    location: '', landStatus: '',
    intendedUse: '',
    model: '',
    bedrooms: '', bathrooms: '', sqft: '',
    addons: [],
    budget: '',
    timeline: '',
    isIndigenous: '',
    numberOfHomes: '',
    financing: ''
  })
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const totalSteps = 11

  const steps = [
    { number: 1, title: 'Contact Info', icon: Users },
    { number: 2, title: 'Property Details', icon: MapPin },
    { number: 3, title: 'Intended Use', icon: Home },
    { number: 4, title: 'Model Selection', icon: Building },
    { number: 5, title: 'Specifications', icon: Palette },
    { number: 6, title: 'Add-ons', icon: Zap },
    { number: 7, title: 'Budget Range', icon: DollarSign },
    { number: 8, title: 'Timeline', icon: Calendar },
    { number: 9, title: 'Indigenous Community', icon: Heart },
    { number: 10, title: 'Number of Homes', icon: Home },
    { number: 11, title: 'Financing', icon: CreditCard }
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
        // Custom build pricing based on square footage
        const sqftNumber = parseInt(formData.sqft.replace(/\D/g, '')) || 800
        if (sqftNumber <= 800) {
          basePrice = 200000
        } else if (sqftNumber <= 1200) {
          basePrice = 280000
        } else if (sqftNumber <= 1800) {
          basePrice = 380000
        } else if (sqftNumber <= 2400) {
          basePrice = 480000
        } else {
          basePrice = 580000 // 3000+ sq ft
        }
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
        case 'loft':
          addonCost += 15000
          break
        case 'garage':
          addonCost += 30000
          break
        case 'deck':
          addonCost += 8000
          break
        case 'appliances':
          addonCost += 12000
          break
        case 'smart-home':
          addonCost += 5000
          break
        case 'upgraded-finishes':
          addonCost += 18000
          break
        case 'foundation':
          addonCost += 20000
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
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Generate PDF quote
      const response = await fetch('/api/quote-builder/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          estimatedPrice: finalPrice
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      // Create blob from PDF response
      const pdfBlob = await response.blob()
      
      // Create download link
      const url = window.URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `discovery-homes-quote-${Date.now()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
      // Mark as successfully submitted
      setIsSubmitted(true)
      setIsSubmitting(false)
      
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('Failed to generate PDF quote. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
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
    <div className="min-h-screen bg-eco-radial pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Screen */}
        {isSubmitted && (
          <div className="text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="w-20 h-20 bg-[#68a71d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-white" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Thank You, {formData.name}!
              </h1>
              
              <div className="bg-[#68a71d]/10 border border-[#68a71d] rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-[#2D2D2D] mb-2">Your Quote is Ready</h2>
                <div className="text-2xl font-bold text-[#68a71d] mb-2">
                  ${estimatedPrice.toLocaleString()} CAD
                </div>
                <p className="text-gray-600">Estimated total for your {formData.model} build</p>
              </div>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">What happens next:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#68a71d] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D]">PDF Quote Downloaded</p>
                      <p className="text-gray-600 text-sm">Your detailed quote has been downloaded to your device</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#68a71d] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D]">Personal Consultation</p>
                      <p className="text-gray-600 text-sm">A Discovery Homes specialist will contact you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#68a71d] rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2D]">Project Planning</p>
                      <p className="text-gray-600 text-sm">We'll discuss your project details and timeline</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#68a71d] text-white px-8 py-3 rounded-lg hover:bg-[#5a8f1a] transition-colors font-semibold"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/our-builds"
                  className="bg-gray-100 text-[#2D2D2D] px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                >
                  Explore More Models
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Form (hidden when submitted) */}
        {!isSubmitted && (
          <>
            {/* Header */}
            <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-nature mb-4 nature-shimmer">
            Quote Builder
          </h1>
          <p className="text-xl text-discovery-sage max-w-2xl mx-auto">
            Get your personalized quote in just a few minutes. We'll guide you through each step 
            to create the perfect modular home solution.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sage glass-nature">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-discovery-forest">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-discovery-sage">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-to-r from-discovery-sage to-discovery-lime h-2 rounded-full transition-all duration-300 growth-pulse"
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
                     description: 'Perfect for singles, couples, or resort units',
                     features: ['Open concept living', 'Efficient kitchen design', 'Modern bathroom', 'Energy efficient'],
                     icon: '🏠'
                   },
                   { 
                     value: 'pine2', 
                     name: 'Pine 2 - The Versatile One',
                     specs: '504 sq ft • 2 Bedroom with Loft',
                     price: '$179,000 CAD',
                     description: 'Ideal for families or rental markets',
                     features: ['Two bedrooms', 'Loft space', 'Spacious living area', 'Storage solutions'],
                     icon: '🏘️'
                   },
                   { 
                     value: 'pine3', 
                     name: 'Pine 3 - The Minimalist',
                     specs: '240 sq ft with Loft',
                     price: '$99,000 CAD',
                     description: 'Modern tiny home solution',
                     features: ['Compact design', 'Loft bedroom', 'Efficient layout', 'Portable'],
                     icon: '🏕️'
                   },
                   { 
                     value: 'custom', 
                     name: 'Custom Build',
                     specs: 'Your specifications',
                     price: 'Quote on request',
                     description: 'Fully tailored to your needs',
                     features: ['Custom design', 'Flexible layout', 'Premium materials', 'Personal consultation'],
                     icon: '✨'
                   }
                 ].map((model) => (
                   <label key={model.value} className={`block p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg ${
                     formData.model === model.value 
                       ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg' 
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
                       <div className="flex items-center mb-3">
                         <span className="text-3xl mr-3">{model.icon}</span>
                         <div>
                           <h3 className="text-lg font-bold text-[#2D2D2D]">{model.name}</h3>
                           <p className="text-gray-600 text-sm">{model.specs}</p>
                         </div>
                       </div>
                       <p className="text-sm text-gray-600 mb-4">{model.description}</p>
                       
                       <div className="mb-4">
                         <h4 className="font-semibold text-[#2D2D2D] mb-2">Key Features:</h4>
                         <ul className="space-y-1">
                           {model.features.map((feature, index) => (
                             <li key={index} className="flex items-center text-sm text-gray-600">
                               <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></span>
                               {feature}
                             </li>
                           ))}
                         </ul>
                       </div>
                       
                       <div className="flex items-center justify-between">
                         <p className="text-xl font-bold text-[#D4AF37]">{model.price}</p>
                         {formData.model === model.value && (
                           <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                             <Check size={16} className="text-white" />
                           </div>
                         )}
                       </div>
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
              
              {/* Show different options based on selected model */}
              {formData.model === 'custom' ? (
                <div className="space-y-6">
                  {/* Custom Build - Enhanced Bedroom Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Number of Bedrooms</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['2', '3', '4', '5+'].map((bed) => (
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

                  {/* Custom Build - Bathroom Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Number of Bathrooms</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['1', '2'].map((bath) => (
                        <label key={bath} className={`text-center p-4 border rounded-lg cursor-pointer ${
                          formData.bathrooms === bath ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-gray-300'
                        }`}>
                          <input
                            type="radio"
                            name="bathrooms"
                            value={bath}
                            checked={formData.bathrooms === bath}
                            onChange={(e) => updateFormData('bathrooms', e.target.value)}
                            className="sr-only"
                          />
                          <span className="font-semibold">{bath}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Custom Build - Enhanced Square Footage Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Square Footage</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        '800 sq ft',
                        '1200 sq ft', 
                        '1500 sq ft',
                        '1800 sq ft',
                        '2400 sq ft',
                        '3000+ sq ft'
                      ].map((sqft) => (
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

                  {/* Custom Build Price Estimate */}
                  <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#68a71d]/10 border border-[#D4AF37] rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#2D2D2D]">Custom Build Estimate</h3>
                        <p className="text-sm text-gray-600">Based on your specifications</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#D4AF37]">
                          ${calculatePrice().toLocaleString()} CAD
                        </div>
                        <div className="text-sm text-gray-600">
                          Starting price for {formData.sqft || '800 sq ft'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Standard Models - Original Options */}
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
              )}
            </div>
          )}

                     {/* Step 6: Add-ons */}
           {currentStep === 6 && (
             <div>
               <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Add-ons & Upgrades</h2>
               
               {/* Real-time Price Display */}
               <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#68a71d]/10 border border-[#D4AF37] rounded-lg p-6 mb-6">
                 <div className="flex items-center justify-between">
                   <div>
                     <h3 className="text-lg font-semibold text-[#2D2D2D]">Current Total</h3>
                     <p className="text-sm text-gray-600">Base price + selected upgrades</p>
                   </div>
                   <div className="text-right">
                     <div className="text-3xl font-bold text-[#D4AF37]">
                       ${calculatePrice().toLocaleString()} CAD
                     </div>
                     <div className="text-sm text-gray-600">
                       {formData.addons.length > 0 ? `${formData.addons.length} upgrade(s) selected` : 'No upgrades selected'}
                     </div>
                   </div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { value: 'solar', label: 'Solar Panels', price: '+$25,000', description: 'Reduce energy costs with solar power', icon: '☀️' },
                   { value: 'net-zero', label: 'Net-Zero Package', price: '+$35,000', description: 'Complete energy independence', icon: '🌱' },
                   { value: 'off-grid', label: 'Off-Grid Kit', price: '+$40,000', description: 'Water, power, and waste systems', icon: '🏕️' },
                   { value: 'loft', label: 'Loft (Additional Floor Space)', price: '+$15,000', description: 'Increase living space', icon: '🏠' },
                   { value: 'garage', label: 'Garage (Additional Storage)', price: '+$30,000', description: 'Extra storage for vehicles or tools', icon: '🚗' },
                   { value: 'deck', label: 'Deck (Outdoor Living Space)', price: '+$8,000', description: 'Extend your living area outdoors', icon: '🌳' },
                   { value: 'appliances', label: 'Upgraded Appliances', price: '+$12,000', description: 'High-end kitchen and laundry appliances', icon: '🍳' },
                   { value: 'smart-home', label: 'Smart Home Package', price: '+$5,000', description: 'Automated lighting, security, and climate control', icon: '📱' },
                   { value: 'upgraded-finishes', label: 'Upgraded Finishes', price: '+$18,000', description: 'Higher-end materials and finishes', icon: '✨' },
                   { value: 'foundation', label: 'Foundation Upgrade', price: '+$20,000', description: 'Strengthen the foundation for better stability', icon: '🏗️' }
                 ].map((addon) => (
                   <label key={addon.value} className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                     formData.addons.includes(addon.value) 
                       ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-md' 
                       : 'border-gray-300 hover:border-[#D4AF37]/50'
                   }`}>
                     <input
                       type="checkbox"
                       checked={formData.addons.includes(addon.value)}
                       onChange={() => toggleAddon(addon.value)}
                       className="mr-4 w-5 h-5 text-[#D4AF37] focus:ring-[#D4AF37]"
                     />
                     <div className="flex-1">
                       <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center">
                           <span className="text-2xl mr-3">{addon.icon}</span>
                           <span className="font-semibold text-[#2D2D2D]">{addon.label}</span>
                         </div>
                         <span className="font-bold text-[#D4AF37] text-lg">{addon.price}</span>
                       </div>
                       <p className="text-sm text-gray-600 ml-11">{addon.description}</p>
                     </div>
                   </label>
                 ))}
               </div>

               {/* Selected Upgrades Summary */}
               {formData.addons.length > 0 && (
                 <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                   <h4 className="font-semibold text-[#2D2D2D] mb-3">Selected Upgrades:</h4>
                   <div className="flex flex-wrap gap-2">
                     {formData.addons.map((addon) => {
                       const addonInfo = [
                         { value: 'solar', label: 'Solar Panels', price: '+$25,000' },
                         { value: 'net-zero', label: 'Net-Zero Package', price: '+$35,000' },
                         { value: 'off-grid', label: 'Off-Grid Kit', price: '+$40,000' },
                         { value: 'loft', label: 'Loft', price: '+$15,000' },
                         { value: 'garage', label: 'Garage', price: '+$30,000' },
                         { value: 'deck', label: 'Deck', price: '+$8,000' },
                         { value: 'appliances', label: 'Upgraded Appliances', price: '+$12,000' },
                         { value: 'smart-home', label: 'Smart Home Package', price: '+$5,000' },
                         { value: 'upgraded-finishes', label: 'Upgraded Finishes', price: '+$18,000' },
                         { value: 'foundation', label: 'Foundation Upgrade', price: '+$20,000' }
                       ].find(a => a.value === addon)
                       
                       return (
                         <span key={addon} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#D4AF37]/20 text-[#D4AF37] font-medium">
                           {addonInfo?.label} {addonInfo?.price}
                         </span>
                       )
                     })}
                   </div>
                 </div>
               )}
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
             </div>
           )}

          {/* Step 9: Indigenous Community */}
          {currentStep === 9 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Indigenous Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'yes', label: 'Yes, I am a member of a First Nations or Indigenous community' },
                  { value: 'no', label: 'No, I am not a member of a First Nations or Indigenous community' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="isIndigenous"
                      value={option.value}
                      checked={formData.isIndigenous === option.value}
                      onChange={(e) => updateFormData('isIndigenous', e.target.value)}
                      className="mr-3"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 10: Number of Homes */}
          {currentStep === 10 && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Number of Homes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: '1', label: '1 Home' },
                  { value: '2', label: '2 Homes' },
                  { value: '3', label: '3 Homes' },
                  { value: '4', label: '4 Homes' },
                  { value: '5', label: '5 Homes' },
                  { value: '6', label: '6 Homes' },
                  { value: '7', label: '7 Homes' },
                  { value: '8', label: '8 Homes' },
                  { value: '9', label: '9 Homes' },
                  { value: '10', label: '10 Homes' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="numberOfHomes"
                      value={option.value}
                      checked={formData.numberOfHomes === option.value}
                      onChange={(e) => updateFormData('numberOfHomes', e.target.value)}
                      className="mr-3"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

                     {/* Step 11: Financing */}
           {currentStep === 11 && (
             <div>
               <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Financing</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { value: 'cash', label: 'Cash Payment' },
                   { value: 'bank-financing', label: 'Bank Financing' },
                   { value: 'construction-financing', label: 'Construction Financing' },
                   { value: 'other', label: 'Other Financing' }
                 ].map((option) => (
                   <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                     <input
                       type="radio"
                       name="financing"
                       value={option.value}
                       checked={formData.financing === option.value}
                       onChange={(e) => updateFormData('financing', e.target.value)}
                       className="mr-3"
                     />
                     <span>{option.label}</span>
                   </label>
                 ))}
               </div>

               {/* Final Price Display */}
               {estimatedPrice > 0 && (
                 <div className="mt-8 p-6 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]">
                   <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Your Estimated Quote</h3>
                   
                   {/* Price Breakdown */}
                   <div className="space-y-3 mb-4">
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Base Model ({formData.model})</span>
                       <span className="font-semibold">
                         ${(() => {
                           switch (formData.model) {
                             case 'pine1': return '174,000'
                             case 'pine2': return '179,000'
                             case 'pine3': return '99,000'
                             case 'custom': return '200,000'
                             default: return '0'
                           }
                         })()} CAD
                       </span>
                     </div>
                     
                     {formData.addons.length > 0 && (
                       <>
                         <div className="border-t border-gray-300 pt-2">
                           <span className="text-gray-600">Upgrades & Add-ons:</span>
                         </div>
                         {formData.addons.map((addon) => {
                           const addonInfo = [
                             { value: 'solar', label: 'Solar Panels', price: 25000 },
                             { value: 'net-zero', label: 'Net-Zero Package', price: 35000 },
                             { value: 'off-grid', label: 'Off-Grid Kit', price: 40000 },
                             { value: 'loft', label: 'Loft', price: 15000 },
                             { value: 'garage', label: 'Garage', price: 30000 },
                             { value: 'deck', label: 'Deck', price: 8000 },
                             { value: 'appliances', label: 'Upgraded Appliances', price: 12000 },
                             { value: 'smart-home', label: 'Smart Home Package', price: 5000 },
                             { value: 'upgraded-finishes', label: 'Upgraded Finishes', price: 18000 },
                             { value: 'foundation', label: 'Foundation Upgrade', price: 20000 }
                           ].find(a => a.value === addon)
                           
                           return (
                             <div key={addon} className="flex justify-between items-center text-sm">
                               <span className="text-gray-600">• {addonInfo?.label}</span>
                               <span className="font-semibold">+${addonInfo?.price?.toLocaleString()} CAD</span>
                             </div>
                           )
                         })}
                       </>
                     )}
                     
                     <div className="border-t border-gray-300 pt-3">
                       <div className="flex justify-between items-center">
                         <span className="text-lg font-bold text-[#2D2D2D]">Total Estimated Cost</span>
                         <span className="text-2xl font-bold text-[#D4AF37]">
                           ${estimatedPrice.toLocaleString()} CAD
                         </span>
                       </div>
                     </div>
                   </div>
                   
                   <p className="text-sm text-gray-600">
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
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg transition-colors font-semibold flex items-center ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-[#68a71d] text-white hover:bg-[#5a8f1a]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Generating PDF...
                  </>
                ) : (
                  'Get My Quote'
                )}
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
        </>
        )} {/* Close main form conditional */}
        
        {/* Error Display */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">!</span>
              </div>
              <div>
                <p className="text-red-800 font-medium">Submission Failed</p>
                <p className="text-red-600 text-sm">{submitError}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 