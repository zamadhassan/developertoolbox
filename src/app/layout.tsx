import type { Metadata, Viewport } from 'next';
import { Outfit, Unbounded } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LenisProvider } from '@/components/motion/lenis-provider';
import { AdsenseScript } from '@/components/ads/adsense-script';
import { siteConfig } from '@/config/site';

const heading = Unbounded({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const body = Outfit({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: siteConfig.defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  other: siteConfig.ads.clientId
    ? { 'google-adsense-account': siteConfig.ads.clientId }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: '#3ecf8e',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.defaultDescription,
  };

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
        <AdsenseScript />
        <LenisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
