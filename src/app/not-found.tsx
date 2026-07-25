import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="container py-24">
      <h1 className="font-heading text-4xl">Page not found</h1>
      <p className="mt-4 text-[var(--text-secondary)]">
        The page may not exist or the tool slug may be invalid.
      </p>
      <Link
        href="/tools"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 font-semibold text-black"
      >
        Browse tools
      </Link>
    </main>
  );
}
