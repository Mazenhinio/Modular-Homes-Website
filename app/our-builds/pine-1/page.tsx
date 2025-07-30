import { Pine1Client } from './Pine1Client'

export const metadata = {
  title: 'Pine 1 - The Efficient One | 504 sq/ft Modular Home | Discovery Homes',
  description: 'Pine 1: 1 bedroom, 504 sq/ft modular home starting at $174,000 CAD. Perfect for singles, couples, or resort units. View floor plans and specifications.',
}

export default function Pine1Page() {
  return (
    <div className="animate-section">
      <Pine1Client />
    </div>
  )
} 