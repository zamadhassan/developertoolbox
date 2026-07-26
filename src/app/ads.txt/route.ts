import { siteConfig } from '@/config/site';

export function GET() {
  const publisherId = siteConfig.ads.clientId.replace(/^ca-/, '');
  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : '# AdSense is not enabled. Configure NEXT_PUBLIC_ADSENSE_CLIENT_ID after approval.\n';

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
