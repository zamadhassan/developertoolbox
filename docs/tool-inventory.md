# Tool Inventory

Derived from `it-tools-main/it-tools-main/src/tools/index.ts`. Total tools found: 86. Total categories found: 10.

| ID | Original tool | Original location | Category | Proposed slug | Main dependency | Client-only | Security concerns | Migration status |
|---|---|---|---|---|---|---|---|
| 1 | Token generator | `src/tools/token-generator` | Crypto | `token-generator` | Browser crypto/random logic | Yes | Randomness and generated secret handling | Inventoried |
| 2 | Hash text | `src/tools/hash-text` | Crypto | `hash-text` | `crypto-js` / Web Crypto candidate | Yes | Encoding vs encryption clarity | Inventoried |
| 3 | Bcrypt | `src/tools/bcrypt` | Crypto | `bcrypt` | `bcryptjs` | Yes | Password input sensitivity | Inventoried |
| 4 | UUID generator | `src/tools/uuid-generator` | Crypto | `uuid-generator` | `uuid` | Yes | Randomness quality disclosure | Inventoried |
| 5 | ULID generator | `src/tools/ulid-generator` | Crypto | `ulid-generator` | `ulid` | Yes | Randomness quality disclosure | Inventoried |
| 6 | Encryption | `src/tools/encryption` | Crypto | `encryption` | `crypto-js` | Yes | Must avoid misleading security claims | Inventoried |
| 7 | BIP39 generator | `src/tools/bip39-generator` | Crypto | `bip39-generator` | `@it-tools/bip39` | Yes | Mnemonic and entropy sensitivity | Inventoried |
| 8 | HMAC generator | `src/tools/hmac-generator` | Crypto | `hmac-generator` | `crypto-js` / Web Crypto candidate | Yes | Secret key input sensitivity | Inventoried |
| 9 | RSA key pair generator | `src/tools/rsa-key-pair-generator` | Crypto | `rsa-key-pair-generator` | `node-forge` / Web Crypto candidate | Yes | Private key handling | Inventoried |
| 10 | Password strength analyser | `src/tools/password-strength-analyser` | Crypto | `password-strength-analyser` | Source service | Yes | Password input sensitivity | Inventoried |
| 11 | PDF signature checker | `src/tools/pdf-signature-checker` | Crypto | `pdf-signature-checker` | `pdf-signature-reader` | Yes | File handling and security claims | Inventoried |
| 12 | Date time converter | `src/tools/date-time-converter` | Converter | `date-converter` | `date-fns` | No | Timezone accuracy | Inventoried |
| 13 | Integer base converter | `src/tools/integer-base-converter` | Converter | `base-converter` | Source model | No | Large number handling | Inventoried |
| 14 | Roman numeral converter | `src/tools/roman-numeral-converter` | Converter | `roman-numeral-converter` | Source service | No | Validation limits | Inventoried |
| 15 | Base64 string converter | `src/tools/base64-string-converter` | Converter | `base64-string-converter` | Browser `atob`/`btoa` | Yes | Binary/unicode edge cases | Inventoried |
| 16 | Base64 file converter | `src/tools/base64-file-converter` | Converter | `base64-file-converter` | FileReader | Yes | File size and MIME validation | Inventoried |
| 17 | Color converter | `src/tools/color-converter` | Converter | `color-converter` | `colord` | No | Input validation | Inventoried |
| 18 | Case converter | `src/tools/case-converter` | Converter | `case-converter` | `change-case` | No | Unicode and separator handling | Inventoried |
| 19 | Text to NATO alphabet | `src/tools/text-to-nato-alphabet` | Converter | `text-to-nato-alphabet` | Source mapping | No | None identified | Inventoried |
| 20 | Text to binary | `src/tools/text-to-binary` | Converter | `text-to-binary` | Source model | Yes | Unicode edge cases | Inventoried |
| 21 | Text to Unicode | `src/tools/text-to-unicode` | Converter | `text-to-unicode` | Source service | Yes | Unicode edge cases | Inventoried |
| 22 | YAML to JSON | `src/tools/yaml-to-json-converter` | Converter | `yaml-to-json-converter` | `yaml` | No | Parser errors, large input | Inventoried |
| 23 | YAML to TOML | `src/tools/yaml-to-toml` | Converter | `yaml-to-toml` | `yaml`, `iarna-toml-esm` | No | Parser errors, large input | Inventoried |
| 24 | JSON to YAML | `src/tools/json-to-yaml-converter` | Converter | `json-to-yaml-converter` | `yaml` | No | Parser errors, large input | Inventoried |
| 25 | JSON to TOML | `src/tools/json-to-toml` | Converter | `json-to-toml` | `iarna-toml-esm` | No | Parser errors, large input | Inventoried |
| 26 | List converter | `src/tools/list-converter` | Converter | `list-converter` | Source model | No | Large input | Inventoried |
| 27 | TOML to JSON | `src/tools/toml-to-json` | Converter | `toml-to-json` | `iarna-toml-esm` | No | Parser errors | Inventoried |
| 28 | TOML to YAML | `src/tools/toml-to-yaml` | Converter | `toml-to-yaml` | `iarna-toml-esm`, `yaml` | No | Parser errors | Inventoried |
| 29 | XML to JSON | `src/tools/xml-to-json` | Converter | `xml-to-json` | `xml-js` | No | XML parser limits | Inventoried |
| 30 | JSON to XML | `src/tools/json-to-xml` | Converter | `json-to-xml` | `xml-js` | No | Parser errors | Inventoried |
| 31 | Markdown to HTML | `src/tools/markdown-to-html` | Converter | `markdown-to-html` | `markdown-it` / sanitizer required | Yes | HTML sanitization and preview sandbox | Inventoried |
| 32 | URL encoder | `src/tools/url-encoder` | Web | `url-encoder` | Browser URL encoding | Yes | Sensitive URL content | Inventoried |
| 33 | HTML entities | `src/tools/html-entities` | Web | `html-entities` | Source logic | No | Escaping correctness | Inventoried |
| 34 | URL parser | `src/tools/url-parser` | Web | `url-parser` | URL API | Yes | Password/token leakage in URLs | Inventoried |
| 35 | Device information | `src/tools/device-information` | Web | `device-information` | Browser APIs | Yes | Fingerprinting disclosure | Inventoried |
| 36 | Basic Auth generator | `src/tools/basic-auth-generator` | Web | `basic-auth-generator` | Base64 | Yes | Credential sensitivity | Inventoried |
| 37 | Meta tag generator | `src/tools/meta-tag-generator` | Web | `og-meta-generator` | `@it-tools/oggen` | Yes | File/image handling | Inventoried |
| 38 | OTP generator | `src/tools/otp-code-generator-and-validator` | Web | `otp-generator` | Source OTP service | Yes | Secret handling | Inventoried |
| 39 | MIME types | `src/tools/mime-types` | Web | `mime-types` | `mime-types` | No | File extension ambiguity | Inventoried |
| 40 | JWT parser | `src/tools/jwt-parser` | Web | `jwt-parser` | `jwt-decode` | Yes | Token sensitivity, no verification claims | Inventoried |
| 41 | Keycode info | `src/tools/keycode-info` | Web | `keycode-info` | Browser keyboard events | Yes | None identified | Inventoried |
| 42 | Slugify string | `src/tools/slugify-string` | Web | `slugify-string` | `@sindresorhus/slugify` | Yes | Unicode handling | Inventoried |
| 43 | HTML WYSIWYG editor | `src/tools/html-wysiwyg-editor` | Web | `html-wysiwyg-editor` | Tiptap | Yes | HTML sanitization | Inventoried |
| 44 | User agent parser | `src/tools/user-agent-parser` | Web | `user-agent-parser` | `ua-parser-js` | Yes | User agent privacy | Inventoried |
| 45 | HTTP status codes | `src/tools/http-status-codes` | Web | `http-status-codes` | Static data | No | None identified | Inventoried |
| 46 | JSON diff | `src/tools/json-diff` | Web | `json-diff` | Source model | No | Large input performance | Inventoried |
| 47 | Outlook Safelink decoder | `src/tools/safelink-decoder` | Web | `safelink-decoder` | Source service | No | Untrusted redirect URLs | Inventoried |
| 48 | QR code generator | `src/tools/qr-code-generator` | Images and videos | `qrcode-generator` | `qrcode` | Yes | Download/object URL handling | Inventoried |
| 49 | WiFi QR code generator | `src/tools/wifi-qr-code-generator` | Images and videos | `wifi-qrcode-generator` | `qrcode` | Yes | WiFi credential sensitivity | Inventoried |
| 50 | SVG placeholder generator | `src/tools/svg-placeholder-generator` | Images and videos | `svg-placeholder-generator` | Source logic | Yes | SVG output safety | Inventoried |
| 51 | Camera recorder | `src/tools/camera-recorder` | Images and videos | `camera-recorder` | MediaRecorder API | Yes | Camera permission and local blob handling | Inventoried |
| 52 | Git memo | `src/tools/git-memo` | Development | `git-memo` | Markdown/static content | No | None identified | Inventoried |
| 53 | Random port generator | `src/tools/random-port-generator` | Development | `random-port-generator` | Browser random | Yes | Randomness disclosure | Inventoried |
| 54 | Crontab generator | `src/tools/crontab-generator` | Development | `crontab-generator` | `cron-validator`, `cronstrue` | No | Schedule interpretation | Inventoried |
| 55 | JSON viewer | `src/tools/json-viewer` | Development | `json-prettify` | JSON parser | No | Parser errors, large input | Inventoried |
| 56 | JSON minify | `src/tools/json-minify` | Development | `json-minify` | JSON parser | No | Parser errors, large input | Inventoried |
| 57 | JSON to CSV | `src/tools/json-to-csv` | Development | `json-to-csv` | Source service | No | CSV injection disclosure | Inventoried |
| 58 | SQL prettify | `src/tools/sql-prettify` | Development | `sql-prettify` | `sql-formatter` | No | Parser errors | Inventoried |
| 59 | Chmod calculator | `src/tools/chmod-calculator` | Development | `chmod-calculator` | Source service | No | Permission accuracy | Inventoried |
| 60 | Docker run to Docker Compose | `src/tools/docker-run-to-docker-compose-converter` | Development | `docker-run-to-docker-compose-converter` | `composerize-ts`, YAML | No | Command parsing limits | Inventoried |
| 61 | XML formatter | `src/tools/xml-formatter` | Development | `xml-formatter` | `xml-formatter` | No | XML parser limits | Inventoried |
| 62 | YAML viewer | `src/tools/yaml-viewer` | Development | `yaml-prettify` | `yaml` | No | Parser errors | Inventoried |
| 63 | Email normalizer | `src/tools/email-normalizer` | Development | `email-normalizer` | `email-normalizer` | Yes | PII input | Inventoried |
| 64 | Regex tester | `src/tools/regex-tester` | Development | `regex-tester` | RegExp | Yes | ReDoS/browser freeze risk | Inventoried |
| 65 | Regex cheatsheet | `src/tools/regex-memo` | Development | `regex-memo` | Static content | No | None identified | Inventoried |
| 66 | IPv4 subnet calculator | `src/tools/ipv4-subnet-calculator` | Network | `ipv4-subnet-calculator` | `netmask` | No | Network math accuracy | Inventoried |
| 67 | IPv4 address converter | `src/tools/ipv4-address-converter` | Network | `ipv4-address-converter` | Source service | No | Validation | Inventoried |
| 68 | IPv4 range expander | `src/tools/ipv4-range-expander` | Network | `ipv4-range-expander` | Source service | No | Large output limits | Inventoried |
| 69 | MAC address lookup | `src/tools/mac-address-lookup` | Network | `mac-address-lookup` | OUI data | Yes | Data freshness | Inventoried |
| 70 | MAC address generator | `src/tools/mac-address-generator` | Network | `mac-address-generator` | Source model | Yes | Randomness disclosure | Inventoried |
| 71 | IPv6 ULA generator | `src/tools/ipv6-ula-generator` | Network | `ipv6-ula-generator` | Browser random | Yes | Randomness and prefix accuracy | Inventoried |
| 72 | Math evaluator | `src/tools/math-evaluator` | Math | `math-evaluator` | `mathjs` | No | Safe expression evaluation | Inventoried |
| 73 | ETA calculator | `src/tools/eta-calculator` | Math | `eta-calculator` | Source service | No | Numeric validation | Inventoried |
| 74 | Percentage calculator | `src/tools/percentage-calculator` | Math | `percentage-calculator` | Source logic | No | Numeric validation | Inventoried |
| 75 | Chronometer | `src/tools/chronometer` | Measurement | `chronometer` | Source service | Yes | Timer accuracy | Inventoried |
| 76 | Temperature converter | `src/tools/temperature-converter` | Measurement | `temperature-converter` | Source logic | No | Unit accuracy | Inventoried |
| 77 | Benchmark builder | `src/tools/benchmark-builder` | Measurement | `benchmark-builder` | Source logic | Yes | Timer accuracy | Inventoried |
| 78 | Lorem ipsum generator | `src/tools/lorem-ipsum-generator` | Text | `lorem-ipsum-generator` | Source/random text | Yes | None identified | Inventoried |
| 79 | Text statistics | `src/tools/text-statistics` | Text | `text-statistics` | Source service | No | Unicode counting | Inventoried |
| 80 | Emoji picker | `src/tools/emoji-picker` | Text | `emoji-picker` | `emojilib`, `unicode-emoji-json` | Yes | Clipboard behavior | Inventoried |
| 81 | String obfuscator | `src/tools/string-obfuscator` | Text | `string-obfuscator` | Source model | No | Must not imply encryption | Inventoried |
| 82 | Text diff | `src/tools/text-diff` | Text | `text-diff` | Source logic | No | Large input performance | Inventoried |
| 83 | Numeronym generator | `src/tools/numeronym-generator` | Text | `numeronym-generator` | Source service | No | Unicode handling | Inventoried |
| 84 | ASCII Art Text Generator | `src/tools/ascii-text-drawer` | Text | `ascii-text-drawer` | `figlet` | Yes | Large input rendering | Inventoried |
| 85 | Phone parser and formatter | `src/tools/phone-parser-and-formatter` | Data | `phone-parser-and-formatter` | `libphonenumber-js` | Yes | PII input | Inventoried |
| 86 | IBAN validator and parser | `src/tools/iban-validator-and-parser` | Data | `iban-validator-and-parser` | `ibantools` | Yes | Financial/PII input | Inventoried |
