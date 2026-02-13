import Link from 'next/link'

interface TestimonialsStripProps {
  content?: {
    title?: string
    testimonials?: Array<{ quote: string; author: string; location?: string }>
    cta?: { label: string; href: string }
  }
}

export default function TestimonialsStrip({ content }: TestimonialsStripProps) {
  const defaultContent = {
    title: 'What Our Clients Say',
    testimonials: [
      {
        quote:
          'Crown Coronado helped us find our dream home off-market. Their market insights were spot-on.',
        author: 'Sarah & John M.',
        location: 'Coronado Shores',
      },
      {
        quote:
          "The team's attention to detail and local knowledge made all the difference in our search.",
        author: 'Michael R.',
        location: 'Coronado Cays',
      },
    ],
    cta: { label: 'Read More Reviews', href: '/reviews/' },
  }

  const data = content || defaultContent

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-4 text-center">{data.title || 'Testimonials'}</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {data.testimonials?.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-secondary text-sm mb-2 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <p className="font-semibold text-primary text-sm">{testimonial.author}</p>
              {testimonial.location && (
                <p className="text-xs text-secondary">{testimonial.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {data.cta && (
        <div className="text-center">
          <Link
            href={data.cta.href}
            className="text-primary font-medium hover:underline"
          >
            {data.cta.label} →
          </Link>
        </div>
      )}
    </section>
  )
}

