// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({    
    imageService: 'cloudflare',
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      name: 'Kumbh Sans',
      provider: fontProviders.local(),
      cssVariable: '--font-kumbh-sans',
      fallbacks: [
        'ui-sans-serif', 
        'system-ui',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/kumbh_sans.woff',
              './src/assets/fonts/kumbh_sans.ttf'
            ],
            weight: '100 900',
            style: 'normal'
          }
        ]
      }
    }
  ]
});