import Link from 'next/link'

interface MarketSnapshotProps {
  content?: {
    title?: string
    updatedLabel?: string
    kpis?: Array<{ label: string; value: string }>
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
    <section className="py-12 bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif text-primary">{data.title}</h2>
        <span className="text-sm text-secondary">{data.updatedLabel}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {data.kpis?.map((kpi, index) => (
          <div key={index} className="text-center p-6 bg-background rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">{kpi.value}</div>
            <div className="text-sm text-secondary">{kpi.label}</div>
          </div>
        ))}
      </div>

      {data.cta && (
        <div className="text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            {data.cta.label}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  )
}

