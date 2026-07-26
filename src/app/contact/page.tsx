import { ContactForm } from './contact-form';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Developer Tool Box for bugs, features and general inquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Developer Tool Box',
    description: 'Contact Developer Tool Box for bugs, features and general inquiries.',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Developer Tool Box',
    description: 'Contact Developer Tool Box for bugs, features and general inquiries.',
  },
};

export default function ContactPage() {
  const contactEmail = siteConfig.contact.email || siteConfig.contact.fallbackEmail;
  return (
    <main className="container py-14">
      <h1 className="font-heading text-4xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
        Use this form for bug reports, feature requests or general questions. It opens an email
        draft to{' '}
        <a className="text-primary hover:text-white" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        . Do not include secrets, credentials or sensitive tool input.
      </p>
      <ContactForm email={contactEmail} />
    </main>
  );
}
