import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailer'
import { addToCRM } from '@/lib/crmClient'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      portfolioSize,
      investmentBudget,
      timeline,
      source = 'Real Estate Rental Landing Page',
      interest = 'Rental Property Investment'
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare CRM data with Real Estate Rental specific tags
    const crmData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      source,
      interest,
      tags: ['Real Estate Rental', 'Property Investment', 'Landing Page Lead'],
      customFields: {
        portfolio_size: portfolioSize,
        investment_budget: investmentBudget,
        timeline: timeline,
        lead_source: 'Real Estate Rental Landing Page',
        interest_area: 'Rental Property Investment'
      }
    }

    // Add to CRM
    const crmResult = await addToCRM(crmData)

    // Prepare email data
    const emailData = {
      to: email,
      subject: 'Your ROI Calculator - Discovery Homes',
      template: 'real-estate-rental-calculator',
      data: {
        firstName,
        lastName,
        company,
        portfolioSize,
        investmentBudget,
        timeline,
        downloadLink: 'https://discoveryhomes.ca/roi-calculator.xlsx', // Placeholder
        consultationLink: 'https://calendly.com/discovery-homes/rental-investment-consultation' // Placeholder
      }
    }

    // Send confirmation email
    const emailResult = await sendEmail(emailData)

    // Send internal notification
    const notificationData = {
      to: 'sales@discoveryhomes.ca', // Replace with actual email
      subject: 'New Real Estate Rental Landing Page Lead',
      template: 'real-estate-rental-lead-notification',
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        portfolioSize,
        investmentBudget,
        timeline,
        crmId: crmResult?.id || 'N/A'
      }
    }

    await sendEmail(notificationData)

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your ROI calculator is being prepared and our rental property specialist will contact you within 24 hours.',
      crmId: crmResult?.id
    })

  } catch (error) {
    console.error('Error processing Real Estate Rental form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 