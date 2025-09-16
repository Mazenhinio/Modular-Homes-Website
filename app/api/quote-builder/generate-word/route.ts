import { NextRequest, NextResponse } from 'next/server'
import { wordGenerator } from '@/lib/wordGenerator'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      landStatus,
      postalCode,
      intendedUse,
      intendedUseOther,
      model,
      bedrooms,
      bathrooms,
      sqft,
      packageType,
      addons,
      siding,
      countertops,
      cabinets,
      headboard,
      flooring,
      blinds,
      faucets,
      addCeilingFans,
      addBedroomFixtures,
      baseLighting,
      baseTile,
      featureSurfaces,
      wallsFinish,
      timeline,
      numberOfHomes,
      customNumberOfHomes,
      financing,
      needsFinancingHelp,
      estimatedPrice
    } = body

    // Calculate base price and add-ons cost
    let basePrice = 0
    switch (model) {
      case 'pine1':
        basePrice = 183000
        break
      case 'pine2':
        basePrice = 188000
        break
      case 'pine3':
        basePrice = 104000
        break
      case 'custom':
        // Custom build pricing based on square footage
        const sqftNumber = parseInt(sqft?.replace(/\D/g, '') || '800')
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

    let addOnsCost = 0
    const addOnPrices = {
      'solar': 12500,
      'net-zero': 35000,
      'off-grid': 40000,
      'deck': 8000,
      'appliances': 10000,
      'smart-home': 5000,
      'fireplace': 6500,
    }

    if (addons && Array.isArray(addons)) {
      addons.forEach((addon: string) => {
        addOnsCost += addOnPrices[addon as keyof typeof addOnPrices] || 0
      })
    }

    // Generate quote number
    const quoteNumber = `DH-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
    
    // Set valid until date (30 days from now)
    const validUntil = new Date()
    validUntil.setDate(validUntil.getDate() + 30)

    // Prepare quote data
    const quoteData = {
      name: name || '',
      email: email || '',
      phone: phone || '',
      landStatus: landStatus || '',
      postalCode: postalCode || '',
      intendedUse: intendedUse || '',
      intendedUseOther: intendedUseOther || '',
      model: model || '',
      bedrooms: bedrooms || '',
      bathrooms: bathrooms || '',
      sqft: sqft || '',
      packageType: packageType || 'base',
      addons: addons || [],
      siding: siding || 'base-metal',
      countertops: countertops || 'base-quartz',
      cabinets: cabinets || 'maple-shaker',
      headboard: headboard || 'melamine',
      flooring: flooring || 'vinyl-glue-down',
      blinds: blinds || false,
      faucets: faucets || 'stainless',
      addCeilingFans: addCeilingFans || false,
      addBedroomFixtures: addBedroomFixtures || false,
      baseLighting: baseLighting || true,
      baseTile: baseTile || true,
      featureSurfaces: featureSurfaces || false,
      wallsFinish: wallsFinish || 'drywall',
      timeline: timeline || '',
      numberOfHomes: numberOfHomes || '1',
      customNumberOfHomes: customNumberOfHomes || '',
      financing: financing || '',
      needsFinancingHelp: needsFinancingHelp || '',
      estimatedPrice: estimatedPrice || (basePrice + addOnsCost),
      basePrice,
      addOnsCost,
      quoteNumber,
      validUntil
    }

    // Generate Word document
    const wordBuffer = await wordGenerator.createQuote(quoteData)
    
    // Return the Word document as a downloadable file
    return new NextResponse(wordBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="discovery-homes-quote-${quoteNumber}.docx"`,
        'Content-Length': wordBuffer.length.toString()
      }
    })

  } catch (error) {
    console.error('Word generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate Word quote', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}


