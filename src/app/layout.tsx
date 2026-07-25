import type { Metadata } from 'next';
import { Outfit, Unbounded } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LenisProvider } from '@/components/motion/lenis-provider';
import { siteConfig } from '@/config/site';

const heading = Unbounded({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const body = Outfit({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: siteConfig.defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <LenisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
