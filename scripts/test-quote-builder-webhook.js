#!/usr/bin/env node

/**
 * Test script for Quote Builder Go High Level webhook integration
 * Run with: node scripts/test-quote-builder-webhook.js
 */

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/c2fda141-5868-44b2-a87f-0e712f8dcd5f'

async function testWebhook() {
  console.log('🧪 Testing Quote Builder Go High Level webhook integration...\n')

  const testData = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1-555-123-4567',
    segment: 'quote-builder',
    source: 'quote-builder-step1',
    tags: ['quote-builder', 'contact-info'],
    customFields: {
      lead_source: 'quote-builder',
      contact_step: 'step1',
      submitted_at: new Date().toISOString(),
      ip_address: '127.0.0.1',
      user_agent: 'Test Script',
      form_progress: 'contact-info-completed'
    }
  }

  try {
    console.log('📤 Sending test data to webhook...')
    console.log('Data:', JSON.stringify(testData, null, 2))
    console.log('')

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })

    console.log('📥 Response Status:', response.status)
    console.log('📥 Response Status Text:', response.statusText)

    const responseText = await response.text()
    console.log('📥 Response Body:', responseText)

    if (response.ok) {
      console.log('\n✅ Webhook test successful!')
      console.log('The quote builder webhook is properly configured and accepting data.')
    } else {
      console.log('\n❌ Webhook test failed!')
      console.log('Check the response above for error details.')
    }

  } catch (error) {
    console.error('\n💥 Webhook test error:', error.message)
    console.log('This could indicate a network issue or invalid webhook URL.')
  }
}

// Run the test
testWebhook()
