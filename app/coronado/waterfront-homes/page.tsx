import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Waterfront Homes for Sale | Crown Coronado',
  description: 'Browse Coronado Island waterfront homes with basinfront docks and beachfront access.',
  canonical: '/coronado/waterfront-homes/',
})

export default function WaterfrontHomesPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Coronado Waterfront Homes',
          subheadline: 'Basinfront docks and beachfront properties.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Waterfront Properties</h2>
          <p className="text-secondary mb-6">
            Coronado offers exceptional waterfront living with basinfront docks and direct beach
            access. These properties are highly sought after for their views, access, and
            investment potential.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'Coronado Cays', href: '/coronado/coronado-cays/' },
              { label: 'Luxury Homes', href: '/coronado/luxury-homes/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'What is basinfront access?',
                a: 'Basinfront properties have docks or direct access to the San Diego Bay, offering boating and water recreation opportunities.',
              },
              {
                q: 'Are waterfront properties more expensive?',
                a: 'Waterfront properties typically command premium prices due to location, views, and access. Our market report tracks pricing trends.',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

