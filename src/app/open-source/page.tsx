export const metadata = {
  title: 'Open Source Notices',
  description: 'Open-source licensing and third-party notice information for Developer Tool Box.',
  alternates: { canonical: '/open-source' },
};
export default function Page() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">Open Source</h1>
      <p>
        Developer Tool Box is licensed as GPL-3.0-only because it migrates behavior from IT Tools,
        which is licensed under GNU GPL v3.
      </p>
      <p>
        See `THIRD_PARTY_NOTICES.md` and `docs/license-audit.md` in the repository for audit
        details.
      </p>
    </main>
  );
}
