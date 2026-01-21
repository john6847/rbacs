'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-40 md:pt-48 bg-white text-slate-900 pb-32">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-primary"></div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{t('hero_label')}</span>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-7">
                            <FadeIn delay={0.2}>
                                <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] text-[#0d121b] dark:text-white mb-10 max-w-4xl">
                                    {t('hero_title')} <br /><span className="serif-italic font-normal lowercase">{t('hero_highlight')}</span>
                                </h1>
                            </FadeIn>
                            
                            <FadeIn delay={0.4}>
                                <ContactForm />
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-40">
                            <FadeIn direction="left" delay={0.6}>
                                <div className="space-y-6 text-white">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Service Area</h3>
                                        <span className="h-px bg-slate-100 dark:bg-white/10 flex-grow ml-4"></span>
                                    </div>

                                    <div className="aspect-[4/5] bg-slate-100 dark:bg-white/5 relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/50 transition-opacity group-hover:opacity-0 z-0"></div>
                                        {/* Placeholder Map Image - Replace with real map or interactive component */}
                                        <div className="absolute inset-0 grayscale contrast-125 opacity-40 mix-blend-multiply dark:mix-blend-overlay">
                                            <div className="w-full h-full bg-[url('/contact.png')] bg-cover bg-center"></div>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-black/90 backdrop-blur p-6 border border-slate-200 dark:border-white/10">
                                            <p className="text-xs font-bold tracking-widest uppercase mb-4 ">Service Region</p>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-tighter">Greater Montreal</div>
                                                <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Quebec, Canada</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            <div className="hidden grid grid-cols-2 gap-px bg-slate-100 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                <div className="bg-white dark:bg-background-dark p-8">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-4">verified_user</span>
                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Bonded</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">Fully insured and bonded for maximum corporate security.</p>
                                </div>
                                <div className="bg-white dark:bg-background-dark p-8">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-4">gpp_good</span>
                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Certified</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">ISO 9001 and OSHA compliant sanitation protocols.</p>
                                </div>
                            </div>
                            <div className="hidden p-8 border border-primary/20 bg-primary/5 relative group overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Immediate Assistance</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        For urgent inquiries or emergency sanitation services, our dispatch team is available 24/7.
                                    </p>
                                    <a href="tel:+15145550123" className="text-2xl font-extrabold tracking-tighter text-primary hover:text-primary/80 transition-colors">
                                        (514) 555-0123
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
