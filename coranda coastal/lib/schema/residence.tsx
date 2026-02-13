import Script from 'next/script'
import type { Listing } from '@/lib/types/api'

/**
 * Residence/Offer schema for individual listing pages
 * Optional - only if listing detail pages are implemented
 */
export function ResidenceSchema({ listing }: { listing: Listing }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: listing.address.full,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address.street,
      addressLocality: listing.address.city,
      addressRegion: listing.address.state,
      postalCode: listing.address.zip,
      addressCountry: 'US',
    },
    numberOfRooms: listing.beds,
    numberOfBathroomsTotal: listing.baths,
    floorSize: listing.sqft
      ? {
          '@type': 'QuantitativeValue',
          value: listing.sqft,
          unitCode: 'SQM', // Square meters - adjust if needed
        }
      : undefined,
    geo: listing.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: listing.coordinates.lat,
          longitude: listing.coordinates.lng,
        }
      : undefined,
    image: listing.images,
    description: listing.description,
    offers: {
      '@type': 'Offer',
      price: listing.price,
      priceCurrency: 'USD',
      availability: listing.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
      url: `https://crowncoronado.com/listings/${listing.id}`,
    },
  }

  return (
    <Script
      id="residence-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

