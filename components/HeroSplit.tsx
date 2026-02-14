import Link from 'next/link'
import Image from 'next/image'

interface HeroSplitProps {
  content?: {
    headline?: string
    subheadline?: string
    primaryCTA?: { label: string; href: string }
    secondaryCTA?: { label: string; href: string }
    image?: string
    useBackgroundImage?: boolean
  }
}

export default function HeroSplit({ content }: HeroSplitProps) {
  const defaultContent = {
    headline: 'Find Your Place in Coronado',
    subheadline: 'Homes, condos, waterfront – plus off-market access.',
    primaryCTA: { label: 'Get the Coronado Hot Sheet', href: '/off-market/' },
    secondaryCTA: { label: 'View Homes for Sale', href: '/coronado/homes-for-sale/' },
    image: '/hero-coronado.png',
    useBackgroundImage: false,
  }

  const data = content || defaultContent
  const desktopImage = data.image || '/hero-coronado.png'
  const mobileImage = '/mobile-hero.png'

  // If useBackgroundImage is true, render with full-width background
  if (data.useBackgroundImage && desktopImage) {
    return (
      <section className="relative min-h-[600px] overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src={mobileImage}
            alt="Coronado background"
            fill
            className="object-cover md:hidden"
            priority
          />
          <Image
            src={desktopImage}
            alt="Coronado background"
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
              {data.headline}
            </h1>
            <p className="text-lg md:text-xl text-secondary mt-4">
              {data.subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {data.primaryCTA && (
                <Link
                  href={data.primaryCTA.href}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-center font-medium"
                >
                  {data.primaryCTA.label}
                </Link>
              )}
              {data.secondaryCTA && (
                <Link
                  href={data.secondaryCTA.href}
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center font-medium"
                >
                  {data.secondaryCTA.label}
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
        </div>
      </section>
    )
  }

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
            {desktopImage && (
              <>
                <Image
                  src={mobileImage}
                  alt="Coronado Island"
                  fill
                  className="object-cover md:hidden"
                  priority
                />
                <Image
                  src={desktopImage}
                  alt="Coronado Island"
                  fill
                  className="object-cover hidden md:block"
                  priority
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

