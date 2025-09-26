import { NextRequest, NextResponse } from 'next/server'

// Go High Level webhook URLs for quote builder
const GHL_WEBHOOK_URL_STEP1 = 'https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/2a9c4617-2321-409c-b722-12d62f1c2030'
const GHL_WEBHOOK_URL_COMPLETE = 'https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/c2fda141-5868-44b2-a87f-0e712f8dcd5f'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Extract contact information and complete form data
    const { name, email, phone, ...formData } = body
    
    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Determine if this is a step 1→2 call or complete submission
    const isStep1Call = !formData.landStatus && !formData.model && !formData.packageType
    const webhookUrl = isStep1Call ? GHL_WEBHOOK_URL_STEP1 : GHL_WEBHOOK_URL_COMPLETE
    
    console.log(`🔥 API DEBUG: ${isStep1Call ? 'Step 1→2' : 'Complete'} webhook call detected`)
    console.log(`🔥 API DEBUG: Using webhook URL: ${webhookUrl}`)

    // Send data to Go High Level webhook
    let ghlSuccess = false
    try {
      const ghlResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          firstName: name ? name.split(' ')[0] : '',
          lastName: name && name.includes(' ') ? name.split(' ').slice(1).join(' ') : '',
          phone: phone,
          segment: 'quote-builder',
          source: isStep1Call ? 'quote-builder-step1' : 'quote-builder-complete',
          tags: isStep1Call ? ['quote-builder', 'contact-info'] : ['quote-builder', 'complete-submission'],
          customFields: {
            lead_source: 'quote-builder',
            contact_step: isStep1Call ? 'step1' : 'complete',
            submitted_at: new Date().toISOString(),
            ip_address: request.ip || 'unknown',
            user_agent: request.headers.get('user-agent') || 'unknown',
            form_progress: isStep1Call ? 'contact-info-completed' : 'quote-completed',
            // Complete form data (only for complete submissions)
            ...(isStep1Call ? {} : {
              land_status: formData.landStatus || '',
              postal_code: formData.postalCode || '',
              intended_use: formData.intendedUse || '',
              intended_use_other: formData.intendedUseOther || '',
              model: formData.model || '',
              bedrooms: formData.bedrooms || '',
              bathrooms: formData.bathrooms || '',
              sqft: formData.sqft || '',
              package_type: formData.packageType || '',
              addons: formData.addons ? formData.addons.join(', ') : '',
              timeline: formData.timeline || '',
              number_of_homes: formData.numberOfHomes || '',
              custom_number_of_homes: formData.customNumberOfHomes || '',
              financing: formData.financing || '',
              needs_financing_help: formData.needsFinancingHelp || '',
              estimated_price: formData.estimatedPrice || 0,
              // Finishes & options
              siding: formData.siding || '',
              countertops: formData.countertops || '',
              cabinets: formData.cabinets || '',
              headboard: formData.headboard || '',
              flooring: formData.flooring || '',
              blinds: formData.blinds || false,
              faucets: formData.faucets || '',
              add_ceiling_fans: formData.addCeilingFans || false,
              add_bedroom_fixtures: formData.addBedroomFixtures || false,
              base_lighting: formData.baseLighting || false,
              base_tile: formData.baseTile || false,
              feature_surfaces: formData.featureSurfaces || false,
              walls_finish: formData.wallsFinish || ''
            })
          }
        })
      })

      if (ghlResponse.ok) {
        ghlSuccess = true
        console.log(`✅ ${isStep1Call ? 'Step 1' : 'Complete'} quote builder data sent to Go High Level successfully`)
      } else {
        console.error('❌ Go High Level webhook failed:', ghlResponse.status, ghlResponse.statusText)
        const responseText = await ghlResponse.text()
        console.error('Response body:', responseText)
      }
    } catch (ghlError) {
      console.error('❌ Go High Level webhook error:', ghlError)
    }

    return NextResponse.json({
      success: true,
      message: ghlSuccess 
        ? `${isStep1Call ? 'Contact' : 'Quote'} data processed successfully`
        : `${isStep1Call ? 'Contact' : 'Quote'} data saved, but webhook delivery failed`,
      ghlSuccess: ghlSuccess
    })

  } catch (error) {
    console.error('Quote builder webhook error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process quote data. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}
