# Design System

## Brand

- Display name: Developer Tool Box
- Domain: `https://developertoolbox.tech`
- Theme: dark mode only
- Visual direction: premium developer utility suite with precise spacing, layered charcoal surfaces, restrained green accents, and accessible controls.

## Colors

```css
:root {
  color-scheme: dark;
  --background: #070b0a;
  --background-soft: #0a100e;
  --surface: #0d1512;
  --surface-elevated: #111b18;
  --surface-hover: #15231e;
  --primary: #3ecf8e;
  --primary-hover: #2eb879;
  --primary-active: #25a96d;
  --primary-soft: rgba(62, 207, 142, 0.12);
  --text-primary: #f4faf7;
  --text-secondary: #b5c1bc;
  --text-muted: #82918b;
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(62, 207, 142, 0.28);
  --success: #3ecf8e;
  --warning: #f4c95d;
  --error: #ff7070;
}
```

## Typography

- Headings: Unbounded via `next/font`, weights 500, 600, 700.
- Body and UI: Outfit via `next/font`, weights 400, 500, 600.
- Tool interfaces should prioritize readability and avoid oversized display typography.

## Motion

- Use Motion for purposeful microinteractions only.
- Support `prefers-reduced-motion`.
- Avoid continuous decorative animations on tool pages.
- Keep most UI transitions between 150ms and 250ms.

## Accessibility

- Dark controls must retain strong contrast.
- Focus rings use the primary green token with adequate outline offset.
- Dialogs, command palette, and mobile navigation require focus management and keyboard support.
