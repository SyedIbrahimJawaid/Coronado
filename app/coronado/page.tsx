import HeroSplit from '@/components/HeroSplit'
import FastPathCards from '@/components/FastPathCards'
import WhyChooseUs from '@/components/WhyChooseUs'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Island Real Estate | Crown Coronado',
  description: 'Your guide to Coronado Island real estate. Homes, condos, waterfront properties, and neighborhoods. AI-driven market insights and off-market access.',
  canonical: '/coronado/',
})

export default function CoronadoHubPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Coronado Island Real Estate',
          subheadline: 'Discover homes, condos, and waterfront properties across Coronado Island.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <FastPathCards
          content={{
            title: 'Explore Coronado',
            cards: [
              {
                title: 'Homes for Sale',
                subtitle: 'Walkable, classic Coronado',
                href: '/coronado/homes-for-sale/',
                image: '/homes.jpg',
              },
              {
                title: 'Condos',
                subtitle: 'Beachfront and village',
                href: '/coronado/condos-for-sale/',
                image: '/condos.jpg',
              },
              {
                title: 'Waterfront',
                subtitle: 'Basinfront docks',
                href: '/coronado/waterfront-homes/',
                image: '/waterfront.jpg',
              },
              {
                title: 'Luxury Homes',
                subtitle: 'Premium estates',
                href: '/coronado/luxury-homes/',
                image: '/homes.jpg',
              },
              {
                title: 'Coronado Shores',
                subtitle: 'Beachfront condos',
                href: '/coronado/coronado-shores/',
                image: '/shores.jpg',
              },
              {
                title: 'Coronado Cays',
                subtitle: 'Waterfront docks',
                href: '/coronado/coronado-cays/',
                image: '/cays.jpg',
              },
            ],
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <WhyChooseUs
          content={{
            title: 'Why Crown Coronado',
            cards: [
              {
                title: 'AI-Driven Market Analysis',
                body: 'Inventory, reductions, DOM, and demand signals to support better timing decisions.',
              },
              {
                title: 'Off-Market Access',
                body: 'Pocket listing access when available through our relationship-driven network.',
              },
              {
                title: 'Wishlist-Driven Hunting',
                body: 'We preview, shortlist, and actively hunt for the right match based on your criteria.',
              },
              {
                title: 'International Buyer Network',
                body: 'Distribution and demand awareness through our global investor email network.',
              },
            ],
            proofLine: 'Trusted by buyers and sellers across Coronado Island',
          }}
        />
      </div>
    </PageWrapper>
  )
}

