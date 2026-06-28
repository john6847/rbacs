import type { MetadataRoute } from 'next';
import { SITE_URL, locales, defaultLocale } from '@/lib/site';
import { areaSlugs } from '@/lib/areas';
import { postSlugs } from '@/lib/blog';

// Static (non-localized) route paths. '' = home.
const staticPaths = ['', 'about', 'services', 'contact', 'areas', 'blog', 'testimonials', 'privacy', 'terms'];

function url(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path ? `/${path}` : ''}`;
}

// Build the hreflang alternates map for one logical page across all locales.
function alternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = url(l, path);
  languages['x-default'] = url(defaultLocale, path);
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...areaSlugs().map((slug) => `areas/${slug}`),
    ...postSlugs().map((slug) => `blog/${slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const isHome = path === '';
    const priority = isHome ? 1 : path.startsWith('areas') ? 0.8 : 0.7;
    for (const locale of locales) {
      entries.push({
        url: url(locale, path),
        changeFrequency: 'monthly',
        priority,
        alternates: alternates(path),
      });
    }
  }
  return entries;
}
