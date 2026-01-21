'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function CallbackForm() {
    const tNextSteps = useTranslations('NextSteps');
    const [buttonText, setButtonText] = React.useState(tNextSteps('form.submit'));
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            facilityType: formData.get('facility-type'),
            phone: '',
            organization: '',
            scale: '',
            frequency: '',
            commencement: ''
        };

        setIsSubmitting(true);
        const originalText = tNextSteps('form.submit');
        setButtonText('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setButtonText('Request Sent!');
                form.reset();
                setTimeout(() => setButtonText(originalText), 5000);
            } else {
                setButtonText('Failed. Try Again.');
                setTimeout(() => setButtonText(originalText), 3000);
            }
        } catch (error) {
            setButtonText('Error. Try Again.');
            setTimeout(() => setButtonText(originalText), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="relative group">
            <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-accent-blue transition-colors">{tNextSteps('form.name_label')}</label>
            <input name="name" className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-accent-blue text-white py-3 px-0 transition-all placeholder:text-white/10" placeholder={tNextSteps('form.name_placeholder')} type="text" required />
            </div>
            <div className="relative group">
            <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-accent-blue transition-colors">{tNextSteps('form.email_label')}</label>
            <input name="email" className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-accent-blue text-white py-3 px-0 transition-all placeholder:text-white/10" placeholder={tNextSteps('form.email_placeholder')} type="email" required />
            </div>
            <div className="relative group">
            <label className="block text-[10px] text-white/40 uppercase tracking-widest mb-2 group-focus-within:text-accent-blue transition-colors">{tNextSteps('form.facility_label')}</label>
            <select name="facility-type" className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-accent-blue text-white py-3 px-0 transition-all appearance-none cursor-pointer">
                <option className="bg-rba-dark" value="office">Office Building</option>
                <option className="bg-rba-dark" value="industrial">Industrial/Warehouse</option>
                <option className="bg-rba-dark" value="medical">Healthcare/Clinic</option>
                <option className="bg-rba-dark" value="retail">Retail Store</option>
            </select>
            </div>
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-black py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-accent-blue hover:text-white transition-all duration-500 mt-10 disabled:opacity-70 disabled:cursor-not-allowed"
            >
            {buttonText}
            </button>
        </form>
    );
}
