import Link from 'next/link';
import { categories, popularTools } from '@/features/tools/registry';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#070b0a]/80 py-12">
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl font-semibold">
            Developer <span className="text-primary">Tool Box</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
            Browser-based developer utilities with permanent URLs, clear explanations and
            privacy-aware workflows.
          </p>
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Developer Tool Box. GPL-3.0-only.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Categories</p>
          <div className="grid gap-2 text-sm text-[var(--text-secondary)]">
            {categories.slice(0, 6).map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Popular</p>
          <div className="grid gap-2 text-sm text-[var(--text-secondary)]">
            {popularTools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                {tool.name}
              </Link>
            ))}
            {siteConfig.footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
