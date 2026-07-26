export const metadata = {
  title: 'Terms',
  description: 'Terms for using Developer Tool Box browser utilities and preview tools.',
  alternates: { canonical: '/terms' },
};
export default function Page() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">Terms</h1>
      <p>
        Developer Tool Box is provided for convenience and development support. You are responsible
        for verifying outputs before using them in production systems.
      </p>
      <p>
        Do not misuse the service, attempt to disrupt it, or submit unlawful content. Open-source
        components remain governed by their respective licenses.
      </p>
      <p>
        Preview tools are labeled separately from live tools. Preview outputs are provided for early
        evaluation and should not be relied on for production decisions.
      </p>
    </main>
  );
}
