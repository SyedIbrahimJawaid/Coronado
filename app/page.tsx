import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FastPathCards from '@/components/FastPathCards'
import MarketSnapshot from '@/components/MarketSnapshot'
import WhyChooseUs from '@/components/WhyChooseUs'
import NeighborhoodExplorer from '@/components/NeighborhoodExplorer'
import GuidesGrid from '@/components/GuidesGrid'
import TestimonialsStrip from '@/components/TestimonialsStrip'
import FinalCTA from '@/components/FinalCTA'
import homeData from '@/data/home.json'
import { generateMetadata as genMeta } from '@/lib/seo'
import { WebsiteSchema } from '@/lib/schema/website'
import type { ComponentProps } from 'react'

export const metadata = genMeta({
  title: 'Find Your Place in Coronado | Crown Coronado Real Estate',
  description: 'Homes, condos, waterfront – plus off-market access. AI-driven market analysis and wishlist-driven house hunting in Coronado Island.',
  canonical: '/',
})

type SectionContentMap = {
  hero: ComponentProps<typeof HeroSplit>['content']
  fastPaths: ComponentProps<typeof FastPathCards>['content']
  marketSnapshot: ComponentProps<typeof MarketSnapshot>['content']
  whyChoose: ComponentProps<typeof WhyChooseUs>['content']
  neighborhoodExplorer: ComponentProps<typeof NeighborhoodExplorer>['content']
  guides: ComponentProps<typeof GuidesGrid>['content']
  testimonials: ComponentProps<typeof TestimonialsStrip>['content']
  finalCTA: ComponentProps<typeof FinalCTA>['content']
}

const getSectionContent = <T extends keyof SectionContentMap>(id: T) =>
  homeData.sections.find((section) => section.id === id)?.content as SectionContentMap[T] | undefined

export default function Home() {
  return (
    <div className="min-h-screen">
      <WebsiteSchema />
      {/* Hero (split: copy + image) + primary CTA */}
      <HeroSplit content={getSectionContent('hero')} />

      <div className="container mx-auto px-4 py-8">
        {/* Search Card */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
            <SearchCard />
          </div>
        </div>

        {/* Fast Paths */}
        <div className="mb-12">
          <FastPathCards content={getSectionContent('fastPaths')} />
        </div>

        {/* Market Snapshot */}
        <div className="mb-12">
          <MarketSnapshot content={getSectionContent('marketSnapshot')} />
        </div>

        {/* Why Crown Coronado */}
        <div className="mb-12">
          <WhyChooseUs content={getSectionContent('whyChoose')} />
        </div>

        {/* Neighborhood Explorer */}
        <div className="mb-12">
          <NeighborhoodExplorer content={getSectionContent('neighborhoodExplorer')} />
        </div>

        {/* Guides Grid */}
        <div className="mb-12">
          <GuidesGrid content={getSectionContent('guides')} />
        </div>

        {/* Testimonials Strip - Full Width */}
        <div className="mb-12">
          <TestimonialsStrip content={getSectionContent('testimonials')} />
        </div>

        {/* Final CTA */}
        <div className="mb-12">
          <FinalCTA content={getSectionContent('finalCTA')} />
        </div>
      </div>
    </div>
  )
}

