import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Condos for Sale | Crown Coronado',
  description: 'Browse Coronado Island condos for sale. Beachfront condos, village condos, and Coronado Shores listings.',
  canonical: '/coronado/condos-for-sale/',
})

export default function CondosForSalePage() {
  return (
    <div className="min-h-screen">
      <HeroSplit
        content={{
          headline: 'Coronado Condos for Sale',
          subheadline: 'Beachfront condos, village condos, and Coronado Shores listings.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Coronado Condos</h2>
          <p className="text-secondary mb-4">
            Coronado offers diverse condo options from beachfront towers to intimate village
            condos. Coronado Shores is particularly popular for its beachfront location and
            resort-style amenities.
          </p>
          <p className="text-secondary mb-6">
            Whether you're looking for a primary residence or investment property, our team
            can help you navigate HOA considerations, views, and location factors.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'Coronado Shores', href: '/coronado/coronado-shores/' },
              { label: 'Waterfront Homes', href: '/coronado/waterfront-homes/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'What are HOA fees like in Coronado?',
                a: 'HOA fees vary by building and amenities. Beachfront properties typically have higher fees due to maintenance and amenities. We can provide specific details for properties you're interested in.',
              },
              {
                q: 'Which areas have the best condo inventory?',
                a: 'Coronado Shores consistently has strong inventory. Check our monthly market report for current trends.',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

