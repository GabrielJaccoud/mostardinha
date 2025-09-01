import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mostardinha - Livro Infantil',
        short_name: 'Mostardinha',
        description: 'Site de venda do livro infantil Mostardinha',
        theme_color: '#fbbf24',
        icons: [
          {
            src: 'assets/images/Mostardinha(2).png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/images/Mostardinha(2).png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/mostardinha-site/' // Ajuste se necessário
});
