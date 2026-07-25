export const metadata = {
  title: 'About',
  description: 'Learn what Developer Tool Box is and how tools are selected.',
};

export default function AboutPage() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">About Developer Tool Box</h1>
      <p>
        Developer Tool Box is being built as a practical collection of browser-based developer
        utilities with clear pages, permanent URLs and transparent processing notes.
      </p>
      <p>
        The project is based on an audited migration plan from the open-source IT Tools project.
        Tools are selected when they solve recurring development tasks and can be implemented with
        accessible, testable behavior.
      </p>
      <p>
        No fake team or usage statistics are presented. Quality is reviewed through source behavior
        checks, typed implementations, tests and local production verification.
      </p>
    </main>
  );
}
