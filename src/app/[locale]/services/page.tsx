'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/navigation';
import FadeIn from '@/components/FadeIn';
import ContactForm from '@/components/ContactForm';

export default function Services() {
    const t = useTranslations('Services');
    const tList = useTranslations('ServiceChecklists');



    const serviceCards = [
        {
            id: 'office',
            num: '01',
            title: t('items.office.title'),
            desc: t('items.office.desc'),
            img: '/office-service.png',
            checklist: [tList('office.0'), tList('office.1'), tList('office.2'), tList('office.3'), tList('office.4')]
        },
        {
            id: 'medical',
            num: '02',
            title: t('items.medical.title'),
            desc: t('items.medical.desc'),
            img: '/medical-clinic.png',
            checklist: [tList('medical.0'), tList('medical.1'), tList('medical.2'), tList('medical.3'), tList('medical.4')]
        },
        {
            id: 'retail',
            num: '03',
            title: t('items.retail.title'),
            desc: t('items.retail.desc'),
            img: '/retail-place.png',
            checklist: [tList('retail.0'), tList('retail.1'), tList('retail.2'), tList('retail.3'), tList('retail.4')]
        },
        {
            id: 'industrial',
            num: '04',
            title: t('items.industrial.title'),
            desc: t('items.industrial.desc'),
            img: '/post-construction.png',
            checklist: [tList('industrial.0'), tList('industrial.1'), tList('industrial.2'), tList('industrial.3'), tList('industrial.4')]
        }
    ];

    return (
        <>
            <Navbar />

            {/* Page wrapper — always light */}
            <div style={{ backgroundColor: '#F8F9FA' }} className="min-h-screen pt-40 pb-24 text-slate-900">

                {/* Header */}
                <section className="pb-16 px-6 lg:px-12 max-w-[1800px] mx-auto">
                    <div className="max-w-4xl">
                        <FadeIn delay={0.1}>
                            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">{t('hero_title')}</span>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-900">
                                {t('hero_subtitle')} <br />
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

                {/* Service Cards */}
                <main className="max-w-[1800px] mx-auto px-6 lg:px-12 pb-24">
                    <div className="flex items-center justify-between mb-16 pb-4 border-b border-slate-200">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Tailored Commercial Scope</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">01—04</span>
                    </div>

                    <div className="grid grid-cols-1 gap-10">
                        {serviceCards.map((service, index) => (
                            <FadeIn key={service.id} delay={0.15 * index}>
                                <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

                                        {/* Photo */}
                                        <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                                            <img
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                                src={service.img}
                                            />
                                            <div className="absolute top-6 left-6 w-12 h-12 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white font-black text-xs">
                                                {service.num}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8 bg-white">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Service Offering</span>
                                                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-slate-900 group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-500 mt-4 leading-relaxed font-light text-base max-w-2xl">
                                                    {service.desc}
                                                </p>
                                            </div>

                                            {/* Always-visible checklist */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                                                {service.checklist.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <span className="material-symbols-outlined text-xs">check</span>
                                                        </div>
                                                        <span className="text-xs text-slate-500 font-light leading-snug">{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="pt-6 border-t border-slate-100">
                                                <Link
                                                    href={`/contact?service=${service.id}`}
                                                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all"
                                                >
                                                    Book This Package
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </main>

                {/* Inline Contact Form */}
                <section className="py-24 bg-white border-t border-b border-slate-200">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            <div className="lg:col-span-5 space-y-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">Get Started Today</span>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                    Request Your Custom Quote
                                </h2>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    Tell us about your facility and we&apos;ll put together a tailored service proposal — no pressure, no obligations.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: 'timer', text: 'Response within 15 minutes during business hours' },
                                        { icon: 'verified_user', text: '$2M liability coverage, fully bonded & insured' },
                                        { icon: 'star', text: 'Serving Montreal\'s top corporate addresses since 2018' }
                                    ].map(({ icon, text }) => (
                                        <div key={icon} className="flex items-start gap-4">
                                            <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="material-symbols-outlined text-base">{icon}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 font-light leading-relaxed">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-primary text-white py-28 px-6 md:px-12 relative overflow-hidden mt-16 mx-6 lg:mx-12 rounded-3xl">
                    <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
                        <div>
                            <h2 className="serif-display text-5xl md:text-7xl italic font-light mb-6">
                                Ready for <span className="text-white/40">a cleaner standard?</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-light opacity-80 max-w-xl">
                                Keeping offices, clinics and commercial spaces across Greater Montréal spotless and compliant.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 hover:bg-accent-gold hover:text-white transition-all shadow-2xl block text-center whitespace-nowrap"
                        >
                            {t('cta_button')}
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
                </section>

            </div>

            <Footer />
        </>
    );
}
