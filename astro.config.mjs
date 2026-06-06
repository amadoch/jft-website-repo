// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({    
    imageService: 'compile',
  }),

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro'
      })
    ],
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
              './src/assets/fonts/kumbh-sans.woff',
              './src/assets/fonts/kumbh-sans.ttf'
            ],
            weight: '100 900',
            style: 'normal'
          }
        ]
      }
    }
  ],
});