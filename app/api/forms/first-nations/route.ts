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
      community,
      projectType,
      timeline,
      source = 'First Nations Landing Page',
      interest = 'First Nations Community Housing'
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !community) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare CRM data with First Nations specific tags
    const crmData = {
      firstName,
      lastName,
      email,
      phone,
      company: community,
      source,
      interest,
      tags: ['First Nations', 'Community Housing', 'Landing Page Lead'],
      customFields: {
        community_name: community,
        project_type: projectType,
        timeline: timeline,
        lead_source: 'First Nations Landing Page',
        interest_area: 'First Nations Community Housing'
      }
    }

    // Add to CRM
    const crmResult = await addToCRM(crmData)

    // Prepare email data
    const emailData = {
      to: email,
      subject: 'Your First Nations Housing Guide - Discovery Homes',
      template: 'first-nations-guide',
      data: {
        firstName,
        lastName,
        community,
        projectType,
        timeline,
        downloadLink: 'https://discoveryhomes.ca/first-nations-guide.pdf', // Placeholder
        consultationLink: 'https://calendly.com/discovery-homes/first-nations-consultation' // Placeholder
      }
    }

    // Send confirmation email
    const emailResult = await sendEmail(emailData)

    // Send internal notification
    const notificationData = {
      to: 'sales@discoveryhomes.ca', // Replace with actual email
      subject: 'New First Nations Landing Page Lead',
      template: 'first-nations-lead-notification',
      data: {
        firstName,
        lastName,
        email,
        phone,
        community,
        projectType,
        timeline,
        crmId: crmResult?.id || 'N/A'
      }
    }

    await sendEmail(notificationData)

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your First Nations housing guide is being prepared and our specialist will contact you within 24 hours.',
      crmId: crmResult?.id
    })

  } catch (error) {
    console.error('Error processing First Nations form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 