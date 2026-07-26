import Script from 'next/script';
import { siteConfig } from '@/config/site';

export function AdsenseScript() {
  if (!siteConfig.ads.enabled) return null;

  return (
    <Script
      id="adsense-script"
      strategy="afterInteractive"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(siteConfig.ads.clientId)}`}
      crossOrigin="anonymous"
    />
  );
}
