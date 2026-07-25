# Local Production Readiness

Status: foundation verified, full production migration not ready.

The Next.js foundation builds and starts locally, but production readiness cannot be claimed because only a pilot set of tools has been migrated. The full 86-tool parity migration, richer content, broader E2E coverage, manual accessibility checks, mobile checks, and legal review remain open.

## Required Local Checks

- Install dependencies with `pnpm install`.
- Run format, lint, typecheck, unit tests, build, E2E tests, and production server.
- Manually inspect desktop and mobile layouts.
- Test keyboard navigation and reduced-motion mode.
- Test invalid, empty, and long tool inputs.
- Verify copy, clear, reset, internal links, blog links, policy links, and invalid routes.
