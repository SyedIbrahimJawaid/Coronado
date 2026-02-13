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

export const metadata = genMeta({
  title: 'Find Your Place in Coronado | Crown Coronado Real Estate',
  description: 'Homes, condos, waterfront – plus off-market access. AI-driven market analysis and wishlist-driven house hunting in Coronado Island.',
  canonical: '/',
})

export default function Home() {
  return (
    <div className="min-h-screen">
      <WebsiteSchema />
      {/* Hero (split: copy + image) + primary CTA */}
      <HeroSplit content={homeData.sections.find(s => s.id === 'hero')?.content} />

      <div className="container mx-auto px-4 py-8">
        {/* Search Card */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
            <SearchCard />
          </div>
        </div>

        {/* Fast Paths */}
        <div className="mb-12">
          <FastPathCards content={homeData.sections.find(s => s.id === 'fastPaths')?.content} />
        </div>

        {/* Market Snapshot */}
        <div className="mb-12">
          <MarketSnapshot content={homeData.sections.find(s => s.id === 'marketSnapshot')?.content} />
        </div>

        {/* Why Crown Coronado */}
        <div className="mb-12">
          <WhyChooseUs content={homeData.sections.find(s => s.id === 'whyChoose')?.content} />
        </div>

        {/* Neighborhood Explorer */}
        <div className="mb-12">
          <NeighborhoodExplorer content={homeData.sections.find(s => s.id === 'neighborhoodExplorer')?.content} />
        </div>

        {/* Guides Grid */}
        <div className="mb-12">
          <GuidesGrid content={homeData.sections.find(s => s.id === 'guides')?.content} />
        </div>

        {/* Testimonials Strip - Full Width */}
        <div className="mb-12">
          <TestimonialsStrip content={homeData.sections.find(s => s.id === 'testimonials')?.content} />
        </div>

        {/* Final CTA */}
        <div className="mb-12">
          <FinalCTA content={homeData.sections.find(s => s.id === 'finalCTA')?.content} />
        </div>
      </div>
    </div>
  )
}

