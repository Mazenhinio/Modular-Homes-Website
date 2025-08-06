import { Pine2Client } from './Pine2Client'

export const metadata = {
  title: 'Pine 2 - The Versatile One | 504 sq/ft + Loft Modular Home | Discovery Homes',
  description: 'Pine 2: 2 bedroom with loft, 504 sq/ft modular home starting at $179,000 CAD. Perfect for families or rental markets. View floor plans and specifications.',
}

export default function Pine2Page() {
  return (
    <div className="animate-section">
      <Pine2Client />
    </div>
  )
} 