/**
 * Analytics utilities
 * Supports GA4 and privacy-friendly alternatives
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

/**
 * Initialize Google Analytics 4
 */
export function initGA4(measurementId: string) {
  if (typeof window === 'undefined') return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  const dataLayer = window.dataLayer
  window.gtag = function (...args: any[]) {
    dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  })
}

/**
 * Track page view
 */
export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || '', {
    page_path: url,
  })
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, formType: string = 'contact') {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'form_submit', {
    form_name: formName,
    form_type: formType,
  })
}

/**
 * Track CTA click
 */
export function trackCTAClick(ctaName: string, ctaLocation: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  })
}

/**
 * Track email subscription
 */
export function trackEmailSubscribe(source: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'email_subscribe', {
    source,
    event_category: 'engagement',
  })
}

/**
 * Track search
 */
export function trackSearch(searchTerm: string, filters?: Record<string, any>) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'search', {
    search_term: searchTerm,
    filters: JSON.stringify(filters),
  })
}

