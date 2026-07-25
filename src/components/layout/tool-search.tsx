'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { categories, popularTools, tools } from '@/features/tools/registry';
import { ToolIcon } from '@/components/tools/tool-icon';

export function ToolSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return popularTools;
    return tools
      .filter((tool) => {
        const category = categories.find((item) => item.slug === tool.category)?.name ?? '';
        return [
          tool.name,
          tool.shortDescription,
          category,
          ...tool.keywords,
          ...(tool.aliases ?? []),
        ]
          .join(' ')
          .toLowerCase()
          .includes(term);
      })
      .slice(0, 24);
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-white md:flex"
      >
        <Search size={16} aria-hidden /> Search tools{' '}
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs">Ctrl K</kbd>
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/10 px-3 py-2 text-sm md:hidden"
      >
        Search
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search developer tools"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface-elevated)] shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 p-4">
              <Search size={18} aria-hidden className="text-primary" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search tools, categories or keywords..."
                className="w-full bg-transparent text-base outline-none placeholder:text-[var(--text-muted)]"
                aria-label="Search tools"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-[var(--text-secondary)] hover:bg-white/10 hover:text-white"
                aria-label="Close search"
              >
                <X size={18} aria-hidden />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {results.length > 0 ? (
                <div className="grid gap-2">
                  {results.map((tool) => {
                    const category = categories.find((item) => item.slug === tool.category);
                    return (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-2xl border border-transparent p-4 hover:border-[var(--border-strong)] hover:bg-white/5 focus:border-[var(--border-strong)]"
                      >
                        <span className="flex items-start justify-between gap-4">
                          <span className="flex items-start gap-3">
                            <ToolIcon
                              slug={tool.slug}
                              category={tool.category}
                              className="size-9 rounded-xl"
                            />
                            <span>
                              <span className="block font-heading text-sm font-semibold">
                                {tool.name}
                              </span>
                              <span className="mt-1 block text-sm text-[var(--text-secondary)]">
                                {tool.shortDescription}
                              </span>
                            </span>
                          </span>
                          <span className="shrink-0 rounded-full bg-white/5 px-2 py-1 text-xs text-[var(--text-muted)]">
                            {category?.name}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="p-6 text-center text-sm text-[var(--text-secondary)]">
                  No tools found. Try JSON, Base64, URL, hash, UUID, regex or YAML.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
