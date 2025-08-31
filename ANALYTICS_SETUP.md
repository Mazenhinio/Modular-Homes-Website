# Analytics Setup Guide for Discovery Homes

This guide covers how to set up and manage analytics for your Discovery Homes website.

## 🚀 Quick Start

### 1. Vercel Analytics (Already Enabled)
- Go to your Vercel dashboard → Project → Analytics tab
- Click "Enable Analytics" if not already enabled
- No code changes needed - this is automatic

### 2. Google Analytics 4 Setup
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for "Discovery Homes"
3. Get your Measurement ID (starts with "G-")
4. Create `.env.local` file in your project root:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA_ENABLED=true
```

5. Replace `G-XXXXXXXXXX` with your actual Measurement ID
6. Deploy to Vercel

## 📊 What's Already Tracked

### Automatic Tracking
- **Page Views**: Every page visit is automatically tracked
- **Quote Builder**: Tracks when users start the quote process
- **Performance**: Vercel automatically tracks Core Web Vitals

### Business Events (Ready to Use)
```typescript
import { trackBusinessEvent } from '@/lib/analytics'

// Quote events
trackBusinessEvent.quoteStarted()
trackBusinessEvent.quoteCompleted(250000) // with value
trackBusinessEvent.quoteDownloaded('pine1')

// Contact events
trackBusinessEvent.contactFormSubmitted('contact-page')
trackBusinessEvent.consultationScheduled('phone')

// Content events
trackBusinessEvent.contentDownloaded('brochure', 'pine1-specs')
trackBusinessEvent.webinarRegistered('modular-homes-101')

// Property interest
trackBusinessEvent.propertyTypeViewed('pine1')
trackBusinessEvent.customBuildViewed('lakeside-retreat')
```

## 🔧 Adding More Analytics Tools

### Facebook Pixel
1. Get your Pixel ID from Facebook Business Manager
2. Add to `.env.local`:
```bash
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=123456789
NEXT_PUBLIC_FACEBOOK_PIXEL_ENABLED=true
```

### LinkedIn Insight Tag
1. Get your Partner ID from LinkedIn Campaign Manager
2. Add to `.env.local`:
```bash
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=123456
NEXT_PUBLIC_LINKEDIN_INSIGHT_ENABLED=true
```

### Hotjar (User Behavior Analytics)
1. Get your Hotjar ID from Hotjar dashboard
2. Add to `.env.local`:
```bash
NEXT_PUBLIC_HOTJAR_ID=1234567
NEXT_PUBLIC_HOTJAR_ENABLED=true
```

## 📈 Key Metrics to Track

### Business Metrics
- **Quote Conversions**: How many people start vs. complete quotes
- **Lead Generation**: Contact form submissions, consultation bookings
- **Content Engagement**: Downloads, webinar registrations
- **Property Interest**: Which models get the most views

### User Experience Metrics
- **Page Performance**: Load times, Core Web Vitals
- **User Journey**: How users navigate through your site
- **Mobile vs Desktop**: Device usage patterns
- **Geographic Data**: Where your visitors are located

## 🎯 Setting Up Goals in Google Analytics

### 1. Quote Completion Goal
- **Goal Type**: Event
- **Event Name**: `quote_completed`
- **Value**: Yes

### 2. Contact Form Submission Goal
- **Goal Type**: Event
- **Event Name**: `contact_form_submitted`
- **Value**: Yes

### 3. Consultation Booking Goal
- **Goal Type**: Event
- **Event Name**: `consultation_scheduled`
- **Value**: Yes

## 🔍 Testing Analytics

### Development Mode
- Analytics events are logged to console in development
- Check browser console for event tracking

### Production Verification
1. Use Google Analytics Real-Time reports
2. Check Vercel Analytics dashboard
3. Use browser developer tools to verify scripts are loading

## 📱 Mobile Analytics

All analytics tools automatically work on mobile devices. Key mobile metrics:
- Mobile vs Desktop usage
- Mobile page performance
- Touch interactions and mobile user behavior

## 🚨 Troubleshooting

### Common Issues
1. **Google Analytics not tracking**: Check Measurement ID in environment variables
2. **Events not firing**: Verify `trackBusinessEvent` functions are imported
3. **Vercel Analytics not showing**: Wait 24-48 hours for initial data

### Debug Mode
```typescript
// Add this to any component to debug analytics
useEffect(() => {
  console.log('Analytics Config:', analyticsConfig)
}, [])
```

## 🔐 Privacy & Compliance

### GDPR Compliance
- Analytics respect user privacy settings
- No personally identifiable information is tracked
- Users can opt-out through browser settings

### Cookie Policy
- Update your privacy policy to mention analytics cookies
- Include opt-out instructions for users

## 📚 Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
- [LinkedIn Insight Tag Documentation](https://www.linkedin.com/help/lms/answer/a413628)

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify environment variables are set correctly
3. Ensure all packages are installed (`npm install`)
4. Check that the AnalyticsProvider is wrapping your app in layout.tsx

---

**Last Updated**: December 2024
**Version**: 1.0
