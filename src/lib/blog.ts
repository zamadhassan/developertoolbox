export const posts = [
  {
    slug: 'how-to-format-and-validate-json-safely',
    title: 'How to Format and Validate JSON Safely',
    description: 'Practical tips for checking JSON payloads without leaking sensitive data.',
    date: '2026-07-25',
    category: 'Development',
    readingTime: '4 min read',
    body: [
      'JSON formatting is one of the most common developer utility tasks. A good formatter should preserve the original input until validation succeeds and explain parser failures clearly.',
      'When working with sensitive API responses, prefer tools that run locally in the browser and avoid placing tokens or secrets in URLs.',
      'Developer Tool Box includes a pilot JSON formatter and will expand the JSON tooling after parity review.',
    ],
  },
  {
    slug: 'base64-encoding-and-decoding-explained',
    title: 'Base64 Encoding and Decoding Explained',
    description: 'Understand what Base64 does, where it is useful and what it does not protect.',
    date: '2026-07-25',
    category: 'Converter',
    readingTime: '3 min read',
    body: [
      'Base64 is an encoding format, not encryption. Anyone can decode Base64 text if they have the encoded value.',
      'It is useful for transport-safe representation of binary or unicode content, but it should not be used as a security boundary.',
      'The Base64 String Converter pilot runs in the browser and is intended for development workflows.',
    ],
  },
  {
    slug: 'hashing-vs-encryption',
    title: 'Hashing vs Encryption: What Is the Difference?',
    description: 'A concise guide to hashes, encryption and when each concept applies.',
    date: '2026-07-25',
    category: 'Crypto',
    readingTime: '5 min read',
    body: [
      'Hashing creates a one-way digest of input. Encryption is designed to be reversible with the right key.',
      'Developer tools should avoid implying that a hash protects a secret by itself. Password storage requires purpose-built algorithms and careful parameters.',
      'Developer Tool Box labels security-adjacent tools carefully and documents limitations on each tool page.',
    ],
  },
];
