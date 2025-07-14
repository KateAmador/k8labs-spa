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
              <CheckIcon 
                class="h-5 w-5 mr-2 flex-shrink-0"
                :class="feature.startsWith('Todo lo del plan') ? 'text-secundario' : 'text-primario'"
              />
              <span :class="feature.startsWith('Todo lo del plan') ? 'text-secundario font-medium' : ''">{{ feature }}</span>
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
              @click="scrollToContact"
              class="block w-full py-4 text-center bg-primario text-white font-medium hover:bg-primario/90 transition-colors duration-300 cursor-pointer relative z-20"
            >
              {{ plan.cta }}
            </a>
          </template>
        </BaseCard>
      </div>

      <!-- Otros servicios -->
      <div id="otros-servicios" class="mt-20">
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
                            <router-link 
                :to="service.ctaUrl || '#contacto'"
                @click="service.ctaUrl ? null : scrollToContact"
                class="block w-full py-4 text-center bg-primario text-white font-medium hover:bg-primario/90 transition-colors duration-300 cursor-pointer relative z-20"
              >
                {{ service.ctaText }}
                </router-link>
            </template>
          </BaseCard>
        </div>
      </div>

      <!-- Nota sobre capacitación -->
      <p class="text-center text-sm text-texto-secundario italic mt-8">
        Todos los planes incluyen capacitación en video y manual de uso
      </p>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, ClockIcon, BoltIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BackgroundPattern from '../ui/BackgroundPattern.vue'
import BaseCard from '../ui/BaseCard.vue'

const scrollToContact = (event) => {
  console.log('scrollToContact called', event);
  event.preventDefault();
  const contactSection = document.getElementById('contacto');
  console.log('contactSection found:', contactSection);
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const pricingPlans = [
  {
    name: 'LANDING PERSONALIZADA',
    price: '$499.000',
    currency: 'COP',
    delivery: 'Entrega en 3-5 días hábiles',
    features: [
      'Diseño 100% personalizado',
      'Página web moderna y rápida',
      'Hasta 3 secciones personalizadas',
      '100% Adaptable a Móvil',
      'Integración con redes sociales',
      'Formulario de contacto y botón de WhatsApp',
      'Google Maps',
      'Enlaces a sitios externos',
      'Amigable con SEO',
      'Hosting + Dominio por 1 año',
      'Certificado SSL incluido',
      'Soporte técnico por 1 mes',
    ],
    idealFor: 'campañas, portfolios, CV, servicios puntuales',
    notIncludes: 'panel de administración',
    cta: 'Solicitar Landing Personalizada',
    highlighted: false,
  },
  {
    name: 'LANDING AUTOGESTIONABLE',
    price: '$599.000',
    currency: 'COP',
    delivery: 'Entrega en 5-7 días hábiles',
    features: [
      'Diseño basado en plantilla profesional',
      'Sitio web autogestionable',
      'Hasta 5 páginas internas',
      'Panel WordPress personalizado',
      'Banner con movimiento',
      '100% Adaptable a Móvil',
      'Integración con redes sociales',
      'Formulario de contacto y botón de WhatsApp',
      'Google Maps',
      'Enlaces a sitios externos',
      'Amigable con SEO',
      'Optimización SEO básica',
      'Hosting + Dominio por 1 año',
      'Soporte técnico por 1 mes',
    ],
    idealFor: 'pequeños negocios, profesionales independientes',
    cta: 'Solicitar Landing Autogestionable',
    highlighted: false,
  },
  {
    name: 'WEB EMPRESARIAL',
    price: '$899.000',
    currency: 'COP',
    delivery: 'Entrega en 7-15 días hábiles',
    features: [
      'Todo lo del plan Landing Autogestionable +',
      'Diseño sobre plantilla corporativa',
      'Hasta 10 páginas internas',
      '3 banners con movimiento',
      'Galería de fotos o videos',
      'Carrusel de testimonios',
      'Blog o sección de noticias',
      'Integración pixel de Google Ads y Facebook',
      'Configuración de Google My Business',
      'Optimización SEO avanzada',
      'Google Analytics + Search Console',
      'Soporte técnico por 2 meses',
    ],
    idealFor: 'empresas establecidas, negocios en crecimiento',
    cta: 'Solicitar Web Empresarial',
    highlighted: true,
  },
  {
    name: 'ECOMMERCE PROFESIONAL',
    price: '$1.499.000',
    currency: 'COP',
    delivery: 'Entrega en 15-30 días hábiles',
    features: [
      'Todo lo del plan Web Empresarial +',
      'Diseño moderno basado en plantilla optimizada',
      'Hasta 5 banners con movimiento',
      'Tienda WooCommerce completa',
      '50 productos precargados',
      '20 categorías',
      'Lista de deseos',
      'Carrito de compra',
      'Vista de pedidos',
      'Pasarela de pagos',
      'Automatizaciones básicas',
      'Capacitación de uso',
      'Soporte técnico por 3 meses',
    ],
    idealFor: 'comercios online, empresas que necesitan vender',
    cta: 'Solicitar Ecommerce Profesional',
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
  }
];
</script>

<style scoped>
/* Scoped styles for PricingSection */
</style> 