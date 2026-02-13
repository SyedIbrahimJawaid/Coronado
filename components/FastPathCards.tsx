'use client'

import { useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <section className="py-8">
      {content?.title && (
        <h2 className="text-3xl font-serif text-primary mb-8 text-center">
          {content.title}
        </h2>
      )}
      
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="min-w-full px-2">
                <Link
                  href={card.href}
                  className="block bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative h-48">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent/20" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-1">{card.title}</h3>
                    <p className="text-sm text-secondary">{card.subtitle}</p>
                    <span className="text-primary text-sm font-medium mt-2 inline-block">
                      Explore Listings →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Controls */}
        <button
          onClick={prevCard}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextCard}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* View Market Report Button */}
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

