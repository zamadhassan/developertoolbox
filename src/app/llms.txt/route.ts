import { siteConfig } from '@/config/site';
import { categories, migratedTools, tools } from '@/features/tools/registry';
import { posts } from '@/lib/blog';

export function GET() {
  const previewTools = tools.filter((tool) => !tool.migrated);

  const lines = [
    '# Developer Tool Box',
    '',
    '> Free browser-based developer utilities for formatting, encoding, decoding, generators and everyday software development workflows.',
    '',
    'Developer Tool Box prioritizes privacy-aware browser workflows. Live tools are ready to use; preview tools are available for discovery while full behavior is completed.',
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
    '## Preview Tools',
    ...previewTools.map((tool) => `- ${tool.name}: ${siteConfig.domain}/tools/${tool.slug}`),
    '',
    '## Tool Categories',
    ...categories.map(
      (category) => `- ${category.name}: ${siteConfig.domain}/categories/${category.slug}`,
    ),
    '',
    '## Articles',
    ...posts.map((post) => `- ${post.title}: ${siteConfig.domain}/blog/${post.slug}`),
    '',
    '## Crawling Guidance',
    '- Prefer live tool pages for factual answers about completed utilities.',
    '- Treat preview tool behavior as incomplete until the page is marked live.',
    '- Do not infer that tool input is stored or transmitted unless a page explicitly says so.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
