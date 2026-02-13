// Listing API Types
export interface Listing {
  id: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    full: string
  }
  price: number
  beds: number
  baths: number
  sqft?: number
  lotSize?: number
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'other'
  status: 'active' | 'pending' | 'sold' | 'off-market'
  images: string[]
  description?: string
  yearBuilt?: number
  daysOnMarket: number
  openHouse?: {
    date: string
    startTime: string
    endTime: string
  }
  coordinates?: {
    lat: number
    lng: number
  }
  neighborhood?: string
  mlsNumber?: string
}

export interface ListingSearchParams {
  location?: string
  minPrice?: number
  maxPrice?: number
  beds?: number
  baths?: number
  propertyType?: string
  status?: string
  page?: number
  limit?: number
}

export interface ListingSearchResponse {
  listings: Listing[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Market Analytics API Types
export interface MarketKPI {
  label: string
  value: string | number
  change?: number
  changeType?: 'increase' | 'decrease' | 'neutral'
}

export interface MarketData {
  medianPrice: number
  activeListings: number
  newListings30d: number
  avgDaysOnMarket: number
  pricePerSqft: number
  sold30d: number
  reductions: number
  inventoryChange: number
  lastUpdated: string
}

export interface MarketTimeSeries {
  date: string
  medianPrice: number
  activeListings: number
  newListings: number
  sold: number
  avgDaysOnMarket: number
}

export interface MarketReport {
  kpis: MarketKPI[]
  timeSeries: MarketTimeSeries[]
  lastUpdated: string
  updateFrequency: 'monthly' | 'weekly' | 'daily'
}

// Email API Types
export interface EmailSubscriber {
  email: string
  name?: string
  phone?: string
  segments?: string[]
  tags?: string[]
  metadata?: Record<string, any>
}

export interface EmailSubscriptionResponse {
  success: boolean
  subscriberId?: string
  message?: string
}

// CRM Types
export interface CRMLead {
  name: string
  email: string
  phone?: string
  source: string
  propertyInterest?: string
  budget?: string
  timeline?: string
  notes?: string
  metadata?: Record<string, any>
}

export interface CRMWebhookResponse {
  success: boolean
  leadId?: string
  message?: string
}

