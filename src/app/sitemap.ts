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
  return [
    ...base.map((path) => ({ url: `${siteConfig.domain}${path}`, lastModified: new Date() })),
    ...tools.map((tool) => ({
      url: `${siteConfig.domain}/tools/${tool.slug}`,
      lastModified: new Date(),
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.domain}/categories/${category.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
