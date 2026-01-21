import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Testimonials() {
    const t = useTranslations('Testimonials');

    interface Testimonial {
        quote: string;
        author: string;
        title: string;
        location: string;
    }

    const testimonials: Testimonial[] = [
        {
            quote: t('items.1.text'),
            author: t('items.1.author'),
            title: t('items.1.role'),
            location: "Toronto, ON"
        },
        {
            quote: t('items.2.text'),
            author: t('items.2.author'),
            title: t('items.2.role'),
            location: "Vancouver, BC"
        },
        {
            quote: t('items.3.text'),
            author: t('items.3.author'),
            title: t('items.3.role'),
            location: "Montreal, QC"
        },
        {
            quote: "We’ve used several cleaning companies — RBA stands out for consistency and quality.",
            author: "Michael T.",
            title: "Project Lead, BuildRight",
            location: "Calgary, AB"
        },
        {
            quote: "Excellent service and fast response. Highly recommended.",
            author: "Jessica W.",
            title: "HR Director, FinanceHub",
            location: "Ottawa, ON"
        },
        {
            quote: "Great attention to detail and very easy to work with. Highly recommended for any business needing dependable cleaning.",
            author: "David K.",
            title: "CEO, GreenSolutions",
            location: "Toronto, ON"
        }
    ];

    return (
        <>
            <Navbar />
            <section className="pt-40 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="max-w-4xl">
                    <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">{t('title')}</span>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
                        Trusted <span className="serif-italic font-normal lowercase">by the</span> <br />Best.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
            </section>
            <main className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-500 group">
                            <div className="mb-6 text-primary">
                                <span className="material-symbols-outlined text-4xl">format_quote</span>
                            </div>
                            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 italic">
                                &quot;{t.quote}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">{t.author}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400">{t.title}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-primary mt-1">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <section className="bg-primary text-white py-32 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
                    <div>
                        <h2 className="serif-display text-6xl md:text-8xl italic font-light mb-6">Join the <span className="text-white/40">Elite.</span></h2>
                        <p className="text-xl md:text-2xl font-light opacity-80 max-w-xl">Experience the RBA difference today.</p>
                    </div>
                    <button className="bg-white text-primary px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                        Get a Quote
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
            </section>
            <Footer />
        </>
    );
}
