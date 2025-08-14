// Discovery Homes PDF Quote Generator
// We resolve browser at runtime to support both Vercel serverless and local dev
// - On Vercel: puppeteer-core + @sparticuz/chromium
// - Locally: full puppeteer (auto-downloads Chromium)

interface QuoteData {
  name: string
  email: string
  phone: string
  model: string
  estimatedPrice: number
  basePrice: number
  addOnsCost: number
  addOns: string[]
  propertyLocation: string
  timeline: string
  quoteNumber: string
  leadId: string
  validUntil: Date
  landStatus: string
  intendedUse: string
  bedrooms: string
  bathrooms: string
  sqft: string
  budget: string
  isIndigenous: string
  numberOfHomes: string
  financing: string
}

export class PDFGeneratorService {
  private getModelName(model: string): string {
    const modelNames = {
      'pine1': 'Pine 1',
      'pine2': 'Pine 2', 
      'pine3': 'Pine 3',
      'custom': 'Custom Build'
    }
    return modelNames[model as keyof typeof modelNames] || 'Custom Build'
  }

  private getAddOnPrice(addOn: string): number {
    const addOnPrices = {
      'solar': 25000,
      'net-zero': 35000,
      'off-grid': 40000,
      'loft': 15000,
      'deck': 8000,
      'appliances': 12000,
      'smart-home': 5000,
      
    }
    return addOnPrices[addOn as keyof typeof addOnPrices] || 0
  }

  private getAddOnDescription(addOn: string): string {
    const addOnDescriptions = {
      'solar': 'Solar Panel System',
      'net-zero': 'Net-Zero Ready Package',
      'off-grid': 'Off-Grid Complete System',
      'loft': 'Additional Floor Space',
      'deck': 'Deck and Outdoor Space',
      'appliances': 'Upgraded Appliances',
      'smart-home': 'Smart Home Package',
      
    }
    return addOnDescriptions[addOn as keyof typeof addOnDescriptions] || addOn
  }

  async createQuote(quoteData: QuoteData): Promise<Buffer> {
    const htmlContent = this.generateHTML(quoteData)
    const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))
    
    try {
      const isServerless = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME
      let browser: any
      if (isServerless) {
        const chromium = (await import('@sparticuz/chromium')).default
        const puppeteer = (await import('puppeteer-core')).default
        const executablePath = await chromium.executablePath()
        browser = await puppeteer.launch({
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath,
          headless: true
        })
      } else {
        const puppeteer = (await import('puppeteer')).default
        browser = await puppeteer.launch({ headless: 'new' as any })
      }
      
      const page = await browser.newPage()
      // Be lenient with load conditions to avoid timeouts in serverless
      page.setDefaultNavigationTimeout(60000)
      await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' })
      await page.emulateMediaType('screen')
      await delay(300)
      
      // Generate PDF
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm'
        }
      })
      
      await browser.close()
      return Buffer.from(pdfBuffer)
      
    } catch (error) {
      console.error('PDF generation error:', error)
      throw new Error('Failed to generate PDF')
    }
  }

  private generateHTML(quoteData: QuoteData): string {
    const modelName = this.getModelName(quoteData.model)
    const formattedPrice = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(quoteData.estimatedPrice)
    
    const formattedBasePrice = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(quoteData.basePrice)
    
    const formattedAddOnsCost = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    }).format(quoteData.addOnsCost)

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Discovery Homes Quote - ${quoteData.quoteNumber}</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #2D2D2D;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #2D2D2D;
            margin-bottom: 10px;
          }
          .quote-number {
            font-size: 18px;
            color: #666;
            margin-bottom: 10px;
          }
          .date {
            font-size: 14px;
            color: #888;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #2D2D2D;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 8px;
            margin-bottom: 15px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }
          .info-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #2D2D2D;
          }
          .info-label {
            font-weight: bold;
            color: #2D2D2D;
            margin-bottom: 5px;
          }
          .info-value {
            color: #555;
          }
          .price-breakdown {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .price-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #e0e0e0;
          }
          .price-row:last-child {
            border-bottom: none;
            font-weight: bold;
            font-size: 18px;
            color: #2D2D2D;
          }
          .addons-list {
            margin-top: 15px;
          }
          .addon-item {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            color: #666;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            text-align: center;
            color: #666;
            font-size: 14px;
          }
          .valid-until {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 10px;
            border-radius: 6px;
            margin-top: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Discovery Homes</div>
            <div class="quote-number">Quote #${quoteData.quoteNumber}</div>
            <div class="date">Generated: ${new Date().toLocaleDateString('en-CA')}</div>
          </div>

          <div class="section">
            <div class="section-title">Customer Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Name</div>
                <div class="info-value">${quoteData.name}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${quoteData.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${quoteData.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Property Location</div>
                <div class="info-value">${quoteData.propertyLocation}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Project Details</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Selected Model</div>
                <div class="info-value">${modelName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Land Status</div>
                <div class="info-value">${quoteData.landStatus}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Intended Use</div>
                <div class="info-value">${quoteData.intendedUse}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Timeline</div>
                <div class="info-value">${quoteData.timeline}</div>
              </div>
                             <div class="info-item">
                 <div class="info-label">Bedrooms</div>
                 <div class="info-value">${quoteData.bedrooms}</div>
               </div>
               <div class="info-item">
                 <div class="info-label">Bathrooms</div>
                 <div class="info-value">${quoteData.bathrooms}</div>
               </div>
               <div class="info-item">
                 <div class="info-label">Square Footage</div>
                 <div class="info-value">${quoteData.sqft}</div>
               </div>
              <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${quoteData.budget}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Indigenous Community</div>
                <div class="info-value">${quoteData.isIndigenous}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Number of Homes</div>
                <div class="info-value">${quoteData.numberOfHomes}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Financing</div>
                <div class="info-value">${quoteData.financing}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Price Breakdown</div>
            <div class="price-breakdown">
              <div class="price-row">
                <span>Base Price (${modelName})</span>
                <span>${formattedBasePrice}</span>
              </div>
              ${quoteData.addOns.length > 0 ? `
                <div class="addons-list">
                  ${quoteData.addOns.map(addon => `
                    <div class="addon-item">
                      <span>${this.getAddOnDescription(addon)}</span>
                      <span>${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(this.getAddOnPrice(addon))}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="price-row">
                  <span>Add-ons Total</span>
                  <span>${formattedAddOnsCost}</span>
                </div>
              ` : ''}
              <div class="price-row">
                <span>Estimated Total</span>
                <span>${formattedPrice}</span>
              </div>
            </div>
          </div>

          <div class="valid-until">
            <strong>This quote is valid until:</strong> ${quoteData.validUntil.toLocaleDateString('en-CA')}
          </div>

          <div class="footer">
            <p>Thank you for choosing Discovery Homes!</p>
            <p>For questions about this quote, please contact us at info@discoveryhomes.ca</p>
            <p>Lead ID: ${quoteData.leadId}</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
}

export const pdfGenerator = new PDFGeneratorService() 