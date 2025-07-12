<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-fondo-oscuro text-texto-claro overflow-hidden">
    <BackgroundGrid />
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center px-4 relative z-10"
    >
      <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Transforma tu presencia digital. <br />
      </h1>
      <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-4">
        Diseño sitios web modernos y automatizaciones que hacen crecer tu negocio.
      </h3>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <a href="#servicios" class="bg-primario hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
          Ver servicios
        </a>
        <a href="#contacto" class="bg-secundario hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundGrid from '../ui/BackgroundGrid.vue'
// @vueuse/motion is used in the template via the v-motion directive
</script>

<style scoped>
/* Scoped styles for HeroSection */
</style> 