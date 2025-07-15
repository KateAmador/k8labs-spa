<script setup>
import AppFooter from './components/layout/AppFooter.vue'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton.vue'
import CookieConsent from './components/ui/CookieConsent.vue'
</script>

<template>
  <div id="app" class="bg-white">
    <router-view />
    <AppFooter />
    <FloatingWhatsAppButton />
    <CookieConsent />
  </div>
</template>

<style>
/* Estilos globales si son necesarios */
</style>
