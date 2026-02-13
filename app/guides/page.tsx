import HeroSplit from '@/components/HeroSplit'
import GuidesGrid from '@/components/GuidesGrid'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Coronado Real Estate Guides | Crown Coronado',
  description: 'Comprehensive guides about Coronado Island real estate, neighborhoods, and lifestyle. Expert insights for buyers and sellers.',
  canonical: '/guides/',
})

export default function GuidesPage() {
  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: 'Coronado Real Estate Guides',
          subheadline: 'Expert insights and comprehensive guides about Coronado Island real estate, neighborhoods, and lifestyle.',
          primaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
          secondaryCTA: { label: 'View Homes', href: '/coronado/homes-for-sale/' },
          image: '/hero-coronado.png',
          useBackgroundImage: true,
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <GuidesGrid
          content={{
            title: 'Browse Our Guides',
            cards: [
              {
                title: 'Moving to Coronado',
                excerpt: 'A comprehensive guide for new residents moving to Coronado Island.',
                href: '/guides/moving-to-coronado/',
                tag: 'Buyer Guide',
              },
              {
                title: 'Cost of Living in Coronado',
                excerpt: 'Understanding expenses and lifestyle costs in Coronado Island.',
                href: '/guides/cost-of-living/',
                tag: 'Lifestyle',
              },
              {
                title: 'Coronado Shores Guide',
                excerpt: 'Beachfront living and HOA insights for Coronado Shores.',
                href: '/guides/coronado-shores/',
                tag: 'Neighborhood',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

