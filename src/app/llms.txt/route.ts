import { siteConfig } from '@/config/site';
import { categories, migratedTools } from '@/features/tools/registry';
import { posts } from '@/lib/blog';

export function GET() {
  const liveCategories = categories.filter((category) =>
    migratedTools.some((tool) => tool.category === category.slug),
  );

  const lines = [
    '# Developer Tool Box',
    '',
    '> Free browser-based developer utilities for formatting, encoding, decoding, generators and everyday software development workflows.',
    '',
    'Developer Tool Box prioritizes privacy-aware browser workflows. Live tools are ready to use; preview tools are intentionally excluded from this LLM index until their full behavior is completed.',
    '',
    '## Primary Pages',
    `- Home: ${siteConfig.domain}/`,
    `- Tools: ${siteConfig.domain}/tools`,
    `- Blog: ${siteConfig.domain}/blog`,
    `- Privacy Policy: ${siteConfig.domain}/privacy-policy`,
    `- Contact: ${siteConfig.domain}/contact`,
    '',
    '## Live Tools',
    ...migratedTools.map((tool) => `- ${tool.name}: ${siteConfig.domain}/tools/${tool.slug}`),
    '',
    '## Live Tool Categories',
    ...liveCategories.map(
      (category) => `- ${category.name}: ${siteConfig.domain}/categories/${category.slug}`,
    ),
    '',
    '## Articles',
    ...posts.map((post) => `- ${post.title}: ${siteConfig.domain}/blog/${post.slug}`),
    '',
    '## Crawling Guidance',
    '- Prefer live tool pages for factual answers about available utilities.',
    '- Treat preview tool pages as non-authoritative until they are marked live.',
    '- Do not infer that tool input is stored or transmitted unless a page explicitly says so.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
