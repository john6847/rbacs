import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { areas } from '@/lib/areas';
import { localBusinessSchema, breadcrumbSchema, localizedUrl } from '@/lib/seo';
import { business, locales, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'Areas' });

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: localizedUrl(l, '') },
    { name: t('index.breadcrumb'), url: localizedUrl(l, 'areas') },
  ]);

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            url: localizedUrl(l, 'areas'),
            areaServed: areas.map((a) => a.name),
          }),
          breadcrumb,
        ]}
      />
      <Navbar />
      <main className="bg-rba-gray min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
                {t('index.eyebrow')}
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8 text-slate-900">
                {t('index.title_part1')}{' '}
                <span className="serif-italic font-normal lowercase text-primary">{t('index.title_highlight')}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                {t('index.intro')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Area grid */}
        <section className="px-6 lg:px-12 pb-24 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, i) => (
              <FadeIn key={area.slug} delay={0.08 * i}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block h-full rounded-3xl border border-slate-200 bg-white p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1 mb-4">
                    {area.region[l]}
                  </p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {area.content[l].tagline}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-24 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 leading-tight">
                {t('index.cta_title')}
              </h2>
              <p className="text-white/70 font-light text-lg max-w-xl">
                {t('index.cta_desc')} <span className="font-bold text-white">{business.phone}</span>
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all shadow-2xl whitespace-nowrap"
            >
              {t('index.cta_button')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
