// Central source of truth for site-wide SEO + business (NAP) data.
// Change values here once and they propagate to metadata, sitemap, and JSON-LD.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://rbacommercialservices.ca';

export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Open Graph locale codes (next-intl uses short codes, OG wants region variants)
export const ogLocale: Record<Locale, string> = {
  en: 'en_CA',
  fr: 'fr_CA',
  es: 'es_ES',
};

// Business name, address, contact (NAP) — keep identical everywhere for local SEO.
export const business = {
  name: 'RBA Commercial Services',
  legalName: 'RBA Commercial Services',
  // Use an absolute URL so it resolves in JSON-LD regardless of page.
  logo: `${SITE_URL}/logo-rba.png`,
  image: `${SITE_URL}/office.jpg`,
  email: 'contact@rbacommercialservices.ca',
  phone: '+1-514-623-0791',
  priceRange: '$$',
  foundingYear: '2018',
  street: '8360 rue Birnam',
  city: 'Montreal',
  region: 'QC',
  regionName: 'Quebec',
  postalCode: 'H3N 2V1',
  country: 'CA',
  countryName: 'Canada',
  // Approximate coordinates for the Park-Extension / Birnam St. area of Montreal.
  latitude: 45.5345,
  longitude: -73.6256,
  geoRadiusKm: 60,
  openingHours: 'Mo-Sa 07:00-19:00',
  sameAs: [
    // Add real profiles as they go live — these strengthen the knowledge graph.
    'https://www.facebook.com/rbacommercialservices',
    'https://www.instagram.com/rbacommercialservices',
    'https://www.linkedin.com/company/rbacommercialservices',
  ],
} as const;

// Default share image used for Open Graph / Twitter when a page sets none.
// Branded 1200x630 card (logo + tagline) — the standard social-share size.
export const defaultOgImage = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'RBA Commercial Services — professional commercial cleaning in Greater Montreal',
};
