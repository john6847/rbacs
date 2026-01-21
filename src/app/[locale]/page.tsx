'use client';
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallbackForm from '@/components/CallbackForm';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  const tHero = useTranslations('Hero');
  const tWhyUs = useTranslations('WhyUs');
  const tNextSteps = useTranslations('NextSteps');
  
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
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-rba-dark">
          <motion.div style={{ scale, y, opacity }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img alt="Hero background" className="w-full h-full object-cover" src="/office.jpg" />
          </motion.div>
          <div className="relative z-20 text-center px-6">
            <FadeIn delay={0.2}>
                <span className="inline-block text-white/70 text-[11px] font-bold uppercase tracking-[0.4em] mb-8">{tHero('subtitle')}</span>
            </FadeIn>
            <div className="overflow-hidden mb-8">
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
                    className="text-white text-5xl md:text-[6rem] font-extrabold leading-[0.85] tracking-tighter"
                >
                {tHero('title_part1')} <br />
                <span className="italic-serif font-light text-accent-blue">{tHero('title_part2')}</span>
                </motion.h1>
            </div>
            <FadeIn delay={0.8}>
                <p className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12">
                {tHero('description')}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link href="/about" className="group relative flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105">
                    <span className="relative z-10">{tHero('cta')}</span>
                    <span className="material-symbols-outlined relative z-10 text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
                </div>
            </FadeIn>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          >
            <a href="#why-us" className="flex flex-col items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            </a>
          </motion.div>
        </div>
        <section id="why-us" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
          {/* <div className="max-w-[1800px] mx-auto px-8 mb-12">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em]">{tWhyUs('subtitle')}</span>
          </div> */}
          <div className="marquee-container">
            <div className="marquee-content">
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">corporate_fare</span> OFFICE CLEANING</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">apartment</span> MEDICAL CLINIC CLEANING</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">factory</span> INDUSTRIAL/WAREHOUSE CLEANING</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">store</span> RETAIL STORE CLEANING</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">health_and_safety</span> ENVIRONMENTAL CLEANING</div>
            </div>
            {/* <div aria-hidden="true" className="marquee-content">
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">corporate_fare</span> GLOBALCORP</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">apartment</span> NEXUS IND.</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">factory</span> CAN-STEEL</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">store</span> RETAIL HUB</div>
              <div className="flex items-center gap-4 text-3xl font-bold text-black/10 grayscale"><span className="material-symbols-outlined text-4xl">health_and_safety</span> HEALTHPLUS</div>
            </div> */}
          </div>
        </section>
        <section className="py-40 px-8 bg-rba-gray">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-5 relative">
                <FadeIn direction="right">
                    <div className="sticky top-40">
                    <div className="w-12 h-1 bg-accent-blue mb-8"></div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-none text-slate-900">
                        {tWhyUs('title_part1')} <br/> <span className="text-slate-400">{tWhyUs('title_part2')}</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-md">
                        {tWhyUs('description')}
                    </p>
                    <Link href="/services" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-2 hover:text-accent-blue hover:border-accent-blue transition-colors text-slate-900">
                        {tWhyUs('cta')}
                    </Link>
                    </div>
                </FadeIn>
              </div>
              <div className="lg:col-span-7 grid gap-20">
                <FadeIn delay={0.2}>
                    <div className="group border-t border-slate-200 pt-10">
                        <span className="text-accent-blue text-xs font-bold mb-4 block">01</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors text-slate-900">{tWhyUs('items.eco.title')}</h3>
                        <p className="text-slate-500 mb-8 max-w-md">{tWhyUs('items.eco.desc')}</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <div className="group border-t border-slate-200 pt-10">
                        <span className="text-accent-blue text-xs font-bold mb-4 block">02</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors text-slate-900">{tWhyUs('items.support.title')}</h3>
                        <p className="text-slate-500 mb-8 max-w-md">{tWhyUs('items.support.desc')}</p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                    <div className="group border-t border-slate-200 pt-10">
                        <span className="text-accent-blue text-xs font-bold mb-4 block">03</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors text-slate-900">{tWhyUs('items.expert.title')}</h3>
                        <p className="text-slate-500 mb-8 max-w-md">{tWhyUs('items.expert.desc')}</p>
                    </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        <section className="relative bg-rba-dark py-40 px-8">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.4em]">{tNextSteps('subtitle')}</span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.9]">
                {tNextSteps('headline')} <br />
                <span className="italic-serif font-light text-accent-blue">{tNextSteps('headline_highlight')}</span> {tNextSteps('headline_end')}
              </h2>
              <p className="text-white/60 text-xl font-light leading-relaxed max-w-md">
                {tNextSteps('description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">{tNextSteps('call')}</span>
                  <span className="text-white text-lg font-bold">1-800-RBA-CLEAN</span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-2">{tNextSteps('email')}</span>
                  <span className="text-white text-lg font-bold">contact@rbacommercialservices.com</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-xl">
              <div className="bg-[#111111] p-12 rounded-2xl border border-white/5 shadow-2xl">
                <h3 className="text-white text-2xl font-bold mb-10 tracking-tight">{tNextSteps('form.title')}</h3>
                <CallbackForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

