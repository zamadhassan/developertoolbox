import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { ToolSearch } from './tool-search';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b0a]/85 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-heading text-sm font-semibold tracking-tight sm:text-base"
        >
          <Image src="/brand/icon.svg" alt="" width={34} height={34} aria-hidden />
          <span>
            Developer <span className="text-primary">Tool Box</span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm text-[var(--text-secondary)] md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <ToolSearch />
      </div>
    </header>
  );
}
