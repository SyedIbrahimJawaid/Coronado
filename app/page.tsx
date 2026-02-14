import SearchCard from '@/components/SearchCard'
import FastPathCards from '@/components/FastPathCards'
import MarketSnapshot from '@/components/MarketSnapshot'
import WhyChooseUs from '@/components/WhyChooseUs'
import NeighborhoodExplorer from '@/components/NeighborhoodExplorer'
import GuidesGrid from '@/components/GuidesGrid'
import TestimonialsStrip from '@/components/TestimonialsStrip'
import FinalCTA from '@/components/FinalCTA'
import homeData from '@/home.json'
import { generateMetadata as genMeta } from '@/lib/seo'
import { WebsiteSchema } from '@/lib/schema/website'
import type { ComponentProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = genMeta({
  title: 'Find Your Place in Coronado | Crown Coronado Real Estate',
  description: 'Homes, condos, waterfront – plus off-market access. AI-driven market analysis and wishlist-driven house hunting in Coronado Island.',
  canonical: '/',
})

type SectionContentMap = {
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

type HeroContent = {
  headline?: string
  subheadline?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  image?: string
}

const getHeroContent = () =>
  homeData.sections.find((section) => section.id === 'hero')?.content as HeroContent | undefined

export default function Home() {
  return (
    <div className="min-h-screen">
      <WebsiteSchema />
      {/* Hero */}
      {(() => {
        const hero = getHeroContent()
        const heroImage = hero?.image || '/hero-coronado.png'

        return (
          <section className="relative min-h-[640px] overflow-hidden bg-primary">
            <div className="absolute inset-0">
              <Image
                src="/mobile-hero.png"
                alt="Coronado coastline"
                fill
                sizes="100vw"
                className="object-cover md:hidden"
                priority
              />
              <Image
                src={heroImage}
                alt="Coronado coastline"
                fill
                sizes="100vw"
                className="object-cover hidden md:block"
                priority
              />
            </div>

            <div className="relative container mx-auto px-4 py-16">
              <div className="max-w-3xl text-left">
                <p className="text-sm uppercase tracking-[0.2em] text-secondary/70 mb-3">Coronado Realty</p>
                <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
                  {hero?.headline || 'Find Your Place in Coronado.'}
                </h1>
                <p className="text-lg md:text-xl text-secondary mt-4">
                  {hero?.subheadline || 'Homes, condos, waterfront — plus off-market access.'}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {hero?.primaryCTA && (
                    <Link
                      href={hero.primaryCTA.href}
                      className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-center font-medium"
                    >
                      {hero.primaryCTA.label}
                    </Link>
                  )}
                  {hero?.secondaryCTA && (
                    <Link
                      href={hero.secondaryCTA.href}
                      className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center font-medium"
                    >
                      {hero.secondaryCTA.label}
                    </Link>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-secondary">
                  <Link href="/about/" className="hover:text-primary underline">
                    Local Expert
                  </Link>
                  <Link href="/off-market/" className="hover:text-primary underline">
                    Off-Market Access
                  </Link>
                  <Link href="/coronado/market-report/" className="hover:text-primary underline">
                    Monthly Market Report
                  </Link>
                </div>
              </div>

              <div className="mt-10 max-w-5xl">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 md:p-6">
                  <SearchCard />
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      <div className="container mx-auto px-4 py-8">
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
          <div className="mx-auto w-full max-w-sm">
            <FinalCTA content={getSectionContent('finalCTA')} />
          </div>
        </div>
      </div>
    </div>
  )
}

