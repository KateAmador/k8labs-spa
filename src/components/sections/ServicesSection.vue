<template>
  <section id="servicios" class="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 overflow-hidden">
    <!-- Formas geométricas decorativas -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-k-cyan to-blue-400 rounded-full opacity-20"></div>
    <div class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-k-magenta to-pink-400 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15"></div>
    <div class="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-40 right-1/3 w-18 h-18 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-15"></div>
    
    <!-- Patrones de líneas -->
    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-cyan/10 to-transparent"></div>
    <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-magenta/10 to-transparent"></div>
    
    <!-- Iconos tech flotantes -->
    <div class="absolute top-32 left-1/3 text-2xl text-k-cyan/20 font-mono">&lt;div&gt;</div>
    <div class="absolute bottom-32 right-1/3 text-xl text-k-magenta/20 font-mono">function()</div>
    <div class="absolute top-64 right-1/4 text-lg text-green-400/20 font-mono">npm install</div>
    
    <BackgroundPattern pattern="grid" opacity="text-k-cyan/[0.02]" />
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-k-dark-blue to-purple-600">Servicios</h2>
      <p class="text-gray-600 text-center mb-12">Soluciones digitales para potenciar tu presencia online.</p>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
          :class="{
            'hover:border-k-cyan hover:shadow-k-cyan/20': index === 0,
            'hover:border-k-magenta hover:shadow-k-magenta/20': index === 1,
            'hover:border-green-400 hover:shadow-green-400/20': index === 2
          }"
        >
          <div class="relative mb-6">
            <div 
              class="w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              :class="{
                'bg-gradient-to-br from-k-cyan/10 to-blue-100 group-hover:from-k-cyan/20 group-hover:to-blue-200': index === 0,
                'bg-gradient-to-br from-k-magenta/10 to-pink-100 group-hover:from-k-magenta/20 group-hover:to-pink-200': index === 1,
                'bg-gradient-to-br from-green-400/10 to-emerald-100 group-hover:from-green-400/20 group-hover:to-emerald-200': index === 2
              }"
            >
              <component 
                :is="service.icon" 
                class="h-8 w-8 transition-colors duration-300"
                :class="{
                  'text-k-cyan group-hover:text-blue-600': index === 0,
                  'text-k-magenta group-hover:text-pink-600': index === 1,
                  'text-green-500 group-hover:text-emerald-600': index === 2
                }"
              />
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 group-hover:text-gray-700">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CircleStackIcon, CommandLineIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

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