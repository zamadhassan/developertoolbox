export const metadata = {
  title: 'Editorial Policy',
  description: 'Editorial standards for Developer Tool Box technical content.',
  alternates: { canonical: '/editorial-policy' },
};
export default function Page() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">Editorial Policy</h1>
      <p>
        Developer Tool Box articles must be original, technically useful and connected to real tools
        or development workflows.
      </p>
      <p>
        Content should avoid fabricated claims, fake credentials, keyword stuffing and unsupported
        statistics. Corrections should be made when technical issues are found.
      </p>
    </main>
  );
}
