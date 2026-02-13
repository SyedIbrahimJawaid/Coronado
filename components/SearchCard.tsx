'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchCard() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: '',
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track search
    const searchTerm = searchParams.location || 'coronado'
    trackSearch(searchTerm, searchParams)
    
    // Build search URL with params
    const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/search?${params.toString()}`
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select
            value={searchParams.location}
            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            className="px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Location</option>
            <option value="coronado">Coronado</option>
            <option value="coronado-shores">Coronado Shores</option>
            <option value="coronado-cays">Coronado Cays</option>
            <option value="village">Village</option>
          </select>

          <select
            value={searchParams.minPrice}
            onChange={(e) => setSearchParams({ ...searchParams, minPrice: e.target.value })}
            className="px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Min Price</option>
            <option value="500000">$500K</option>
            <option value="1000000">$1M</option>
            <option value="2000000">$2M</option>
            <option value="4000000">$4M</option>
          </select>

          <select
            value={searchParams.maxPrice}
            onChange={(e) => setSearchParams({ ...searchParams, maxPrice: e.target.value })}
            className="px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Max Price</option>
            <option value="2000000">$2M</option>
            <option value="4000000">$4M</option>
            <option value="8000000">$8M</option>
            <option value="10000000">$10M+</option>
          </select>

          <select
            value={searchParams.beds}
            onChange={(e) => setSearchParams({ ...searchParams, beds: e.target.value })}
            className="px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Beds</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <select
            value={searchParams.baths}
            onChange={(e) => setSearchParams({ ...searchParams, baths: e.target.value })}
            className="px-4 py-3 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Baths</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Search
          </button>
          <div className="text-sm text-secondary">
            <Link href="/coronado/homes-for-sale/" className="hover:text-primary underline">
              Browse all listings
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

