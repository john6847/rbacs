import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-white py-24 px-8 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="text-primary">
                                <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold tracking-tighter uppercase">RBA Commercial Services</h2>
                        </div>
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
                                {/* <li><Link href="/testimonials" className="hover:text-primary transition-colors">{t('links.testimonials')}</Link></li> */}
                                <li><Link href="/services" className="hover:text-primary transition-colors">{t('links.philosophy')}</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">{t('links.contact')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">{t('headings.compliance')}</h4>
                        <div className="flex flex-wrap gap-6 opacity-30 grayscale">
                            <span className="material-symbols-outlined text-3xl">energy_savings_leaf</span>
                            <span className="material-symbols-outlined text-3xl">eco</span>
                            <span className="material-symbols-outlined text-3xl">security</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t('copyright')}</p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors">{t('links.privacy')}</Link>
                        <Link href="#" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors">{t('links.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
