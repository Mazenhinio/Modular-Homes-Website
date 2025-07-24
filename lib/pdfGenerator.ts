// Discovery Homes PDF Quote Generator
// TODO: Replace with actual PDF generation library (jsPDF, Puppeteer, etc.)

interface QuoteData {
  name: string
  email: string
  phone: string
  model: string
  estimatedPrice: number
  basePrice: number
  addOnsCost: number
  addOns: string[]
  propertyLocation?: string
  timeline?: string
  quoteNumber: string
  leadId: string
  validUntil: Date
  [key: string]: any
}

class PDFGeneratorService {
  
  async createQuote(quoteData: QuoteData): Promise<Buffer> {
    try {
      console.log('Generating PDF quote:', quoteData.quoteNumber)

      // TODO: Replace with actual PDF generation
      // Examples:
      // 1. Using jsPDF for client-side generation
      // 2. Using Puppeteer to convert HTML to PDF
      // 3. Using a service like PDFShift or HTMLToPDF

      // Mock implementation - would normally generate actual PDF
      const pdfContent = this.generateQuoteHTML(quoteData)
      
      // Convert HTML to PDF (mock)
      const pdfBuffer = Buffer.from(pdfContent, 'utf8')

      if (process.env.NODE_ENV === 'development') {
        console.log('📄 PDF Quote Generated:', {
          quoteNumber: quoteData.quoteNumber,
          model: quoteData.model,
          estimatedPrice: `$${quoteData.estimatedPrice.toLocaleString()}`,
          customer: quoteData.name,
          size: `${pdfBuffer.length} bytes`
        })
      }

      return pdfBuffer

    } catch (error) {
      console.error('PDF Error - Failed to generate quote:', error)
      throw new Error('Failed to generate PDF quote')
    }
  }

  private generateQuoteHTML(data: QuoteData): string {
    const currentDate = new Date().toLocaleDateString('en-CA')
    const validUntil = data.validUntil.toLocaleDateString('en-CA')
    
    const modelDescriptions = {
      'pine-1': 'The Efficient One - 504 sq/ft, 1 Bedroom',
      'pine-2': 'The Versatile One - 504 sq/ft, 2 Bedroom with Loft', 
      'pine-3': 'The Minimalist - 240 sq/ft with Loft',
      'custom': 'Custom Modular Home'
    }

    const addOnDescriptions = {
      'solar': 'Solar Panel System',
      'net-zero': 'Net-Zero Ready Package',
      'off-grid': 'Off-Grid Complete System',
      'upgraded-finishes': 'Upgraded Interior Finishes',
      'deck': 'Deck and Outdoor Space',
      'garage': 'Attached Garage'
    }

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Discovery Homes Quote - ${data.quoteNumber}</title>
        <style>
          @page {
            margin: 20mm;
            @top-center {
              content: "Discovery Homes - Affordable. Modular. Ready When You Are.";
              font-size: 10pt;
              color: #666;
            }
          }
          
          body {
            font-family: 'Helvetica', Arial, sans-serif;
            line-height: 1.6;
            color: #2D2D2D;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #D4AF37;
            padding-bottom: 20px;
          }
          
          .logo {
            font-size: 28pt;
            font-weight: bold;
            color: #2D2D2D;
            margin-bottom: 10px;
          }
          
          .tagline {
            font-size: 12pt;
            color: #737373;
            margin-bottom: 20px;
          }
          
          .quote-header {
            background-color: #F5F5F5;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
          }
          
          .quote-number {
            font-size: 18pt;
            font-weight: bold;
            color: #D4AF37;
            margin-bottom: 10px;
          }
          
          .customer-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .price-summary {
            background-color: #D4AF37;
            color: #2D2D2D;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 30px;
          }
          
          .price-summary .total {
            font-size: 24pt;
            font-weight: bold;
            margin-bottom: 10px;
          }
          
          .breakdown-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          
          .breakdown-table th,
          .breakdown-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #E5E5E5;
          }
          
          .breakdown-table th {
            background-color: #F5F5F5;
            font-weight: bold;
          }
          
          .breakdown-table .price {
            text-align: right;
            font-weight: bold;
          }
          
          .model-features {
            margin-bottom: 30px;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 15px;
          }
          
          .feature-item {
            display: flex;
            align-items: center;
          }
          
          .feature-item::before {
            content: "✓";
            color: #D4AF37;
            font-weight: bold;
            margin-right: 8px;
          }
          
          .next-steps {
            background-color: #F5F5F5;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          
          .contact-info {
            text-align: center;
            color: #737373;
            font-size: 10pt;
            margin-top: 40px;
            border-top: 1px solid #E5E5E5;
            padding-top: 20px;
          }
          
          .valid-until {
            color: #D4AF37;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">Discovery Homes</div>
          <div class="tagline">Affordable. Modular. Ready When You Are.</div>
        </div>

        <div class="quote-header">
          <div class="quote-number">Quote #${data.quoteNumber}</div>
          <div>Date: ${currentDate}</div>
          <div class="valid-until">Valid Until: ${validUntil}</div>
        </div>

        <div class="customer-info">
          <div>
            <h3>Prepared For:</h3>
            <p><strong>${data.name}</strong><br>
            ${data.email}<br>
            ${data.phone}</p>
            ${data.propertyLocation ? `<p><strong>Property Location:</strong><br>${data.propertyLocation}</p>` : ''}
          </div>
          <div>
            <h3>Project Details:</h3>
            <p><strong>Model:</strong> ${data.model.toUpperCase()}<br>
            ${modelDescriptions[data.model as keyof typeof modelDescriptions] || 'Custom Configuration'}</p>
            ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
          </div>
        </div>

        <div class="price-summary">
          <div class="total">$${data.estimatedPrice.toLocaleString()} CAD</div>
          <div>Estimated Total Price</div>
        </div>

        <table class="breakdown-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th class="price">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${data.model.toUpperCase()} Base Model</strong></td>
              <td>${modelDescriptions[data.model as keyof typeof modelDescriptions] || 'Custom Configuration'}</td>
              <td class="price">$${data.basePrice.toLocaleString()}</td>
            </tr>
            ${data.addOns.map(addOn => `
              <tr>
                <td>${addOnDescriptions[addOn as keyof typeof addOnDescriptions] || addOn}</td>
                <td>Premium upgrade option</td>
                <td class="price">$${this.getAddOnPrice(addOn).toLocaleString()}</td>
              </tr>
            `).join('')}
            ${data.addOnsCost > 0 ? `
              <tr style="border-top: 2px solid #D4AF37;">
                <td colspan="2"><strong>Total Add-Ons</strong></td>
                <td class="price"><strong>$${data.addOnsCost.toLocaleString()}</strong></td>
              </tr>
            ` : ''}
            <tr style="border-top: 2px solid #D4AF37; background-color: #F5F5F5;">
              <td colspan="2"><strong>TOTAL ESTIMATED PRICE</strong></td>
              <td class="price"><strong>$${data.estimatedPrice.toLocaleString()} CAD</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="model-features">
          <h3>What's Included:</h3>
          <div class="features-grid">
            <div class="feature-item">Energy-efficient construction</div>
            <div class="feature-item">Quality interior finishes</div>
            <div class="feature-item">Modern kitchen appliances</div>
            <div class="feature-item">Full bathroom with fixtures</div>
            <div class="feature-item">Electrical and plumbing rough-in</div>
            <div class="feature-item">Insulation and vapor barrier</div>
            <div class="feature-item">Exterior siding and roofing</div>
            <div class="feature-item">Windows and exterior doors</div>
            <div class="feature-item">Interior doors and trim</div>
            <div class="feature-item">Flooring throughout</div>
            <div class="feature-item">Factory quality control</div>
            <div class="feature-item">Delivery to your site</div>
          </div>
        </div>

        <div class="next-steps">
          <h3>Next Steps:</h3>
          <ol>
            <li><strong>Review this quote</strong> - Take time to consider the options and pricing</li>
            <li><strong>Schedule a consultation</strong> - We'll discuss your project in detail</li>
            <li><strong>Site assessment</strong> - We'll evaluate your property for preparation requirements</li>
            <li><strong>Finalize design</strong> - Work with our team to customize your home</li>
            <li><strong>Contract and timeline</strong> - Secure your build slot and confirm delivery</li>
            <li><strong>Site preparation</strong> - Prepare your foundation and utilities</li>
            <li><strong>Delivery and setup</strong> - Your new home arrives in 60 days!</li>
          </ol>
        </div>

        <div style="margin: 30px 0; padding: 20px; background-color: #2D2D2D; color: white; border-radius: 8px;">
          <h3 style="color: #D4AF37; margin-top: 0;">Why Choose Discovery Homes?</h3>
          <p style="margin: 0;">
            "At Discovery Homes, we believe a home is more than walls and a roof — it's a foundation for stronger families, 
            thriving communities, and a better future. We exist to make high‑quality, sustainable, and culturally‑respectful 
            housing accessible to everyone, no matter where they live or what challenges they face."
          </p>
          <p style="margin: 10px 0 0 0; text-align: right; font-style: italic;">
            — Aaron, Corey & Jeff, Discovery Homes Owners
          </p>
        </div>

        <div class="contact-info">
          <p><strong>Discovery Homes</strong><br>
          Lloydminster, SK/AB<br>
          Email: sales@discoveryhomes.ca<br>
          Phone: {{COPY_FROM_DOC: Phone Number}}<br>
          Web: www.discoveryhomes.ca</p>
          
          <p style="margin-top: 20px; font-size: 9pt;">
            This quote is valid for 30 days from the date issued. Prices are estimates and subject to final design confirmation, 
            site conditions, and material availability. Does not include site preparation, foundation, utilities connection, 
            permits, or delivery beyond standard access.
          </p>
        </div>
      </body>
      </html>
    `
  }

  private getAddOnPrice(addOn: string): number {
    const addOnPrices = {
      'solar': 15000,
      'net-zero': 25000,
      'off-grid': 35000,
      'upgraded-finishes': 8000,
      'deck': 5000,
      'garage': 12000
    }
    
    return addOnPrices[addOn as keyof typeof addOnPrices] || 0
  }
}

// Export singleton instance
export const pdfGenerator = new PDFGeneratorService()

// Export types
export type { QuoteData } 