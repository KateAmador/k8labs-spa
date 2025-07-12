<template>
  <section id="porque-elegirme" class="relative py-20 bg-fondo-oscuro text-texto-claro overflow-hidden">
    <!-- Patrones de fondo -->
    <AnimatedGridBackground />
    <div class="absolute inset-0 bg-gradient-to-br from-primario/5 via-transparent to-secundario/5"></div>
    
    <!-- Círculos decorativos -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primario/10 to-transparent rounded-full blur-3xl -mr-48 -mt-48 opacity-20"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secundario/10 to-transparent rounded-full blur-3xl -ml-48 -mb-48 opacity-20"></div>

    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12">¿Por Qué Elegirme?</h2>
      <div class="flex flex-col gap-12">
        <!-- Beneficios -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <BaseCard 
            v-for="(benefit, index) in benefits.slice(0, 4)" 
            :key="benefit.title" 
            :delay="index * 100"
            class="bg-white/5 backdrop-blur-sm !shadow-lg group"
          >
            <template #icon>
              <div class="bg-white/5 backdrop-blur-sm p-4 rounded-full shadow-lg mb-4 group-hover:bg-white/10 transition-all duration-300 relative mx-auto w-fit">
                <div class="absolute inset-0 bg-gradient-to-br from-primario/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <component :is="benefit.icon" class="h-10 w-10 text-primario relative z-10" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-texto-claro mb-2">{{ benefit.title }}</h3>
            <p class="text-texto-secundario">{{ benefit.description }}</p>
          </BaseCard>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto w-full">
          <BaseCard
            v-for="(benefit, index) in benefits.slice(4)"
            :key="benefit.title"
            :delay="(index + 4) * 100"
            class="bg-white/5 backdrop-blur-sm !shadow-lg group"
          >
            <template #icon>
               <div class="bg-white/5 backdrop-blur-sm p-4 rounded-full shadow-lg mb-4 group-hover:bg-white/10 transition-all duration-300 relative mx-auto w-fit">
                <div class="absolute inset-0 bg-gradient-to-br from-primario/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <component :is="benefit.icon" class="h-10 w-10 text-primario relative z-10" />
              </div>
            </template>
            <h3 class="text-xl font-bold text-texto-claro mb-2">{{ benefit.title }}</h3>
            <p class="text-texto-secundario">{{ benefit.description }}</p>
          </BaseCard>
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
import AnimatedGridBackground from '../ui/AnimatedGridBackground.vue'
import BaseCard from '../ui/BaseCard.vue'

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