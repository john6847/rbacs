import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';
import FadeIn from '@/components/FadeIn';

export default function Services() {
    const t = useTranslations('Services');

    return (
        <>
            <Navbar /> {/* Ensure Navbar adapts or uses default */}
            {/* 
        Note: The design has a specific header for services:
        <header class="fixed top-0 z-50 w-full glass-nav border-b border-slate-200/50 dark:border-white/10"> 
        But we are reusing the Global Navbar component. 
        If strict adherence is needed, we would pass props or separate components.
        For now, reusing default.
      */}
            <section className="pt-40 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="max-w-4xl">
                    <FadeIn delay={0.1}>
                        <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">{t('hero_title')}</span>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
                            {t('hero_subtitle')} <br /><span className="serif-italic font-normal lowercase">{t('hero_highlight')}</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
                            {t('hero_desc')}
                        </p>
                    </FadeIn>
                </div>
            </section>
            <main className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-32">
                <div className="asymmetric-grid">
                    <div className="col-span-12 lg:col-span-8 group relative overflow-hidden bg-white service-card">
                        <FadeIn delay={0.2} className="h-full">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img alt="Elite Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="/office-service.png" />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col md:flex-row md:items-end justify-between border-b border-x border-slate-100">
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">01</span>
                                    <h3 className="text-4xl font-extrabold tracking-tighter mt-2">{t('items.office.title')}</h3>
                                    <p className="text-slate-500 mt-4 max-w-sm text-sm">{t('items.office.desc')}</p>
                                </div>
                                <a className="mt-6 md:mt-0 flex items-center gap-2 group/link" href="#">
                                    <span className="text-xs font-bold tracking-widest uppercase">Explore Details</span>
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="col-span-12 lg:col-span-4 group relative bg-white service-card">
                        <FadeIn delay={0.4} className="h-full">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img alt="Medical Sanitation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/medical-clinic.png" />
                            </div>
                            <div className="p-8 border-b border-x border-slate-100 h-full">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">02</span>
                                <h3 className="text-3xl font-extrabold tracking-tighter mt-2 leading-none uppercase">{t('items.medical.title')}</h3>
                                <p className="text-slate-500 mt-4 text-sm">{t('items.medical.desc')}</p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="col-span-12 lg:col-span-5 group relative bg-white lg:mt-[-4rem] service-card">
                        <FadeIn delay={0.6} className="h-full">
                            <div className="aspect-square overflow-hidden">
                                <img alt="Retail Spaces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/retail-place.png" />
                            </div>
                            <div className="p-8 border-b border-x border-slate-100">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">03</span>
                                <h3 className="text-3xl font-extrabold tracking-tighter mt-2 uppercase">{t('items.retail.title')}</h3>
                                <p className="text-slate-500 mt-4 text-sm">{t('items.retail.desc')}</p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="col-span-12 lg:col-span-7 group relative bg-white service-card">
                        <FadeIn delay={0.8} className="h-full">
                            <div className="aspect-[21/9] overflow-hidden">
                                <img alt="Post Construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/post-construction.png" />
                            </div>
                            <div className="p-8 border-b border-x border-slate-100 flex flex-col justify-center">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">04</span>
                                <h3 className="text-4xl font-extrabold tracking-tighter mt-2 uppercase">{t('items.industrial.title')}</h3>
                                <p className="text-slate-500 mt-4 text-sm max-w-md">{t('items.industrial.desc')}</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </main>
            <section className="bg-white dark:bg-elite-black py-32 border-y border-slate-100 dark:border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="flex flex-col border-l border-slate-200 dark:border-white/10 pl-8">
                            <FadeIn delay={0.2}>
                                <div className="text-[120px] font-extrabold tracking-tighter leading-none text-primary mb-4">100</div>
                                <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Percent Certified Green</div>
                                <p className="text-sm mt-4 text-slate-500 dark:text-slate-400">Eco-conscious methodologies integrated into every cleaning protocol.</p>
                            </FadeIn>
                        </div>
                        <div className="flex flex-col border-l border-slate-200 dark:border-white/10 pl-8">
                            <FadeIn delay={0.4}>
                                <div className="text-[120px] font-extrabold tracking-tighter leading-none text-slate-900 dark:text-white mb-4">0<span className="text-primary italic font-serif-italic">.</span>2</div>
                                <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Avg. Response Hour</div>
                                <p className="text-sm mt-4 text-slate-500 dark:text-slate-400">Industry-leading agility in client communication and rapid deployment.</p>
                            </FadeIn>
                        </div>
                        <div className="flex flex-col border-l border-slate-200 dark:border-white/10 pl-8">
                            <FadeIn delay={0.6}>
                                <div className="text-[120px] font-extrabold tracking-tighter leading-none text-slate-900 dark:text-white mb-4">24</div>
                                <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Seven Client Support</div>
                                <p className="text-sm mt-4 text-slate-500 dark:text-slate-400">Constant vigilance to ensure your workspace remains flawless at all times.</p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-background-dark py-40">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <FadeIn direction="up">
                        <div className="bg-elite-black text-white p-12 lg:p-24 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
                            <div className="relative z-10 max-w-3xl">
                                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-10">
                                    {t('cta_title')}
                                </h2>
                                <p className="text-lg text-slate-400 mb-12 font-light tracking-wide">
                                    Elevate your business environment with Canada&apos;s premier commercial cleaning partner.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link href="/contact" className="bg-primary hover:bg-white hover:text-black text-white px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all">
                                        {t('cta_button')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
            <Footer />
        </>
    );
}
