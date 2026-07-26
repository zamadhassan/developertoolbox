export const metadata = { title: 'Privacy Policy' };
export default function Page() {
  return (
    <main className="container prose-content py-14">
      <h1 className="font-heading text-4xl">Privacy Policy</h1>
      <p>
        Developer Tool Box is designed to minimize data collection. Completed pilot tools process
        input in the browser and do not intentionally transmit tool input to the server.
      </p>
      <p>
        Server logs may contain routine request metadata such as IP address, user agent and
        requested route. Do not paste secrets into tools unless you understand the specific tool
        behavior.
      </p>
      <p>
        Advertising is only loaded when a valid AdSense publisher configuration is present. If ads
        are enabled, Google may use cookies or similar technologies to serve and measure ads subject
        to its own policies.
      </p>
      <p>
        The contact page opens a user-controlled email draft. Messages are sent only if you choose
        to send them from your email application.
      </p>
    </main>
  );
}
