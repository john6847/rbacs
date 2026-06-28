'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function Home() {
    const tHero = useTranslations('Hero');
    const tWhyUs = useTranslations('WhyUs');
    const tNextSteps = useTranslations('NextSteps');
    const tHowItWorks = useTranslations('HowItWorks');
    const tServices = useTranslations('Services');

    const processSteps = [
        { key: '1', icon: 'manage_search' },
        { key: '2', icon: 'assignment' },
        { key: '3', icon: 'cleaning_services' },
        { key: '4', icon: 'verified' },
    ] as const;

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <>
            <Navbar />
            <main>

                {/* Hero Section */}
                <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-rba-dark">
                    <motion.div style={{ scale, y, opacity }} className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <img alt="Hero background" className="w-full h-full object-cover" src="/office.jpg" />
                    </motion.div>
                    <div className="relative z-20 text-center px-6">
                        <FadeIn delay={0.2} isActive={true}>
                            <span className="inline-block text-white/70 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">{tHero('subtitle')}</span>
                        </FadeIn>
                        <div className="overflow-hidden mb-8">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
                                className="text-white text-5xl md:text-[6.5rem] font-extrabold leading-[0.85] tracking-tighter"
                            >
                                {tHero('title_part1')} <br />
                                <span className="italic-serif font-light text-accent-blue">{tHero('title_part2')}</span>
                            </motion.h1>
                        </div>
                        <FadeIn delay={0.8} isActive={true}>
                            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12">
                                {tHero('description')}
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Link href="/contact" className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/10">
                                    <span className="relative z-10">{tHero('cta')}</span>
                                    <span className="material-symbols-outlined relative z-10 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                </div>



                {/* Benefits Showcases (Why Us) */}
                <section className="py-20 px-8 bg-rba-gray">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                            <div className="lg:col-span-5 relative">
                                <FadeIn direction="right">
                                    <div className="sticky top-40">
                                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">The RBA Edge</span>
                                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-none text-slate-900">
                                            {tWhyUs('title_part1')} <br /> <span className="text-primary italic-serif font-light">{tWhyUs('title_part2')}</span>
                                        </h2>
                                        <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-md">
                                            {tWhyUs('description')}
                                        </p>
                                        <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-2 hover:border-primary transition-colors">
                                            <span>{tWhyUs('cta')}</span>
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="lg:col-span-7 grid gap-16">
                                <FadeIn delay={0.2}>
                                    <div className="group border-t border-slate-200 pt-10 hover:border-primary transition-colors duration-300">
                                        <span className="text-accent-gold text-xs font-bold mb-4 block">01</span>
                                        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{tWhyUs('items.support.title')}</h3>
                                        <p className="text-slate-500 mb-8 max-w-md font-light leading-relaxed">{tWhyUs('items.support.desc')}</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <div className="group border-t border-slate-200 pt-10 hover:border-primary transition-colors duration-300">
                                        <span className="text-accent-gold text-xs font-bold mb-4 block">02</span>
                                        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{tWhyUs('items.expert.title')}</h3>
                                        <p className="text-slate-500 mb-8 max-w-md font-light leading-relaxed">{tWhyUs('items.expert.desc')}</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-24 md:py-32 px-8 bg-white border-y border-slate-100">
                    <div className="max-w-[1400px] mx-auto">
                        <FadeIn>
                            <div className="text-center mb-16 max-w-2xl mx-auto">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                                    {tHowItWorks('subtitle')}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-tight">
                                    {tHowItWorks('title_part1')}{' '}
                                    <span className="text-primary italic-serif font-light">{tHowItWorks('title_part2')}</span>
                                </h2>
                                <p className="text-slate-500 font-light leading-relaxed">
                                    {tHowItWorks('description')}
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                            {processSteps.map((step, index) => (
                                <FadeIn key={step.key} delay={0.1 * (index + 1)}>
                                    <div className="relative text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-5">
                                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto lg:mx-0 flex-shrink-0">
                                                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                                            </div>
                                            <span className="text-accent-gold text-xs font-bold tracking-widest">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                            {tServices(`process_steps.${step.key}.title`)}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                                            {tServices(`process_steps.${step.key}.desc`)}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.5}>
                            <div className="text-center mt-14">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors"
                                >
                                    {tHowItWorks('cta')}
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Homepage CTA */}
                <section className="relative bg-rba-dark py-40 px-8 overflow-hidden">
                    <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                        <FadeIn>
                            <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.4em]">{tNextSteps('subtitle')}</span>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.9] mt-8">
                                {tNextSteps('headline')} <br />
                                <span className="italic-serif font-light text-accent-gold">{tNextSteps('headline_highlight')}</span> {tNextSteps('headline_end')}
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl mt-8">
                                {tNextSteps('description')}
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-black/20"
                                >
                                    <span>{tHero('cta')}</span>
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                                <a
                                    href="tel:+15146230791"
                                    className="flex items-center gap-3 border border-white/20 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors hover:border-white"
                                >
                                    <span className="material-symbols-outlined text-sm">call</span>
                                    <span>+1 514-623-0791</span>
                                </a>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 mt-16 border-t border-white/10 w-full max-w-xl">
                                <div>
                                    <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">{tNextSteps('call')}</span>
                                    <span className="text-white text-lg font-bold">+1 514-623-0791</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">{tNextSteps('email')}</span>
                                    <span className="text-white text-lg font-bold break-all">contact@rbacommercialservices.com</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
