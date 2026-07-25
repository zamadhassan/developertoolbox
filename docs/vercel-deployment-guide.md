# Vercel Deployment Guide

Deployment is intentionally out of scope for the current task. This guide records the future configuration path.

## Future Vercel Settings

- Framework preset: Next.js
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output: Next.js default
- Production domain: `developertoolbox.tech`

## Environment Variables

```bash
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://developertoolbox.tech
NEXT_PUBLIC_ADSENSE_CLIENT_ID=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

The app must run locally without email, analytics, AdSense, or Turnstile credentials. Production credentials should be configured only by the owner.

## Owner Tasks Before Deployment

- Final legal review.
- Configure contact delivery provider.
- Configure spam protection if enabled.
- Configure analytics only after consent implications are reviewed.
- Configure AdSense only with a real publisher ID.
- Connect Vercel project and DNS.
