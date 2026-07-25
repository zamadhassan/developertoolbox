import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Developer Tool Box',
    short_name: 'DevToolBox',
    start_url: '/',
    display: 'standalone',
    background_color: '#070b0a',
    theme_color: '#3ecf8e',
    icons: [{ src: '/brand/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
