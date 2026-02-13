import HeroSplit from '@/components/HeroSplit'
import Steps from '@/components/Steps'
import FinalCTA from '@/components/FinalCTA'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Buying a Home in Coronado | Buyer Process | Crown Coronado',
  description: 'Your guide to buying a home in Coronado Island. Learn about the buying process, market insights, and how we help buyers find their perfect property.',
  canonical: '/buyers/',
})

export default function BuyersPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Buying a Home in Coronado',
          subheadline: 'Your trusted partner for finding the perfect Coronado property.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Homes for Sale', href: '/coronado/homes-for-sale/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <Steps
          content={{
            title: 'How We Help Buyers',
            steps: [
              {
                title: 'Wishlist & Criteria',
                description: 'We work with you to define your ideal property criteria and create a wishlist.',
              },
              {
                title: 'Market Analysis',
                description: 'AI-driven insights help identify timing opportunities and market conditions.',
              },
              {
                title: 'Active Hunting',
                description: 'We preview properties, shortlist matches, and actively hunt for your perfect home.',
              },
              {
                title: 'Off-Market Access',
                description: 'When available, we share pocket listings and off-market opportunities.',
              },
              {
                title: 'Negotiation & Closing',
                description: 'Expert negotiation and smooth closing process.',
              },
            ],
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <FinalCTA
          content={{
            title: 'Ready to Find Your Coronado Home?',
            subtitle: 'Get started with our Hot Sheet and buyer consultation.',
            formFields: [
              { key: 'name', label: 'Your Name', type: 'text', required: true },
              { key: 'email', label: 'Your Email', type: 'email', required: true },
            ],
            submitLabel: 'Get Started',
            privacyNote: 'We respect your privacy. Unsubscribe anytime.',
          }}
        />
      </div>
    </PageWrapper>
  )
}

