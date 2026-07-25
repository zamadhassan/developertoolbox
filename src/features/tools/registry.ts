import type { ToolCategory, ToolDefinition } from './types';

export const categories: ToolCategory[] = [
  {
    slug: 'crypto',
    name: 'Crypto',
    description: 'Hashing, identifiers, random values and security-adjacent utilities.',
  },
  {
    slug: 'converter',
    name: 'Converter',
    description: 'Format and convert strings, numbers, files and structured data.',
  },
  {
    slug: 'web',
    name: 'Web',
    description: 'Utilities for URLs, browser data, HTTP, tokens and web development.',
  },
  {
    slug: 'images-and-videos',
    name: 'Images and videos',
    description: 'QR codes, SVG placeholders and browser media utilities.',
  },
  {
    slug: 'development',
    name: 'Development',
    description: 'JSON, XML, YAML, SQL, regex, Docker and everyday coding helpers.',
  },
  {
    slug: 'network',
    name: 'Network',
    description: 'IP, subnet, MAC address and network calculation tools.',
  },
  {
    slug: 'math',
    name: 'Math',
    description: 'Practical calculators for percentages, ETA and expressions.',
  },
  {
    slug: 'measurement',
    name: 'Measurement',
    description: 'Timers, temperature conversion and benchmark helpers.',
  },
  {
    slug: 'text',
    name: 'Text',
    description: 'Text generation, analysis, diffing, emoji and formatting helpers.',
  },
  {
    slug: 'data',
    name: 'Data',
    description: 'Validation and formatting tools for structured personal or business data.',
  },
];

const pilotContent = (name: string, purpose: string): ToolDefinition['content'] => ({
  introduction: `${name} helps developers complete ${purpose} directly in the browser with clear input, output and validation behavior.`,
  howItWorks: [
    { title: 'Enter input', description: 'Paste or type the value you want to process.' },
    {
      title: 'Review the result',
      description: 'The tool validates the input and displays a formatted result or a clear error.',
    },
    {
      title: 'Copy or reset',
      description: 'Copy the output when it is ready, or clear the workspace to start again.',
    },
  ],
  useCases: [
    'Debug API responses',
    'Prepare test data',
    'Validate snippets before committing code',
  ],
  faqs: [
    {
      question: `Does ${name} send input to a server?`,
      answer:
        'The pilot implementation runs in the browser and does not intentionally transmit tool input.',
    },
    {
      question: `Can ${name} be used on mobile?`,
      answer: 'Yes. The interface is built to stack input and output panels on narrow screens.',
    },
  ],
});

const plannedContent = (name: string): ToolDefinition['content'] => ({
  introduction: `${name} is available as a browser-based Developer Tool Box workspace. Complex tools may use a focused safe implementation while deeper source parity work continues.`,
  howItWorks: [
    {
      title: 'Use the workspace',
      description: 'Enter input, run the tool and review the generated output or guidance.',
    },
  ],
  useCases: ['Run common developer utility workflows in the browser.'],
  faqs: [
    {
      question: `Is ${name} available?`,
      answer:
        'Yes. The page includes an interactive browser workspace. Some advanced parity details are still tracked in the migration documentation.',
    },
  ],
});

const tool = (
  input: Omit<ToolDefinition, 'metadata' | 'content' | 'longDescription' | 'relatedPostSlugs'> & {
    purpose: string;
  },
): ToolDefinition => ({
  ...input,
  longDescription: input.migrated
    ? `${input.name} provides ${input.purpose} with a privacy-aware browser workflow.`
    : `${input.name} provides a browser-based workspace for ${input.purpose}.`,
  metadata: {
    title: `${input.name} Online - Free Developer Tool`,
    description: input.shortDescription,
  },
  content: input.migrated ? pilotContent(input.name, input.purpose) : plannedContent(input.name),
  relatedPostSlugs: [],
});

export const tools: ToolDefinition[] = [
  tool({
    id: 'json-prettify',
    name: 'JSON Formatter',
    slug: 'json-prettify',
    shortDescription: 'Format, validate and inspect JSON input.',
    category: 'development',
    keywords: ['json', 'format', 'prettify'],
    isPopular: true,
    processingMode: 'client',
    migrated: true,
    relatedToolSlugs: ['json-minify', 'yaml-to-json-converter'],
    purpose: 'JSON formatting and validation',
  }),
  tool({
    id: 'base64-string-converter',
    name: 'Base64 String Converter',
    slug: 'base64-string-converter',
    shortDescription: 'Encode and decode Base64 text safely in your browser.',
    category: 'converter',
    keywords: ['base64', 'encode', 'decode'],
    isPopular: true,
    processingMode: 'client',
    migrated: true,
    relatedToolSlugs: ['url-encoder', 'text-to-binary'],
    purpose: 'Base64 encoding and decoding',
  }),
  tool({
    id: 'uuid-generator',
    name: 'UUID Generator',
    slug: 'uuid-generator',
    shortDescription: 'Generate RFC-compatible UUID values for development and testing.',
    category: 'crypto',
    keywords: ['uuid', 'id', 'random'],
    isPopular: true,
    processingMode: 'client',
    migrated: true,
    relatedToolSlugs: ['ulid-generator', 'token-generator'],
    purpose: 'UUID generation',
  }),
  tool({
    id: 'url-encoder',
    name: 'URL Encoder',
    slug: 'url-encoder',
    shortDescription: 'Encode or decode URL components and query-safe strings.',
    category: 'web',
    keywords: ['url', 'encode', 'decode'],
    isPopular: true,
    processingMode: 'client',
    migrated: true,
    relatedToolSlugs: ['url-parser', 'base64-string-converter'],
    purpose: 'URL encoding and decoding',
  }),
  tool({
    id: 'hash-text',
    name: 'Hash Text',
    slug: 'hash-text',
    shortDescription: 'Create SHA-256 hashes from text using browser cryptography.',
    category: 'crypto',
    keywords: ['hash', 'sha', 'digest'],
    isPopular: true,
    processingMode: 'client',
    migrated: true,
    relatedToolSlugs: ['hmac-generator', 'bcrypt'],
    purpose: 'text hashing',
  }),
  ...[
    ['token-generator', 'Token Generator', 'crypto'],
    ['bcrypt', 'Bcrypt', 'crypto'],
    ['ulid-generator', 'ULID Generator', 'crypto'],
    ['encryption', 'Encryption', 'crypto'],
    ['bip39-generator', 'BIP39 Generator', 'crypto'],
    ['hmac-generator', 'HMAC Generator', 'crypto'],
    ['rsa-key-pair-generator', 'RSA Key Pair Generator', 'crypto'],
    ['password-strength-analyser', 'Password Strength Analyser', 'crypto'],
    ['pdf-signature-checker', 'PDF Signature Checker', 'crypto'],
    ['date-converter', 'Date Time Converter', 'converter'],
    ['base-converter', 'Integer Base Converter', 'converter'],
    ['roman-numeral-converter', 'Roman Numeral Converter', 'converter'],
    ['base64-file-converter', 'Base64 File Converter', 'converter'],
    ['color-converter', 'Color Converter', 'converter'],
    ['case-converter', 'Case Converter', 'converter'],
    ['text-to-nato-alphabet', 'Text to NATO Alphabet', 'converter'],
    ['text-to-binary', 'Text to Binary', 'converter'],
    ['text-to-unicode', 'Text to Unicode', 'converter'],
    ['yaml-to-json-converter', 'YAML to JSON', 'converter'],
    ['yaml-to-toml', 'YAML to TOML', 'converter'],
    ['json-to-yaml-converter', 'JSON to YAML', 'converter'],
    ['json-to-toml', 'JSON to TOML', 'converter'],
    ['list-converter', 'List Converter', 'converter'],
    ['toml-to-json', 'TOML to JSON', 'converter'],
    ['toml-to-yaml', 'TOML to YAML', 'converter'],
    ['xml-to-json', 'XML to JSON', 'converter'],
    ['json-to-xml', 'JSON to XML', 'converter'],
    ['markdown-to-html', 'Markdown to HTML', 'converter'],
    ['html-entities', 'HTML Entities', 'web'],
    ['url-parser', 'URL Parser', 'web'],
    ['device-information', 'Device Information', 'web'],
    ['basic-auth-generator', 'Basic Auth Generator', 'web'],
    ['og-meta-generator', 'Meta Tag Generator', 'web'],
    ['otp-generator', 'OTP Generator', 'web'],
    ['mime-types', 'MIME Types', 'web'],
    ['jwt-parser', 'JWT Parser', 'web'],
    ['keycode-info', 'Keycode Info', 'web'],
    ['slugify-string', 'Slugify String', 'web'],
    ['html-wysiwyg-editor', 'HTML WYSIWYG Editor', 'web'],
    ['user-agent-parser', 'User Agent Parser', 'web'],
    ['http-status-codes', 'HTTP Status Codes', 'web'],
    ['json-diff', 'JSON Diff', 'web'],
    ['safelink-decoder', 'Outlook Safelink Decoder', 'web'],
    ['qrcode-generator', 'QR Code Generator', 'images-and-videos'],
    ['wifi-qrcode-generator', 'WiFi QR Code Generator', 'images-and-videos'],
    ['svg-placeholder-generator', 'SVG Placeholder Generator', 'images-and-videos'],
    ['camera-recorder', 'Camera Recorder', 'images-and-videos'],
    ['git-memo', 'Git Memo', 'development'],
    ['random-port-generator', 'Random Port Generator', 'development'],
    ['crontab-generator', 'Crontab Generator', 'development'],
    ['json-minify', 'JSON Minify', 'development'],
    ['json-to-csv', 'JSON to CSV', 'development'],
    ['sql-prettify', 'SQL Prettify', 'development'],
    ['chmod-calculator', 'Chmod Calculator', 'development'],
    ['docker-run-to-docker-compose-converter', 'Docker Run to Docker Compose', 'development'],
    ['xml-formatter', 'XML Formatter', 'development'],
    ['yaml-prettify', 'YAML Viewer', 'development'],
    ['email-normalizer', 'Email Normalizer', 'development'],
    ['regex-tester', 'Regex Tester', 'development'],
    ['regex-memo', 'Regex Cheatsheet', 'development'],
    ['ipv4-subnet-calculator', 'IPv4 Subnet Calculator', 'network'],
    ['ipv4-address-converter', 'IPv4 Address Converter', 'network'],
    ['ipv4-range-expander', 'IPv4 Range Expander', 'network'],
    ['mac-address-lookup', 'MAC Address Lookup', 'network'],
    ['mac-address-generator', 'MAC Address Generator', 'network'],
    ['ipv6-ula-generator', 'IPv6 ULA Generator', 'network'],
    ['math-evaluator', 'Math Evaluator', 'math'],
    ['eta-calculator', 'ETA Calculator', 'math'],
    ['percentage-calculator', 'Percentage Calculator', 'math'],
    ['chronometer', 'Chronometer', 'measurement'],
    ['temperature-converter', 'Temperature Converter', 'measurement'],
    ['benchmark-builder', 'Benchmark Builder', 'measurement'],
    ['lorem-ipsum-generator', 'Lorem Ipsum Generator', 'text'],
    ['text-statistics', 'Text Statistics', 'text'],
    ['emoji-picker', 'Emoji Picker', 'text'],
    ['string-obfuscator', 'String Obfuscator', 'text'],
    ['text-diff', 'Text Diff', 'text'],
    ['numeronym-generator', 'Numeronym Generator', 'text'],
    ['ascii-text-drawer', 'ASCII Art Text Generator', 'text'],
    ['phone-parser-and-formatter', 'Phone Parser and Formatter', 'data'],
    ['iban-validator-and-parser', 'IBAN Validator and Parser', 'data'],
  ].map(([slug, name, category]) =>
    tool({
      id: slug,
      slug,
      name,
      category: category as ToolDefinition['category'],
      shortDescription: `${name} is part of the Developer Tool Box migration inventory.`,
      keywords: slug.split('-'),
      processingMode: 'client',
      migrated: false,
      relatedToolSlugs: [],
      purpose: `${name.toLowerCase()} workflows`,
    }),
  ),
];

export const popularTools = tools.filter((item) => item.isPopular);
export const migratedTools = tools.filter((item) => item.migrated);
export const getTool = (slug: string) => tools.find((item) => item.slug === slug);
export const getCategory = (slug: string) => categories.find((item) => item.slug === slug);
export const getToolsByCategory = (slug: string) => tools.filter((item) => item.category === slug);
