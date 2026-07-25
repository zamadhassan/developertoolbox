export const siteConfig = {
  name: 'Developer Tool Box',
  shortName: 'DevToolBox',
  domain: 'https://developertoolbox.tech',
  defaultTitle: 'Developer Tool Box - Free Online Tools for Developers',
  defaultDescription:
    'Free browser-based tools for formatting, encoding, decoding, conversion, generators and everyday software development tasks.',
  contact: {
    email: process.env.CONTACT_TO_EMAIL || '',
    fallbackEmail: 'contact@developertoolbox.tech',
  },
  nav: [
    { label: 'Tools', href: '/tools' },
    { label: 'Categories', href: '/categories/development' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Open Source', href: '/open-source' },
  ],
  ads: {
    enabled: Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID),
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '',
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
} as const;
