'use client'

import { useState, useEffect } from 'react'

interface FAQProps {
  content?: {
    title?: string
    items?: Array<{ q: string; a: string }>
  }
}

export default function FAQ({ content }: FAQProps) {
  const defaultContent = {
    title: 'FAQ',
    items: [],
  }

  const data = content || defaultContent
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Generate FAQPage schema for SEO
  useEffect(() => {
    if (data.items && data.items.length > 0 && typeof window !== 'undefined') {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }

      // Remove existing FAQPage schema if present
      const existingScript = document.getElementById('faq-schema')
      if (existingScript) {
        existingScript.remove()
      }

      // Add new schema
      const script = document.createElement('script')
      script.id = 'faq-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        const scriptToRemove = document.getElementById('faq-schema')
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [data.items])

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif text-primary mb-8 text-center">{data.title}</h2>

      <div className="space-y-4">
        {data.items?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background transition-colors"
            >
              <span className="font-semibold text-primary">{item.q}</span>
              <svg
                className={`w-5 h-5 text-primary transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-secondary">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

