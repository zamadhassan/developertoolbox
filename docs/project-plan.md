# Project Plan

## Goal

Build `Developer Tool Box`, a dark-mode-only, SEO-focused, production-ready Next.js App Router website for `https://developertoolbox.tech`, migrating useful IT Tools functionality into independent React and TypeScript implementations.

## Phase Status

| Phase                     | Status      | Notes                                                                                              |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------------------- |
| Phase 0: Discovery        | Complete    | Source architecture, licenses, categories, and inventory were audited.                             |
| Phase 1: Foundation       | In progress | Next.js app, design system, layout, metadata, and base infrastructure are scaffolded and verified. |
| Phase 2: Pilot migration  | In progress | Five pilot tools are interactive; full source parity review remains incomplete.                    |
| Phase 3: Full migration   | Not started | All 86 inventoried tools require parity review and tests.                                          |
| Phase 4: Public site      | Not started | Homepage, directories, category pages, legal pages, contact, search.                               |
| Phase 5: Blog             | Not started | Local content system and starter articles.                                                         |
| Phase 6: SEO and ads prep | Not started | Sitemap, robots, schema, AdSlot, analytics flags.                                                  |
| Phase 7: Verification     | Not started | Format, lint, typecheck, tests, build, E2E, route checks.                                          |

## Implementation Principles

- Source repositories remain read-only.
- Runtime code must live inside the new project only.
- No iframe or embedded Vue SPA migration.
- React client components are used only where interactivity is required.
- Tool logic is separated from UI and covered by tests before being marked complete.
- GPLv3 obligations from IT Tools are preserved in project licensing and notices.

## Immediate Next Steps

1. Deep-review source behavior for each pilot tool and expand parity tests.
2. Implement command palette, favorites, recent tools and full search/filter UX.
3. Migrate remaining tools category-by-category.
4. Expand blog content and structured data.
