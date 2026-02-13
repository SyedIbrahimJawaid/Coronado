interface WhyChooseUsProps {
  content?: {
    title?: string
    cards?: Array<{ title: string; body: string }>
    proofLine?: string
  }
}

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  const defaultContent = {
    title: 'Why Crown Coronado',
    cards: [
      {
        title: 'AI-Driven Market Analysis',
        body: 'Inventory, reductions, DOM, and demand signals to support better timing decisions.',
      },
      {
        title: 'Off-Market Access',
        body: 'Pocket listing access when available through our relationship-driven network.',
      },
      {
        title: 'Wishlist-Driven Hunting',
        body: 'We preview, shortlist, and actively hunt for the right match based on your criteria.',
      },
      {
        title: 'International Buyer Network',
        body: 'Distribution and demand awareness through our global investor email network.',
      },
    ],
    proofLine: 'Trusted by buyers and sellers across Coronado Island',
  }

  const data = content || defaultContent

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-4 text-center">{data.title}</h2>
      {data.proofLine && (
        <p className="text-center text-secondary mb-8">{data.proofLine}</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.cards?.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">{card.title}</h3>
            <p className="text-secondary">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

