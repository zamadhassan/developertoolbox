import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { categories, tools } from '@/features/tools/registry';
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
  const lastModified = new Date('2026-07-26');

  return [
    ...base.map((path) => ({ url: `${siteConfig.domain}${path}`, lastModified })),
    ...tools.map((tool) => ({
      url: `${siteConfig.domain}/tools/${tool.slug}`,
      lastModified,
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.domain}/categories/${category.slug}`,
      lastModified,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
