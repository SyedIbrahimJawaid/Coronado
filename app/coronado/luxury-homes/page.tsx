import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Luxury Homes for Sale in Coronado | Crown Coronado',
  description: 'Browse luxury homes and premium estates for sale in Coronado Island. High-end properties with exceptional amenities and prime locations.',
  canonical: '/coronado/luxury-homes/',
})

export default function LuxuryHomesPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Luxury Homes for Sale in Coronado',
          subheadline: 'Premium estates and high-end properties in Coronado Island.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Coronado Luxury Homes</h2>
          <p className="text-secondary mb-4">
            Coronado Island is home to some of San Diego's most prestigious luxury properties. 
            From waterfront estates with private docks to historic mansions in the Village, 
            discover exceptional homes that define luxury living.
          </p>
          <p className="text-secondary mb-6">
            Our team specializes in luxury real estate transactions, offering discreet service 
            and access to off-market opportunities when available.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'Waterfront Homes', href: '/coronado/waterfront-homes/' },
              { label: 'All Homes', href: '/coronado/homes-for-sale/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'What defines a luxury home in Coronado?',
                a: 'Luxury homes in Coronado typically feature premium locations, exceptional architecture, high-end finishes, and unique amenities like waterfront access or historic significance.',
              },
              {
                q: 'Are there off-market luxury listings?',
                a: 'Yes, many luxury properties are sold off-market. Join our Hot Sheet to receive updates on exclusive opportunities.',
              },
              {
                q: 'What neighborhoods have the most luxury homes?',
                a: 'The Village, Coronado Shores, and waterfront areas along the bayfront feature many luxury properties. Each offers unique advantages.',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

