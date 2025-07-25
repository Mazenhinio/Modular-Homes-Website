import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { MayaChatbot } from '@/components/MayaChatbot'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import { ToastProvider } from '@/components/providers/ToastProvider'

export const metadata: Metadata = {
  title: 'Discovery Homes | Affordable Modular Homes | Ready When You Are',
  description: 'Discovery Homes delivers high-quality, sustainable, culturally-respectful modular housing across Western Canada. From Indigenous communities to off-grid acreage buyers to resort owners.',
  keywords: [
    'modular homes',
    'affordable housing',
    'sustainable homes',
    'Indigenous housing',
    'off-grid homes',
    'Western Canada',
    'Discovery Homes',
    'net-zero homes',
    'custom modular',
    'resort housing'
  ],
  authors: [{ name: 'Discovery Homes' }],
  creator: 'Discovery Homes',
  publisher: 'Discovery Homes',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.discoveryhomes.ca',
    title: 'Discovery Homes | Affordable Modular Homes | Ready When You Are',
    description: 'High-quality, sustainable, culturally-respectful modular housing across Western Canada.',
    siteName: 'Discovery Homes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Discovery Homes - Affordable Modular Housing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discovery Homes | Affordable Modular Homes',
    description: 'High-quality, sustainable, culturally-respectful modular housing across Western Canada.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <AnimationProvider>
          <SmoothScrollProvider>
            <ToastProvider>
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <MayaChatbot />
            </ToastProvider>
          </SmoothScrollProvider>
        </AnimationProvider>
      </body>
    </html>
  )
} 