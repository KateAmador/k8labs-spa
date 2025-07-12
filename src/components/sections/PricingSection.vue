<template>
  <section id="planes" class="py-20 bg-gris-suave relative overflow-hidden">
    <BackgroundPattern pattern="dots" opacity="text-primario/[0.03]" />
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-2">Planes y Precios</h2>
      <p class="text-texto-secundario text-center mb-12">Soluciones adaptadas a tu presupuesto y necesidades.</p>
      
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <BaseCard
          v-for="(plan, index) in pricingPlans"
          :key="plan.name"
          :delay="index * 100"
          :highlighted="plan.highlighted"
        >
          <template #header>
            <h3 class="text-xl font-bold">{{ plan.name }}</h3>
          </template>

          <div class="flex items-baseline mb-2 mt-4">
            <span class="text-3xl font-bold text-primario">{{ plan.price }}</span>
            <span class="text-texto-secundario ml-2">{{ plan.currency }}</span>
          </div>
          <p class="text-sm text-texto-secundario mb-6 flex items-center">
            <ClockIcon class="h-4 w-4 mr-2 text-primario" />
            {{ plan.delivery }}
          </p>
          <ul class="space-y-3 mb-8 text-sm">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
              <CheckIcon class="h-5 w-5 text-primario mr-2 flex-shrink-0" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <div class="text-xs text-texto-secundario space-y-2 mb-8">
            <p v-if="plan.idealFor" class="flex items-start">
              <BoltIcon class="h-4 w-4 text-secundario mr-1 flex-shrink-0" />
              <span>Ideal para: {{ plan.idealFor }}</span>
            </p>
            <p v-if="plan.notIncludes" class="flex items-start">
              <XMarkIcon class="h-4 w-4 text-red-500 mr-1 flex-shrink-0" />
              <span>No incluye {{ plan.notIncludes }}</span>
            </p>
          </div>

          <template #footer>
            <a 
              href="#contacto"
              class="block w-full py-4 text-center bg-primario text-white font-medium hover:bg-primario/90 transition-colors duration-300"
            >
              {{ plan.cta }}
            </a>
          </template>
        </BaseCard>
      </div>

      <!-- Otros servicios -->
      <div class="mt-20">
        <h3 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-2xl font-bold text-center mb-12">Otros Servicios</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="(service, index) in otherServices"
            :key="service.name"
            :delay="index * 100"
          >
            <template #header>
              <h4 class="text-xl font-bold">{{ service.name }}</h4>
            </template>

            <p class="text-texto-secundario mb-4 mt-4">{{ service.description }}</p>
            
            <div v-if="service.price" class="flex items-baseline mb-2">
              <span class="text-2xl font-bold text-primario">{{ service.price }}</span>
              <span class="text-texto-secundario ml-2">{{ service.currency }}</span>
            </div>

            <p v-if="service.delivery" class="text-sm text-texto-secundario mb-6 flex items-center">
              <ClockIcon class="h-4 w-4 mr-2 text-primario" />
              {{ service.delivery }}
            </p>

            <ul class="space-y-2 mb-6 text-sm">
              <li v-for="feature in service.features" :key="feature.text" class="flex items-start">
                <CheckIcon class="h-5 w-5 text-primario mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span class="font-medium">{{ feature.text }}</span>
                  <ul v-if="feature.subItems" class="mt-1 space-y-1 ml-1 text-texto-secundario">
                    <li v-for="subItem in feature.subItems" :key="subItem">• {{ subItem }}</li>
                  </ul>
                </div>
              </li>
            </ul>

            <template #footer>
              <component 
                :is="service.ctaIsRouterLink ? 'router-link' : 'a'"
                :to="service.ctaIsRouterLink ? service.ctaUrl : undefined"
                :href="!service.ctaIsRouterLink ? service.ctaUrl : undefined"
                class="inline-block px-6 py-3 bg-primario text-white rounded-full hover:bg-primario/90 transition-colors duration-300 text-center w-full"
              >
                {{ service.ctaText }}
              </component>
            </template>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, ClockIcon, BoltIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'
import BaseCard from '../ui/BaseCard.vue'

const pricingPlans = [
  {
    name: 'LANDING VUE',
    price: '$499.000',
    currency: 'COP',
    delivery: 'Entrega en 3-6 días hábiles',
    features: [
      'Página web moderna y rápida',
      'Hasta 4 secciones personalizadas',
      'Formulario de contacto funcional',
      'Diseño 100% personalizado',
      'Hosting + Dominio por 1 año',
      'Certificado SSL incluido',
      'Soporte técnico por 1 mes',
    ],
    idealFor: 'campañas, portfolios, CV, servicios puntuales',
    notIncludes: 'panel de administración',
    cta: 'Solicitar Landing Vue',
    highlighted: false,
  },
  {
    name: 'WORDPRESS BÁSICO',
    price: '$599.000',
    currency: 'COP',
    delivery: 'Entrega en 5-10 días hábiles',
    features: [
      'Sitio web autogestionable',
      'Hasta 5 páginas internas',
      'Panel WordPress personalizado',
      'Formulario de contacto',
      'Hosting + Dominio por 1 año',
      'Optimización SEO básica',
      'Soporte técnico por 1 mes',
    ],
    idealFor: 'pequeños negocios, profesionales independientes',
    cta: 'Solicitar WordPress Básico',
    highlighted: false,
  },
  {
    name: 'WORDPRESS INTERMEDIO',
    price: '$899.000',
    currency: 'COP',
    delivery: 'Entrega en 10-15 días hábiles',
    features: [
      'Todo lo del plan Básico +',
      'Hasta 10 páginas internas',
      'Blog o sección de noticias',
      'Integración con redes sociales',
      'Optimización SEO avanzada',
      'Google Analytics + Search Console',
      'Soporte técnico por 2 meses',
    ],
    idealFor: 'empresas establecidas, negocios en crecimiento',
    cta: 'Solicitar WordPress Intermedio',
    highlighted: true,
  },
  {
    name: 'WORDPRESS AVANZADO',
    price: '$1.499.000',
    currency: 'COP',
    delivery: 'Entrega en 15-30 días hábiles',
    features: [
      'Todo lo del plan Intermedio +',
      'Páginas ilimitadas',
      'Tienda online básica',
      'Pasarela de pagos',
      'Automatizaciones básicas',
      'Capacitación de uso',
      'Soporte técnico por 3 meses',
    ],
    idealFor: 'comercios online, empresas que necesitan vender',
    cta: 'Solicitar WordPress Avanzado',
    highlighted: false,
  },
];

const otherServices = [
  {
    name: 'Desarrollo Personalizado',
    description: 'Sistemas web a medida para necesidades específicas.',
    price: 'Desde $1.800.000',
    currency: 'COP',
    delivery: 'Tiempo según requerimientos (4-8 semanas aprox.)',
    features: [
      { text: 'Aplicaciones web personalizadas' },
      { text: 'Sistemas de gestión internos' },
      { text: 'Integraciones con APIs' },
      { text: 'Dashboards y reportes' },
      { text: 'Base de datos personalizada' },
    ],
    ctaText: 'Solicitar Cotización',
    ctaUrl: '#contacto',
    ctaIsRouterLink: false,
  },
  {
    name: 'Scripts y Automatizaciones',
    description: 'Automatiza procesos simples y repetitivos para ahorrar tiempo y reducir errores.',
    delivery: 'Entrega desde 1 hasta 15 horas según complejidad',
    features: [
      { 
        text: 'Scripts en Python desde $60.000/h',
        subItems: ['Procesar archivos', 'Automatizar reportes', 'Llenar formularios', 'Enviar alertas', 'Extraer información']
      },
      { text: 'Formularios conectados con hojas de cálculo' },
      { text: 'Mini herramientas a medida' },
    ],
    ctaText: 'Solicitar Información',
    ctaUrl: '#contacto',
    ctaIsRouterLink: false,
  },
  {
    name: 'Mantenimiento y Soporte',
    description: 'Mantén tu sitio actualizado y funcionando perfectamente.',
    features: [
      { text: 'Actualizaciones de seguridad' },
      { text: 'Copias de seguridad' },
      { text: 'Soporte técnico prioritario' },
      { text: 'Monitoreo 24/7' },
    ],
    ctaText: 'Consultar Planes',
    ctaUrl: '/soporte',
    ctaIsRouterLink: true,
  }
];
</script>

<style scoped>
/* Scoped styles for PricingSection */
</style> 