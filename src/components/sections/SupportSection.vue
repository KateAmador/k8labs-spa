<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Patrones de fondo -->
    <div class="absolute inset-0 bg-gradient-to-br from-gris-suave to-white/50 -z-10"></div>
    <div class="absolute inset-0 opacity-10 -z-10">
      <BackgroundPattern />
    </div>

    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Planes principales -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <BaseCard
          v-for="(plan, index) in supportPlans"
          :key="plan.name"
          :delay="index * 150"
          :highlighted="plan.highlighted"
        >
          <template #header>
            <h3 class="text-xl font-bold">{{ plan.name }}</h3>
          </template>

          <div class="flex items-baseline mb-2 mt-4">
            <span class="text-3xl font-bold text-primario">{{ plan.price }}</span>
            <span class="text-texto-secundario ml-2 text-sm">{{ plan.currency }}</span>
          </div>
          <p class="text-sm text-texto-secundario mb-6">{{ plan.period }}</p>

          <div class="space-y-3 text-sm">
            <div v-for="feature in plan.features" :key="feature" class="flex items-center">
              <CheckIcon class="h-5 w-5 text-primario mr-2 flex-shrink-0" />
              <span>{{ feature }}</span>
            </div>
          </div>
          
          <template #footer>
            <router-link 
              :to="plan.ctaUrl"
              class="block w-full py-4 text-center bg-primario text-white font-medium hover:bg-primario/90 transition-colors duration-300"
            >
              {{ plan.ctaText }}
            </router-link>
          </template>
        </BaseCard>
      </div>

      <!-- Cambios individuales -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-20"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <h2 class="text-2xl font-bold mb-6">✴️ Cambios individuales</h2>
        <p class="mb-6 text-texto-secundario">¿No necesitas un plan mensual? También puedes solicitar cambios por unidad.</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 border border-gray-100 rounded-xl hover:border-primario/20 transition-all duration-300 bg-white/50 hover:bg-white">
            <div class="font-bold mb-2">Cambio menor</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-primario">$35.000</span>
              <span class="text-texto-secundario text-sm">COP</span>
            </div>
            <div class="text-sm text-texto-secundario mt-2">Texto, imagen, color, enlace</div>
          </div>
          
          <div class="p-6 border border-gray-100 rounded-xl hover:border-primario/20 transition-all duration-300 bg-white/50 hover:bg-white">
            <div class="font-bold mb-2">Cambio medio</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-primario">$70.000</span>
              <span class="text-texto-secundario text-sm">COP</span>
            </div>
            <div class="text-sm text-texto-secundario mt-2">Bloque nuevo, diseño, sección nueva pequeña</div>
          </div>
          
          <div class="p-6 border border-gray-100 rounded-xl hover:border-primario/20 transition-all duration-300 bg-white/50 hover:bg-white">
            <div class="font-bold mb-2">Paquete 4 cambios</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-primario">$120.000</span>
              <span class="text-texto-secundario text-sm">COP</span>
            </div>
            <div class="text-sm text-texto-secundario mt-2">Cambios menores</div>
          </div>
          
          <div class="p-6 border border-gray-100 rounded-xl hover:border-primario/20 transition-all duration-300 bg-white/50 hover:bg-white">
            <div class="font-bold mb-2">Revisión técnica</div>
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-primario">$85.000</span>
              <span class="text-texto-secundario text-sm">COP</span>
            </div>
            <div class="text-sm text-texto-secundario mt-2">Velocidad, enlaces, errores</div>
          </div>
        </div>
      </div>

      <!-- Tabla de recomendaciones -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-20"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <h2 class="text-2xl font-bold mb-6">🧠 ¿Cómo elegir el plan ideal?</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-4 px-4 text-left font-bold">Necesidad</th>
                <th class="py-4 px-4 text-left font-bold">Plan recomendado</th>
              </tr>
            </thead>
            <tbody class="text-texto-secundario">
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4">Tienes una landing y solo quieres ajustes pequeños</td>
                <td class="py-4 px-4 font-medium text-primario">Básico</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4">Tu sitio crece cada mes y quieres actualizar contenido seguido</td>
                <td class="py-4 px-4 font-medium text-primario">Intermedio</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-4">Tienes tienda o quieres que esté siempre optimizada</td>
                <td class="py-4 px-4 font-medium text-primario">Avanzado</td>
              </tr>
              <tr>
                <td class="py-4 px-4">Solo quieres corregir algo puntual</td>
                <td class="py-4 px-4 font-medium text-primario">Cambio individual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Notas importantes -->
      <div class="bg-white rounded-2xl shadow-lg p-8"
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 800 } }">
        <div class="flex items-center gap-3 mb-6">
          <div class="bg-primario/10 p-3 rounded-full">
            <InformationCircleIcon class="h-6 w-6 text-primario" />
          </div>
          <h2 class="text-2xl font-bold">Información importante</h2>
        </div>
        <ul class="space-y-4 text-texto-secundario">
          <li class="flex items-start gap-3 bg-primario/5 p-4 rounded-xl">
            <CheckCircleIcon class="h-6 w-6 text-primario flex-shrink-0" />
            <span>El soporte es solo para sitios creados por mí o entregados funcionando por mí.</span>
          </li>
          <li class="flex items-start gap-3 bg-primario/5 p-4 rounded-xl">
            <CheckCircleIcon class="h-6 w-6 text-primario flex-shrink-0" />
            <span>Si tu sitio fue hecho por un tercero, primero se debe hacer una auditoría técnica.</span>
          </li>
          <li class="flex items-start gap-3 bg-primario/5 p-4 rounded-xl">
            <CheckCircleIcon class="h-6 w-6 text-primario flex-shrink-0" />
            <span>Los cambios mayores (nuevas funcionalidades, migraciones o rediseños) se cotizan aparte.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/24/solid'
import BackgroundPattern from '../ui/BackgroundPattern.vue'
import BaseCard from '../ui/BaseCard.vue'

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