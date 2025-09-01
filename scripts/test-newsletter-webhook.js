#!/usr/bin/env node

/**
 * Test script for Go High Level webhook integration
 * Run with: node scripts/test-newsletter-webhook.js
 */

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/c59e4361-6b59-4868-8bb3-2acb6ea8822d'

async function testWebhook() {
  console.log('🧪 Testing Go High Level webhook integration...\n')

  const testData = {
    email: 'test@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '',
    segment: 'developer',
    source: 'newsletter-signup',
    tags: ['newsletter-subscriber', 'developer'],
    customFields: {
      interest_segment: 'developer',
      subscription_source: 'newsletter-signup',
      subscribed_at: new Date().toISOString(),
      ip_address: '127.0.0.1',
      user_agent: 'Test Script'
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
      console.log('The webhook is properly configured and accepting data.')
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
