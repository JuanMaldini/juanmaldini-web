import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// [MIGRATION COMPLETE] The copyAssets function is now commented out as all assets are served from public/assets.
/*
// Copiar archivos estáticos de src/assets a public/assets
function copyAssets() {
  const srcAssets = path.resolve(__dirname, 'src/assets');
  const destAssets = path.resolve(__dirname, 'public/assets');
  
  // Crear directorio de destino si no existe
  if (!fs.existsSync(destAssets)) {
    fs.mkdirSync(destAssets, { recursive: true });
  }
  
  // Copiar directorios
  const copyRecursiveSync = (src: string, dest: string) => {
    const exists = fs.existsSync(src);
    if (!exists) return;
    
    const stats = fs.statSync(src, { throwIfNoEntry: false });
    const isDirectory = stats?.isDirectory() ?? false;
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  if (fs.existsSync(srcAssets)) {
    copyRecursiveSync(srcAssets, destAssets);
  }
}
*/

// Ejecutar la copia al iniciar
// copyAssets();

// https://vite.dev/config/
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
    // Configuración para servir archivos estáticos
    fs: {
      // Permitir servir archivos desde el directorio raíz del proyecto
      allow: ['..'],
    },
    // Configuración de proxy si es necesario
    proxy: {
      // Ejemplo de configuración de proxy si es necesario
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    assetsInlineLimit: 0, // Desactivar la inclusión de assets en línea
  },
  publicDir: 'public',
  base: '/',
  // Configuración para manejar archivos estáticos
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.fbx', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.mp4', '**/*.webm'],
});
