import Link from 'next/link'
import Image from 'next/image'

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
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
              {data.headline}
            </h1>
            <p className="text-xl text-secondary">
              {data.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {data.primaryCTA && (
                <Link
                  href={data.primaryCTA.href}
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors text-center font-medium"
                >
                  {data.primaryCTA.label}
                </Link>
              )}
              {data.secondaryCTA && (
                <Link
                  href={data.secondaryCTA.href}
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-center font-medium"
                >
                  {data.secondaryCTA.label}
                </Link>
              )}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-secondary">
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

          {/* Right: Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            {data.image && (
              <Image
                src={data.image}
                alt="Coronado Island"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

