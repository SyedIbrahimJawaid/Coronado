interface StepsProps {
  content?: {
    title?: string
    steps?: Array<{ title: string; body: string }>
  }
}

export default function Steps({ content }: StepsProps) {
  const defaultContent = {
    title: 'How it works',
    steps: [],
  }

  const data = content || defaultContent

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-12 text-center">{data.title}</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {data.steps?.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number */}
            <div className="absolute -top-4 left-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md h-full pt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-secondary">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

