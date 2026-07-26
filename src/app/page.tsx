import Link from 'next/link';
import type { Metadata } from 'next';
import { ToolCard } from '@/components/tools/tool-card';
import { CategoryIcon } from '@/components/tools/tool-icon';
import { categories, migratedTools, popularTools } from '@/features/tools/registry';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function HomePage() {
  const liveCategories = categories.filter((category) =>
    migratedTools.some((tool) => tool.category === category.slug),
  );

  return (
    <div>
      <section className="container py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[var(--border-strong)] bg-[var(--primary-soft)] px-4 py-2 text-sm text-primary">
            Browser-based developer utilities
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
            Everyday Developer Tools, All in One Place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            Developer Tool Box gives you practical browser utilities for formatting, encoding,
            decoding, conversion, generators and everyday software development workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools/json-prettify"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-black hover:bg-[var(--primary-hover)]"
            >
              Format JSON Now
            </Link>
            <Link
              href="/tools"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold"
            >
              Explore All Tools
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            <span>No account required</span>
            <span>Local-first browser workflows</span>
            <span>{popularTools.length} popular live tools</span>
          </div>
        </div>
      </section>
      <section className="container py-10">
        <h2 className="font-heading text-2xl font-semibold">Popular tools</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>
      <section className="container py-10">
        <h2 className="font-heading text-2xl font-semibold">Tool categories</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {liveCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card p-5 hover:border-[var(--border-strong)]"
            >
              <CategoryIcon category={category.slug} />
              <p className="mt-4 font-heading font-semibold">{category.name}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{category.description}</p>
              <p className="mt-4 text-sm text-primary">
                {migratedTools.filter((tool) => tool.category === category.slug).length} live tools
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="container py-10">
        <div className="card flex flex-wrap items-center justify-between gap-5 p-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Need the complete directory?</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              The full tools directory includes live tools and clearly labeled previews while new
              utilities are completed.
            </p>
          </div>
          <Link
            href="/tools"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-primary hover:text-white"
          >
            Open full directory
          </Link>
        </div>
      </section>
      <section className="container py-10 prose-content">
        <h2>Why use Developer Tool Box?</h2>
        <p>
          The site is structured around permanent tool URLs, practical examples, mobile-friendly
          interfaces and local processing where the implementation supports it. Sensitive input
          should still be treated carefully, especially for cryptographic, token, credential and
          file tools.
        </p>
        <h2>How it works</h2>
        <p>
          Choose a tool, enter or upload data when supported, then copy, download or use the result.
          Each completed tool page explains limitations and processing behavior.
        </p>
        <h2>FAQ</h2>
        <p>
          Developer Tool Box is free to use locally. Account registration is not required. The
          current pilot tools run in the browser, while future server or hybrid tools will be
          labeled clearly before release.
        </p>
      </section>
    </div>
  );
}
