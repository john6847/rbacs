'use client';
 
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import React, { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
        router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={localActive}
        className="bg-transparent text-xs font-bold uppercase tracking-widest border border-white/20 rounded px-2 py-1 text-inherit focus:outline-none focus:border-white"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="text-black">EN</option>
        <option value="fr" className="text-black">FR</option>
        <option value="es" className="text-black">ES</option>
      </select>
    </div>
  );
}
