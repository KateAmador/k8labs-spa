<template>
  <section id="contacto" class="relative py-20 bg-white overflow-hidden">
    <BackgroundPattern pattern="waves" opacity="text-primario/[0.02]" />
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- Información de contacto -->
        <div class="space-y-8">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <h2 class="text-4xl font-bold mb-4">¿Hablamos?</h2>
            <p class="text-texto-secundario text-lg mb-8">
              Cuéntame sobre tu proyecto y juntos haremos que suceda. Estoy aquí para ayudarte a crear la presencia digital que tu negocio merece.
            </p>
          </div>

          <div class="space-y-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 150, duration: 500 } }"
          >
            <div class="flex items-start space-x-4">
              <div class="bg-primario/10 p-3 rounded-full">
                <ClockIcon class="h-6 w-6 text-primario" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Respuesta Rápida</h3>
                <p class="text-texto-secundario">Respondo en menos de 24 horas hábiles</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-primario/10 p-3 rounded-full">
                <ChatBubbleBottomCenterTextIcon class="h-6 w-6 text-primario" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Asesoría Gratuita</h3>
                <p class="text-texto-secundario">Primera consulta sin compromiso</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-primario/10 p-3 rounded-full">
                <CurrencyDollarIcon class="h-6 w-6 text-primario" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Presupuesto Claro</h3>
                <p class="text-texto-secundario">Sin costos ocultos ni sorpresas</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-primario/5 to-secundario/5 rounded-2xl -z-10"></div>
          <div class="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          >
            <form 
              action="https://formsubmit.co/k8labs.empresa@gmail.com" 
              method="POST" 
              class="space-y-6"
            >
              <div>
                <label for="name" class="block text-sm font-medium text-texto-secundario">Nombre</label>
                <input type="text" name="name" id="name" required class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primario focus:border-primario">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-texto-secundario">Email</label>
                <input type="email" name="email" id="email" required class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primario focus:border-primario">
              </div>
              <div>
                <label for="service" class="block text-sm font-medium text-texto-secundario">Servicio de Interés</label>
                <select name="service" id="service" required class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primario focus:border-primario">
                  <option value="" disabled selected>Selecciona un servicio</option>
                  <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-bold text-texto-secundario">Mensaje</label>
                <textarea name="message" id="message" rows="4" required class="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primario focus:border-primario"></textarea>
              </div>
              <div class="text-center">
                <button 
                  type="submit"
                  class="bg-gradient-to-r from-secundario to-primario text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secundario/50"
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
  'Landing Vue Ultra Rápida',
  'WordPress Básico',
  'WordPress Intermedio',
  'WordPress Avanzado (Tienda Online)',
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
input:focus, textarea:focus {
  box-shadow: 0 0 0 2px theme('colors.primario');
}
</style> 