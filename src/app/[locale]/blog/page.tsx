import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { sortedPosts } from '@/lib/blog';
import { breadcrumbSchema, localizedUrl } from '@/lib/seo';
import { locales, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const dateLocale: Record<Locale, string> = { en: 'en-CA', fr: 'fr-CA', es: 'es-ES' };

function formatDate(iso: string, locale: Locale) {
  return new Date(iso + 'T00:00:00').toLocaleDateString(dateLocale[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  const all = sortedPosts();
  const [featured, ...rest] = all;
  const fc = featured.content[l];

  const breadcrumb = breadcrumbSchema([
    { name: t('breadcrumb_home'), url: localizedUrl(l, '') },
    { name: t('title'), url: localizedUrl(l, 'blog') },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Navbar />
      <main className="bg-rba-gray min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-16 px-6 lg:px-12 max-w-[1800px] mx-auto">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
                {t('eyebrow')}
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8 text-slate-900">
                {t('title_part1')}{' '}
                <span className="serif-italic font-normal lowercase text-primary">{t('title_highlight')}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                {t('intro')}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured post */}
        <section className="px-6 lg:px-12 max-w-[1800px] mx-auto pb-12">
          <FadeIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img src={featured.image} alt={fc.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary mb-5">
                  <span>{fc.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-slate-400">{t('featured')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {fc.title}
                </h2>
                <p className="text-slate-500 font-light leading-relaxed mt-5">{fc.excerpt}</p>
                <div className="flex items-center gap-4 mt-8 text-xs text-slate-400 font-medium">
                  <span>{formatDate(featured.date, l)}</span>
                  <span>·</span>
                  <span>{t('min_read', { min: featured.readMinutes })}</span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </section>

        {/* Post grid */}
        <section className="px-6 lg:px-12 max-w-[1800px] mx-auto pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => {
              const c = post.content[l];
              return (
                <FadeIn key={post.slug} delay={0.08 * i}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3">{c.category}</span>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed mt-3 flex-grow">{c.excerpt}</p>
                      <div className="flex items-center gap-3 mt-6 text-xs text-slate-400 font-medium">
                        <span>{formatDate(post.date, l)}</span>
                        <span>·</span>
                        <span>{t('min_read', { min: post.readMinutes })}</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-24 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight max-w-2xl">
              {t('cta_title')}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all shadow-2xl whitespace-nowrap"
            >
              {t('cta_button')}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
