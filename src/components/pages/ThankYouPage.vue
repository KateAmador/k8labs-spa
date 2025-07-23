<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'
import BackgroundGrid from '../ui/BackgroundGrid.vue'

// Configurar SEO para la página de gracias
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.thanks)
</script>

<template>
  <div class="min-h-screen bg-k-dark-blue text-k-text-light flex flex-col items-center justify-center text-center p-4">
    <div class="relative max-w-2xl mx-auto">
      <BackgroundGrid />
      <div 
        class="relative z-10 bg-k-light-blue/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl shadow-k-cyan/10 border border-k-border"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <h1 class="text-4xl md:text-5xl font-bold text-k-cyan mb-4">¡Mensaje Enviado!</h1>
        <p class="text-lg md:text-xl text-k-text-dark mb-8">
          Gracias por ponerte en contacto. He recibido tu mensaje y te responderé en menos de 24 horas hábiles.
        </p>
        <router-link 
          to="/"
          class="bg-gradient-to-r from-k-cyan to-k-magenta text-k-dark-blue font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-k-cyan/50"
        >
          Volver al Inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for ThankYouPage */
</style> 