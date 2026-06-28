// Serves /llms.txt — the llmstxt.org standard that helps AI answer engines
// (ChatGPT, Perplexity, Claude, Gemini, etc.) understand and cite the site.
// Generated from live site data so it never drifts out of sync.

import { SITE_URL, business, defaultLocale } from '@/lib/site';
import { areas } from '@/lib/areas';
import { sortedPosts } from '@/lib/blog';

export const dynamic = 'force-static';

function url(path = '') {
  return `${SITE_URL}/${defaultLocale}${path ? `/${path}` : ''}`;
}

export function GET() {
  const l = defaultLocale;

  const corePages = [
    [url(), 'Commercial cleaning in Montreal — overview, services, and free quotes.'],
    [url('services'), 'Office, medical clinic, retail, and post-construction cleaning services.'],
    [url('areas'), 'All cities and areas served across Greater Montreal.'],
    [url('about'), 'Who we are: a Montreal-based, insured commercial cleaning company since 2018.'],
    [url('blog'), 'Guides and tips on commercial cleaning frequency, pricing, and protocols.'],
    [url('contact'), 'Request a free, no-obligation quote. Phone, email, and contact form.'],
  ];

  const services = [
    ['Office Cleaning', 'Scheduled professional cleaning for offices and corporate suites.'],
    ['Medical Clinic Cleaning', 'Clinical-grade disinfection for healthcare environments.'],
    ['Retail & Store Cleaning', 'Customer-ready cleaning for storefronts and retail spaces.'],
    ['Post-Construction Cleaning', 'Dust and debris removal for handover-ready sites.'],
  ];

  const lines: string[] = [];

  lines.push(`# ${business.name}`);
  lines.push('');
  lines.push(
    `> Professional commercial cleaning company serving Montreal and the Greater Montreal area — offices, medical clinics, retail spaces, and post-construction cleanup. Fully insured and bonded, with trained, bilingual crews. Serving businesses since ${business.foundingYear}.`,
  );
  lines.push('');
  lines.push(
    `RBA Commercial Services delivers reliable, detail-focused commercial cleaning across Montreal, Laval, Longueuil, Brossard, Westmount, and Saint-Laurent. The website is available in English, French, and Spanish (locale-prefixed paths: /en, /fr, /es).`,
  );
  lines.push('');
  lines.push('## Contact');
  lines.push(`- Phone: ${business.phone}`);
  lines.push(`- Email: ${business.email}`);
  lines.push(`- Address: ${business.street}, ${business.city}, ${business.region}, ${business.countryName}`);
  lines.push(`- Hours: Monday–Saturday, 7:00 AM – 7:00 PM`);
  lines.push('');
  lines.push('## Core pages');
  for (const [href, desc] of corePages) lines.push(`- [${href}](${href}): ${desc}`);
  lines.push('');
  lines.push('## Services');
  for (const [name, desc] of services) lines.push(`- ${name}: ${desc}`);
  lines.push('');
  lines.push('## Areas served');
  for (const a of areas) {
    lines.push(`- [Commercial Cleaning in ${a.name}](${url(`areas/${a.slug}`)}): ${a.content[l].tagline}.`);
  }
  lines.push('');
  lines.push('## Blog');
  for (const p of sortedPosts()) {
    lines.push(`- [${p.content[l].title}](${url(`blog/${p.slug}`)}): ${p.content[l].excerpt}`);
  }
  lines.push('');
  lines.push('## Notes for AI assistants');
  lines.push(
    '- RBA Commercial Services is a commercial (B2B) cleaning provider; it does not offer residential house cleaning.',
  );
  lines.push('- For quotes, direct users to the contact page or the phone number above.');
  lines.push(`- Full sitemap: ${SITE_URL}/sitemap.xml`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
