import Link from 'next/link'
import Image from 'next/image'
import SearchCard from './SearchCard'

interface HeroSplitProps {
  content?: {
    headline?: string
    subheadline?: string
    primaryCTA?: { label: string; href: string }
    secondaryCTA?: { label: string; href: string }
    image?: string
  }
}

export default function HeroSplit({ content }: HeroSplitProps) {
  const defaultContent = {
    headline: 'Find Your Place in Coronado',
    subheadline: 'Homes, condos, waterfront – plus off-market access.',
    primaryCTA: { label: 'Get the Coronado Hot Sheet', href: '/off-market/' },
    secondaryCTA: { label: 'View Homes for Sale', href: '/coronado/homes-for-sale/' },
    image: '/hero-coronado.jpg',
  }

  const data = content || defaultContent

  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Full-width background image */}
      {data.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={data.image}
            alt="Coronado Island"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 w-full container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              {data.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {data.subheadline}
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-5xl mx-auto">
            <SearchCard />
          </div>

          {/* Informational Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <Link href="/about/" className="text-white hover:text-accent transition-colors underline">
              Local Expert
            </Link>
            <Link href="/off-market/" className="text-white hover:text-accent transition-colors underline">
              Off-Market Access
            </Link>
            <Link href="/coronado/market-report/" className="text-white hover:text-accent transition-colors underline">
              Monthly Market Report
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

