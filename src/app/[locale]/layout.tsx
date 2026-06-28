import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Cormorant_Garamond } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { SITE_URL, business, locales, type Locale } from '@/lib/site';
import { buildMetadata, organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Home-page metadata (also the locale-level default that child routes override).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: business.name,
    authors: [{ name: business.name }],
    creator: business.name,
    publisher: business.name,
    keywords: t('home.keywords').split(',').map((k) => k.trim()),
    category: 'Commercial Cleaning Services',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    // Icons are auto-detected from src/app/{icon.png,apple-icon.png,favicon.ico}.
    ...buildMetadata({ locale: locale as Locale, path: '', title: t('home.title'), description: t('home.description') }),
    // Keep a branded title template so any future page without an explicit
    // title still renders "<page> | RBA Commercial Services".
    title: {
      default: t('home.title'),
      template: `%s | ${business.name}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(locale as Locale),
            localBusinessSchema(),
          ]}
        />
      </head>
      <body suppressHydrationWarning className={`${jakarta.variable} ${instrument.variable} ${cormorant.variable} font-sans text-rba-dark bg-white`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a287526f1441b3a2c885037"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
