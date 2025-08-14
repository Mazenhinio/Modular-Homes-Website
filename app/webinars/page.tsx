'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, PlayCircle, ArrowRight } from 'lucide-react'
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
            Learn How to Build Faster, Smarter, and More Affordably
          </h1>
          <p className="text-lg md:text-xl text-discovery-sage mt-6 max-w-3xl mx-auto">
            Join our free live session to see how Discovery Homes helps families, First Nations, resort owners,
            and investors turn vision into reality with modular builds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="#register" className="bg-discovery-gold hover:bg-discovery-gold-dark text-discovery-charcoal px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2">
              Reserve Your Seat
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Live Countdown */}
      <section className="py-10 bg-discovery-charcoal">
        <div className="max-w-5xl mx-auto px-4 text-center">
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
              title="Reserve Your Seat"
              subtitle="Free registration. Limited seats."
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
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
              </div>
            </LeadCaptureForm>
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-discovery-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-discovery-white mb-8">Past Sessions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-discovery-charcoal-light rounded-xl overflow-hidden">
                <div className="relative h-40">
                  <Image src={`/images/hero-carousel/hero-slide-${i}.webp`} alt="Past webinar" fill className="object-cover" />
                </div>
                <div className="p-4 text-discovery-white">
                  <div className="text-sm text-discovery-sage mb-1">On-demand</div>
                  <div className="font-semibold">Modular Building Essentials #{i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


