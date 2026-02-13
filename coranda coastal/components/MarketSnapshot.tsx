import Link from 'next/link'
import Image from 'next/image'

interface MarketSnapshotProps {
  content?: {
    title?: string
    updatedLabel?: string
    kpis?: Array<{ label: string; value: string; image?: string }>
    cta?: { label: string; href: string }
  }
}

export default function MarketSnapshot({ content }: MarketSnapshotProps) {
  const defaultContent = {
    title: 'Market Snapshot',
    updatedLabel: 'Updated monthly',
    kpis: [
      { label: 'Median Price', value: '$2.4M' },
      { label: 'Active Listings', value: '42' },
      { label: 'Avg Days on Market', value: '28' },
    ],
    cta: { label: 'View Market Report', href: '/coronado/market-report/' },
  }

  const data = content || defaultContent

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif text-primary">{data.title}</h2>
        <span className="text-sm text-secondary">{data.updatedLabel}</span>
      </div>

      {/* Scrollable KPI Cards */}
      <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 mb-8">
        <div className="flex gap-6 min-w-max">
          {data.kpis?.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden min-w-[280px] md:min-w-[320px] flex-shrink-0 group hover:shadow-xl transition-shadow">
              {kpi.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={kpi.image}
                    alt={kpi.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">{kpi.value}</div>
                <div className="text-sm text-secondary">{kpi.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.cta && (
        <div className="text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            {data.cta.label}
          </Link>
        </div>
      )}
    </section>
  )
}

