# SEO Plan

## Site Defaults

- Canonical domain: `https://developertoolbox.tech`
- Default title direction: `Developer Tool Box - Free Online Tools for Developers`
- Title template: `%s | Developer Tool Box`
- Default description: free browser-based tools for formatting, encoding, decoding, conversion, generators, and everyday software development tasks.

## Required Technical SEO

- `robots.ts`
- `sitemap.ts`
- Metadata API usage for all indexable pages
- Canonical URLs using the production domain
- Open Graph and Twitter card metadata
- Favicons and web manifest
- Breadcrumbs and structured data
- Custom 404 and invalid slug handling

## Structured Data Targets

| Route type     | Schema                                                     |
| -------------- | ---------------------------------------------------------- |
| Homepage       | `WebSite`, `Organization` where accurate                   |
| Tool pages     | `BreadcrumbList`, `WebApplication`, `FAQPage` when visible |
| Category pages | `BreadcrumbList`, `CollectionPage`, `ItemList`             |
| Blog posts     | `BreadcrumbList`, `BlogPosting`                            |
| About          | `AboutPage`                                                |
| Contact        | `ContactPage`                                              |

## Guardrails

- Do not invent reviews, ratings, prices, or usage counts.
- Do not use preview deployment URLs as canonicals.
- Do not create duplicate thin tool content.
