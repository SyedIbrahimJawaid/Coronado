import type { Metadata } from 'next'
import './globals.css'
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import { RealEstateAgentSchema } from '@/lib/schema/real-estate-agent'

export const metadata: Metadata = {
  title: 'Crown Coronado - Coronado Island Real Estate',
  description: 'Find your place in Coronado. Homes, condos, waterfront – plus off-market access.',
  icons: {
    icon: '/crown-coronado-logo.png',
    apple: '/crown-coronado-logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <RealEstateAgentSchema />
      </head>
      <body>
        <HeaderNav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

