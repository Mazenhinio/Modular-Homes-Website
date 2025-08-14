# Discovery Homes Website

A luxurious, animation-rich website for Discovery Homes - delivering high-quality, sustainable, culturally-respectful modular housing across Western Canada.

## 🏠 About Discovery Homes

Discovery Homes believes a home is more than walls and a roof — it's a foundation for stronger families, thriving communities, and a better future. We deliver affordable, modular, ready-when-you-are housing solutions across Western Canada.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom Discovery Homes brand colors
- **Animations:** Framer Motion + GSAP ScrollTrigger + Lenis smooth scrolling
- **Forms:** React Hook Form + Zod validation
- **UI Components:** Radix UI primitives
- **Email:** SendGrid/Mailgun integration (configurable)
- **CRM:** HubSpot/Salesforce integration (configurable)
- **PDF Generation:** Puppeteer/jsPDF (configurable)

## 🎨 Brand Colors

- **Deep Charcoal:** `#2D2D2D`
- **Warm Gold/Amber:** `#D4AF37`
- **Clean White:** `#FFFFFF`

## 📁 Project Structure

```
Discovery Homes WEBSITE/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Main pages
│   │   ├── page.tsx              # Homepage
│   │   ├── our-builds/           # Pine 1, 2, 3 + Custom
│   │   ├── quote-builder/        # 8-step quote wizard
│   │   ├── success-stories/      # Testimonials & case studies
│   │   ├── partnerships/         # Indigenous communities focus
│   │   ├── blog/                 # Blog & Resources with categories
│   │   ├── contact/              # Contact form + map
│   │   ├── meet-the-owners/      # Aaron, Corey, Jeff profiles
│   │   ├── developers/           # Segment-specific landing page
│   │   ├── indigenous-communities/ # Segment-specific landing page
│   │   └── resort-owners/        # Segment-specific landing page
│   ├── api/                      # API routes
│   │   └── forms/                # Form submission handlers
│   ├── globals.css               # Global styles + Tailwind
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── sections/                 # Page sections
│   ├── forms/                    # Form components
│   ├── ui/                       # UI primitives
│   └── providers/                # Context providers
├── lib/                          # Utilities
│   ├── crmClient.ts              # CRM integration
│   ├── mailer.ts                 # Email service
│   └── pdfGenerator.ts           # PDF quote generation
├── content/                      # Content management
├── animations/                   # Animation utilities
└── public/images/                # Static assets
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Application
NEXT_PUBLIC_SITE_URL=https://www.discoveryhomes.ca
NODE_ENV=development

# Email Service (SendGrid/Mailgun)
EMAIL_API_KEY=your_email_api_key
FROM_EMAIL=hello@discoveryhomes.ca
NOTIFICATION_EMAIL=info@discoveryhomes.ca
SALES_EMAIL=sales@discoveryhomes.ca

# CRM Integration (HubSpot/Salesforce)
CRM_API_KEY=your_crm_api_key
CRM_BASE_URL=your_crm_base_url

# Sales Rep Assignment
INDIGENOUS_SALES_REP=aaron@discoveryhomes.ca
DEVELOPER_SALES_REP=corey@discoveryhomes.ca
RESORT_SALES_REP=jeff@discoveryhomes.ca
RURAL_SALES_REP=kyle@discoveryhomes.ca
GENERAL_SALES_REP=sales@discoveryhomes.ca

# Google Maps (for contact page)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id
```

### 3. Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### ✅ Completed Features

- **Homepage** with hero carousel, who we are, our builds, and CTAs
- **Our Builds** pages for Pine 1, Pine 2, Pine 3, and Custom options
- **Quote Builder** 8-step wizard with pricing calculation
- **Success Stories** with testimonials and before/after galleries
- **Partnerships** page focused on Indigenous communities
- **Blog & Resources** with category filtering and gated content
- **Contact** page with form, map, and calendar booking
- **Meet the Owners** profiles for Aaron, Corey, and Jeff
- **Segment Landing Pages** for Developers, Indigenous Communities, Resort Owners
- **Form Handling** with CRM integration and email automation
- **Newsletter System** with welcome emails and monthly insights
- **PDF Quote Generation** with branded templates
- **Animation System** with Framer Motion, GSAP, and Lenis
- **Responsive Design** optimized for all devices
- **SEO Optimization** with proper meta tags and structured data

### 🎨 Animation Features

- Page transitions with Framer Motion
- Hero video masked reveal with parallax text
- Quote Builder step transitions with progress indicators
- Scroll-triggered animations with GSAP ScrollTrigger
- Smooth scrolling with Lenis
- Interactive testimonial carousels
- Maya Chatbot with animated voice waveform
- Respect for `prefers-reduced-motion`

### 📧 Email & CRM Integration

- **Lead Capture:** All forms route to CRM with segment tagging
- **Email Automation:** Welcome emails, quote PDFs, notifications
- **Newsletter System:** Monthly insights with segment-specific content
- **Sales Assignment:** Automatic lead routing based on segment
- **PDF Quotes:** Branded quote documents with pricing breakdowns

## 🎨 Components Architecture

### Core Components
- `Navigation` - Main site navigation with mobile menu
- `Footer` - Site footer with links and contact info
- `MayaChatbot` - AI chat widget (culturally-aware)
- `CTABanner` - Persistent call-to-action banner
- `QuoteBuilderWizard` - 8-step quote generation form
- `NewsletterSignup` - Email subscription forms

### Section Components
- `HeroSection` - Homepage hero with video carousel
- `WhoWeAreSection` - Brand story and mission
- `OurBuildsSection` - Product showcase
- `WhoWeServeSection` - Target audience segments
- `TestimonialGrid` - Customer success stories
- `PartnershipsHero` - Indigenous community focus

### Animation Providers
- `SmoothScrollProvider` - Lenis smooth scrolling
- `AnimationProvider` - Global animation context
- `ToastProvider` - Form submission feedback

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** navigation and interactions
- **Optimized images** with WebP format and lazy loading
- **Fast loading** with Next.js optimization

## 🔧 Integration Notes

### CRM Integration (TODO)
Replace mock implementations in `lib/crmClient.ts` with actual CRM:
- **HubSpot:** Use HubSpot API for contact/deal management
- **Salesforce:** Use Salesforce REST API
- **Pipedrive:** Use Pipedrive API

### Email Service (TODO)
Replace mock implementations in `lib/mailer.ts` with actual service:
- **SendGrid:** Recommended for reliability and deliverability
- **Mailgun:** Alternative email service
- **Postmark:** Transactional email specialist

### PDF Generation (TODO)
Replace mock implementation in `lib/pdfGenerator.ts` with actual PDF generation:
- **Puppeteer:** HTML to PDF conversion (recommended)
- **jsPDF:** Client-side PDF generation
- **PDFKit:** Server-side PDF creation

## 📊 Content Strategy

### Blog Categories
- **Indigenous:** Funding, cultural considerations, partnerships
- **Developers:** Planning, costs, timelines, ROI
- **Resort Owners:** Revenue optimization, guest experience
- **Rural Living:** Off-grid solutions, land development
- **Net-Zero:** Sustainability, energy efficiency

### Lead Magnets
- ROI Calculator (resort owners)
- Funding Guide (Indigenous communities)
- Developer Planning Checklist
- Off-Grid Living Guide
- Land-to-Cash-Flow Guide

## 🚀 Performance Optimizations

- **Next.js Image Optimization** with WebP format
- **Code Splitting** with dynamic imports
- **Font Optimization** with Google Fonts
- **Bundle Analysis** for size optimization
- **Caching Strategy** for static assets
- **Lazy Loading** for images and components

## 🔒 Security Considerations

- **Form Validation** with Zod schemas
- **Rate Limiting** for API endpoints
- **Input Sanitization** for user data
- **CSRF Protection** for forms
- **Environment Variables** for sensitive data

## 📈 Analytics & Tracking

- **Google Analytics** for traffic analysis
- **Conversion Tracking** for form submissions
- **Heat Maps** for user behavior analysis
- **A/B Testing** for optimization
- **Lead Source Tracking** in CRM

## 🎭 Cultural Sensitivity

- **Indigenous Partnerships:** Respectful messaging and cultural consultation
- **Community Focus:** Local values and traditions honored
- **Inclusive Design:** Accessible to all users and abilities
- **Cultural Awareness:** Team training on respectful communication

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and updates.

## 👥 Team

- **Aaron Davis** - Project Manager & Vice President
- **Corey Davis** - Operations & Strategy  
- **Jeff Lorenz** - Community & Client Relations

## 📞 Support

For development questions or technical issues:
- **Email:** dev@discoveryhomes.ca
- **Website:** [www.discoveryhomes.ca](https://www.discoveryhomes.ca)

---

**Discovery Homes: Affordable. Modular. Ready When You Are.** 