'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NeighborhoodExplorerProps {
  content?: {
    title?: string
    items?: Array<{ title: string; subtitle: string; href: string }>
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif text-primary mb-8 text-center">
        {content?.title || 'Neighborhood Explorer'}
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-secondary">{item.subtitle}</p>
            <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
              Explore →
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="min-w-full px-2">
                <Link
                  href={item.href}
                  className="block bg-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.subtitle}</p>
                  <span className="text-primary text-sm font-medium mt-3 inline-block">
                    Explore →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevItem}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextItem}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/coronado/market-report/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          View Market Report
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

