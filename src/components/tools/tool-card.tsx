import Link from 'next/link';
import type { ToolDefinition } from '@/features/tools/types';
import { categories } from '@/features/tools/registry';
import { ToolIcon } from './tool-icon';

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  const category = categories.find((item) => item.slug === tool.category);
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="card group block p-5 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <ToolIcon slug={tool.slug} category={tool.category} />
          <div>
            <p className="font-heading text-lg font-semibold">{tool.name}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              {tool.shortDescription}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[var(--primary-soft)] px-2 py-1 text-xs text-primary">
          Live
        </span>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
        {category?.name}
      </p>
    </Link>
  );
}
