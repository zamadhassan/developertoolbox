import type { Metadata } from 'next';
import { ToolCard } from '@/components/tools/tool-card';
import { categories, tools } from '@/features/tools/registry';

export const metadata: Metadata = {
  title: 'All Developer Tools',
  description: 'Browse every Developer Tool Box utility by category and migration status.',
};

export default function ToolsPage() {
  return (
    <div className="container py-14">
      <h1 className="font-heading text-4xl font-semibold">All developer tools</h1>
      <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
        Browse {tools.length} developer utility pages. Live tools are ready to use, while preview
        pages are clearly marked as full behavior is completed.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-[var(--text-secondary)]"
          >
            {category.name}
          </a>
        ))}
      </div>
      <div className="mt-10 grid gap-10">
        {categories.map((category) => (
          <section key={category.slug} id={category.slug}>
            <h2 className="font-heading text-2xl font-semibold">{category.name}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tools
                .filter((tool) => tool.category === category.slug)
                .map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
