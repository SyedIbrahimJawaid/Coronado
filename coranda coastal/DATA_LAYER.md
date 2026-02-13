# Data Layer & Integrations

## Overview

The site integrates with multiple data sources: listing/search APIs, market analytics, email providers, and optional CRM systems. All integrations are designed for performance with caching and non-blocking patterns.

## Environment Variables

Required environment variables (see `.env.example`):

| Variable | Purpose | Required |
|----------|---------|----------|
| `LISTINGS_API_URL` | Base URL for listing/search endpoint | Yes |
| `LISTINGS_API_KEY` | Auth token for listing/search endpoint | Yes |
| `MARKET_API_URL` | Endpoint for market KPIs/time-series | Yes |
| `MARKET_API_KEY` | Auth token for market analytics | Yes |
| `EMAIL_PROVIDER_API_KEY` | Email signup and list management | Yes |
| `CRM_WEBHOOK_URL` | Post lead events to CRM | No |
| `SITE_URL` | Used for canonical + sitemap | Yes (defaults to https://crowncoronado.com) |
| `CMS_URL` | Endpoint for neighborhoods/guides list | No |

## Data Sources

### 1. Listing Feed / IDX Provider

**Location:** `lib/api/listings.ts`

**Functions:**
- `searchListings(params)` - Search listings with filters
- `getListingById(id)` - Get single listing
- `getFeaturedListings(limit)` - Get featured listings

**Caching:**
- ISR revalidation: 1 hour
- Edge caching: 60 seconds
- Non-blocking: Returns empty results if API fails

**Usage:**
```typescript
import { searchListings } from '@/lib/api/listings'

const results = await searchListings({
  location: 'coronado',
  minPrice: 1000000,
  maxPrice: 5000000,
  beds: 3,
})
```

### 2. Market Analytics Service

**Location:** `lib/api/market.ts`

**Functions:**
- `getMarketData()` - Get current market KPIs
- `getMarketTimeSeries(days)` - Get historical data
- `getMarketReport()` - Get formatted report with KPIs and time series

**Caching:**
- ISR revalidation: 1 hour (data updates monthly)
- Edge caching: 1 hour
- Non-blocking: Returns null if API fails

**Usage:**
```typescript
import { getMarketData } from '@/lib/api/market'

const marketData = await getMarketData()
// Returns null if API unavailable - page still renders
```

### 3. Email List Provider

**Location:** `lib/api/email.ts`

**Functions:**
- `subscribeToHotSheet(subscriber)` - Subscribe to Hot Sheet
- `subscribeAsBuyer(subscriber)` - Subscribe with buyer segment
- `subscribeAsInvestor(subscriber)` - Subscribe with investor segment
- `subscribeAsInternational(subscriber)` - Subscribe with international segment

**API Route:** `app/api/email/subscribe/route.ts`

**Segments:**
- `hot-sheet` - Weekly Hot Sheet subscribers
- `buyers` - Buyer segment
- `investors` - Investor segment
- `international` - International buyers

**Usage:**
```typescript
import { subscribeToHotSheet } from '@/lib/api/email'

const result = await subscribeToHotSheet({
  email: 'user@example.com',
  name: 'John Doe',
  segments: ['buyers'],
})
```

### 4. CRM Integration (Optional)

**Location:** `lib/api/crm.ts`

**Functions:**
- `sendLeadToCRM(lead)` - Send lead to CRM webhook

**Behavior:**
- Fire-and-forget (non-blocking)
- Silently fails if CRM not configured
- Optimistic success response

**Usage:**
```typescript
import { sendLeadToCRM } from '@/lib/api/crm'

await sendLeadToCRM({
  name: 'John Doe',
  email: 'john@example.com',
  source: 'hot-sheet-signup',
  propertyInterest: 'coronado-shores',
})
```

### 5. CMS Content

**Location:** JSON files in `/data` directory

**Current Implementation:**
- Static JSON files for content
- Can be migrated to headless CMS using `CMS_URL`

**Files:**
- `data/home.json` - Homepage content
- `data/market-report.json` - Market report content
- `data/off-market.json` - Off-market page content

## Caching Strategy

### Server-Side Rendering (SSR)
- Uses Next.js `fetch` with `next.revalidate` option
- ISR (Incremental Static Regeneration) for market data
- Edge caching for listing searches

### Cache Times
- **Listings:** 60 seconds (frequent updates)
- **Market Data:** 1 hour (monthly updates)
- **CMS Content:** 24 hours (infrequent updates)
- **Static Assets:** 1 year

### Non-Blocking Patterns

All API calls are designed to not block page rendering:

1. **Graceful Degradation:**
   ```typescript
   const marketData = await getMarketData()
   // Returns null if API fails - page still renders with fallback
   ```

2. **Fire-and-Forget:**
   ```typescript
   await sendLeadToCRM(lead)
   // Doesn't await - doesn't block user experience
   ```

3. **Fallback Values:**
   ```typescript
   const listings = await searchListings(params)
   // Returns empty array if API fails
   ```

## Performance Optimization

### 1. ISR (Incremental Static Regeneration)
- Pages are statically generated at build time
- Revalidated in background when data changes
- Serves stale content while revalidating

### 2. Edge Caching
- API responses cached at edge
- Reduces load on origin servers
- Fast response times globally

### 3. Parallel Fetching
```typescript
const [marketData, listings] = await Promise.all([
  getMarketData(),
  getFeaturedListings(6),
])
```

### 4. Client-Side Hooks
- `useMarketData()` hook for client-side updates
- Falls back gracefully if API unavailable
- Keeps previous data if refresh fails

## Type Safety

All API types are defined in `lib/types/api.ts`:

- `Listing` - Listing object structure
- `ListingSearchParams` - Search parameters
- `MarketData` - Market KPIs
- `MarketTimeSeries` - Historical data
- `EmailSubscriber` - Email subscription data
- `CRMLead` - CRM lead data

## Error Handling

All API functions handle errors gracefully:

1. **Log errors** to console for debugging
2. **Return fallback values** (null, empty array, etc.)
3. **Never throw errors** that would break page rendering
4. **User-friendly messages** for client-facing errors

## API Routes

### `/api/market`
- GET: Returns current market data
- Cached: 1 hour
- Returns 503 if data unavailable

### `/api/email/subscribe`
- POST: Subscribe to email list
- Validates email format
- Returns success/error response

## Integration Checklist

- [x] Environment variable configuration
- [x] Listing API integration
- [x] Market API integration
- [x] Email subscription API
- [x] CRM webhook integration
- [x] Caching utilities
- [x] Type definitions
- [x] Error handling
- [x] Non-blocking patterns
- [ ] Connect to actual API providers (TBD)
- [ ] Set up email provider (Mailchimp/ConvertKit/etc.)
- [ ] Configure CRM webhook (if needed)

## Next Steps

1. **Configure API Providers:**
   - Set up IDX/listing feed provider
   - Configure market analytics service
   - Set up email provider (Mailchimp, ConvertKit, etc.)

2. **Update Environment Variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in actual API keys and URLs

3. **Test Integrations:**
   - Test listing search functionality
   - Verify market data fetching
   - Test email subscriptions
   - Verify CRM webhook (if configured)

4. **Monitor Performance:**
   - Check cache hit rates
   - Monitor API response times
   - Verify non-blocking behavior

