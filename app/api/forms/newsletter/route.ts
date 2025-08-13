import { NextRequest, NextResponse } from 'next/server'
import { crmClient } from '@/lib/crmClient'
import { mailer } from '@/lib/mailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { email, name, segment } = body
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
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

    // Create newsletter subscription data
    const subscriptionData = {
      email,
      name: name || '',
      segment: segment || 'general',
      source: 'newsletter-signup',
      tags: ['newsletter-subscriber', segment || 'general'],
      status: 'subscribed',
      subscribedAt: new Date().toISOString(),
      ip: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      preferences: {
        newsletter: true,
        productUpdates: true,
        marketingEmails: false
      }
    }

    // Check if email already exists in CRM
    const existingSubscriber = await crmClient.findSubscriber(email)
    
    if (existingSubscriber) {
      // Update existing subscriber
      await crmClient.updateSubscriber(email, {
        ...subscriptionData,
        updatedAt: new Date().toISOString()
      })
    } else {
      // Create new subscriber
      await crmClient.createSubscriber(subscriptionData)
    }
    
    // Send welcome email with newsletter content
    await mailer.sendNewsletterWelcome({
      to: email,
      name: name || 'Friend',
      segment: segment || 'general'
    })
    
    // Send internal notification for new high-value segments
    if (['indigenous-community', 'developer', 'resort-owner'].includes(segment)) {
      await mailer.sendNotification({
        to: process.env.SALES_EMAIL || 'sales@discoveryhomes.ca',
        subject: `High-Value Newsletter Signup - ${segment}`,
        data: subscriptionData
      })
    }

    return NextResponse.json({
      success: true,
      message: existingSubscriber 
        ? 'Your subscription preferences have been updated!'
        : 'Thank you for subscribing! Check your email for our monthly insights.',
      isNewSubscriber: !existingSubscriber
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to subscribe. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
} 