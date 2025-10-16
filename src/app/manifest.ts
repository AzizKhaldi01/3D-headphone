import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Comra AI - Virtual Room Creator',
    short_name: 'Comra AI',
    description: 'Create and share virtual rooms with AI technology',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 