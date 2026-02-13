# Component Inventory & Page Templates

## Overview

This document outlines the reusable component library and page template rules for CrownCoronado.com. All components are JSON-driven to enable rapid iteration and automated SEO QA.

## Core Components

### 1. HeaderNav
**Location:** `components/HeaderNav.tsx`

**Features:**
- Sticky header with compact behavior on scroll
- Mobile drawer menu
- Logo with responsive sizing
- Navigation links to key pages
- "Get Listings" CTA button

**Props:** None (uses internal state)

**Behavior:**
- Compacts on scroll (reduces padding and logo size)
- Mobile menu toggle
- Sticky positioning

---

### 2. HeroSplit
**Location:** `components/HeroSplit.tsx`

**Features:**
- Split layout: copy on left, image on right
- Primary and secondary CTAs
- H1 heading (exactly one per page)
- Quick links section

**Props:**
```typescript
{
  content?: {
    headline?: string      // H1 text (aligned with title tag)
    subheadline?: string
    primaryCTA?: { label: string; href: string }
    secondaryCTA?: { label: string; href: string }
    image?: string
  }
}
```

**Usage:** Primary hero component for all pages

---

### 3. SearchCard
**Location:** `components/SearchCard.tsx`

**Features:**
- Property search form
- Location, price range, beds, baths filters
- Submit action redirects to `/search` with query params
- "Browse all listings" link

**Props:** None (uses internal state)

**Note:** Search results page is `noindex` with canonical to base listing pages

---

### 4. FastPathCards
**Location:** `components/FastPathCards.tsx`

**Features:**
- Grid of 5 cards (carousel on mobile)
- Image, title, subtitle, link per card
- Navigation arrows for mobile carousel
- "View Market Report" CTA

**Props:**
```typescript
{
  content?: {
    title?: string
    cards?: Array<{
      title: string
      subtitle: string
      href: string
      image: string
    }>
  }
}
```

---

### 5. MarketSnapshot
**Location:** `components/MarketSnapshot.tsx`

**Features:**
- KPI tiles (3 metrics)
- Updated label (monthly)
- CTA to full market report

**Props:**
```typescript
{
  content?: {
    title?: string
    updatedLabel?: string
    kpis?: Array<{ label: string; value: string }>
    cta?: { label: string; href: string }
  }
}
```

---

### 6. WhyChooseUs
**Location:** `components/WhyChooseUs.tsx`

**Features:**
- 4 value proposition cards
- Proof line below cards
- Grid layout (2 cols on md, 4 cols on lg)

**Props:**
```typescript
{
  content?: {
    title?: string
    cards?: Array<{ title: string; body: string }>
    proofLine?: string
  }
}
```

**Differentiators:**
1. AI-Driven Market Analysis
2. Off-Market Access
3. Wishlist-Driven Hunting
4. International Buyer Network

---

### 7. NeighborhoodExplorer
**Location:** `components/NeighborhoodExplorer.tsx`

**Features:**
- Grid/carousel of neighborhood cards
- Image, title, subtitle, link per item
- "View Market Report" CTA

**Props:**
```typescript
{
  content?: {
    title?: string
    items?: Array<{
      title: string
      subtitle: string
      href: string
    }>
  }
}
```

---

### 8. GuidesGrid
**Location:** `components/GuidesGrid.tsx`

**Features:**
- Grid of 3-6 guide cards
- Tag, title, excerpt, link per card
- "View Market Report" CTA

**Props:**
```typescript
{
  content?: {
    title?: string
    cards?: Array<{
      title: string
      excerpt: string
      href: string
      tag?: string
    }>
  }
}
```

---

### 9. TestimonialsStrip
**Location:** `components/TestimonialsStrip.tsx`

**Features:**
- 2-6 testimonial quotes
- Author name and location
- Star ratings
- CTA to reviews page

**Props:**
```typescript
{
  content?: {
    title?: string
    testimonials?: Array<{
      quote: string
      author: string
      location?: string
    }>
    cta?: { label: string; href: string }
  }
}
```

---

### 10. FinalCTA
**Location:** `components/FinalCTA.tsx`

**Features:**
- Hot Sheet signup form
- Customizable form fields
- Privacy note
- Primary conversion CTA

**Props:**
```typescript
{
  content?: {
    title?: string
    subtitle?: string
    formFields?: Array<{
      key: string
      label: string
      type: string
      required: boolean
    }>
    submitLabel?: string
    privacyNote?: string
  }
}
```

---

### 11. Footer
**Location:** `components/Footer.tsx`

**Features:**
- 3 columns: Logo/tagline, Quick Links, Contact
- Copyright and disclaimer
- Privacy Policy and Terms links

**Props:** None

---

### 12. FAQ
**Location:** `components/FAQ.tsx`

**Features:**
- Accordion-style FAQ items
- FAQPage schema (JSON-LD) for SEO
- Expandable/collapsible answers

**Props:**
```typescript
{
  content?: {
    title?: string
    items?: Array<{ q: string; a: string }>
  }
}
```

**SEO:** Automatically generates FAQPage schema markup

---

### 13. InternalLinks
**Location:** `components/InternalLinks.tsx`

**Features:**
- Reusable internal linking component
- Links to Coronado hub, market report, micro-markets
- Styled as sidebar callout

**Props:**
```typescript
{
  links?: Array<{ label: string; href: string }>
  title?: string
}
```

---

## Page Template Rules

### H1 Requirements
- **Exactly one H1 per page**
- H1 must align with title tag and primary keyword
- H1 is rendered in `HeroSplit` component
- Example: Title "Coronado Homes for Sale | Crown Coronado" → H1 "Coronado Homes for Sale"

### Above-the-Fold Structure
All pages must include:
1. **Clear value proposition** (in HeroSplit subheadline)
2. **Primary CTA** (Hot Sheet signup or relevant action)
3. **Search functionality** (SearchCard component)

### Internal Linking Requirements
Money pages must include internal links to:
- Coronado hub (`/coronado/`)
- Market report (`/coronado/market-report/`)
- Relevant micro-markets (Shores, Cays, etc.)

Use `InternalLinks` component for consistent implementation.

### FAQ Sections
- Required on all money pages
- Required on market report page
- Automatically outputs FAQPage schema
- Minimum 2-3 questions per page

### Content Requirements
- **Avoid thin content**: Each indexable page must add unique local information
- Include neighborhood-specific details
- Add market insights and local knowledge
- Provide actionable information for buyers/sellers

## Page Composition Pattern

Pages are composed using JSON data files:

```typescript
// Example: app/coronado/homes-for-sale/page.tsx
import HeroSplit from '@/components/HeroSplit'
import SearchCard from '@/components/SearchCard'
import FAQ from '@/components/FAQ'
import InternalLinks from '@/components/InternalLinks'

export default function Page() {
  return (
    <div>
      <HeroSplit content={...} />
      <SearchCard />
      <div>
        {/* Unique content */}
        <InternalLinks links={...} />
      </div>
      <FAQ content={...} />
    </div>
  )
}
```

## Component Usage Guidelines

1. **Consistency**: Use components as-is, don't modify for individual pages
2. **JSON-Driven**: All content comes from JSON/data files
3. **Accessibility**: All components include proper ARIA labels and semantic HTML
4. **Responsive**: All components are mobile-first and responsive
5. **SEO**: Components include proper heading hierarchy and schema markup

## Component Dependencies

- All components use Tailwind CSS for styling
- Client components use `'use client'` directive
- Image components use Next.js `Image` component
- Links use Next.js `Link` component

