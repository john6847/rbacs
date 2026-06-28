import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const areaLinks = [
    { slug: 'montreal', name: 'Montreal' },
    { slug: 'laval', name: 'Laval' },
    { slug: 'longueuil', name: 'Longueuil' },
    { slug: 'brossard', name: 'Brossard' },
    { slug: 'westmount', name: 'Westmount' },
    { slug: 'saint-laurent', name: 'Saint-Laurent' },
];

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-white py-24 px-8 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    <div className="space-y-8">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                            <img
                                src="/logo-rba.png"
                                alt="RBA Commercial Services"
                                className="h-14 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {t('description')}
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('headings.services')}</h4>
                            <ul className="space-y-4 text-sm text-gray-500 font-light">
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.office')}</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.medical')}</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.retail')}</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.construction')}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('headings.company')}</h4>
                            <ul className="space-y-4 text-sm text-gray-500 font-light">
                                <li><Link href="/about" className="hover:text-primary transition-colors">{t('links.about')}</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.philosophy')}</Link></li>
                                <li><Link href="/blog" className="hover:text-primary transition-colors">{t('links.blog')}</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">{t('links.contact')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('headings.compliance')}</h4>
                        <div className="flex flex-wrap gap-6 opacity-30 grayscale">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                            <span className="material-symbols-outlined text-3xl">gpp_good</span>
                            <span className="material-symbols-outlined text-3xl">security</span>
                        </div>
                    </div>
                </div>
                {/* Areas We Serve — internal links for local SEO */}
                <div className="mb-16 pt-12 border-t border-gray-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('headings.areas')}</h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {areaLinks.map((area) => (
                            <Link
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="text-sm text-gray-500 font-light hover:text-primary transition-colors"
                            >
                                {t('areas_prefix')} {area.name}
                            </Link>
                        ))}
                        <Link href="/areas" className="text-sm text-primary font-bold hover:text-black transition-colors">
                            {t('view_all_areas')} →
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t('copyright')}</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors">{t('links.privacy')}</Link>
                        <Link href="/terms" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors">{t('links.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
