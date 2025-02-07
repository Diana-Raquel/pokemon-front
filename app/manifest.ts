import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pokedex',
    short_name: 'Next.js',
    description: 'A Pokedex built with Next.js',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon/icon-400x400.jpg',
        sizes: '400x400',
        type: 'image/jpg',
      },
    ],
  };
}
