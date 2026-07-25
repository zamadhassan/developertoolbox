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
        Analytics, advertising and contact email delivery are disabled unless configured by the site
        owner. If enabled later, this policy must be updated to describe those services accurately.
      </p>
    </main>
  );
}
