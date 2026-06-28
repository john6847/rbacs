'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function ContactFormInner() {
    const t = useTranslations('Contact');
    const tCalc = useTranslations('Calculator');
    const searchParams = useSearchParams();

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [facilityType, setFacilityType] = useState('');
    const [scale, setScale] = useState(5000);
    const [frequency, setFrequency] = useState('weekly');
    const [commencement, setCommencement] = useState('');
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const typeParam = searchParams?.get('service');
        const sqftParam = searchParams?.get('sqft');
        if (typeParam) {
            setFacilityType(typeParam);
            setStep(2);
        }
        if (sqftParam) {
            const val = parseInt(sqftParam, 10);
            if (!isNaN(val)) setScale(val);
        }
    }, [searchParams]);

    const calculateEstimate = () => {
        if (!facilityType || !scale) return { min: 0, max: 0 };
        let baseRate = 0.15;
        if (facilityType === 'medical') baseRate = 0.28;
        if (facilityType === 'industrial') baseRate = 0.22;
        if (facilityType === 'retail') baseRate = 0.18;
        let multiplier = 0.35;
        if (frequency === 'daily') multiplier = 1.0;
        else if (frequency === 'weekly') multiplier = 0.35;
        else if (frequency === 'biweekly') multiplier = 0.20;
        else if (frequency === 'one-time') multiplier = 1.5;
        let cost = baseRate * scale * multiplier;
        if (cost < 150) cost = 150;
        return { min: Math.round(cost * 0.9), max: Math.round(cost * 1.1) };
    };

    const { min, max } = calculateEstimate();

    const handleNextStep = () => {
        if (step === 1 && !facilityType) return;
        setStep((p) => Math.min(p + 1, 3));
    };

    const handlePrevStep = () => setStep((p) => Math.max(p - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ facilityType, scale, frequency, commencement, name, organization, email, phone })
            });
            setSubmitStatus(res.ok ? 'success' : 'error');
            if (res.ok) {
                setFacilityType(''); setScale(5000); setFrequency('weekly'); setCommencement('');
                setName(''); setOrganization(''); setEmail(''); setPhone('');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const facilityOptions = [
        { id: 'office',     icon: 'corporate_fare',   title: 'Office Cleaning',      tag: 'Executive Spaces' },
        { id: 'medical',    icon: 'health_and_safety', title: 'Clinical Sanitation',  tag: 'Healthcare Labs' },
        { id: 'retail',     icon: 'storefront',        title: 'Retail Luxe',          tag: 'High-Traffic Stores' },
        { id: 'industrial', icon: 'factory',           title: 'Post-Construction',    tag: 'Industrial Handoff' }
    ];

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit:  (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 })
    };

    return (
        /* Always light card — no dark variants */
        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header & progress */}
            <div className="relative z-10 mb-10">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                        {tCalc('title')}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                        Step {step} of 3
                    </span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary rounded-full"
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </div>

            {submitStatus === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 px-6 relative z-10"
                >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-200">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Quote Inquiry Submitted!</h4>
                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-8">
                        One of our commercial facilities specialists will compile your customized service report. Expect a call within 10–15 minutes.
                    </p>
                    <button
                        onClick={() => setSubmitStatus('idle')}
                        className="px-8 py-4 border border-slate-200 hover:border-slate-900 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Submit Another Inquiry
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                    <div className="min-h-[340px]">
                        <AnimatePresence mode="wait" custom={step}>

                            {/* Step 1 – Facility Type */}
                            {step === 1 && (
                                <motion.div key="s1" custom={step} variants={slideVariants}
                                    initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1">{tCalc('facility_type')}</h4>
                                        <p className="text-xs text-slate-400">Select the primary facility category that matches your operation.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {facilityOptions.map((opt) => (
                                            <button key={opt.id} type="button"
                                                onClick={() => { setFacilityType(opt.id); setTimeout(handleNextStep, 180); }}
                                                className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${
                                                    facilityType === opt.id
                                                        ? 'border-primary bg-primary/5 shadow-md'
                                                        : 'border-slate-200 hover:border-slate-400 bg-white'
                                                }`}
                                            >
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                                                    facilityType === opt.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                    <span className="material-symbols-outlined text-xl">{opt.icon}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{opt.tag}</span>
                                                    <h5 className="text-sm font-extrabold text-slate-800 tracking-tight">{opt.title}</h5>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2 – Scale & Frequency */}
                            {step === 2 && (
                                <motion.div key="s2" custom={step} variants={slideVariants}
                                    initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1">Scale & Frequency Details</h4>
                                        <p className="text-xs text-slate-400">Specify the size and service cycle to update your cost estimate in real time.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <label className="form-label-elite">{tCalc('scale')}</label>
                                            <span className="text-2xl font-black text-primary tracking-tight">
                                                {scale.toLocaleString()} <span className="text-xs font-bold text-slate-400">SQ FT</span>
                                            </span>
                                        </div>
                                        <input type="range" min="500" max="100000" step="500" value={scale}
                                            onChange={(e) => setScale(parseInt(e.target.value, 10))}
                                            className="w-full accent-primary h-2 bg-slate-200 rounded-lg cursor-pointer"
                                        />
                                        <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            <span>500</span><span>50,000</span><span>100,000</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="form-label-elite">{tCalc('frequency')}</label>
                                            <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="form-input-elite bg-white">
                                                <option value="daily">{tCalc('daily')}</option>
                                                <option value="weekly">{tCalc('weekly')}</option>
                                                <option value="biweekly">{tCalc('biweekly')}</option>
                                                <option value="one-time">{tCalc('one_time')}</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="form-label-elite">{tCalc('date')}</label>
                                            <input type="date" value={commencement} onChange={(e) => setCommencement(e.target.value)}
                                                className="form-input-elite bg-white text-slate-700"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3 – Contact Info */}
                            {step === 3 && (
                                <motion.div key="s3" custom={step} variants={slideVariants}
                                    initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1">Representative & Company Info</h4>
                                        <p className="text-xs text-slate-400">Provide your corporate contact details so we can prepare your formal proposal.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        <div>
                                            <label className="form-label-elite">{t('form.name_label')}</label>
                                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                                                placeholder={t('form.name_placeholder')} className="form-input-elite" />
                                        </div>
                                        <div>
                                            <label className="form-label-elite">{tCalc('company')}</label>
                                            <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)}
                                                placeholder="e.g. Acme Corp" className="form-input-elite" />
                                        </div>
                                        <div>
                                            <label className="form-label-elite">Corporate Email</label>
                                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com" className="form-input-elite" />
                                        </div>
                                        <div>
                                            <label className="form-label-elite">{tCalc('phone')}</label>
                                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+1 (514) 555-0100" className="form-input-elite" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>



                    {/* Nav buttons */}
                    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                        {step > 1 ? (
                            <button type="button" onClick={handlePrevStep}
                                className="px-8 py-4 border border-slate-200 hover:border-slate-900 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-slate-600"
                            >
                                Back
                            </button>
                        ) : <div />}

                        {step < 3 ? (
                            <button type="button" disabled={!facilityType} onClick={handleNextStep}
                                className="group flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-40 hover:bg-slate-900"
                            >
                                Continue
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </button>
                        ) : (
                            <button type="submit" disabled={isSubmitting}
                                className="group flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-40 hover:bg-slate-900 shadow-lg shadow-primary/20"
                            >
                                {isSubmitting ? 'Sending...' : tCalc('cta_book')}
                                <span className="material-symbols-outlined text-sm">lock</span>
                            </button>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading quote wizard...</div>}>
            <ContactFormInner />
        </Suspense>
    );
}
