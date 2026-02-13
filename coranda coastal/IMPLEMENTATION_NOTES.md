# Implementation Notes: Next.js App Router

## Stack

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** JSON-driven, server-rendered for SEO

## Folder Structure

### Current Structure (Matches Recommendations)

```
app/
  page.tsx                    ✅ Homepage
  layout.tsx                   ✅ Root layout
  robots.ts                    ✅ Robots.txt generator
  sitemap.ts                   ✅ Dynamic sitemap
  coronado/
    page.tsx                   ✅ Coronado hub
    homes-for-sale/page.tsx    ✅ Money page
    condos-for-sale/page.tsx    ✅ Money page
    luxury-homes/page.tsx       ✅ Money page
    waterfront-homes/page.tsx  ✅ Money page
    coronado-shores/page.tsx    ✅ Micro-market
    coronado-cays/page.tsx      ✅ Micro-market
    market-report/page.tsx      ✅ Market report
    neighborhoods/
      page.tsx                 ✅ Neighborhood hub
      [slug]/page.tsx          ✅ Dynamic neighborhoods
  off-market/page.tsx          ✅ Conversion pillar
  buyers/page.tsx              ✅ Process page
  sellers/page.tsx             ✅ Process page
  guides/
    page.tsx                   ✅ Guides hub
    [slug]/page.tsx            ✅ Dynamic guides
  contact/page.tsx             ✅ Contact page
  privacy/page.tsx             ✅ Privacy policy
  terms/page.tsx               ✅ Terms of service
  search/page.tsx              ✅ Search (noindex)
  api/
    email/subscribe/route.ts   ✅ Email API
    market/route.ts            ✅ Market API

components/
  HeaderNav.tsx                ✅ Sticky nav
  HeroSplit.tsx                ✅ Hero component
  SearchCard.tsx               ✅ Search form
  FastPathCards.tsx            ✅ Fast paths
  MarketSnapshot.tsx           ✅ Market KPIs
  WhyChooseUs.tsx              ✅ Value props
  NeighborhoodExplorer.tsx     ✅ Neighborhood grid
  GuidesGrid.tsx               ✅ Guides grid
  TestimonialsStrip.tsx        ✅ Testimonials
  FinalCTA.tsx                 ✅ Hot Sheet form
  Footer.tsx                   ✅ Footer
  Analytics.tsx                ✅ GA4 component
  Breadcrumbs.tsx              ✅ Breadcrumb nav
  LocalIntel.tsx               ✅ Local intel display
  ProsCons.tsx                 ✅ Pros/cons component

lib/
  api/                         ✅ API utilities
  config/                      ✅ Config utilities
  content/                     ✅ Content templates
  hooks/                       ✅ React hooks
  schema/                      ✅ Schema markup
  seo.ts                       ✅ SEO utilities
  analytics.ts                 ✅ Analytics utilities
  cache.ts                     ✅ Caching utilities
  types/                       ✅ TypeScript types
  utils/                       ✅ Utility functions

data/
  home.json                    ✅ Homepage content
```

## Filtered Search Metadata

Search pages with query parameters use noindex with canonical:

```typescript
// app/search/page.tsx
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

## Server-Side Rendering

All pages use server components by default:
- Pages are server-rendered for SEO
- Client components marked with 'use client'
- Data fetching uses Next.js fetch with ISR
- No blocking on slow third-party calls

## Image Optimization

Configured in `next.config.js`:
- AVIF and WebP formats
- Responsive image sizes
- Lazy loading for below-fold images
- Priority loading for hero images

## Analytics Integration

- GA4 component added to layout
- Event tracking for forms and CTAs
- Page view tracking automatic
- Privacy-compliant implementation

## Environment Variables

Required variables documented in `ENV_SETUP.md`:
- API keys for listings, market, email
- Site URL for canonical/sitemap
- Optional CRM webhook URL

## Content Management

- JSON files in `/data` directory
- Can migrate to headless CMS
- Templates ensure consistency
- Validation functions for quality

## Performance Optimizations

- ISR for market data (1 hour)
- Edge caching for listings (60 seconds)
- Non-blocking API calls
- Optimized images
- Code splitting
- Minimal JavaScript

## SEO Implementation

- Schema markup (WebSite, RealEstateAgent, BreadcrumbList, FAQPage)
- Proper robots meta tags
- Canonical URLs on all pages
- Dynamic sitemap
- robots.txt generator

## Launch Readiness

See `LAUNCH_CHECKLIST.md` for complete pre-launch and post-launch checklist.

