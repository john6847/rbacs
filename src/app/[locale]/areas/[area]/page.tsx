import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { getArea, areaSlugs } from '@/lib/areas';
import {
  buildMetadata,
  localBusinessSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  localizedUrl,
} from '@/lib/seo';
import { business, locales, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    areaSlugs().map((area) => ({ locale, area })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}): Promise<Metadata> {
  const { locale, area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const l = locale as Locale;
  const c = area.content[l];
  return buildMetadata({
    locale: l,
    path: `areas/${slug}`,
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}) {
  const { locale, area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  setRequestLocale(locale);

  const l = locale as Locale;
  const c = area.content[l];
  const t = await getTranslations({ locale, namespace: 'Areas' });
  const tServices = await getTranslations({ locale, namespace: 'Services' });

  const pageUrl = localizedUrl(l, `areas/${slug}`);

  const services = [
    { id: 'office', icon: 'corporate_fare' },
    { id: 'medical', icon: 'health_and_safety' },
    { id: 'retail', icon: 'store' },
    { id: 'industrial', icon: 'factory' },
  ] as const;

  const nearby = area.nearby
    .map((s) => getArea(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  // Structured data: local business for this city, one Service node per offering,
  // breadcrumbs, and the FAQ block (high value for AI answer engines).
  const schema = [
    localBusinessSchema({
      url: pageUrl,
      areaServed: [area.name, ...area.nearby.map((s) => getArea(s)?.name).filter(Boolean) as string[]],
      description: c.metaDescription,
    }),
    ...services.map((s) =>
      serviceSchema({
        name: tServices(`items.${s.id}.title`),
        description: tServices(`items.${s.id}.desc`),
        url: pageUrl,
        areaName: area.name,
      }),
    ),
    breadcrumbSchema([
      { name: 'Home', url: localizedUrl(l, '') },
      { name: t('index.breadcrumb'), url: localizedUrl(l, 'areas') },
      { name: area.name, url: pageUrl },
    ]),
    faqSchema(c.faqs),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="bg-rba-gray min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-16 px-6 lg:px-12 max-w-[1800px] mx-auto">
          {/* Breadcrumb */}
          <FadeIn delay={0.05}>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">{t('breadcrumb_home')}</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <Link href="/areas" className="hover:text-primary transition-colors">{t('index.breadcrumb')}</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">{area.name}</span>
            </nav>
          </FadeIn>
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
                <span className="material-symbols-outlined text-base">location_on</span>
                {area.region[l]}
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8 text-slate-900">
                {t('city.h1_prefix')}{' '}
                <span className="serif-italic font-normal text-primary">{area.name}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                {c.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors"
                >
                  {t('city.cta_quote')}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  {business.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 px-6 lg:px-12 bg-white border-y border-slate-100">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-3 gap-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-900 leading-tight">
                {t('city.intro_heading', { city: area.name })}
              </h2>
            </FadeIn>
            <div className="lg:col-span-2 space-y-6">
              {c.intro.map((p, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)}>
                  <p className="text-lg text-slate-500 font-light leading-relaxed">{p}</p>
                </FadeIn>
              ))}
              <FadeIn delay={0.3}>
                <div className="flex gap-4 items-start bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-4">
                  <span className="material-symbols-outlined text-primary">near_me</span>
                  <p className="text-base text-slate-600 font-light leading-relaxed">{c.whyHere}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services offered here */}
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                {t('city.services_eyebrow')}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                {t('city.services_heading', { city: area.name })}
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={0.1 * (i + 1)}>
                <Link
                  href="/services"
                  className="group block h-full bg-white rounded-2xl border border-slate-100 p-8 hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {tServices(`items.${s.id}.title`)}
                  </h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {tServices(`items.${s.id}.desc`)}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Neighborhoods served */}
        <section className="py-20 px-6 lg:px-12 bg-white border-y border-slate-100">
          <div className="max-w-[1100px] mx-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
                {t('city.neighborhoods_heading', { city: area.name })}
              </h2>
            </FadeIn>
            <div className="flex flex-wrap gap-3">
              {area.neighborhoods.map((n, i) => (
                <FadeIn key={n} delay={0.04 * i}>
                  <span className="inline-flex items-center gap-2 bg-rba-gray border border-slate-200 rounded-full px-5 py-2 text-sm text-slate-600 font-light">
                    <span className="material-symbols-outlined text-sm text-primary">place</span>
                    {n}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 lg:px-12 max-w-[900px] mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                {t('city.faq_eyebrow')}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                {t('city.faq_heading', { city: area.name })}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <details className="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-slate-900 pr-6">{f.question}</h3>
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45">add</span>
                  </summary>
                  <p className="text-slate-500 font-light leading-relaxed mt-4">{f.answer}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                  {t('city.form_eyebrow')}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  {t('city.form_heading', { city: area.name })}
                </h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  {t('city.form_desc', { city: area.name })}
                </p>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas — internal linking */}
        {nearby.length > 0 && (
          <section className="py-20 px-6 lg:px-12 bg-rba-gray border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
                  {t('city.nearby_heading')}
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearby.map((a, i) => (
                  <FadeIn key={a.slug} delay={0.08 * i}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="group flex items-center justify-between bg-white rounded-2xl border border-slate-200 p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div>
                        <span className="block text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{a.name}</span>
                        <span className="text-xs text-slate-400 font-light">{a.content[l].tagline}</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </Link>
                  </FadeIn>
                ))}
                <FadeIn delay={0.24}>
                  <Link
                    href="/areas"
                    className="group flex items-center justify-between bg-primary text-white rounded-2xl p-6 hover:bg-slate-900 transition-all"
                  >
                    <span className="text-lg font-bold">{t('city.all_areas')}</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
