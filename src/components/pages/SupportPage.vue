<template>
  <main>
    <SupportSection />
  </main>
</template>

<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'
import SupportSection from '../sections/SupportSection.vue'

// Configurar SEO para la página de soporte
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.support)
</script> 