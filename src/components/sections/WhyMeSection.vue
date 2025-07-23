<template>
  <section id="porque-elegirme" class="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
    <!-- Ondas decorativas -->
    <div class="absolute inset-0">
      <svg class="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"></path>
      </svg>
      <svg class="absolute top-0 w-full h-32 transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.05)"></path>
      </svg>
    </div>
    
    <!-- Elementos flotantes -->
    <div class="absolute top-20 left-20 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
    <div class="absolute top-40 right-32 w-6 h-6 bg-green-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
    <div class="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-bounce delay-2000"></div>
    <div class="absolute bottom-20 right-20 w-5 h-5 bg-pink-300 rounded-full opacity-45 animate-bounce delay-500"></div>
    
    <!-- Formas geométricas -->
    <div class="absolute top-1/3 left-10 w-12 h-12 border-2 border-white/20 transform rotate-45"></div>
    <div class="absolute bottom-1/3 right-16 w-16 h-16 border-2 border-yellow-300/30 rounded-full"></div>
    <div class="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-cyan-300 to-blue-400 transform rotate-12 opacity-30"></div>
    
    <AnimatedGridBackground />
    <div class="absolute inset-0 bg-gradient-to-br from-k-cyan/5 via-transparent to-k-magenta/5"></div>

    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12 drop-shadow-lg">¿Por Qué Elegirme?</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-8">
        <div 
          v-for="(benefit, index) in benefits.slice(0, 4)" 
          :key="benefit.title" 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 group transition-all duration-300 hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
        >
          <div class="bg-white/20 p-4 rounded-full shadow-lg mb-4 group-hover:bg-white/30 transition-all duration-300 relative mx-auto w-fit">
            <component :is="benefit.icon" class="h-10 w-10 text-white relative z-10" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">{{ benefit.title }}</h3>
          <p class="text-white/80 group-hover:text-white/90">{{ benefit.description }}</p>
        </div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
        <div
          v-for="(benefit, index) in benefits.slice(4)"
          :key="benefit.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: (index + 4) * 100, duration: 500 } }"
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 group transition-all duration-300 hover:bg-white/20 hover:border-white/40 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
        >
          <div class="bg-white/20 p-4 rounded-full shadow-lg mb-4 group-hover:bg-white/30 transition-all duration-300 relative mx-auto w-fit">
            <component :is="benefit.icon" class="h-10 w-10 text-white relative z-10" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">{{ benefit.title }}</h3>
          <p class="text-white/80 group-hover:text-white/90">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  UserGroupIcon, 
  BoltIcon, 
  BanknotesIcon, 
  WrenchScrewdriverIcon, 
  LifebuoyIcon, 
  AdjustmentsHorizontalIcon, 
  HeartIcon 
} from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

const benefits = [
  {
    icon: UserGroupIcon,
    title: 'Trato Directo',
    description: 'Comunicación clara y sin intermediarios.',
  },
  {
    icon: BoltIcon,
    title: 'Diseños Modernos',
    description: 'Interfaces rápidas, intuitivas y atractivas.',
  },
  {
    icon: BanknotesIcon,
    title: 'Precios Justos',
    description: 'Inversión transparente y sin sorpresas.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Todo Incluido',
    description: 'Dominio, hosting y correos corporativos gestionados por mí.',
  },
  {
    icon: LifebuoyIcon,
    title: 'Soporte Real',
    description: 'Ayuda técnica cuando la necesites.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Hecho a tu medida',
    description: 'Cada sitio está pensado para lo que tú necesitas.',
  },
  {
    icon: HeartIcon,
    title: 'Compromiso total',
    description: 'Dedicación real, sin atajos.',
  },
]
</script>

<style scoped>
/* Scoped styles for WhyMeSection */
</style> 