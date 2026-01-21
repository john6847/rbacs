'use client';
import React, { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    // Check if we are on the home page (considering the locale prefix)
    // pathname might be /en, /fr, /es, or /en/...
    // Simple check: splitting by / and checking length or specific segments
    // But for "isHome", we can check if it matches the generic pattern or just rely on styling that works for all.
    // Actually, the original logic was specific to exact '/' path. 
    // Now paths will be '/en', '/fr', etc.
    // Let's assume strict home detection if pathname ends with the locale or is just /locale
    const isHome = pathname === '/en' || pathname === '/fr' || pathname === '/es' || pathname === '/'; // simplified

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic classes based on state
    const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 px-8 py-6 ${isHome && !isScrolled
            ? 'bg-transparent text-white'
            : 'bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border-b border-gray-100'
        }`;

    // Logo color: Primary Blue on Hero (unscrolled) and otherwise
    const logoColor = 'text-primary';

    // Button style: Primary Blue on Hero with White text
    const buttonClasses = 'bg-primary text-white hover:bg-opacity-90';

    return (
        <header className={headerClasses} suppressHydrationWarning>
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="transition-opacity hover:opacity-80">
                        <img 
                            src={isHome && !isScrolled ? "/logo-rba-white.png" : "/logo-rba.png"} 
                            alt="RBA Logo" 
                            className="h-10 w-auto" 
                            suppressHydrationWarning
                        />
                    </Link>
                    <Link href="/">
                        <h2 className={`${isHome && !isScrolled ? 'text-white' : 'text-slate-900'} text-xl font-bold tracking-tighter  transition-colors`}></h2>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-12">
                    
                    <Link href="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">{t('experience')}</Link>
                    <Link href="/services" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">{t('services')}</Link>
                    {/* <Link href="/testimonials" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">{t('testimonials')}</Link> */}
                    <Link href="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">{t('contact')}</Link>
                </nav>
                <div className="flex items-center gap-6">
                    <LanguageSwitcher />
                    <Link href="/contact" className={`${buttonClasses} px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all inline-block`}>
                        {t('inquire')}
                    </Link>
                </div>
            </div>
        </header>
    );
}
