import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({ 
      registerType: 'prompt', 
      includeAssets: ['icons.svg', 'favicon.svg'], 
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,json}'
        ],
      },
      manifest: {
        name: 'React Full',
        short_name: 'ReactFull',
        description: 'Aplicativo para testar testes com testing library',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.svg', 
            sizes: '192x192',
            type: 'image/svg'
          },
           {
            src: 'icons.svg', 
            sizes: '152x152',
            type: 'image/svg',
            purpose: 'maskable'
          },
        ]
      }
    })
  ],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      exclude: ["**/*.{js,ts,tsx}"],
    },
    setupFiles: ["./src/__tests__/setupTests.ts"],
    environment: "happy-dom",
  },
});
