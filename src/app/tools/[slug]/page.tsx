import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ToolRunner } from '@/components/tools/tool-runner';
import { categories, getTool, tools } from '@/features/tools/registry';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.metadata.title,
    description: tool.metadata.description,
    alternates: { canonical: `${siteConfig.domain}/tools/${tool.slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();
  const category = categories.find((item) => item.slug === tool.category);
  const toolStatus = tool.migrated ? 'live tool' : 'basic preview';
  return (
    <div className="container py-12">
      <nav className="text-sm text-[var(--text-muted)]">
        <Link href="/">Home</Link> / <Link href="/tools">Tools</Link> /{' '}
        <Link href={`/categories/${tool.category}`}>{category?.name}</Link> / {tool.name}
      </nav>
      <header className="mt-8 max-w-3xl">
        <p className="text-sm text-primary">
          {category?.name} · {tool.processingMode} processing · {toolStatus}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold">{tool.name}</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">
          {tool.longDescription}
        </p>
      </header>
      <div className="mt-8">
        <ToolRunner tool={tool} />
      </div>
      <article className="prose-content mt-12 max-w-3xl">
        <h2>What this tool does</h2>
        <p>{tool.content.introduction}</p>
        <h2>How it works</h2>
        {tool.content.howItWorks.map((step) => (
          <p key={step.title}>
            <strong>{step.title}:</strong> {step.description}
          </p>
        ))}
        <h2>Common use cases</h2>
        <ul>
          {tool.content.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Privacy and limitations</h2>
        <p>
          Completed browser tools are designed not to intentionally send input to the server. Do not
          paste secrets unless you understand the tool behavior and limitations.
        </p>
        {!tool.migrated ? (
          <p>
            This page is currently a preview. Full tool-specific behavior is still being completed,
            so verify results with another source before relying on them.
          </p>
        ) : null}
        <h2>FAQs</h2>
        {tool.content.faqs.map((faq) => (
          <p key={faq.question}>
            <strong>{faq.question}</strong>
            <br />
            {faq.answer}
          </p>
        ))}
      </article>
    </div>
  );
}
