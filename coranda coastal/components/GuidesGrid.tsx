import Link from 'next/link'
import Image from 'next/image'

interface GuidesGridProps {
  content?: {
    title?: string
    cards?: Array<{ title: string; excerpt: string; href: string; tag?: string; image?: string }>
  }
}

export default function GuidesGrid({ content }: GuidesGridProps) {
  const defaultCards = [
    {
      title: 'Moving to Coronado',
      excerpt: 'A guide for new residents',
      href: '/guides/moving-to-coronado/',
      tag: 'Buyer Guide',
    },
    {
      title: 'Cost of Living in Coronado',
      excerpt: 'Understanding expenses and lifestyle',
      href: '/guides/cost-of-living/',
      tag: 'Lifestyle',
    },
    {
      title: 'Coronado Shores Guide',
      excerpt: 'Beachfront living and HOA insights',
      href: '/guides/coronado-shores/',
      tag: 'Neighborhood',
    },
  ]

  const cards = content?.cards || defaultCards

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-8 text-center">
        {content?.title || 'Guides'}
      </h2>

      {/* Horizontal Scrollable Cards */}
      <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
        <div className="flex gap-6 min-w-max">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-w-[280px] md:min-w-[320px] flex-shrink-0"
            >
              {card.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                {card.tag && (
                  <span className="inline-block text-xs font-medium text-primary bg-accent/20 px-3 py-1 rounded-full mb-3">
                    {card.tag}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">
                  {card.title}
                </h3>
                <p className="text-secondary">{card.excerpt}</p>
                <span className="text-primary text-sm font-medium mt-4 inline-block group-hover:underline">
                  Read Guide →
                </span>
              </div>
            </Link>
          ))}
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

