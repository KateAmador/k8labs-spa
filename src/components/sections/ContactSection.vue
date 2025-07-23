<template>
  <section id="contacto" class="relative py-20 bg-gradient-to-br from-k-dark-blue via-slate-800 to-k-dark-blue text-white overflow-hidden">
    <!-- Ondas mejoradas y más dinámicas -->
    <div class="absolute inset-0">
      <svg class="absolute top-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,20 900,100 1200,60 L1200,0 L0,0 Z" fill="rgba(100, 255, 218, 0.1)"></path>
      </svg>
      <svg class="absolute bottom-0 w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="rgba(255, 100, 218, 0.1)"></path>
      </svg>
    </div>
    
    <!-- Elementos flotantes coloridos -->
    <div class="absolute top-32 left-16 w-6 h-6 bg-k-cyan rounded-full opacity-60 animate-bounce"></div>
    <div class="absolute top-20 right-20 w-4 h-4 bg-k-magenta rounded-full opacity-50 animate-bounce delay-1000"></div>
    <div class="absolute bottom-40 left-1/4 w-8 h-8 bg-k-cyan rounded-full opacity-40 animate-bounce delay-2000"></div>
    <div class="absolute bottom-20 right-1/3 w-5 h-5 bg-k-magenta rounded-full opacity-55 animate-bounce delay-500"></div>
    
    <!-- Formas geométricas -->
    <div class="absolute top-1/4 left-20 w-10 h-10 border-2 border-k-cyan/30 transform rotate-45"></div>
    <div class="absolute bottom-1/4 right-20 w-12 h-12 border-2 border-k-magenta/40 rounded-full"></div>
    <div class="absolute top-1/2 right-1/4 w-6 h-6 bg-gradient-to-br from-k-cyan to-k-magenta transform rotate-12 opacity-40"></div>
    
    <!-- Patrón de ondas de fondo -->
    <BackgroundPattern pattern="waves" opacity="text-white/[0.02]" />
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- Información de contacto -->
        <div class="space-y-8">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <h2 class="text-4xl font-bold mb-4 drop-shadow-lg">¿Hablamos?</h2>
            <p class="text-white/90 text-lg mb-8">
              Cuéntame sobre tu proyecto y juntos haremos que suceda. Estoy aquí para ayudarte a crear la presencia digital que tu negocio merece.
            </p>
          </div>

          <div class="space-y-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          >
            <div class="flex items-start space-x-4">
              <div class="bg-k-cyan/20 p-3 rounded-full backdrop-blur-sm">
                <ClockIcon class="h-6 w-6 text-k-cyan" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-white">Respuesta Rápida</h3>
                <p class="text-white/80">Respondo en menos de 24 horas hábiles</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-k-cyan/20 p-3 rounded-full backdrop-blur-sm">
                <ChatBubbleBottomCenterTextIcon class="h-6 w-6 text-k-cyan" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-white">Asesoría Gratuita</h3>
                <p class="text-white/80">Primera consulta sin compromiso</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-k-cyan/20 p-3 rounded-full backdrop-blur-sm">
                <CurrencyDollarIcon class="h-6 w-6 text-k-cyan" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-white">Presupuesto Claro</h3>
                <p class="text-white/80">Sin costos ocultos ni sorpresas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div 
          class="relative"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-k-cyan/10 to-k-magenta/10 rounded-2xl transform -rotate-1 scale-105"></div>
          <div class="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-2xl relative z-10">
            <form 
              action="https://formsubmit.co/k8labs.empresa@gmail.com" 
              method="POST" 
              class="space-y-6"
            >
              <div>
                <label for="name" class="block text-sm font-medium text-white">Nombre</label>
                <input type="text" name="name" id="name" required class="mt-1 block w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-k-cyan/50 focus:border-k-cyan/50 text-white placeholder-white/60 backdrop-blur-sm">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-white">Email</label>
                <input type="email" name="email" id="email" required class="mt-1 block w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-k-cyan/50 focus:border-k-cyan/50 text-white placeholder-white/60 backdrop-blur-sm">
              </div>
              <div>
                <label for="service" class="block text-sm font-medium text-white">Servicio de Interés</label>
                <select name="service" id="service" required class="mt-1 block w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-k-cyan/50 focus:border-k-cyan/50 text-white backdrop-blur-sm">
                  <option value="" disabled selected class="text-gray-600">Selecciona un servicio</option>
                  <option v-for="service in services" :key="service" :value="service" class="bg-gray-800 text-white">{{ service }}</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-white">Mensaje</label>
                <textarea name="message" id="message" rows="4" required class="mt-1 block w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-k-cyan/50 focus:border-k-cyan/50 text-white placeholder-white/60 backdrop-blur-sm"></textarea>
              </div>
              <div class="text-center pt-4">
                <button 
                  type="submit"
                  class="bg-gradient-to-r from-k-cyan to-k-magenta text-k-dark-blue font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-k-cyan/30"
                >
                  Enviar Mensaje
                </button>
              </div>
              <input type="hidden" name="_next" :value="nextUrl">
              <input type="hidden" name="_subject" value="Nuevo mensaje desde k8labs.dev">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ClockIcon, ChatBubbleBottomCenterTextIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

const services = [
  'Landing Personalizada Ultra Rápida',
  'Landing Autogestionable ',
  'Web Empresarial',
  'Ecommerce Profesional',
  'Desarrollo Personalizado',
  'Automatizaciones y Scripts',
  'Mantenimiento y Soporte',
  'Consultoría General',
  'Otro'
]

const nextUrl = ref('/gracias'); // Fallback

onMounted(() => {
  nextUrl.value = `${window.location.origin}/gracias`;
});
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

select:focus {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2364ffda' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
}
</style> 