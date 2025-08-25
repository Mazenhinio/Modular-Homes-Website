import { Pine3Client } from './Pine3Client'

export const metadata = {
  title: 'Willow - The Minimalist | 240 sq/ft Tiny Home | Discovery Homes',
  description: 'Willow: Minimalist tiny home with loft, 240 sq/ft starting at $99,000 CAD. Perfect as an office, rental, or weekend retreat. View floor plans and specifications.',
}

export default function Pine3Page() {
  return (
    <div className="animate-section">
      <Pine3Client />
    </div>
  )
} 