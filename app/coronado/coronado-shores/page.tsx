import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Shores Condos for Sale | Crown Coronado',
  description: 'Browse Coronado Shores beachfront condos. Resort-style living with ocean views.',
  canonical: '/coronado/coronado-shores/',
})

export default function CoronadoShoresPage() {
  return (
    <div className="min-h-screen">
      <HeroSplit
        content={{
          headline: 'Coronado Shores',
          subheadline: 'Beachfront condos with resort-style amenities.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Coronado Shores</h2>
          <p className="text-secondary mb-6">
            Coronado Shores offers beachfront condominium living with resort-style amenities,
            ocean views, and direct beach access. This community is known for its well-maintained
            properties and active lifestyle.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'All Condos', href: '/coronado/condos-for-sale/' },
              { label: 'Waterfront Homes', href: '/coronado/waterfront-homes/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'What amenities does Coronado Shores offer?',
                a: 'Coronado Shores typically includes pools, fitness centers, beach access, and well-maintained common areas. Specific amenities vary by building.',
              },
              {
                q: 'What are HOA fees like?',
                a: 'HOA fees vary by building and unit size. They typically cover building maintenance, amenities, and insurance. We can provide specific details for properties you\'re interested in.',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

