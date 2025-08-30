'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, PlayCircle, ArrowRight, AlertTriangle, Video, Gift, Calculator, BookOpen, Leaf, Target, Users, UserCheck, Award } from 'lucide-react'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'

export default function WebinarsPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch('/api/forms/webinar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsFormSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting webinar form:', error)
    }
  }

  const upcoming = {
    title: 'Turning Land Into Legacy: Modular Homes for Families, Communities & Investors',
    dateTimeLabel: 'Thursday, Sep 26 · 12:00 PM PT / 3:00 PM ET',
    sessionDateTimeISO: '2025-09-26T12:00:00-07:00'
  }

  const getTimeLeft = () => {
    const targetMs = new Date(upcoming.sessionDateTimeISO).getTime()
    const nowMs = Date.now()
    const diff = Math.max(0, targetMs - nowMs)

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { totalMs: diff, days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upcoming.sessionDateTimeISO])

  return (
    <div className="min-h-screen bg-discovery-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-carousel/hero-slide-5.webp"
            alt="Webinar background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-discovery-charcoal/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 text-center text-discovery-white">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <PlayCircle className="w-5 h-5" />
            <span className="text-sm">Live Webinar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-discovery-white text-shadow-lg">
            Discover How to Turn Raw Land into a Cash-Flowing Modular Home Investment in Under 90 Days
          </h1>
          <div className="mt-6 mb-8">
            <p className="text-lg md:text-xl text-discovery-gold font-semibold mb-2">
              Live Only • No Replays • Only 50 Spots Available
            </p>
            <p className="text-lg md:text-xl text-discovery-sage max-w-3xl mx-auto">
              Learn how Discovery Homes is reshaping housing in Western Canada with customizable modular builds perfect for rural properties, cabins, Indigenous communities, and workforce housing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#register" className="bg-discovery-gold hover:bg-discovery-gold-dark text-discovery-charcoal px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
              Register Now – Live Access Only + Free Bonuses
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Live Countdown */}
      <section className="py-10 bg-discovery-charcoal">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Urgency Text Above Timer */}
                     <div className="mb-6">
             <div className="flex items-center justify-center gap-3 mb-2">
               <AlertTriangle className="w-6 h-6 text-discovery-gold" />
               <p className="text-discovery-gold text-lg md:text-xl font-semibold">
                 Spots are filling fast – only 50 available.
               </p>
             </div>
           </div>
          
          <p className="text-discovery-sage mb-2 font-medium">Next session starts in</p>
          {timeLeft.totalMs <= 0 ? (
            <div className="text-3xl md:text-4xl font-serif font-bold text-discovery-white">Live now</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Days', value: String(timeLeft.days) },
                { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
                { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
                { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') }
              ].map((item, idx) => (
                <div key={idx} className="bg-discovery-charcoal-light/60 border border-white/10 rounded-xl p-4">
                  <div className="text-3xl md:text-5xl font-serif font-bold text-discovery-gold leading-none">{item.value}</div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-wide text-discovery-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          )}
          
                     {/* Urgency Text Below Timer */}
           <div className="mt-6">
             <div className="flex items-center justify-center gap-3">
               <Video className="w-6 h-6 text-discovery-white" />
               <p className="text-discovery-white text-lg md:text-xl font-medium">
                 This session will NOT be recorded or replayed. Be there live to ask questions and claim bonuses.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Details + Registration */}
      <section id="register" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-4">
              {upcoming.title}
            </h2>
            <div className="flex items-center gap-6 text-discovery-charcoal-light mb-6">
              <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> <span>{upcoming.dateTimeLabel}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> <span>45 minutes</span></div>
            </div>
            <div className="space-y-4 text-discovery-charcoal-light">
              <p>What you’ll learn:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pricing, timelines, and process for our Pine Series builds</li>
                <li>How modular unlocks ROI for rentals, resorts, and community housing</li>
                <li>Funding pathways and practical next steps for First Nations</li>
                <li>How to start your quote and get a realistic budget</li>
              </ul>
            </div>
          </div>

          <div className="bg-discovery-white p-8 rounded-2xl shadow-2xl">
            <LeadCaptureForm
              title="Register Now – Live Access Only + Free Bonuses"
              subtitle="Free registration. Limited seats. Live access only."
            >
              <div className="space-y-4 min-h-[800px]">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/AdzCTh4LzELOJIxNVPWb"
                  style={{ width: '100%', height: '800px', border: 'none', borderRadius: '3px' }}
                  id="inline-AdzCTh4LzELOJIxNVPWb"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form 3"
                  data-height="800"
                  data-layout-iframe-id="inline-AdzCTh4LzELOJIxNVPWb"
                  data-form-id="AdzCTh4LzELOJIxNVPWb"
                  title="Form 3"
                />
              </div>
            </LeadCaptureForm>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-discovery-gold/10 to-discovery-sage/10">
        <div className="max-w-6xl mx-auto px-4">
                     <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 mb-6">
               <Gift className="w-12 h-12 text-discovery-gold" />
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal">
                 Free Bonuses for Live Attendees
               </h2>
             </div>
            <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
              Exclusive resources you'll receive immediately when you attend live
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ROI Calculator */}
            <div className="bg-discovery-white p-8 rounded-2xl shadow-xl text-center">
                             <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                 <Calculator className="w-8 h-8 text-discovery-charcoal" />
               </div>
              <h3 className="text-xl font-serif font-bold text-discovery-charcoal mb-4">
                Instant ROI Calculator
              </h3>
              <p className="text-discovery-charcoal-light">
                Modular edition with real market data to calculate your investment returns in seconds
              </p>
            </div>

            {/* Turn Land Into Income Guide */}
            <div className="bg-discovery-white p-8 rounded-2xl shadow-xl text-center">
                             <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                 <BookOpen className="w-8 h-8 text-discovery-charcoal" />
               </div>
              <h3 className="text-xl font-serif font-bold text-discovery-charcoal mb-4">
                "Turn Land Into Income" Guide PDF
              </h3>
              <p className="text-discovery-charcoal-light">
                Complete step-by-step blueprint for transforming raw land into profitable modular developments
              </p>
            </div>

            {/* NetZero Starter Pack */}
            <div className="bg-discovery-white p-8 rounded-2xl shadow-xl text-center">
                             <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-6">
                 <Leaf className="w-8 h-8 text-discovery-charcoal" />
               </div>
              <h3 className="text-xl font-serif font-bold text-discovery-charcoal mb-4">
                NetZero Starter Pack
              </h3>
              <p className="text-discovery-charcoal-light">
                Upgrade checklist + planning tools to make your modular home energy-efficient and sustainable
              </p>
            </div>
          </div>

          {/* Live-Only Warning */}
                     <div className="text-center">
             <div className="inline-flex items-center gap-3 bg-discovery-charcoal text-discovery-white px-6 py-4 rounded-2xl shadow-xl">
               <Target className="w-6 h-6 text-discovery-gold" />
               <p className="text-lg font-semibold">
                 Must attend live – these will NOT be sent afterward.
               </p>
             </div>
           </div>
        </div>
             </section>

       {/* Visual Showcase */}
       <section className="py-20 bg-discovery-white">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal mb-6">
               See Discovery Homes in Action
             </h2>
             <p className="text-xl text-discovery-charcoal-light max-w-3xl mx-auto">
               Real builds from our Pine Series - transforming raw land into stunning modular homes across Western Canada
             </p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left Column - Main Showcase */}
             <div className="space-y-6">
               <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                   src="/images/pine1/exterior-1.webp"
                   alt="Pine 1 Modular Home Exterior"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-discovery-charcoal/60 to-transparent" />
                                   <div className="absolute bottom-4 left-4 text-discovery-white">
                    <h3 className="text-2xl font-serif font-bold text-discovery-white">Pine 1 Series</h3>
                    <p className="text-discovery-sage">Customizable 2-bedroom modular home</p>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-xl">
                   <Image
                     src="/images/pine1/kitchen.webp"
                     alt="Pine 1 Kitchen Interior"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-discovery-charcoal/40" />
                   <div className="absolute bottom-3 left-3 text-discovery-white">
                     <p className="text-sm font-semibold">Modern Kitchen</p>
                   </div>
                 </div>
                 
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-xl">
                   <Image
                     src="/images/pine1/living-room.webp"
                     alt="Pine 1 Living Room Interior"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-discovery-charcoal/40" />
                   <div className="absolute bottom-3 left-3 text-discovery-white">
                     <p className="text-sm font-semibold">Open Living Space</p>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Right Column - Additional Builds */}
             <div className="space-y-6">
                               <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pine2/Front Elevation.webp"
                    alt="Pine 2 Modular Home Exterior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-discovery-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-discovery-white">
                    <h3 className="text-2xl font-serif font-bold text-discovery-white">Pine 2 Series</h3>
                    <p className="text-discovery-sage">Spacious 3-bedroom with loft option</p>
                  </div>
                </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-xl">
                   <Image
                     src="/images/pine3/kitchen.webp"
                     alt="Pine 3 Kitchen Interior"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-discovery-charcoal/40" />
                   <div className="absolute bottom-3 left-3 text-discovery-white">
                     <p className="text-sm font-semibold">Premium Kitchen</p>
                   </div>
                 </div>
                 
                 <div className="relative h-48 rounded-xl overflow-hidden shadow-xl">
                   <Image
                     src="/images/pine2/kitchen.webp"
                     alt="Pine 2 Kitchen Interior"
                     fill
                     className="object-cover"
                   />
                   <div className="absolute inset-0 bg-discovery-charcoal/40" />
                   <div className="absolute bottom-3 left-3 text-discovery-white">
                     <p className="text-sm font-semibold">Functional Design</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Call to Action Below Visuals */}
           <div className="text-center mt-12">
             <div className="inline-flex items-center gap-3 bg-discovery-charcoal text-discovery-white px-8 py-4 rounded-2xl shadow-xl">
               <PlayCircle className="w-6 h-6 text-discovery-gold" />
               <p className="text-lg font-semibold">
                 See these builds come to life in our live webinar
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Trust Markers */}
       <section className="py-16 bg-gradient-to-br from-discovery-charcoal/5 to-discovery-sage/5">
        <div className="max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-discovery-charcoal mb-4">
               Trusted by Communities Across Western Canada
             </h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12 items-center">
             {/* Client Testimonial */}
             <div className="bg-discovery-white p-8 rounded-2xl shadow-xl">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-discovery-gold rounded-full flex items-center justify-center">
                   <span className="text-discovery-charcoal text-xl font-serif font-bold">"</span>
                 </div>
                 <div>
                   <h3 className="text-lg font-serif font-bold text-discovery-charcoal">Sarah & Mike Thompson</h3>
                   <p className="text-discovery-charcoal-light text-sm">First Nations Community Leaders, Alberta</p>
                 </div>
               </div>
               <blockquote className="text-discovery-charcoal-light leading-relaxed italic">
                 "Discovery Homes transformed our vision into reality. They delivered our community housing project on time and under budget. The quality exceeded our expectations, and their team worked seamlessly with our cultural requirements. We're now planning phase two with them."
               </blockquote>
             </div>
             
             {/* Certifications & Partnerships */}
             <div className="space-y-8">
               <div className="text-center">
                 <h3 className="text-xl font-serif font-bold text-discovery-charcoal mb-6">
                   Industry Recognitions & Certifications
                 </h3>
                 <div className="grid grid-cols-2 gap-6">
                   <div className="bg-discovery-white p-6 rounded-xl shadow-lg text-center">
                                        <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                     <Award className="w-8 h-8 text-discovery-charcoal" />
                   </div>
                     <h4 className="font-semibold text-discovery-charcoal mb-2">15+ Years Experience</h4>
                     <p className="text-sm text-discovery-charcoal-light">Modular housing specialists</p>
                   </div>
                   <div className="bg-discovery-white p-6 rounded-xl shadow-lg text-center">
                     <div className="w-16 h-16 bg-discovery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                       <span className="text-discovery-charcoal text-2xl font-bold">✓</span>
                     </div>
                     <h4 className="font-semibold text-discovery-charcoal mb-2">Certified Builder</h4>
                     <p className="text-sm text-discovery-charcoal-light">Alberta & Saskatchewan licensed</p>
                   </div>
                 </div>
               </div>
               
               <div className="text-center">
                 <h3 className="text-lg font-serif font-bold text-discovery-charcoal mb-4">
                   Communities Served
                 </h3>
                 <div className="flex flex-wrap justify-center gap-3">
                   <span className="bg-discovery-gold text-discovery-charcoal px-4 py-2 rounded-full text-sm font-semibold">First Nations</span>
                   <span className="bg-discovery-gold text-discovery-charcoal px-4 py-2 rounded-full text-sm font-semibold">Rural Properties</span>
                   <span className="bg-discovery-gold text-discovery-charcoal px-4 py-2 rounded-full text-sm font-semibold">Resort Owners</span>
                   <span className="bg-discovery-gold text-discovery-charcoal px-4 py-2 rounded-full text-sm font-semibold">Investors</span>
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>

       {/* Meet Your Hosts */}
      <section className="py-20 bg-discovery-white">
        <div className="max-w-6xl mx-auto px-4">
                     <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 mb-6">
               <Users className="w-12 h-12 text-discovery-charcoal" />
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-discovery-charcoal">
                 Meet Your Experts
               </h2>
             </div>
           </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Jeff Lorenz */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-discovery-charcoal-light rounded-full mx-auto flex items-center justify-center">
                  <UserCheck className="w-16 h-16 text-discovery-white" />
                </div>
                                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                   <div className="bg-discovery-gold text-discovery-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                     Co-Founder
                   </div>
                 </div>
               </div>
               
               <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-2">
                 Jeff Lorenz
               </h3>
               <p className="text-discovery-charcoal-light mb-4">
                 Co-Founder & Construction Director, Discovery Homes
               </p>
              <p className="text-discovery-charcoal-light leading-relaxed">
                With 15+ years in modular housing and remote builds, Jeff has helped hundreds of people across Alberta and Saskatchewan turn raw land into liveable, efficient, and beautiful homes. From custom cabins to full Indigenous community builds, Jeff knows exactly how to make modular work for any location.
              </p>
            </div>

            {/* Corey Davis */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-discovery-charcoal-light rounded-full mx-auto flex items-center justify-center">
                  <UserCheck className="w-16 h-16 text-discovery-white" />
                </div>
                                 <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                   <div className="bg-discovery-gold text-discovery-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                     Co-Founder
                   </div>
                 </div>
               </div>
               
               <h3 className="text-2xl font-serif font-bold text-discovery-charcoal mb-2">
                 Corey Davis
               </h3>
               <p className="text-discovery-charcoal-light mb-4">
                 Co-Founder & Operations Lead, Discovery Homes
               </p>
              <p className="text-discovery-charcoal-light leading-relaxed">
                Corey ensures every project stays on track, on time, and on budget. He'll share insider details on delivery timelines, site prep, logistics, and what really happens once you place your order. If you want to understand the full build-to-move-in process—he's your guy.
              </p>
            </div>
          </div>


        </div>
      </section>

      
    </div>
  )
}


