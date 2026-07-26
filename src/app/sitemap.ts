import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { categories, migratedTools } from '@/features/tools/registry';
import { posts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = [
    '',
    '/tools',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/cookie-policy',
    '/editorial-policy',
    '/open-source',
  ];
  const liveCategories = categories.filter((category) =>
    migratedTools.some((tool) => tool.category === category.slug),
  );
  const lastModified = new Date('2026-07-26');

  return [
    ...base.map((path) => ({ url: `${siteConfig.domain}${path}`, lastModified })),
    ...migratedTools.map((tool) => ({
      url: `${siteConfig.domain}/tools/${tool.slug}`,
      lastModified,
    })),
    ...liveCategories.map((category) => ({
      url: `${siteConfig.domain}/categories/${category.slug}`,
      lastModified,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
