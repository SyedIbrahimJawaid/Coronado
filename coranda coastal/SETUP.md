# Crown Coronado Website - Setup Guide

## Project Overview

This is a Next.js 14 real estate website for Crown Coronado, built according to the developer build specification. The site is designed to become the #1 organic result for Coronado Island real estate searches.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
coranda coastal/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with header/footer
│   ├── globals.css        # Global styles
│   ├── off-market/        # Off-market listings page
│   ├── contact/           # Contact page
│   └── coronado/          # Coronado section pages
│       ├── homes-for-sale/
│       ├── condos-for-sale/
│       ├── waterfront-homes/
│       ├── coronado-shores/
│       ├── coronado-cays/
│       └── market-report/
├── components/            # React components
│   ├── HeaderNav.tsx
│   ├── Footer.tsx
│   ├── HeroWithSearch.tsx
│   ├── SearchCard.tsx
│   ├── FastPathCards.tsx
│   ├── MarketSnapshot.tsx
│   ├── WhyChooseUs.tsx
│   ├── NeighborhoodExplorer.tsx
│   ├── GuidesGrid.tsx
│   ├── TestimonialsStrip.tsx
│   ├── FinalCTA.tsx
│   ├── SidebarCTA.tsx
│   ├── LeadForm.tsx
│   ├── FAQ.tsx
│   ├── Steps.tsx
│   └── KPIGrid.tsx
├── data/                  # JSON content files
│   ├── home.json
│   ├── off-market.json
│   └── market-report.json
└── public/                # Static assets
    └── logo-icon.png      # Logo/favicon
```

## Design System

### Colors
- **Background**: `#F8F5F0` (Warm off-white)
- **Primary Text**: `#0B1F3B` (Deep navy)
- **Secondary Text**: `#233B5E` (Slate blue)
- **Accent**: `#D6C3A5` (Sand)
- **Slate**: `#374151` (Gray slate)

### Typography
- **Headlines**: Serif font (Georgia)
- **Body/UI**: Sans-serif (system fonts)
- **Radius**: 12-18px for cards, 10-12px for inputs

## Key Features

### Homepage
- Hero section with integrated search
- Fast path cards (Homes, Condos, Waterfront, Shores, Cays)
- Market snapshot with KPIs
- Neighborhood explorer
- Guides grid
- Testimonials sidebar
- Final CTA form

### Pages Implemented
- `/` - Homepage
- `/off-market/` - Off-market listings and Hot Sheet
- `/coronado/homes-for-sale/` - Homes for sale
- `/coronado/condos-for-sale/` - Condos for sale
- `/coronado/waterfront-homes/` - Waterfront properties
- `/coronado/coronado-shores/` - Coronado Shores condos
- `/coronado/coronado-cays/` - Coronado Cays homes
- `/coronado/market-report/` - Monthly market report
- `/contact/` - Contact page

## SEO Implementation

- Proper meta tags on all pages
- Semantic HTML structure
- One H1 per page
- Canonical URLs configured
- Logo set as favicon

## Next Steps

1. **Add Real Images**
   - Replace placeholder images in `/public/`
   - Add hero image for Coronado
   - Add property images for carousels

2. **Connect to Data Sources**
   - Integrate listing API/service
   - Connect market analytics service
   - Set up form submission handlers

3. **Additional Pages**
   - Add neighborhood detail pages (`/coronado/neighborhoods/[slug]/`)
   - Add guide pages (`/guides/*`)
   - Add buyer/seller process pages

4. **Enhancements**
   - Add search functionality with query params
   - Implement filtering on listing pages
   - Add chart components for market report
   - Set up email service for form submissions

## Notes

- Logo image is located at `/public/logo-icon.png`
- All components are TypeScript-based
- Responsive design with mobile-first approach
- Components are reusable and JSON-driven
- Follows Next.js 14 App Router conventions

