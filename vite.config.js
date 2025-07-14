import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          seo: ['@unhead/vue', '@vueuse/head']
        }
      }
    },
    // Optimizaciones para SEO
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generar sourcemaps para debugging
    sourcemap: false,
    // Optimizar para producción
    target: 'es2015',
    chunkSizeWarningLimit: 1000,
  },
  // Configuración del servidor de desarrollo
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  // Optimización de assets
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  // Configuración para PWA
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
