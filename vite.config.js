import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],

    // Use relative paths for production so Tomcat can load JS/CSS correctly
    base: mode === 'production' ? './' : '/',

    server: {
      port: 5173, // Vite dev server port
      proxy: {
        '/api': {
          target: 'http://localhost:8085', // your backend dev server
          changeOrigin: true,
          secure: false,
        },
      },
    },

    build: {
      outDir: 'dist', // output folder for production build
      sourcemap: false, // optional, remove if not needed
      rollupOptions: {
        output: {
          // Ensures JS/CSS files use relative paths
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  }
})
