import HeroSplit from '@/components/HeroSplit'
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
    <div className="min-h-screen bg-background">
      <WebsiteSchema />
      
      {/* Hero Section with Full-Width Background Image and Integrated Search */}
      <HeroSplit content={homeData.sections.find(s => s.id === 'hero')?.content} />

      <div className="container mx-auto px-4 py-12">
        {/* Property Categories - Scrollable Cards */}
        <div className="mb-16">
          <FastPathCards content={homeData.sections.find(s => s.id === 'fastPaths')?.content} />
        </div>

        {/* Market Snapshot */}
        <div className="mb-16">
          <MarketSnapshot content={homeData.sections.find(s => s.id === 'marketSnapshot')?.content} />
        </div>

        {/* Neighborhood Explorer */}
        <div className="mb-16">
          <NeighborhoodExplorer content={homeData.sections.find(s => s.id === 'neighborhoodExplorer')?.content} />
        </div>

        {/* Guides Grid */}
        <div className="mb-16">
          <GuidesGrid content={homeData.sections.find(s => s.id === 'guides')?.content} />
        </div>

        {/* Why Crown Coronado */}
        <div className="mb-16">
          <WhyChooseUs content={homeData.sections.find(s => s.id === 'whyChoose')?.content} />
        </div>

        {/* Testimonials Strip - Full Width */}
        <div className="mb-16">
          <TestimonialsStrip content={homeData.sections.find(s => s.id === 'testimonials')?.content} />
        </div>

        {/* Final CTA */}
        <div className="mb-16">
          <FinalCTA content={homeData.sections.find(s => s.id === 'finalCTA')?.content} />
        </div>
      </div>
    </div>
  )
}

