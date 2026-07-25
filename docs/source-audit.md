# Source Audit

## Repository Locations

The expected source folders were found inside this workspace at:

- `D:\Open Code\developertoolbox\it-tools-main\it-tools-main`
- `D:\Open Code\developertoolbox\animate-ui-main`
- `D:\Open Code\developertoolbox\inspira-ui-main`
- `D:\Open Code\developertoolbox\lenis-main`

These repositories are treated as read-only references. The production Next.js app must not import from them at runtime.

## IT Tools Architecture

- Package: `it-tools`
- Version inspected: `2024.10.22-7ca5933`
- Framework: Vue 3
- Build tool: Vite
- Language: TypeScript
- Package manager: `pnpm@9.11.0`
- Tool registry: `src/tools/index.ts`
- Tool definition helper: `src/tools/tool.ts`
- Tool type definitions: `src/tools/tools.types.ts`
- Unit tests: Vitest with jsdom
- E2E tests: Playwright

## Tool Count And Categories

The source registry defines 86 tools in 10 categories:

| Category          | Tool count |
| ----------------- | ---------: |
| Crypto            |         11 |
| Converter         |         19 |
| Web               |         15 |
| Images and videos |          4 |
| Development       |         13 |
| Network           |          6 |
| Math              |          3 |
| Measurement       |          3 |
| Text              |          7 |
| Data              |          2 |

## Important Source Dependencies

Notable dependencies found in the IT Tools source include:

- Crypto and encoding: `crypto-js`, `bcryptjs`, `node-forge`, `@it-tools/bip39`, `uuid`, `ulid`, `jwt-decode`
- Data formats: `yaml`, `iarna-toml-esm`, `xml-js`, `xml-formatter`, `json5`, `sql-formatter`
- Browser and parsing utilities: `ua-parser-js`, `mime-types`, `libphonenumber-js`, `ibantools`, `netmask`, `qrcode`
- UI/editor dependencies: `vue`, `naive-ui`, `monaco-editor`, `@tiptap/*`, `dompurify`, `marked`, `markdown-it`

## Security And Browser Concerns

Tools requiring extra review during migration include:

- Cryptographic and password-related tools: hashing, HMAC, bcrypt, encryption, BIP39, RSA, password strength, OTP.
- File-processing tools: Base64 file conversion, PDF signature checker, QR/SVG output, camera recorder, Markdown-to-HTML print/export.
- Browser API tools: device information, keycode info, camera recorder, clipboard-focused tools.
- HTML or markup rendering tools: Markdown to HTML, HTML WYSIWYG editor, XML/JSON/YAML viewers.
- Potentially sensitive input tools: JWT parser, URL parser, Basic Auth generator, phone parser, IBAN parser.
- Regex tester requires protection against expensive expressions and browser lockups.

## Reference UI Repositories

`animate-ui-main` is suitable only for selective React-compatible interaction reference. Its license includes Commons Clause restrictions, so direct component copying must be minimized and documented.

`inspira-ui-main` is suitable only for visual inspiration such as gradients, grids, borders, and bento layouts. It must not be blindly copied.

`lenis-main` provides the smooth-scrolling library reference. The production app should depend on the published package and integrate it in a small client provider with reduced-motion safeguards.
