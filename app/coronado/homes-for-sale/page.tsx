import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Homes for Sale | Crown Coronado',
  description: 'Browse Coronado Island homes for sale. Walkable neighborhoods, classic architecture, and premium locations.',
  canonical: '/coronado/homes-for-sale/',
})

export default function HomesForSalePage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Coronado Homes for Sale',
          subheadline: 'Walkable, classic Coronado living in premium neighborhoods.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Market Report', href: '/coronado/market-report/' },
          image: '/hero-coronado.png',
          useBackgroundImage: true,
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchCard />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-serif text-primary mb-4">About Coronado Homes</h2>
          <p className="text-secondary mb-4">
            Coronado Island offers a unique blend of historic charm and modern luxury. From
            classic Victorian homes in the Village to contemporary estates, find your perfect
            Coronado home.
          </p>
          <p className="text-secondary mb-6">
            Our team specializes in helping buyers navigate the Coronado market with local
            expertise and off-market access when available.
          </p>
          
          {/* Internal Links */}
          <InternalLinks
            links={[
              { label: 'Coronado Real Estate Hub', href: '/coronado/' },
              { label: 'Market Report', href: '/coronado/market-report/' },
              { label: 'Coronado Shores Condos', href: '/coronado/coronado-shores/' },
              { label: 'Coronado Cays Homes', href: '/coronado/coronado-cays/' },
            ]}
          />
        </div>

        <FAQ
          content={{
            title: 'Frequently Asked Questions',
            items: [
              {
                q: 'What neighborhoods are best for families?',
                a: 'The Village offers walkability and classic charm, while Coronado Shores provides beachfront access. Both are family-friendly with excellent schools.',
              },
              {
                q: 'How competitive is the Coronado market?',
                a: 'The market varies by property type and location. Our market report provides monthly insights on inventory, pricing, and days on market.',
              },
              {
                q: 'Do you have off-market listings?',
                a: 'We share off-market opportunities when available through our Hot Sheet. Join to receive weekly updates.',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

