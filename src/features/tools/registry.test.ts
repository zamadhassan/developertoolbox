import { describe, expect, it } from 'vitest';
import { categories, tools } from './registry';

describe('tool registry', () => {
  it('contains the audited IT Tools count', () => {
    expect(tools).toHaveLength(86);
    expect(categories).toHaveLength(10);
  });

  it('has unique slugs and ids', () => {
    expect(new Set(tools.map((tool) => tool.slug)).size).toBe(tools.length);
    expect(new Set(tools.map((tool) => tool.id)).size).toBe(tools.length);
  });

  it('uses valid categories and resolvable related tool slugs', () => {
    const categorySlugs = new Set(categories.map((category) => category.slug));
    const toolSlugs = new Set(tools.map((tool) => tool.slug));
    for (const tool of tools) {
      expect(categorySlugs.has(tool.category)).toBe(true);
      expect(tool.metadata.title.length).toBeGreaterThan(5);
      expect(tool.metadata.description.length).toBeGreaterThan(10);
      for (const related of tool.relatedToolSlugs) expect(toolSlugs.has(related)).toBe(true);
    }
  });
});
