import { notFound } from 'next/navigation'
import HeroSplit from '@/components/HeroSplit'
import FAQ from '@/components/FAQ'
import PageWrapper from '@/components/PageWrapper'
import { generateMetadata as genMeta } from '@/lib/seo'

// This would typically come from a CMS or data file
const guides: Record<string, any> = {
  'moving-to-coronado': {
    title: 'Moving to Coronado',
    description: 'A comprehensive guide for new residents moving to Coronado Island.',
    content: 'Coronado Island offers a unique lifestyle combining beach living with small-town charm. This guide covers everything you need to know about moving to Coronado.',
  },
  'cost-of-living': {
    title: 'Cost of Living in Coronado',
    description: 'Understanding expenses and lifestyle costs in Coronado Island.',
    content: 'Coronado offers a premium lifestyle with corresponding costs. This guide breaks down housing, utilities, and daily expenses.',
  },
  'coronado-shores': {
    title: 'Coronado Shores Guide',
    description: 'Beachfront living and HOA insights for Coronado Shores.',
    content: 'Coronado Shores is a beachfront condominium community with unique amenities and HOA considerations.',
  },
}

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug]
  if (!guide) {
    return {}
  }

  return genMeta({
    title: `${guide.title} | Coronado Guides | Crown Coronado`,
    description: guide.description,
    canonical: `/guides/${params.slug}/`,
  })
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug]
  
  if (!guide) {
    notFound()
  }

  return (
    <PageWrapper>
      <HeroSplit
        content={{
          headline: guide.title,
          subheadline: guide.description,
          primaryCTA: { label: 'View Homes', href: '/coronado/homes-for-sale/' },
          secondaryCTA: { label: 'Get the Hot Sheet', href: '/off-market/' },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary text-lg leading-relaxed">{guide.content}</p>
          </div>
        </div>

        <FAQ
          content={{
            title: 'Related Questions',
            items: [
              {
                q: 'Want to learn more about Coronado real estate?',
                a: 'Browse our listings or join the Hot Sheet for weekly updates.',
              },
            ],
          }}
        />
      </div>
    </PageWrapper>
  )
}

