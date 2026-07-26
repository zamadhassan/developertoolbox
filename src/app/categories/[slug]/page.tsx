import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToolCard } from '@/components/tools/tool-card';
import { getCategory, getToolsByCategory, categories } from '@/features/tools/registry';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const categoryTools = getToolsByCategory(category.slug);
  const hasLiveTools = categoryTools.some((tool) => tool.migrated);
  const url = `/categories/${category.slug}`;
  return {
    title: `${category.name} Tools`,
    description: category.description,
    alternates: { canonical: url },
    robots: hasLiveTools ? undefined : { index: false, follow: true },
    openGraph: {
      title: `${category.name} Tools`,
      description: category.description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Tools`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryTools = getToolsByCategory(category.slug);
  return (
    <div className="container py-14">
      <h1 className="font-heading text-4xl font-semibold">{category.name} tools</h1>
      <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
        {category.description} This category contains {categoryTools.length} tool pages.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      <section className="prose-content mt-12">
        <h2>Common tasks</h2>
        <p>
          Use this category to find focused tools for recurring development tasks. Each listed tool
          is marked as live or preview so you know what is ready before you start.
        </p>
        <h2>FAQ</h2>
        <p>
          Category counts are generated from the central registry so tool directory and category
          pages stay consistent.
        </p>
      </section>
    </div>
  );
}
