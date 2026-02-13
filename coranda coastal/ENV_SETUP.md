# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Listing/Search API
LISTINGS_API_URL=https://api.example.com/listings
LISTINGS_API_KEY=your_listings_api_key_here

# Market Analytics API
MARKET_API_URL=https://api.example.com/market
MARKET_API_KEY=your_market_api_key_here

# Email Provider (e.g., Mailchimp, ConvertKit, etc.)
EMAIL_PROVIDER_API_KEY=your_email_provider_api_key_here

# CRM Integration (Optional)
CRM_WEBHOOK_URL=https://webhook.example.com/crm/lead

# Site Configuration
SITE_URL=https://crowncoronado.com

# CMS (Optional - if using headless CMS)
CMS_URL=https://cms.example.com/api
```

## Variable Descriptions

### Required Variables

- **LISTINGS_API_URL**: Base URL for your IDX/listing feed provider API
- **LISTINGS_API_KEY**: Authentication token for the listings API
- **MARKET_API_URL**: Endpoint URL for market analytics service
- **MARKET_API_KEY**: Authentication token for market analytics API
- **EMAIL_PROVIDER_API_KEY**: API key for your email service provider (Mailchimp, ConvertKit, SendGrid, etc.)

### Optional Variables

- **CRM_WEBHOOK_URL**: Webhook URL for CRM integration (e.g., Salesforce, HubSpot)
- **SITE_URL**: Your site's canonical URL (defaults to https://crowncoronado.com)
- **CMS_URL**: Headless CMS endpoint if using CMS for content management

## Development Setup

1. Copy this file to `.env.local`:
   ```bash
   cp ENV_SETUP.md .env.local
   ```

2. Fill in your actual API keys and URLs

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Production Setup

Set these environment variables in your hosting platform:

- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **Other platforms**: Use their respective environment variable configuration

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use different API keys for development and production
- Rotate API keys regularly

