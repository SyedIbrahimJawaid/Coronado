import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Cays Homes for Sale | Crown Coronado',
  description: 'Browse Coronado Cays waterfront homes with private docks and basinfront access.',
  canonical: '/coronado/coronado-cays/',
})

export default function CoronadoCaysPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Coronado Cays',
          subheadline: 'Waterfront homes with private docks.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Coronado Cays</h2>
          <p className="text-secondary mb-6">
            Coronado Cays is a waterfront community known for its private docks, basinfront
            access, and boating lifestyle. Properties here offer direct water access and are
            popular with boaters and water enthusiasts.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'Waterfront Homes', href: '/coronado/waterfront-homes/' },
              { label: 'Luxury Homes', href: '/coronado/luxury-homes/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'Do all properties have docks?',
                a: 'Most Coronado Cays properties have dock access, but dock size and availability vary by property. We can verify dock details for specific listings.',
              },
              {
                q: 'What size boats can the docks accommodate?',
                a: 'Dock sizes vary by property. Some accommodate smaller boats while others can handle larger vessels. We can provide specific dock details during property tours.',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

