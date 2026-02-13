import Link from 'next/link'
import Image from 'next/image'

interface NeighborhoodExplorerProps {
  content?: {
    title?: string
    items?: Array<{ title: string; subtitle: string; href: string; image?: string }>
  }
}

export default function NeighborhoodExplorer({ content }: NeighborhoodExplorerProps) {
  const defaultItems = [
    {
      title: 'Moving to Coronado',
      subtitle: 'Everything you need to know',
      href: '/guides/moving-to-coronado/',
    },
    {
      title: 'Coronado Shores',
      subtitle: 'Beachfront condos',
      href: '/coronado/coronado-shores/',
    },
    {
      title: 'Coronado Cays',
      subtitle: 'Waterfront docks',
      href: '/coronado/coronado-cays/',
    },
    {
      title: 'Village',
      subtitle: 'Walkable, classic Coronado',
      href: '/coronado/neighborhoods/village/',
    },
  ]

  const items = content?.items || defaultItems

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-8 text-center">
        {content?.title || 'Neighborhood Explorer'}
      </h2>

      {/* Horizontal Scrollable Cards */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-w-[280px] md:min-w-[320px] flex-shrink-0"
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.subtitle}</p>
                  <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/coronado/market-report/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          View Market Report
        </Link>
      </div>
    </section>
  )
}

