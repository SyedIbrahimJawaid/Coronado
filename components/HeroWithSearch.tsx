import Link from 'next/link'
import Image from 'next/image'
import SearchCard from './SearchCard'

interface HeroWithSearchProps {
  content?: {
    headline?: string
    subheadline?: string
    primaryCTA?: { label: string; href: string }
    secondaryCTA?: { label: string; href: string }
    image?: string
  }
}

export default function HeroWithSearch({ content }: HeroWithSearchProps) {
  const defaultContent = {
    headline: 'Find Your Place in Coronado',
    subheadline: 'Homes, condos, waterfront – plus off-market access.',
    primaryCTA: { label: 'Get the Coronado Hot Sheet', href: '/off-market/' },
    secondaryCTA: { label: 'View Homes for Sale', href: '/coronado/homes-for-sale/' },
    image: '/hero-coronado.jpg',
  }

  const data = content || defaultContent

  return (
    <section className="relative min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent z-10" />
        {data.image ? (
          <Image
            src={data.image}
            alt="Coronado Island"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/20" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
            {data.headline}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {data.subheadline}
          </p>

          {/* Search Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6">
            <SearchCard />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/about/" className="text-white hover:text-accent underline">
              Local Expert
            </Link>
            <Link href="/off-market/" className="text-white hover:text-accent underline">
              Off-Market Access
            </Link>
            <Link href="/coronado/market-report/" className="text-white hover:text-accent underline">
              Monthly Market Report
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

