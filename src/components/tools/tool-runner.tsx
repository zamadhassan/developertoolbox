'use client';

import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { ToolDefinition } from '@/features/tools/types';

const textEncoder = typeof TextEncoder === 'undefined' ? null : new TextEncoder();

const sampleBySlug: Record<string, string> = {
  'json-prettify': '{"name":"Developer Tool Box","live":true}',
  'json-minify': '{\n  "name": "Developer Tool Box",\n  "live": true\n}',
  'base64-string-converter': 'Developer Tool Box',
  'url-encoder': 'https://developertoolbox.tech/tools/json-prettify?sample=true',
  'hash-text': 'Developer Tool Box',
  'uuid-generator': '5',
  'ulid-generator': '5',
  'token-generator': '32',
  'case-converter': 'Developer Tool Box online utilities',
  'text-to-binary': 'Dev',
  'text-to-unicode': 'Dev',
  'text-to-nato-alphabet': 'Dev Tool',
  'html-entities': '<section class="tool">Developer & Tool Box</section>',
  'url-parser': 'https://user:pass@developertoolbox.tech:443/tools?category=web#search',
  'basic-auth-generator': 'developer:toolbox',
  'jwt-parser': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZlbG9wZXIifQ.signature',
  'slugify-string': 'Developer Tool Box: JSON & URL Utilities!',
  'http-status-codes': '404',
  'yaml-to-json-converter': 'name: Developer Tool Box\nlive: true',
  'json-to-yaml-converter': '{"name":"Developer Tool Box","live":true}',
  'json-to-csv':
    '[{"name":"JSON","category":"Development"},{"name":"Base64","category":"Converter"}]',
  'xml-to-json': '<tool><name>Developer Tool Box</name></tool>',
  'json-to-xml': '{"tool":{"name":"Developer Tool Box"}}',
  'xml-formatter': '<tool><name>Developer Tool Box</name></tool>',
  'yaml-prettify': 'name: Developer Tool Box\nlive: true',
  'regex-tester': '/tool/gi\nDeveloper Tool Box tools',
  'text-statistics': 'Developer Tool Box\nOnline tools for developers.',
  'string-obfuscator': 'sk_live_example_secret_token',
  'text-diff': 'Developer Tool Box\n---\nDeveloper Toolbox',
  'numeronym-generator': 'accessibility internationalization localization',
  'roman-numeral-converter': '2026',
  'base-converter': '255',
  'temperature-converter': '100',
  'percentage-calculator': '25 of 200',
  'email-normalizer': 'Example.User+tag@Gmail.com',
  'markdown-to-html': '# Developer Tool Box\n\nUseful **developer** tools.',
  'svg-placeholder-generator': '640x360 Developer Tool Box',
};

async function sha256(input: string) {
  if (!textEncoder || !crypto.subtle) return 'SHA-256 is not available in this browser context.';
  const digest = await crypto.subtle.digest('SHA-256', textEncoder.encode(input));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function encodeBase64(value: string) {
  return btoa(unescape(encodeURIComponent(value)));
}

function decodeBase64(value: string) {
  return decodeURIComponent(escape(atob(value)));
}

function randomHex(bytes: number) {
  const array = new Uint8Array(Math.max(1, Math.min(bytes, 256)));
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function slugify(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function safeJsonParse(value: string) {
  return JSON.parse(value) as unknown;
}

function simpleYamlToJson(value: string) {
  const result: Record<string, string | number | boolean> = {};
  for (const line of value.split('\n')) {
    const match = line.match(/^\s*([^:#]+):\s*(.*)\s*$/);
    if (!match) continue;
    const raw = match[2];
    result[match[1].trim()] =
      raw === 'true'
        ? true
        : raw === 'false'
          ? false
          : Number.isNaN(Number(raw))
            ? raw
            : Number(raw);
  }
  return JSON.stringify(result, null, 2);
}

function jsonToYaml(value: string) {
  const data = safeJsonParse(value);
  if (!data || typeof data !== 'object' || Array.isArray(data)) return String(data);
  return Object.entries(data as Record<string, unknown>)
    .map(
      ([key, item]) => `${key}: ${typeof item === 'object' ? JSON.stringify(item) : String(item)}`,
    )
    .join('\n');
}

function jsonToCsv(value: string) {
  const rows = safeJsonParse(value);
  if (
    !Array.isArray(rows) ||
    rows.some((row) => !row || typeof row !== 'object' || Array.isArray(row))
  ) {
    throw new Error('Enter a JSON array of objects.');
  }
  const keys = Array.from(
    new Set(rows.flatMap((row) => Object.keys(row as Record<string, unknown>))),
  );
  const escapeCell = (cell: unknown) => `"${String(cell ?? '').replace(/"/g, '""')}"`;
  return [
    keys.join(','),
    ...rows.map((row) =>
      keys.map((key) => escapeCell((row as Record<string, unknown>)[key])).join(','),
    ),
  ].join('\n');
}

function textStats(value: string) {
  const words = value.trim().split(/\s+/).filter(Boolean);
  return JSON.stringify(
    {
      characters: value.length,
      charactersWithoutSpaces: value.replace(/\s/g, '').length,
      words: words.length,
      lines: value ? value.split('\n').length : 0,
      bytes: new Blob([value]).size,
    },
    null,
    2,
  );
}

function roman(value: number) {
  const numerals: Array<[number, string]> = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let remaining = Math.max(1, Math.min(Math.floor(value), 3999));
  let result = '';
  for (const [amount, symbol] of numerals) {
    while (remaining >= amount) {
      result += symbol;
      remaining -= amount;
    }
  }
  return result;
}

function fallback(tool: ToolDefinition, input: string) {
  return `${tool.name} preview.\n\nInput received:\n${input || '(empty)'}\n\nThis preview confirms the page and input flow. Full tool-specific behavior is still being completed, so do not rely on this output for production work.`;
}

export function ToolRunner({ tool }: { tool: ToolDefinition }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const sample = useMemo(() => sampleBySlug[tool.slug] ?? tool.name, [tool.slug, tool.name]);

  const run = async (mode?: 'decode') => {
    setError('');
    setCopied(false);
    try {
      const count = Math.max(1, Math.min(Number.parseInt(input, 10) || 5, 100));
      switch (tool.slug) {
        case 'json-prettify':
          setOutput(JSON.stringify(safeJsonParse(input), null, 2));
          break;
        case 'json-minify':
          setOutput(JSON.stringify(safeJsonParse(input)));
          break;
        case 'json-to-yaml-converter':
          setOutput(jsonToYaml(input));
          break;
        case 'yaml-to-json-converter':
        case 'yaml-prettify':
          setOutput(simpleYamlToJson(input));
          break;
        case 'json-to-csv':
          setOutput(jsonToCsv(input));
          break;
        case 'base64-string-converter':
          setOutput(mode === 'decode' ? decodeBase64(input) : encodeBase64(input));
          break;
        case 'url-encoder':
          setOutput(mode === 'decode' ? decodeURIComponent(input) : encodeURIComponent(input));
          break;
        case 'html-entities':
          setOutput(
            mode === 'decode'
              ? input
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                  .replace(/&amp;/g, '&')
                  .replace(/&quot;/g, '"')
              : input
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;'),
          );
          break;
        case 'uuid-generator':
          setOutput(Array.from({ length: count }, () => uuidv4()).join('\n'));
          break;
        case 'ulid-generator':
          setOutput(
            Array.from(
              { length: count },
              () => `${Date.now().toString(32).toUpperCase()}${randomHex(8).toUpperCase()}`,
            ).join('\n'),
          );
          break;
        case 'token-generator':
          setOutput(randomHex(count));
          break;
        case 'hash-text':
          setOutput(await sha256(input));
          break;
        case 'case-converter':
          setOutput(
            [
              `lower: ${input.toLowerCase()}`,
              `upper: ${input.toUpperCase()}`,
              `slug: ${slugify(input)}`,
            ].join('\n'),
          );
          break;
        case 'slugify-string':
          setOutput(slugify(input));
          break;
        case 'text-to-binary':
          setOutput(
            Array.from(input)
              .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
              .join(' '),
          );
          break;
        case 'text-to-unicode':
          setOutput(
            Array.from(input)
              .map((char) => `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`)
              .join(' '),
          );
          break;
        case 'url-parser': {
          const url = new URL(input);
          setOutput(
            JSON.stringify(
              {
                protocol: url.protocol,
                username: url.username,
                password: url.password ? '[redacted]' : '',
                host: url.host,
                pathname: url.pathname,
                searchParams: Object.fromEntries(url.searchParams),
                hash: url.hash,
              },
              null,
              2,
            ),
          );
          break;
        }
        case 'basic-auth-generator': {
          const [user = '', pass = ''] = input.split(':');
          setOutput(`Authorization: Basic ${encodeBase64(`${user}:${pass}`)}`);
          break;
        }
        case 'jwt-parser': {
          const parts = input.split('.');
          if (parts.length < 2)
            throw new Error('JWT must contain at least header and payload segments.');
          setOutput(
            JSON.stringify(
              {
                header: JSON.parse(decodeBase64(parts[0].replace(/-/g, '+').replace(/_/g, '/'))),
                payload: JSON.parse(decodeBase64(parts[1].replace(/-/g, '+').replace(/_/g, '/'))),
                signaturePresent: Boolean(parts[2]),
              },
              null,
              2,
            ),
          );
          break;
        }
        case 'http-status-codes':
          setOutput(
            (
              {
                '200': 'OK',
                '201': 'Created',
                '204': 'No Content',
                '301': 'Moved Permanently',
                '302': 'Found',
                '400': 'Bad Request',
                '401': 'Unauthorized',
                '403': 'Forbidden',
                '404': 'Not Found',
                '409': 'Conflict',
                '422': 'Unprocessable Content',
                '429': 'Too Many Requests',
                '500': 'Internal Server Error',
                '502': 'Bad Gateway',
                '503': 'Service Unavailable',
              } as Record<string, string>
            )[input.trim()] ?? 'Unknown or uncommon HTTP status code.',
          );
          break;
        case 'text-statistics':
          setOutput(textStats(input));
          break;
        case 'string-obfuscator':
          setOutput(
            input.length <= 8
              ? '*'.repeat(input.length)
              : `${input.slice(0, 4)}${'*'.repeat(Math.max(4, input.length - 8))}${input.slice(-4)}`,
          );
          break;
        case 'text-diff': {
          const [left = '', right = ''] = input.split('\n---\n');
          setOutput(
            left === right
              ? 'No differences.'
              : `Left length: ${left.length}\nRight length: ${right.length}\nEqual: false`,
          );
          break;
        }
        case 'numeronym-generator':
          setOutput(
            input
              .trim()
              .split(/\s+/)
              .filter(Boolean)
              .map((word) =>
                word.length > 3 ? `${word[0]}${word.length - 2}${word[word.length - 1]}` : word,
              )
              .join(' '),
          );
          break;
        case 'roman-numeral-converter':
          setOutput(roman(Number(input)));
          break;
        case 'base-converter': {
          const value = Number.parseInt(input, 10);
          setOutput(
            `binary: ${value.toString(2)}\noctal: ${value.toString(8)}\ndecimal: ${value}\nhex: ${value.toString(16).toUpperCase()}`,
          );
          break;
        }
        case 'temperature-converter': {
          const celsius = Number(input);
          setOutput(
            `Celsius: ${celsius}\nFahrenheit: ${(celsius * 9) / 5 + 32}\nKelvin: ${celsius + 273.15}`,
          );
          break;
        }
        case 'percentage-calculator': {
          const match = input.match(/([\d.]+)\s+of\s+([\d.]+)/i);
          if (!match) throw new Error('Use a format like: 25 of 200');
          setOutput(`${(Number(match[1]) / Number(match[2])) * 100}%`);
          break;
        }
        case 'email-normalizer':
          setOutput(
            input
              .trim()
              .toLowerCase()
              .replace(/(.*?)\+.*?(@gmail\.com|@googlemail\.com)$/i, '$1$2'),
          );
          break;
        case 'markdown-to-html':
          setOutput(
            input
              .replace(/^# (.*)$/gm, '<h1>$1</h1>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n\n/g, '<br><br>'),
          );
          break;
        case 'svg-placeholder-generator': {
          const match = input.match(/(\d+)x(\d+)\s*(.*)/);
          const width = match?.[1] ?? '640';
          const height = match?.[2] ?? '360';
          const label = match?.[3] || 'Placeholder';
          setOutput(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#0d1512"/><text x="50%" y="50%" fill="#3ecf8e" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`,
          );
          break;
        }
        default:
          setOutput(fallback(tool, input));
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'The input could not be processed.');
      setOutput('');
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
    } catch {
      setError('Clipboard access was denied by the browser.');
    }
  };

  return (
    <section className="card p-5 md:p-6" aria-label={`${tool.name} workspace`}>
      {!tool.migrated ? (
        <p className="mb-5 rounded-2xl border border-[var(--warning)]/30 bg-[var(--warning)]/10 p-4 text-sm text-[var(--warning)]">
          Preview tool: this page is available for discovery, but full tool-specific behavior is
          still being completed.
        </p>
      ) : null}
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Input
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="min-h-64 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white shadow-inner"
            spellCheck={false}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Output
          <textarea
            value={output}
            readOnly
            className="min-h-64 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white shadow-inner"
          />
        </label>
      </div>
      {error ? (
        <p
          className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      <p className="sr-only" aria-live="polite">
        {copied ? 'Output copied' : output ? 'Output updated' : ''}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => run()}
          className="rounded-full bg-primary px-5 py-2.5 font-semibold text-black hover:bg-[var(--primary-hover)]"
        >
          {['uuid-generator', 'ulid-generator', 'token-generator'].includes(tool.slug)
            ? 'Generate'
            : 'Process'}
        </button>
        {['base64-string-converter', 'url-encoder', 'html-entities'].includes(tool.slug) ? (
          <button
            onClick={() => run('decode')}
            className="rounded-full border border-white/10 px-5 py-2.5"
          >
            Decode
          </button>
        ) : null}
        <button
          onClick={() => setInput(sample)}
          className="rounded-full border border-white/10 px-5 py-2.5"
        >
          Sample
        </button>
        <button
          onClick={copy}
          disabled={!output}
          className="rounded-full border border-white/10 px-5 py-2.5 disabled:opacity-50"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
        <button
          onClick={() => {
            setInput('');
            setOutput('');
            setError('');
          }}
          className="rounded-full border border-white/10 px-5 py-2.5"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
