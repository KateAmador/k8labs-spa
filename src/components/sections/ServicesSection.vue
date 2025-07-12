<template>
  <section id="servicios" class="relative py-20 bg-white overflow-hidden">
    <BackgroundPattern pattern="grid" opacity="text-primario/[0.02]" />
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-2">Servicios</h2>
      <p class="text-texto-secundario text-center mb-12">Soluciones digitales para potenciar tu presencia online.</p>
      <div class="grid md:grid-cols-3 gap-8">
        <BaseCard
          v-for="(service, index) in services"
          :key="service.title"
          :delay="index * 100"
          class="p-8 text-center"
        >
          <template #icon>
            <component :is="service.icon" class="h-12 w-12 text-primario mx-auto" />
          </template>
          
          <template #header>
            <h3 class="text-2xl font-bold">{{ service.title }}</h3>
          </template>

          <p class="text-texto-secundario">{{ service.description }}</p>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CircleStackIcon, CommandLineIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'
import BaseCard from '../ui/BaseCard.vue'

const services = [
  {
    icon: CircleStackIcon,
    title: 'Sitios Web con WordPress',
    description: 'Landing pages, páginas informativas y tiendas online que reflejan lo mejor de tu negocio. Planes escalables: desde una página única hasta una tienda con pasarela de pagos y SEO optimizado.',
  },
  {
    icon: CommandLineIcon,
    title: 'Automatizaciones',
    description: 'Scripts personalizados que se encargan del trabajo repetitivo por ti: más eficiencia, menos desgaste diario.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Desarrollo Personalizado',
    description: 'Cada negocio es diferente, por eso creo sistemas únicos que resuelven exactamente lo que necesitas: desde automatizar un flujo hasta construir una app completa con funcionalidades específicas.',
  },
]
</script>

<style scoped>
/* Scoped styles for ServicesSection */
</style> 