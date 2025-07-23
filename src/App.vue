<script setup>
import AppFooter from './components/layout/AppFooter.vue'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton.vue'
import CookieConsent from './components/ui/CookieConsent.vue'
</script>

<template>
  <div id="app" class="bg-fondo-oscuro text-texto-claro">
    <router-view />
    <AppFooter />
    <FloatingWhatsAppButton 
      v-motion
      :initial="{ opacity: 0, scale: 0.5 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 1000, duration: 500 } }"
    />
    <CookieConsent />
  </div>
</template>

<style>
/* Estilos globales si son necesarios */
</style>
