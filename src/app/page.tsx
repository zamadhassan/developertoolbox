import Link from 'next/link';
import { ToolCard } from '@/components/tools/tool-card';
import { CategoryIcon } from '@/components/tools/tool-icon';
import { categories, popularTools, tools } from '@/features/tools/registry';

export default function HomePage() {
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
            Developer Tool Box is a focused directory of practical utilities for formatting,
            encoding, decoding, conversion, generators and software development workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="rounded-full bg-primary px-6 py-3 font-semibold text-black hover:bg-[var(--primary-hover)]"
            >
              Explore All Tools
            </Link>
            <Link
              href="/categories/development"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold"
            >
              Browse Categories
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            <span>No account required</span>
            <span>Fast browser workflows</span>
            <span>{tools.length} inventoried tools</span>
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
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="card p-5 hover:border-[var(--border-strong)]"
            >
              <CategoryIcon category={category.slug} />
              <p className="mt-4 font-heading font-semibold">{category.name}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{category.description}</p>
              <p className="mt-4 text-sm text-primary">
                {tools.filter((tool) => tool.category === category.slug).length} tools
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="container py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-semibold">All tools</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Every inventoried tool is listed on the homepage with a live browser workspace and a
              permanent URL.
            </p>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-primary hover:text-white">
            Open full directory
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
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
