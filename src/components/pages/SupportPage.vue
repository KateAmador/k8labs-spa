<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-fondo-oscuro text-texto-claro overflow-hidden">
      <BackgroundGrid />
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Soporte y Mantenimiento</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantén tu sitio web actualizado, seguro y funcionando perfectamente con nuestros planes de soporte técnico personalizado.
          </p>
        </div>
      </div>
    </section>

    <!-- Planes Section con fondo y patrones -->
    <section class="relative bg-gradient-to-b from-fondo-oscuro to-gris-suave">
      <div class="absolute inset-0 bg-gradient-to-b from-fondo-oscuro via-transparent to-transparent opacity-50"></div>
      <div class="absolute inset-0">
        <BackgroundPattern pattern="dots" opacity="text-primario/[0.03]" />
      </div>
      <SupportSection />
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gris-suave relative overflow-hidden">
      <BackgroundPattern pattern="waves" opacity="text-primario/[0.02]" />
      <div class="container mx-auto px-4 max-w-4xl text-center"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
        <h2 class="text-3xl font-bold mb-6">¿Necesitas un plan personalizado?</h2>
        <p class="text-texto-secundario mb-8">
          Si tienes necesidades específicas o quieres discutir opciones personalizadas, estoy aquí para ayudarte.
        </p>
        <router-link 
          to="/#contacto"
          class="inline-block px-8 py-4 bg-gradient-to-r from-secundario to-primario text-white font-bold rounded-full hover:shadow-lg hover:shadow-primario/20 transform hover:scale-105 transition-all duration-300"
        >
          Contactar ahora
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import SupportSection from '../sections/SupportSection.vue'
import BackgroundGrid from '../ui/BackgroundGrid.vue'
import BackgroundPattern from '../ui/BackgroundPattern.vue'
</script> 