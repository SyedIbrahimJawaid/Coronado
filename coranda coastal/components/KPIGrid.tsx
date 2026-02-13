interface KPIGridProps {
  content?: {
    kpis?: Array<{ label: string; value: string }>
  }
}

export default function KPIGrid({ content }: KPIGridProps) {
  const defaultKPIs = [
    { label: 'Median Price', value: '$2.4M' },
    { label: 'Active Listings', value: '42' },
    { label: 'New Listings (30d)', value: '12' },
    { label: 'Avg Days on Market', value: '28' },
    { label: 'Price / Sq Ft', value: '$1,200' },
    { label: 'Sold (30d)', value: '8' },
  ]

  const kpis = content?.kpis || defaultKPIs

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {kpi.value}
            </div>
            <div className="text-sm text-secondary">{kpi.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

