
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // SESUAI SCREENSHOT: nama repo Anda adalah 'formrisiko'
  base: '/formrisiko/', 
  plugins: [
    react(),
    EnvironmentPlugin({
      API_KEY: process.env.API_KEY || ''
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
});
