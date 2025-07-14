<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'
import HeroSection from '../sections/HeroSection.vue'
import ServicesSection from '../sections/ServicesSection.vue'
import PricingSection from '../sections/PricingSection.vue'
import WhyMeSection from '../sections/WhyMeSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import FaqSection from '../sections/FaqSection.vue'
import ContactSection from '../sections/ContactSection.vue'

// Configurar SEO para la página principal
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.home)
</script>

<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <PricingSection />
    <WhyMeSection />
    <ProjectsSection />
    <FaqSection />
    <ContactSection />
  </main>
</template> 