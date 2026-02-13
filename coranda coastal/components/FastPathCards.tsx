import Link from 'next/link'
import Image from 'next/image'

interface FastPathCardsProps {
  content?: {
    title?: string
    cards?: Array<{
      title: string
      subtitle: string
      href: string
      image?: string
    }>
  }
}

export default function FastPathCards({ content }: FastPathCardsProps) {
  const defaultCards = [
    {
      title: 'Homes for Sale',
      subtitle: 'Walkable, classic Coronado',
      href: '/coronado/homes-for-sale/',
      image: '/homes.jpg',
    },
    {
      title: 'Condos',
      subtitle: 'Beachfront and village',
      href: '/coronado/condos-for-sale/',
      image: '/condos.jpg',
    },
    {
      title: 'Waterfront',
      subtitle: 'Basinfront docks',
      href: '/coronado/waterfront-homes/',
      image: '/waterfront.jpg',
    },
    {
      title: 'Coronado Shores',
      subtitle: 'Beachfront condos',
      href: '/coronado/coronado-shores/',
      image: '/shores.jpg',
    },
    {
      title: 'Coronado Cays',
      subtitle: 'Waterfront docks',
      href: '/coronado/coronado-cays/',
      image: '/cays.jpg',
    },
  ]

  const cards = content?.cards || defaultCards

  return (
    <section className="py-8">
      {/* Horizontal Scrollable Cards Container */}
      <div className="relative">
        {/* Scrollable Cards */}
        <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {cards.map((card, index) => (
              <Link
                key={index}
                href={card.href}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-w-[280px] md:min-w-[300px] flex-shrink-0"
              >
                <div className="relative h-48 overflow-hidden">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/20" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-1">{card.title}</h3>
                  <p className="text-sm text-secondary">{card.subtitle}</p>
                  <span className="text-primary text-sm font-medium mt-2 inline-block group-hover:underline">
                    Explore Listings →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* View Market Report Button */}
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

