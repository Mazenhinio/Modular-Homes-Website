import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Extract form fields
    const {
      firstName,
      lastName,
      email,
      phone,
      propertyAddress,
      landSize,
      currentUse,
      developmentGoals
    } = formData

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !propertyAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = 'New Land Owner Inquiry - Discovery Homes'
    const emailContent = `
      <h2>New Land Owner Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Property Address:</strong> ${propertyAddress}</p>
      <p><strong>Land Size:</strong> ${landSize}</p>
      <p><strong>Current Land Use:</strong> ${currentUse}</p>
      <p><strong>Development Goals:</strong> ${developmentGoals}</p>
      
      <h3>Next Steps:</h3>
      <ul>
        <li>Schedule land evaluation consultation</li>
        <li>Prepare development feasibility study</li>
        <li>Create preliminary site plan</li>
        <li>Provide zoning and permit guidance</li>
      </ul>
    `

    // Send notification email
    await sendEmail({
      to: 'landowners@discoveryhomes.ca',
      subject: emailSubject,
      html: emailContent
    })

    // Send confirmation email to customer
    const customerEmailContent = `
      <h2>Thank you for your land evaluation request!</h2>
      <p>Dear ${firstName},</p>
      <p>Thank you for reaching out to Discovery Homes about your land development project. We've received your inquiry and our land development specialist will contact you within 24 hours to discuss your property's potential.</p>
      
      <h3>What to expect:</h3>
      <ul>
        <li>Comprehensive land evaluation and feasibility study</li>
        <li>Zoning analysis and development options</li>
        <li>Revenue projections and ROI calculations</li>
        <li>Infrastructure planning and cost estimates</li>
      </ul>
      
      <p>In the meantime, you can download our <a href="#">Land Development Guide</a> to learn more about our sustainable modular development approach.</p>
      
      <p>Best regards,<br>
      The Discovery Homes Team</p>
    `

    await sendEmail({
      to: email,
      subject: 'Your Land Evaluation Request - Discovery Homes',
      html: customerEmailContent
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error processing land owners form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 