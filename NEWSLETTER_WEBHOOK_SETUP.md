# Webhook Integration with Go High Level

## Overview

This website now has two webhook integrations with your Go High Level workflow:

1. **Newsletter Signup** - When users subscribe to the newsletter
2. **Quote Builder Contact Info** - When users complete step 1 of the quote builder

Both integrations automatically send lead information to your Go High Level system for lead management and automation.

## Webhook URLs

### Newsletter Signup
```
https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/c59e4361-6b59-4868-8bb3-2acb6ea8822d
```

### Quote Builder Contact Info
```
https://services.leadconnectorhq.com/hooks/02vJIYEzMsesDcYai65O/webhook-trigger/c2fda141-5868-44b2-a87f-0e712f8dcd5f
```

## Data Structures Sent to Webhooks

### Newsletter Signup Data
When a user subscribes to the newsletter, the following data is sent:

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "",
  "segment": "developer",
  "source": "newsletter-signup",
  "tags": ["newsletter-subscriber", "developer"],
  "customFields": {
    "interest_segment": "developer",
    "subscription_source": "newsletter-signup",
    "subscribed_at": "2025-09-01T12:21:48.273Z",
    "ip_address": "127.0.0.1",
    "user_agent": "Mozilla/5.0..."
  }
}
```

### Quote Builder Contact Info Data
When a user completes step 1 of the quote builder, the following data is sent:

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1-555-123-4567",
  "segment": "quote-builder",
  "source": "quote-builder-step1",
  "tags": ["quote-builder", "contact-info"],
  "customFields": {
    "lead_source": "quote-builder",
    "contact_step": "step1",
    "submitted_at": "2025-09-01T12:21:48.273Z",
    "ip_address": "127.0.0.1",
    "user_agent": "Mozilla/5.0...",
    "form_progress": "contact-info-completed"
  }
}
```

## Available Segments

### Newsletter Segments
- `indigenous` - Indigenous Community
- `developer` - Developer
- `resort-owner` - Resort Owner
- `rural-living` - Rural Living
- `net-zero` - Net-Zero/Off-Grid
- `general` - General Interest

### Quote Builder Segments
- `quote-builder` - Quote Builder Lead

## Implementation Details

### Newsletter API Route
- **File**: `app/api/forms/newsletter/route.ts`
- **Endpoint**: `POST /api/forms/newsletter`
- **Trigger**: Newsletter form submission
- **Features**:
  - Validates email format
  - Sends data to Go High Level webhook
  - Falls back to existing CRM system if webhook fails
  - Sends welcome email
  - Sends internal notifications for high-value segments

### Quote Builder Webhook API Route
- **File**: `app/api/forms/quote-builder-webhook/route.ts`
- **Endpoint**: `POST /api/forms/quote-builder-webhook`
- **Trigger**: Moving from step 1 to step 2 in quote builder
- **Features**:
  - Validates required contact fields
  - Sends contact information to Go High Level webhook
  - Continues form progression even if webhook fails
  - Logs success/failure for monitoring

### Frontend Components
- **Newsletter**: `components/sections/NewsletterSection.tsx`
- **Quote Builder**: `app/quote-builder/page.tsx`
- **Features**:
  - Real-time form validation
  - Loading states during submission
  - Success/error message handling
  - Responsive design

## Testing

You can test both webhook integrations using the provided test scripts:

```bash
# Test newsletter webhook
node scripts/test-newsletter-webhook.js

# Test quote builder webhook
node scripts/test-quote-builder-webhook.js
```

These scripts will send test payloads to your webhooks and verify they're working correctly.

## Go High Level Workflow Setup

### Newsletter Workflow
Configure your Go High Level workflow to:

1. **Receive the webhook data** from newsletter signup
2. **Create/update contacts** with the provided information
3. **Apply appropriate tags** based on the segment
4. **Trigger follow-up sequences** for new subscribers
5. **Route leads** to appropriate team members based on segment

### Quote Builder Workflow
Configure your Go High Level workflow to:

1. **Receive the webhook data** from quote builder step 1
2. **Create/update contacts** with contact information
3. **Apply tags** like "quote-builder", "contact-info"
4. **Set lead score** based on quote builder engagement
5. **Route to sales team** for immediate follow-up
6. **Trigger nurture sequence** while user completes the form

### Recommended Workflow Steps

#### Newsletter Workflow
1. **Webhook Trigger** - Receives the newsletter signup data
2. **Contact Creation/Update** - Creates or updates the contact in your CRM
3. **Tag Assignment** - Applies relevant tags (newsletter-subscriber, segment-specific)
4. **Welcome Email** - Sends immediate welcome message
5. **Lead Scoring** - Assigns lead score based on segment
6. **Team Assignment** - Routes to appropriate sales rep
7. **Follow-up Sequence** - Initiates nurture sequence

#### Quote Builder Workflow
1. **Webhook Trigger** - Receives the quote builder contact data
2. **Contact Creation/Update** - Creates or updates the contact in your CRM
3. **Tag Assignment** - Applies tags (quote-builder, contact-info)
4. **Lead Scoring** - Assigns higher lead score for quote builder engagement
5. **Team Assignment** - Routes to sales team for immediate follow-up
6. **Follow-up Sequence** - Initiates quote-specific nurture sequence
7. **Reminder Sequence** - Sends reminders if user doesn't complete the form

## Error Handling

The system includes robust error handling:

- **Webhook Failures**: Newsletter falls back to existing CRM system
- **Network Issues**: Shows user-friendly error messages
- **Validation Errors**: Prevents invalid data submission
- **Duplicate Submissions**: Handles existing subscribers gracefully
- **Form Continuity**: Quote builder continues even if webhook fails

## Monitoring

Monitor the webhook integrations through:

- **Server Logs**: Check for webhook success/failure messages
- **Go High Level Dashboard**: Verify contacts are being created
- **Email Deliverability**: Monitor welcome email delivery
- **Lead Quality**: Track conversion rates by segment
- **Form Completion**: Monitor quote builder completion rates

## Customization

To modify the webhook integrations:

1. **Add Fields**: Update the data structure in the respective API routes
2. **Change Segments**: Modify the segments arrays in the frontend components
3. **Update Webhook URLs**: Change the `GHL_WEBHOOK_URL` constants if needed
4. **Modify Tags**: Update the tags arrays to match your Go High Level setup
5. **Add Triggers**: Add webhook calls to other form steps as needed

## Security

- All form submissions are validated server-side
- Email addresses are validated for proper format
- No sensitive data is logged in production
- Webhook failures are handled gracefully without exposing internal errors
- Form progression continues even if webhook delivery fails
