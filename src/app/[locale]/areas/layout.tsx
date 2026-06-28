import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return buildMetadata({
    locale: locale as Locale,
    path: 'areas',
    title: t('areas.title'),
    description: t('areas.description'),
  });
}

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
