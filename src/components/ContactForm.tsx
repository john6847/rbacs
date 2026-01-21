'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('Contact');
    const [buttonText, setButtonText] = React.useState('Get My Free Quote');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            facilityType: formData.get('facility-type'),
            scale: formData.get('scale'),
            frequency: formData.get('frequency'),
            commencement: formData.get('commencement'),
            name: formData.get('name'),
            organization: formData.get('organization'),
            email: formData.get('email'),
            phone: formData.get('phone'),
        };

        setIsSubmitting(true);
        setButtonText('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setButtonText('Message Sent!');
                form.reset();
                setTimeout(() => setButtonText('Get My Free Quote'), 5000);
            } else {
                setButtonText('Failed. Try Again.');
                setTimeout(() => setButtonText('Get My Free Quote'), 3000);
            }
        } catch (error) {
            setButtonText('Error. Try Again.');
            setTimeout(() => setButtonText('Get My Free Quote'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-16" onSubmit={handleSubmit}>
            <section>
                <h3 className="text-2xl font-bold mb-10 pb-4 border-b border-slate-100 dark:border-white/5">01. Service Scope</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="group">
                        <label className="form-label-elite" htmlFor="facility-type">Facility Type</label>
                        <select 
                            id="facility-type"
                            name="facility-type"
                            className="form-input-elite appearance-none cursor-pointer"
                            defaultValue=""
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="office">Executive Office</option>
                            <option value="medical">Medical Laboratory</option>
                            <option value="industrial">High-Tech Industrial</option>
                            <option value="retail">Luxury Retail</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Scale (SQ FT)</label>
                        <input name="scale" className="form-input-elite" placeholder="e.g. 15,000" type="number" />
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Frequency</label>
                        <select name="frequency" className="form-input-elite appearance-none cursor-pointer">
                            <option value="daily">Daily Maintenance</option>
                            <option value="weekly">Weekly Protocol</option>
                            <option value="one-time">Intensive Restoration</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Commencement</label>
                        <input name="commencement" className="form-input-elite" type="date" />
                    </div>
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-bold mb-10 pb-4 border-b border-slate-100 dark:border-white/5">02. Representative Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="group">
                        <label className="form-label-elite">{t('form.name_label')}</label>
                        <input name="name" className="form-input-elite" placeholder={t('form.name_placeholder')} type="text" required />
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Organization</label>
                        <input name="organization" className="form-input-elite" placeholder="Company Name" type="text" />
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Corporate Email</label>
                        <input name="email" className="form-input-elite" placeholder="name@domain.com" type="email" required />
                    </div>
                    <div className="group">
                        <label className="form-label-elite">Direct Line</label>
                        <input name="phone" className="form-input-elite" placeholder="+1 (000) 000-0000" type="tel" />
                    </div>
                </div>
            </section>
            <div className="pt-8">
                <button 
                    disabled={isSubmitting}
                    className="group flex items-center gap-6 bg-primary text-white pl-10 pr-4 py-4 rounded-full text-lg font-bold hover:bg-slate-900 transition-all duration-500 shadow-2xl shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed" 
                    type="submit"
                >
                    {buttonText}
                    {!isSubmitting && (
                        <div className="bg-white/10 group-hover:bg-white/20 p-3 rounded-full transition-colors">
                            <span className="material-symbols-outlined align-middle">arrow_forward</span>
                        </div>
                    )}
                </button>
                <p className="mt-6 text-xs text-slate-400 font-medium tracking-wide">
                    * Your privacy is paramount. We do not share corporate data with third parties.
                </p>
            </div>
        </form>
    );
}
