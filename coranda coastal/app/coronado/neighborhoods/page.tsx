import HeroSplit from '@/components/HeroSplit'
import NeighborhoodExplorer from '@/components/NeighborhoodExplorer'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Neighborhoods Guide | Crown Coronado',
  description: 'Explore Coronado Island neighborhoods. Village, Coronado Shores, Coronado Cays, and more. Find the perfect area for your lifestyle.',
  canonical: '/coronado/neighborhoods/',
})

export default function NeighborhoodsHubPage() {
  return (
    <div className="min-h-screen">
      <HeroSplit
        content={{
          headline: 'Coronado Neighborhoods',
          subheadline: 'Discover the unique character and lifestyle of each Coronado neighborhood.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Homes for Sale', href: '/coronado/homes-for-sale/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <NeighborhoodExplorer
          content={{
            title: 'Explore Coronado Neighborhoods',
            items: [
              {
                title: 'Village',
                subtitle: 'Walkable, classic Coronado',
                href: '/coronado/neighborhoods/village/',
              },
              {
                title: 'Coronado Shores',
                subtitle: 'Beachfront condos',
                href: '/coronado/neighborhoods/coronado-shores/',
              },
              {
                title: 'Coronado Cays',
                subtitle: 'Waterfront docks',
                href: '/coronado/neighborhoods/coronado-cays/',
              },
              {
                title: 'Bayfront',
                subtitle: 'Waterfront estates',
                href: '/coronado/neighborhoods/bayfront/',
              },
              {
                title: 'Golf Course Area',
                subtitle: 'Golf course views',
                href: '/coronado/neighborhoods/golf-course/',
              },
              {
                title: 'North Island',
                subtitle: 'Military and civilian',
                href: '/coronado/neighborhoods/north-island/',
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

