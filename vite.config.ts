
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // WAJIB: Sesuai dengan nama repo di URL (case sensitive)
  base: '/FormulirMR/', 
  plugins: [
    react(),
    EnvironmentPlugin({
      API_KEY: process.env.API_KEY || ''
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
