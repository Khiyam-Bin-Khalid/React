import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['lightningcss'],
    include: ['react', 'react-dom', 'react-router-dom']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  build: {
    rollupOptions: {
      output: {
        // Prevent duplicate chunk names that can cause module evaluation issues
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react'
            }
            if (id.includes('@reduxjs') || id.includes('redux')) {
              return 'vendor-redux'
            }
            if (id.includes('appwrite')) {
              return 'vendor-appwrite'
            }
          }
        }
      }
    }
  },
  plugins: [
    react(), 
    tailwindcss()
    // Note: If adding @vitejs/plugin-legacy in the future, place it LAST in the plugins array:
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
  ],
})

