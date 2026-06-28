import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { getPost, postSlugs, sortedPosts } from '@/lib/blog';
import { buildMetadata, blogPostingSchema, breadcrumbSchema, localizedUrl } from '@/lib/seo';
import { SITE_URL, locales, type Locale } from '@/lib/site';

export function generateStaticParams() {
  return locales.flatMap((locale) => postSlugs().map((slug) => ({ locale, slug })));
}

const dateLocale: Record<Locale, string> = { en: 'en-CA', fr: 'fr-CA', es: 'es-ES' };

function formatDate(iso: string, locale: Locale) {
  return new Date(iso + 'T00:00:00').toLocaleDateString(dateLocale[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const l = locale as Locale;
  const c = post.content[l];
  return {
    ...buildMetadata({
      locale: l,
      path: `blog/${slug}`,
      title: c.metaTitle,
      description: c.metaDescription,
      image: { url: `${SITE_URL}${post.image}`, alt: c.title },
    }),
    openGraph: {
      type: 'article',
      title: c.metaTitle,
      description: c.metaDescription,
      url: localizedUrl(l, `blog/${slug}`),
      images: [{ url: `${SITE_URL}${post.image}`, alt: c.title }],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  setRequestLocale(locale);

  const l = locale as Locale;
  const c = post.content[l];
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const pageUrl = localizedUrl(l, `blog/${slug}`);

  const related = sortedPosts().filter((p) => p.slug !== slug).slice(0, 2);

  const schema = [
    blogPostingSchema({
      title: c.metaTitle,
      description: c.metaDescription,
      url: pageUrl,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.date,
      locale: l,
    }),
    breadcrumbSchema([
      { name: t('breadcrumb_home'), url: localizedUrl(l, '') },
      { name: t('title'), url: localizedUrl(l, 'blog') },
      { name: c.title, url: pageUrl },
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Header */}
        <article>
          <header className="pt-40 pb-12 px-6 lg:px-12 max-w-[820px] mx-auto">
            <FadeIn delay={0.05}>
              <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
                <Link href="/" className="hover:text-primary transition-colors">{t('breadcrumb_home')}</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <Link href="/blog" className="hover:text-primary transition-colors">{t('title')}</Link>
              </nav>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5">{c.category}</span>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-slate-900">
                {c.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mt-8 text-sm text-slate-400 font-medium">
                <span>{formatDate(post.date, l)}</span>
                <span>·</span>
                <span>{t('min_read', { min: post.readMinutes })}</span>
              </div>
            </FadeIn>
          </header>

          {/* Hero image */}
          <FadeIn delay={0.1}>
            <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60">
                <img src={post.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>

          {/* Body */}
          <div className="max-w-[720px] mx-auto px-6 py-16">
            {c.sections.map((section, i) => (
              <FadeIn key={i} delay={0.05}>
                <div className="mb-10">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-5 mt-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-lg text-slate-600 font-light leading-relaxed mb-5">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 mt-2">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                          <span className="text-lg text-slate-600 font-light leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}

            {/* Inline CTA */}
            <FadeIn>
              <div className="bg-rba-gray border border-slate-200 rounded-3xl p-8 md:p-10 mt-12 text-center">
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-3">{t('post_cta_title')}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-7 max-w-lg mx-auto">{t('post_cta_desc')}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors"
                >
                  {t('cta_button')}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Related posts */}
        <section className="bg-rba-gray border-t border-slate-100 py-20 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-10">{t('related')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => {
                const rc = p.content[l];
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-5 bg-white rounded-2xl border border-slate-200 p-5 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={p.image} alt={rc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2">{rc.category}</span>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {rc.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 hover:border-primary transition-colors">
                {t('all_posts')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
