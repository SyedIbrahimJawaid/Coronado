# Routing Architecture & SEO Strategy

## Overview

This document outlines the routing structure and SEO indexing strategy for CrownCoronado.com. The routing is designed to build topical authority and avoid index bloat from infinite filter combinations.

## Indexing Strategy

- **Indexable Pages**: Only curated landing pages are indexable
- **Search/Filter Pages**: All search URLs with query parameters are `noindex, follow` with canonical rules pointing to base listing pages
- **Canonical URLs**: All indexable pages include canonical URLs pointing to the clean URL structure

## Route Map

### Indexable Routes

| Route | Purpose | Indexing |
|-------|---------|----------|
| `/` | Homepage: brand + search + conversion | ✅ index |
| `/coronado/` | Coronado hub page (pillar) | ✅ index |
| `/coronado/homes-for-sale/` | Primary money page | ✅ index |
| `/coronado/condos-for-sale/` | Money page (condos) | ✅ index |
| `/coronado/luxury-homes/` | Money page (luxury) | ✅ index |
| `/coronado/waterfront-homes/` | Money page (waterfront) | ✅ index |
| `/coronado/coronado-shores/` | Micro-market pillar | ✅ index |
| `/coronado/coronado-cays/` | Micro-market pillar | ✅ index |
| `/coronado/market-report/` | Monthly market report (freshness) | ✅ index |
| `/coronado/neighborhoods/` | Neighborhood hub | ✅ index |
| `/coronado/neighborhoods/[slug]/` | Neighborhood guides (scalable) | ✅ index |
| `/off-market/` | High-conversion pillar (Hot Sheet) | ✅ index |
| `/buyers/` | Buyer process + CTA | ✅ index |
| `/sellers/` | Seller process + CTA | ✅ index |
| `/guides/[slug]/` | Long-tail SEO guides | ✅ index |
| `/contact/` | Lead capture | ✅ index |

### Non-Indexable Routes

| Route | Purpose | Indexing |
|-------|---------|----------|
| `/search?*` | Search/filter URLs with query params | ❌ noindex, follow + canonical |

## Implementation Details

### SEO Metadata Utility

All pages use the `generateMetadata` function from `lib/seo.ts` to ensure consistent SEO implementation:

```typescript
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Page Title | Crown Coronado',
  description: 'Page description',
  canonical: '/path/',
  noindex: false, // Optional, defaults to false
})
```

### Search Pages

Search pages with query parameters are automatically set to `noindex, follow` with canonical URLs pointing to the base listing page:

```typescript
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://crowncoronado.com/coronado/homes-for-sale/',
  },
}
```

## MVP Scope

**Recommended Launch:**
- Homepage (`/`)
- 6 money pages:
  - `/coronado/homes-for-sale/`
  - `/coronado/condos-for-sale/`
  - `/coronado/luxury-homes/`
  - `/coronado/waterfront-homes/`
  - `/coronado/coronado-shores/`
  - `/coronado/coronado-cays/`
- `/off-market/`
- `/coronado/market-report/`
- 10 neighborhood pages (`/coronado/neighborhoods/[slug]/`)

**Future Scaling:**
- Scale neighborhoods to 20-60 with strict template and QA
- Add additional guide pages as needed
- Expand buyer/seller process pages

## Canonical URL Structure

All canonical URLs follow this pattern:
- Base URL: `https://crowncoronado.com`
- Path: Clean URL without trailing slashes (except root)
- Examples:
  - `/` → `https://crowncoronado.com/`
  - `/coronado/homes-for-sale/` → `https://crowncoronado.com/coronado/homes-for-sale/`

## Notes

- All indexable pages include proper meta titles, descriptions, and canonical URLs
- Search/filter functionality uses query parameters but results pages are not indexed
- Dynamic routes use `generateStaticParams` for static generation where possible
- Neighborhood and guide pages are scalable templates that can be expanded

