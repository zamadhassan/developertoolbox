export const metadata = { title: 'Disclaimer' };
export default function Page() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">Disclaimer</h1>
      <p>
        Tools are provided for convenience. Outputs may be incomplete, invalid for your environment
        or unsuitable for security-sensitive decisions.
      </p>
      <p>
        Cryptographic and security-adjacent tools include limitations and should not replace
        professional key management, security review or compliance processes.
      </p>
    </main>
  );
}
