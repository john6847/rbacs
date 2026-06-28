// JSON-LD structured-data builders. Strong schema is what makes the site
// eligible for rich results in Google AND citable by AI answer engines (GEO).

import type { Metadata } from 'next';
import { SITE_URL, business, locales, defaultLocale, ogLocale, defaultOgImage, type Locale } from './site';

// Centralized metadata builder — produces canonical URL, hreflang alternates,
// Open Graph and Twitter cards for any page in any locale.
export function buildMetadata(opts: {
  locale: Locale;
  path?: string; // '' = home
  title: string;
  description: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
}): Metadata {
  const { locale, path = '', title, description } = opts;
  const canonical = localizedUrl(locale, path);
  const image = opts.image || defaultOgImage;

  return {
    // `absolute` bypasses the parent title template so our crafted, keyword-rich
    // per-page titles aren't double-branded.
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'website',
      siteName: business.name,
      title,
      description,
      url: canonical,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [
        {
          url: image.url,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt ?? title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.street,
  addressLocality: business.city,
  addressRegion: business.region,
  postalCode: business.postalCode,
  addressCountry: business.country,
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: business.latitude,
  longitude: business.longitude,
};

// Helper: localized URL for a given path ('' = home).
export function localizedUrl(locale: Locale, path = '') {
  const clean = path.replace(/^\/+/, '');
  return `${SITE_URL}/${locale}${clean ? `/${clean}` : ''}`;
}

// Organization — site-wide identity for the knowledge graph.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    logo: business.logo,
    image: business.image,
    email: business.email,
    telephone: business.phone,
    foundingDate: business.foundingYear,
    address: postalAddress,
    sameAs: business.sameAs,
  };
}

// WebSite — enables sitelinks search box + ties pages to the brand.
export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

// LocalBusiness — the cornerstone for local map/pack + "near me" + AI answers.
// `areaServed` lets us list every city we cover from one global node.
export function localBusinessSchema(opts?: {
  areaServed?: string[];
  url?: string;
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CleaningService'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: business.name,
    image: business.image,
    logo: business.logo,
    url: opts?.url || SITE_URL,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    description:
      opts?.description ||
      'Professional commercial cleaning company serving Montreal and the surrounding metro area — offices, medical clinics, retail, and post-construction.',
    address: postalAddress,
    geo,
    areaServed: (opts?.areaServed || [
      'Montreal',
      'Laval',
      'Longueuil',
      'Brossard',
      'Westmount',
      'Saint-Laurent',
    ]).map((name) => ({ '@type': 'City', name })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: geo,
      geoRadius: business.geoRadiusKm * 1000,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    sameAs: business.sameAs,
  };
}

// Service schema — describes a single offering, optionally pinned to one city.
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: opts.areaName
      ? { '@type': 'City', name: opts.areaName }
      : { '@type': 'AdministrativeArea', name: 'Greater Montreal' },
    category: 'Commercial Cleaning',
  };
}

// BreadcrumbList — improves SERP appearance + helps crawlers map hierarchy.
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQPage — high-value for GEO: answer engines lift these Q&As directly.
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

// BlogPosting — makes articles eligible for rich results and AI citation.
export function blogPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  locale: Locale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    inLanguage: opts.locale,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    url: opts.url,
    author: { '@id': `${SITE_URL}/#organization`, name: business.name },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

// hreflang alternates map for the Metadata API `alternates.languages` field.
export function languageAlternates(path = '') {
  const clean = path.replace(/^\/+/, '');
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}${clean ? `/${clean}` : ''}`;
  }
  // x-default points search engines to the canonical default locale.
  languages['x-default'] = `/${defaultLocale}${clean ? `/${clean}` : ''}`;
  return languages;
}
