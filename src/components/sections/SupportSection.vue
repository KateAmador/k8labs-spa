<template>
  <section id="soporte" class="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 text-gray-800 relative overflow-hidden">
    <!-- Formas geométricas decorativas -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-k-cyan/20 to-blue-400/30 rounded-full opacity-20"></div>
    <div class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-k-magenta/20 to-pink-400/30 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-k-cyan/15 to-k-light-blue/25 rounded-full opacity-15"></div>
    <div class="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-k-magenta/20 to-purple-400/30 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-40 right-1/3 w-18 h-18 bg-gradient-to-br from-k-cyan/15 to-k-magenta/20 rounded-full opacity-15"></div>
    
    <!-- Patrones de líneas -->
    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-cyan/10 to-transparent"></div>
    <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-magenta/10 to-transparent"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-k-dark-blue via-k-cyan to-k-magenta">Planes de Soporte y Mantenimiento</h2>
      
      <!-- Planes principales -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="(plan, index) in supportPlans"
          :key="plan.name"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
          class="bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-xl p-6 flex flex-col transition-all duration-300 relative transform hover:-translate-y-2 hover:shadow-2xl group"
          :class="{ 
            'highlighted-plan': plan.highlighted,
            'hover:border-k-cyan hover:shadow-k-cyan/20': !plan.highlighted,
            'hover:shadow-k-magenta/20': plan.highlighted
          }"
        >
          <div v-if="plan.highlighted" class="absolute -top-3 -right-3 bg-k-magenta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recomendado</div>
          <h3 class="text-xl font-bold text-center mb-4 text-gray-800">{{ plan.name }}</h3>

          <div class="text-center mb-2 mt-4">
            <span class="text-3xl font-bold" :class="plan.highlighted ? 'text-k-magenta' : 'text-k-cyan'">{{ plan.price }}</span>
            <span class="text-gray-600 ml-2 text-sm">{{ plan.currency }}</span>
          </div>
          <p class="text-sm text-gray-600 mb-6 text-center">{{ plan.period }}</p>

          <div class="space-y-3 text-sm flex-grow mb-8">
            <div v-for="feature in plan.features" :key="feature" class="flex items-center text-gray-700">
              <CheckIcon class="h-5 w-5 mr-2 flex-shrink-0" :class="plan.highlighted ? 'text-k-magenta' : 'text-k-cyan'" />
              <span>{{ feature }}</span>
            </div>
          </div>
          
          <router-link 
            :to="plan.ctaUrl"
            class="block w-full mt-auto py-3 text-center rounded-lg font-bold transition-all duration-300"
            :class="plan.highlighted 
              ? 'bg-k-magenta text-white hover:bg-opacity-90 shadow-lg shadow-k-magenta/30' 
              : 'bg-k-cyan text-white hover:bg-opacity-80'"
          >
            {{ plan.ctaText }}
          </router-link>
        </div>
      </div>

      <!-- Cambios individuales -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-20 border border-gray-200/50"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">✴️ Cambios individuales</h2>
        <p class="mb-6 text-gray-600">¿No necesitas un plan mensual? También puedes solicitar cambios por unidad.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 border border-gray-200 rounded-xl transition-all duration-300 bg-white hover:border-k-cyan hover:shadow-lg hover:shadow-k-cyan/10">
            <div class="font-bold mb-2 text-gray-800">Cambio menor</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-k-cyan">$35.000</span>
              <span class="text-gray-600 text-sm">COP</span>
            </div>
            <div class="text-sm text-gray-600 mt-2">Texto, imagen, color, enlace</div>
          </div>
          
          <div class="p-6 border border-gray-200 rounded-xl transition-all duration-300 bg-white hover:border-k-cyan hover:shadow-lg hover:shadow-k-cyan/10">
            <div class="font-bold mb-2 text-gray-800">Cambio medio</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-k-cyan">$70.000</span>
              <span class="text-gray-600 text-sm">COP</span>
            </div>
            <div class="text-sm text-gray-600 mt-2">Bloque nuevo, diseño, sección nueva pequeña</div>
          </div>
          
          <div class="p-6 border border-gray-200 rounded-xl transition-all duration-300 bg-white hover:border-k-cyan hover:shadow-lg hover:shadow-k-cyan/10">
            <div class="font-bold mb-2 text-gray-800">Paquete 4 cambios</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-k-cyan">$120.000</span>
              <span class="text-gray-600 text-sm">COP</span>
            </div>
            <div class="text-sm text-gray-600 mt-2">Cambios menores</div>
          </div>
          
          <div class="p-6 border border-gray-200 rounded-xl transition-all duration-300 bg-white hover:border-k-cyan hover:shadow-lg hover:shadow-k-cyan/10">
            <div class="font-bold mb-2 text-gray-800">Revisión técnica</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-k-cyan">$85.000</span>
              <span class="text-gray-600 text-sm">COP</span>
            </div>
            <div class="text-sm text-gray-600 mt-2">Velocidad, enlaces, errores</div>
          </div>
        </div>
      </div>

      <!-- Tabla de recomendaciones -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-20 border border-gray-200/50"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">🧠 ¿Cómo elegir el plan ideal?</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-300">
                <th class="py-4 px-4 text-left font-bold text-gray-800">Necesidad</th>
                <th class="py-4 px-4 text-left font-bold text-gray-800">Plan recomendado</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4">Tienes una landing y solo quieres ajustes pequeños</td>
                <td class="py-4 px-4 font-medium text-k-cyan">Básico</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4">Tu sitio crece cada mes y quieres actualizar contenido seguido</td>
                <td class="py-4 px-4 font-medium text-k-cyan">Intermedio</td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4">Tienes tienda o quieres que esté siempre optimizada</td>
                <td class="py-4 px-4 font-medium text-k-cyan">Avanzado</td>
              </tr>
              <tr>
                <td class="py-4 px-4">Solo quieres corregir algo puntual</td>
                <td class="py-4 px-4 font-medium text-k-cyan">Cambio individual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Notas importantes -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200/50"
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 800 } }">
        <div class="flex items-center gap-3 mb-6">
          <div class="bg-k-cyan/10 p-3 rounded-full">
            <InformationCircleIcon class="h-6 w-6 text-k-cyan" />
          </div>
          <h2 class="text-2xl font-bold text-gray-800">Información importante</h2>
        </div>
        <ul class="space-y-4 text-gray-600">
          <li class="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <CheckCircleIcon class="h-6 w-6 text-k-cyan flex-shrink-0" />
            <span class="text-gray-700">El soporte es solo para sitios creados por mí o entregados funcionando por mí.</span>
          </li>
          <li class="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <CheckCircleIcon class="h-6 w-6 text-k-cyan flex-shrink-0" />
            <span class="text-gray-700">Si tu sitio fue hecho por un tercero, primero se debe hacer una auditoría técnica.</span>
          </li>
          <li class="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <CheckCircleIcon class="h-6 w-6 text-k-cyan flex-shrink-0" />
            <span class="text-gray-700">Los cambios mayores (nuevas funcionalidades, migraciones o rediseños) se cotizan aparte.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/solid'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

const supportPlans = [
  {
    name: 'PLAN BÁSICO',
    price: '$89.000',
    currency: 'COP',
    period: 'por mes',
    features: [
      '1 cambio menor mensual',
      'Revisión general de seguridad y estado',
      'Actualización de plugins (en WordPress)',
      'Backup mensual',
      'Soporte por WhatsApp o correo (48h)',
    ],
    ctaText: 'Contratar Plan Básico',
    ctaUrl: '/#contacto',
    highlighted: false,
  },
  {
    name: 'PLAN INTERMEDIO',
    price: '$149.000',
    currency: 'COP',
    period: 'por mes',
    features: [
      '3 cambios menores mensuales',
      'Revisión y limpieza de seguridad',
      'Actualizaciones prioritarias',
      'Backups semanales',
      'Soporte por WhatsApp o correo (24h)',
      'Informe de rendimiento mensual',
    ],
    ctaText: 'Contratar Plan Intermedio',
    ctaUrl: '/#contacto',
    highlighted: true,
  },
  {
    name: 'PLAN PREMIUM',
    price: '$249.000',
    currency: 'COP',
    period: 'por mes',
    features: [
      'Cambios ilimitados (hasta 5h)',
      'Monitoreo de seguridad proactivo 24/7',
      'Actualizaciones y pruebas en entorno de desarrollo',
      'Backups diarios',
      'Soporte prioritario (menos de 12h)',
      'Optimización de velocidad trimestral',
    ],
    ctaText: 'Contratar Plan Premium',
    ctaUrl: '/#contacto',
    highlighted: false,
  },
];
</script>

<style scoped>
.highlighted-plan {
  @apply border-transparent;
  background-image: linear-gradient(white, white),
                    linear-gradient(to right, theme('colors.k-cyan'), theme('colors.k-magenta'));
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0 0 20px theme('colors.k-magenta' / 0.3);
}
</style> 