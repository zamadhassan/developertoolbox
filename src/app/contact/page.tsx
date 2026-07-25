import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact',
  description: 'Contact Developer Tool Box for bugs, features and general inquiries.',
};

export default function ContactPage() {
  return (
    <main className="container py-14">
      <h1 className="font-heading text-4xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
        Use this form for bug reports, feature requests or general questions. Do not include
        secrets, credentials or sensitive tool input.
      </p>
      <ContactForm />
    </main>
  );
}
