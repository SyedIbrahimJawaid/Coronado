import HeroSplit from '@/components/HeroSplit'
import Steps from '@/components/Steps'
import FinalCTA from '@/components/FinalCTA'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Selling Your Coronado Home | Seller Process | Crown Coronado',
  description: 'Sell your Coronado Island home with expert guidance. Market analysis, pricing strategy, and access to qualified buyers including international investors.',
  canonical: '/sellers/',
})

export default function SellersPage() {
  return (
    <div className="min-h-screen">
      <HeroSplit
        content={{
          headline: 'Selling Your Coronado Home',
          subheadline: 'Expert guidance for maximizing your property value and finding the right buyer.',
          primaryCTA: { label: 'Get Market Analysis', href: '/coronado/market-report/' },
          secondaryCTA: { label: 'Contact Us', href: '/contact/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <Steps
          content={{
            title: 'How We Help Sellers',
            steps: [
              {
                title: 'Market Analysis',
                description: 'AI-driven market insights help determine optimal pricing and timing.',
              },
              {
                title: 'Pricing Strategy',
                description: 'Data-backed pricing recommendations to maximize value.',
              },
              {
                title: 'Marketing & Exposure',
                description: 'Professional marketing and access to our buyer network including international investors.',
              },
              {
                title: 'Showings & Negotiation',
                description: 'Coordinated showings and expert negotiation on your behalf.',
              },
              {
                title: 'Closing Support',
                description: 'Smooth closing process with attention to detail.',
              },
            ],
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <FinalCTA
          content={{
            title: 'Ready to Sell Your Coronado Home?',
            subtitle: 'Get a free market analysis and consultation.',
            formFields: [
              { key: 'name', label: 'Your Name', type: 'text', required: true },
              { key: 'email', label: 'Your Email', type: 'email', required: true },
              { key: 'property', label: 'Property Address', type: 'text', required: false },
            ],
            submitLabel: 'Request Consultation',
            privacyNote: 'We respect your privacy. Unsubscribe anytime.',
          }}
        />
      </div>
    </div>
  )
}

