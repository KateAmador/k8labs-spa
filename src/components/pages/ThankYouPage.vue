<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'

// Configurar SEO para la página de gracias
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.thanks)
</script>

<template>
  <main>
    <section class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md mx-auto text-center">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-4">¡Gracias por contactarnos!</h1>
        <p class="text-gray-600 mb-8">
          Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo pronto.
        </p>
        <a href="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Volver al inicio
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Scoped styles for ThankYouPage */
</style> 