<script setup>
import { useSEO, seoConfigs } from '../../composables/useSEO.js'
import HeroSection from '../sections/HeroSection.vue'
import ServicesSection from '../sections/ServicesSection.vue'
import PricingSection from '../sections/PricingSection.vue'
import WhyMeSection from '../sections/WhyMeSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import FaqSection from '../sections/FaqSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import SectionDivider from '../ui/SectionDivider.vue'

// Configurar SEO para la página principal
const { useSEOConfig } = useSEO()
useSEOConfig(seoConfigs.home)
</script>

<template>
  <main>
    <HeroSection />
    <div class="relative">
      <SectionDivider color="#1a2a47" class="h-24 md:h-48" />
    </div>
    <ServicesSection />
    <div class="relative">
      <SectionDivider color="#0a192f" inverted="true" class="h-24 md:h-48" />
    </div>
    <PricingSection />
    <WhyMeSection />
    <div class="relative">
      <SectionDivider color="#0a192f" inverted="true" class="h-24 md:h-48" />
    </div>
    <ProjectsSection />
    <FaqSection />
    <ContactSection />
  </main>
</template> 