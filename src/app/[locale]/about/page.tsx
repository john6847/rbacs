'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';
import FadeIn from '@/components/FadeIn';

export default function About() {
    const t = useTranslations('About');

    const commitments = [
        { key: 'reliable', icon: 'event_available' },
        { key: 'insured', icon: 'verified_user' },
        { key: 'eco', icon: 'energy_savings_leaf' },
        { key: 'quality', icon: 'fact_check' },
    ] as const;

    const values = [
        { key: 'integrity', num: '01' },
        { key: 'excellence', num: '02' },
        { key: 'sustainability', num: '03' },
    ] as const;

    return (
        <>
            <Navbar />
            <main className="bg-rba-gray min-h-screen">

                {/* Hero */}
                <section className="pt-40 pb-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
                    <div className="max-w-4xl">
                        <FadeIn delay={0.1}>
                            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
                                {t('hero_title')}
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8 text-slate-900">
                                {t('hero_subtitle')}{' '}
                                <span className="serif-italic font-normal lowercase text-primary">{t('hero_highlight')}</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                                {t('hero_desc')}
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Story */}
                <section className="py-24 px-6 lg:px-12 bg-white border-y border-slate-100">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn direction="right">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                                    {t('story_label')}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-tight">
                                    {t('story_title_part1')}{' '}
                                    <span className="text-primary italic-serif font-light">{t('story_title_part2')}</span>
                                </h2>
                                <p className="text-slate-500 font-light leading-relaxed mb-6">{t('story_desc1')}</p>
                                <p className="text-slate-500 font-light leading-relaxed">{t('story_desc2')}</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60">
                                <img
                                    alt="Commercial office space"
                                    className="w-full h-full object-cover"
                                    src="/office.jpg"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Mission */}
                <section className="bg-primary text-white py-24 px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-4 block">
                                {t('mission_label')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
                                {t('mission_headline')}{' '}
                                <span className="italic-serif font-light">{t('mission_highlight')}</span>
                            </h2>
                            <p className="text-white/70 font-light leading-relaxed text-lg">{t('mission_desc')}</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <blockquote className="border-l-2 border-white/20 pl-8">
                                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white/90">
                                    &ldquo;{t('mission_quote')}&rdquo;
                                </p>
                            </blockquote>
                        </FadeIn>
                    </div>
                </section>

                {/* Commitments */}
                <section className="py-24 px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto">
                        <FadeIn>
                            <div className="text-center mb-16 max-w-2xl mx-auto">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                                    {t('commitments_label')}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                                    {t('commitments_title')}
                                </h2>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {commitments.map((item, index) => (
                                <FadeIn key={item.key} delay={0.1 * (index + 1)}>
                                    <div className="bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                        </div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">
                                            {t(`commitments.${item.key}.title`)}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            {t(`commitments.${item.key}.desc`)}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
                    <div className="max-w-[1400px] mx-auto">
                        <FadeIn>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-slate-100">
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
                                    {t('values_heading')}
                                </h2>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    {t('values_title')}
                                </span>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            {values.map((item, index) => (
                                <FadeIn key={item.key} delay={0.1 * (index + 1)}>
                                    <div className="group">
                                        <span className="block text-5xl font-extrabold text-slate-100 group-hover:text-primary/20 transition-colors duration-500 mb-6">
                                            {item.num}
                                        </span>
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-900">
                                            {t(`values.${item.key}.title`)}
                                        </h3>
                                        <p className="text-slate-500 font-light leading-relaxed">
                                            {t(`values.${item.key}.desc`)}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-rba-dark text-white py-28 px-6 lg:px-12">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                        <FadeIn>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
                                {t('cta_title_part1')}{' '}
                                <span className="italic-serif font-light text-accent-gold">{t('cta_title_part2')}</span>
                            </h2>
                            <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">{t('cta_desc')}</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-slate-900 px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all shadow-2xl whitespace-nowrap"
                            >
                                {t('cta_button')}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
