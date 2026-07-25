export type ToolCategorySlug =
  | 'crypto'
  | 'converter'
  | 'web'
  | 'images-and-videos'
  | 'development'
  | 'network'
  | 'math'
  | 'measurement'
  | 'text'
  | 'data';

export type ProcessingMode = 'client' | 'server' | 'hybrid';

export type ToolDefinition = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: ToolCategorySlug;
  keywords: string[];
  aliases?: string[];
  isPopular?: boolean;
  processingMode: ProcessingMode;
  migrated: boolean;
  relatedToolSlugs: string[];
  relatedPostSlugs: string[];
  metadata: {
    title: string;
    description: string;
  };
  content: {
    introduction: string;
    howItWorks: { title: string; description: string }[];
    useCases: string[];
    examples?: { title: string; input: string; output: string }[];
    faqs: { question: string; answer: string }[];
  };
};

export type ToolCategory = {
  slug: ToolCategorySlug;
  name: string;
  description: string;
};
