/**
 * Environment variable configuration
 * Validates required variables and provides typed access
 */

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue
  if (!value && !defaultValue) {
    console.warn(`Warning: Environment variable ${key} is not set`)
  }
  return value || ''
}

export const env = {
  // Listing API
  listingsApiUrl: getEnvVar('LISTINGS_API_URL'),
  listingsApiKey: getEnvVar('LISTINGS_API_KEY'),

  // Market API
  marketApiUrl: getEnvVar('MARKET_API_URL'),
  marketApiKey: getEnvVar('MARKET_API_KEY'),

  // Email Provider
  emailProviderApiKey: getEnvVar('EMAIL_PROVIDER_API_KEY'),

  // CRM
  crmWebhookUrl: getEnvVar('CRM_WEBHOOK_URL'),

  // Site Configuration
  siteUrl: getEnvVar('SITE_URL', 'https://crowncoronado.com'),

  // CMS
  cmsUrl: getEnvVar('CMS_URL'),

  // Node Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const

// Validate required variables in production
if (env.isProduction) {
  const requiredVars = [
    'LISTINGS_API_URL',
    'LISTINGS_API_KEY',
    'MARKET_API_URL',
    'MARKET_API_KEY',
    'EMAIL_PROVIDER_API_KEY',
  ]

  const missing = requiredVars.filter(
    (key) => !process.env[key]
  )

  if (missing.length > 0) {
    console.error(
      `Missing required environment variables: ${missing.join(', ')}`
    )
  }
}

