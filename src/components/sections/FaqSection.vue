<template>
  <section id="faq" class="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 overflow-hidden">
    <!-- Formas geométricas decorativas -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-k-cyan to-blue-400 rounded-full opacity-20"></div>
    <div class="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-k-magenta to-pink-400 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15"></div>
    <div class="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 transform rotate-45 opacity-20"></div>
    <div class="absolute bottom-40 right-1/3 w-18 h-18 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-15"></div>
    
    <!-- Patrones de líneas -->
    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-cyan/10 to-transparent"></div>
    <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-k-magenta/10 to-transparent"></div>
    
    <!-- Iconos interrogación flotantes -->
    <div class="absolute top-32 left-1/3 text-2xl text-k-cyan/20 font-bold">?</div>
    <div class="absolute bottom-32 right-1/3 text-xl text-k-magenta/20 font-bold">?</div>
    <div class="absolute top-64 right-1/4 text-lg text-green-400/20 font-bold">?</div>
    
    <BackgroundPattern pattern="grid" opacity="text-k-cyan/[0.02]" />
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <h2 class="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-k-dark-blue to-purple-600">Preguntas Frecuentes</h2>
      <p class="text-gray-600 text-center mb-12">Resuelve todas tus dudas sobre mi trabajo y proceso.</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- FAQ Items -->
        <div class="space-y-4">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 hover:shadow-xl group transform hover:-translate-y-1"
            :class="{ 
              '!border-k-cyan shadow-k-cyan/20': activeFaq === index,
              'hover:border-k-cyan/50': activeFaq !== index
            }"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center text-left p-6 font-medium group-hover:bg-gradient-to-r group-hover:from-k-light-blue/10 group-hover:to-k-cyan/5 transition-all duration-300"
            >
              <span class="pr-4 text-gray-800 group-hover:text-k-dark-blue font-semibold">{{ item.question }}</span>
              <ChevronDownIcon 
                class="h-5 w-5 transform transition-transform duration-300"
                :class="{ 
                  'rotate-180 text-k-cyan': activeFaq === index,
                  'text-k-magenta group-hover:text-k-cyan': activeFaq !== index
                }"
              />
            </button>
            <div 
              class="overflow-hidden transition-all duration-500 ease-in-out"
              :style="{ maxHeight: activeFaq === index ? '500px' : '0px' }"
            >
              <div class="p-6 pt-0 text-gray-600 whitespace-pre-line bg-gradient-to-b from-k-light-blue/5 to-transparent">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>

        <!-- Imagen decorativa -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="relative hidden lg:block"
        >
          <div class="sticky top-8 h-full flex items-center justify-center">
            <div class="relative bg-white/80 backdrop-blur-sm border-2 border-k-cyan/20 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-k-cyan/20 hover:border-k-cyan/40 group">
              <!-- Efectos de fondo coloridos -->
              <div class="absolute inset-0 bg-gradient-to-br from-k-cyan/5 via-k-light-blue/10 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div class="absolute inset-0 bg-gradient-to-tr from-k-magenta/5 via-k-light-blue/10 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              
              <!-- Imagen principal -->
              <div class="relative z-10">
                <img 
                  src="/img/faq.png" 
                  alt="Ilustración FAQ" 
                  class="w-full h-auto max-w-md mx-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <!-- Elementos decorativos flotantes -->
              <div class="absolute top-0 right-0 -mr-4 -mt-4 transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                <div class="w-8 h-8 bg-gradient-to-br from-k-cyan to-k-magenta rounded-full opacity-60"></div>
              </div>
              <div class="absolute bottom-0 left-0 -ml-6 -mb-6 transform -rotate-12 group-hover:-rotate-45 transition-transform duration-300">
                <div class="w-12 h-12 bg-gradient-to-br from-k-magenta to-k-cyan rounded-full opacity-50"></div>
              </div>
              <div class="absolute top-1/2 left-0 -ml-3 transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                <div class="w-6 h-6 bg-gradient-to-br from-k-cyan to-k-light-blue opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

const faqItems = [
  {
    question: '¿Cuál es la diferencia entre una página autogestionable y una totalmente personalizada?',
    answer: 'Una página autogestionable incluye un panel de administración donde puedes editar textos, imágenes o productos sin conocimientos técnicos. Es ideal si prefieres tener control y hacer cambios frecuentes.\n\nLas páginas totalmente personalizadas están optimizadas para velocidad y diseño exclusivo, pensadas para quienes no necesitan editar contenido constantemente o requieren funcionalidades muy específicas.'
  },
  {
    question: '¿Qué necesito tener listo para iniciar el proyecto?',
    answer: 'Para comenzar solo necesito:\n\n• Nombre de tu negocio o proyecto\n• Logotipo (si ya lo tienes)\n• Textos e imágenes que desees incluir\n• Redes sociales y datos de contacto\n• Si tienes una página de referencia, será útil\n\nCon esta información puedo iniciar el desarrollo y te acompaño durante todo el proceso.'
  },
  {
    question: '¿Cuánto tarda el desarrollo de mi sitio web?',
    answer: 'Depende del tipo de sitio:\n\n• Landing page: 3 a 6 días hábiles\n• Sitio web autogestionable: 5 a 10 días\n• Tienda online: 15 a 30 días\n• Desarrollo personalizado: 4 a 8 semanas\n• Automatizaciones: 1 a 15 horas, según complejidad\n\nSiempre te indicaré el plazo estimado antes de empezar, y me esfuerzo por entregar antes de la fecha acordada.'
  },
  {
    question: '¿Ofreces garantía y soporte técnico?',
    answer: 'Sí, todos los proyectos incluyen garantía durante 12 meses por fallos técnicos que sean de mi responsabilidad.\n\nAdemás, al finalizar te entrego instrucciones claras sobre cómo utilizar tu sitio o herramienta, y si necesitas soporte adicional o mantenimiento continuo, puedo ofrecer paquetes personalizados.'
  },
  {
    question: '¿También desarrollas automatizaciones o soluciones a medida?',
    answer: 'Sí. Puedo ayudarte a optimizar procesos internos mediante automatizaciones personalizadas.\n\nDesarrollo scripts, formularios inteligentes, integraciones y otras herramientas adaptadas a tus necesidades, especialmente útiles para ahorrar tiempo en tareas repetitivas o mejorar tu flujo de trabajo. Analizo tu caso y te ofrezco soluciones concretas con precios justos.'
  },
  {
    question: '¿Cuál es el proceso de trabajo y cómo se realiza el pago?',
    answer: 'Trabajo con pago en dos partes: 50% al iniciar y 50% al finalizar, antes de publicar o entregar el proyecto.\n\nAcepto transferencias bancarias y otras plataformas digitales. Durante todo el desarrollo recibirás avances periódicos, podrás revisar cada etapa, y validaremos juntos cada entrega para garantizar un resultado profesional y funcional.'
  }
];

</script>

<style scoped>
/* Scoped styles for FaqSection */
</style> 