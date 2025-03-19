import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/modern_art_gallery/', 
    build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
            second: resolve(__dirname, 'location.html')
          }
        }
      }
});


