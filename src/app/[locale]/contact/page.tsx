'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
    const t = useTranslations('Contact');
    const tGuar = useTranslations('Guarantees');

    const guaranteesList = [
        { key: 'insured', icon: 'verified_user' },
        { key: 'support', icon: 'support_agent' },
        { key: 'standards', icon: 'gpp_good' }
    ];

    return (
        <>
            <Navbar />
            {/* Always light — no dark: variants */}
            <div style={{ backgroundColor: '#F8F9FA' }} className="min-h-screen pt-40 md:pt-48 text-slate-900 pb-32">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

                    {/* Page Intro Header */}
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-primary"></div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{t('hero_label')}</span>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column: Interactive Form */}
                        <div className="lg:col-span-7">
                            <FadeIn delay={0.2}>
                                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-900 mb-6 tracking-tighter">
                                    {t('hero_title')} <br />
                                    <span className="serif-italic font-normal lowercase text-primary">{t('hero_highlight')}</span>
                                </h1>
                                <p className="text-lg text-slate-500 font-light max-w-xl mb-12">
                                    {t('subtitle')}
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <ContactForm />
                            </FadeIn>
                        </div>

                        {/* Right Column: Credibility Sidebar */}
                        <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-40">

                            {/* Service Region Card */}
                            <FadeIn direction="left" delay={0.4}>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">Service Coverage</h3>
                                        <span className="h-px bg-slate-200 flex-grow"></span>
                                    </div>
                                    <div className="rounded-3xl border border-slate-200 shadow-md bg-white p-8 flex items-center justify-between gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-primary">
                                                <span className="material-symbols-outlined font-light text-3xl">map</span>
                                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Headquarters & Region</span>
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black tracking-tight text-slate-900">Greater Montreal Area</h4>
                                                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Quebec, Canada</p>
                                            </div>
                                            <div className="text-xs text-slate-400 font-light space-y-1">
                                                <p className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                    Montreal Downtown & Executive Hubs
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                    Laval, Longueuil, & surrounding suburbs
                                                </p>
                                            </div>
                                        </div>

                                        {/* Animated ping dot */}
                                        <div className="hidden sm:block w-28 h-28 rounded-full border border-slate-200 relative overflow-hidden bg-slate-50 flex-shrink-0">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary/20 rounded-full animate-ping"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Guarantees */}
                            <FadeIn direction="left" delay={0.5}>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">{tGuar('title')}</h3>
                                        <span className="h-px bg-slate-200 flex-grow"></span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {guaranteesList.map((g) => (
                                            <div
                                                key={g.key}
                                                className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-primary hover:shadow-md transition-all duration-300 group"
                                            >
                                                <span className="material-symbols-outlined text-primary text-3xl font-light mb-3 block group-hover:scale-110 transition-transform duration-300">
                                                    {g.icon}
                                                </span>
                                                <h4 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase mb-1">
                                                    {tGuar(`${g.key}.title`)}
                                                </h4>
                                                <p className="text-xs text-slate-500 leading-relaxed font-light">
                                                    {tGuar(`${g.key}.desc`)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* 24/7 Call Card */}
                            <FadeIn direction="left" delay={0.6}>
                                <div className="p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-full bg-primary/10 -skew-x-12 translate-x-12 group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
                                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">Immediate Dispatch</h4>
                                    <p className="text-slate-400 text-xs font-light leading-relaxed mb-6">
                                        Need an emergency cleanup or high-security workspace? Call our 24/7 facilities coordinator directly.
                                    </p>
                                    <a
                                        href={`tel:${t('info.phone.value')}`}
                                        className="inline-flex items-center gap-3 text-2xl font-black tracking-tight text-white hover:text-accent-gold transition-colors"
                                    >
                                        <span className="material-symbols-outlined font-light text-2xl text-accent-gold animate-bounce">phone_in_talk</span>
                                        {t('info.phone.value')}
                                    </a>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
