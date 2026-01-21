import React from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
    const t = useTranslations('About');

    return (
        <>
            <Navbar /> {/* Note: Navbar style might need adjustment for this page if it differs significantly */}
            <main>
                <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 pt-40">
                    <div className="max-w-[1800px] mx-auto w-full">
                        <div className="mb-12">
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 block">{t('hero_title')}</span>
                            <h1 className="serif-display text-huge font-light tracking-tight">
                                {t('hero_subtitle')} <br />
                                <span className="italic font-medium text-primary">Elite Commercial Care.</span>
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <p className="max-w-xl text-xl md:text-2xl font-light text-gray-500 leading-relaxed">
                                {t('hero_desc')}
                            </p>
                            <div className="flex gap-4">
                                <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center group cursor-pointer hover:border-primary transition-all">
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:rotate-45 transition-all">arrow_downward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-32 px-6 md:px-12 bg-[#fafafa]">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="asymmetric-grid">
                            <div className="col-span-12 md:col-span-4 flex flex-col justify-center mb-12 md:mb-0">
                                <h2 className="serif-display text-5xl italic mb-8">The Legacy</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {t('hero_desc')}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('mission_desc')}
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-8">
                                <div className="aspect-[16/9] bg-gray-200 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-black/5">
                                    <img alt="Modern Architecture" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[3s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLWy4w4KYQwvNoK36a7EhHJuldvucjalOn3v8hjPxexVEK2PTMZnlvV1hhZ9Yvqz_sbV4zrf_hjDWj4khox2MrECed9nVgzvF5xgqoIVFFD1kVsxTjNL4qColB-un9f106d-UiFQcjsCKoPot_XyM4VMZBPJNJDFlr1I4djddul1V2C6XFhThAmThEYU5YYJytHcyWMXM5LVHWw8GcEFeYRklzZa4iyGHbPhnpRpWJu47MuNsV-xN5BwTr_Vgv9ZgSgikOluZGHoo" />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-7 mt-0 md:mt-24">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden rounded-sm shadow-xl">
                                    <img alt="Professional Crew" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqwhUdD0yaYBDstg2IicYvgpwJh3ITdn3OyGzqXSPHuH72BkqF3vSlSuzJT2JdXxBl64PmZwKmE3NJKYi-C3Wc4ivRu7Keb-9Gks7Th2HTmo390HcdaHJH1Prwwc0zD2Lkf5F-1HX-XN7lZDS5f8qnO7Il5lyP740Cd7lpV2q3zaOZDJ3w1QjuiUqbNmfOA2SB0Mf90FR1lm3b8rF-Muf1SOA0qR2256CISwe_qtkqEU9DqHA5d1nPJfEA18kFq_fDIWOFy6wyp7s" />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-5 md:mt-48 flex flex-col justify-start">
                                <div className="pl-0 md:pl-12 border-l-0 md:border-l border-gray-200">
                                    <h3 className="serif-display text-4xl mb-6">{t('mission_headline')} <span className="italic font-medium">{t('mission_highlight')}</span></h3>
                                    <p className="text-gray-500 text-lg leading-relaxed italic mb-8">"{t('mission_desc')}"</p>
                                    <div className="aspect-square w-full bg-gray-100 rounded-sm overflow-hidden">
                                        <img alt="Details" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcaC5wPpkj_5Br2xKH7ih30-sRMig0X2NLyRNf_bBFhpIjq2gLCB6ojWA-Z7Qtk44j3YS5Zz3uT_JEPtdMSB9oBMa0CZbwAzyQcgYRVUAmUoss52Yy1n3K_DcaDjDFlsD7rKy22U_L1cmRZO4YWVsjY1LHIENdfW-1RPQeseI01HMREjuHxl7Us59_pe-iAHe9OJDyJKJAsI3uOg8_0Ak7chucoz6eu5SpUA_OAIOgtDMKu4VgXJ5WkrWkvW5noJEL2aeIF17s_yo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-40 px-6 md:px-12 ">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 border-b border-gray-100 pb-12">
                            <h2 className="serif-display text-6xl italic">The Elite Difference</h2>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-4 md:mt-0">{t('values_title')} 01—03</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                            <div className="group">
                                <span className="block text-[80px] font-thin serif-display leading-none mb-8 text-gray-100 group-hover:text-primary transition-colors duration-500 italic">01.</span>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{t('values.integrity.title')}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{t('values.integrity.desc')}</p>
                            </div>
                            <div className="group">
                                <span className="block text-[80px] font-thin serif-display leading-none mb-8 text-gray-100 group-hover:text-primary transition-colors duration-500 italic">02.</span>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{t('values.excellence.title')}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{t('values.excellence.desc')}</p>
                            </div>
                            <div className="group">
                                <span className="block text-[80px] font-thin serif-display leading-none mb-8 text-gray-100 group-hover:text-primary transition-colors duration-500 italic">03.</span>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{t('values.sustainability.title')}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{t('values.sustainability.desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hidden py-40 px-6 md:px-12 bg-[#0a0a0a] text-white">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="mb-32 max-w-2xl">
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">{t('team_title')}</span>
                            <h2 className="serif-display text-7xl font-light italic leading-tight">{t('team_desc')}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 items-start">
                            <div className="md:col-span-4 group">
                                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
                                    <img alt="CEO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBms1JA2h65DjrOrx3vnbTzxak201_Izl86MSzdWHoiG0-PMf79pJkn5tD9MehBee-F8kbAFq8557ka6Bej_TDtiYRzpYvWO9Cdw1hIAnOfbsp9yP-36qNa8WK6am7iTJ5dJUEHOfnPecP8EDWmuIi4wI6yV-Ba7GJMOz-4kPw5oA9pMXwpGMRQauwS5CaD17RpXJD_2KtecdfME4rVlwyZ0RK5CvRH46E6RZ0fNEaEaOJNCz0EVKRAX_0SkaaZjKSXbzIDx-lgfrU" />
                                </div>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h4 className="serif-display text-3xl font-light italic">Michael Rossi</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-4 md:mt-32 group">
                                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
                                    <img alt="COO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFeTu0xGp06Nx6cl2oPphcTHJZNBeeYI06nlTVujBkR5EdvOSxdkwOvN6H3QUx0280_AaKOJ5XiVZg_orDIsFLZFysYvuaFXSeWpQogN4uQ22wnWTH-aw3WmI5lSnS1l5h7NXM1ikrlL1CDvB-lH_EJHpv-0idW06k-O0dVUuBukHANJQNawxbOJ1SH81f4Wn9msOpSCfpn0nmD9PDY6TKv7dJQdnfgMifNId7VK5gpYW0slrKqohv_VWeJWnbzVsn8aIPodHhT6U" />
                                </div>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h4 className="serif-display text-3xl font-light italic">Sarah Jenkins</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Operations Director</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-4 md:mt-64 group">
                                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
                                    <img alt="Quality" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMY9ivN5ibes1RABQlSTqxP-y2d3tOxbIEXqXdzoqPA_J7SQAYb4OrqVRsMdy_eNNtQR3LZtoDSwRw1Dfw20mIxcJcFiTgssSWYrO88PhL4GyXl1kxqBckM9Ouh3LQXk5ZiKLE0YB5HdgUI183RmgMlpHsVeWvVdRwpenMm480cz99i3Q9NPnsAh2KfllbCoMRTLc-V63iLLu09j6-Sv0HXwFyGedI1dCLSgu5Zc501QpCFxD-vl6F0EZHdyRa3CfHNc_Sc5G6B-k" />
                                </div>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h4 className="serif-display text-3xl font-light italic">David Park</h4>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Head of Quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hidden bg-primary text-white py-32 px-6 md:px-12 relative overflow-hidden">
                    <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
                        <div>
                            <h2 className="serif-display text-6xl md:text-8xl italic font-light mb-6">Ready for <span className="text-white/40">the elite?</span></h2>
                            <p className="text-xl md:text-2xl font-light opacity-80 max-w-xl">Join the roster of Canada&apos;s most prestigious corporate environments.</p>
                        </div>
                        <button className="bg-white text-primary px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                            {t('cta_button')}
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
                </section>
            </main >
            <Footer />
        </>
    );
}
