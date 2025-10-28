import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    fs: {
      allow: ['..'],
    },
    proxy: {
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  publicDir: 'public',
  base: '/',
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.fbx', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.mp4', '**/*.webm'],
});
