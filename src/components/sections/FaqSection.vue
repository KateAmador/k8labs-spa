<template>
  <section id="faq" class="relative py-20 bg-gris-suave overflow-hidden">
    <BackgroundPattern pattern="grid" opacity="text-primario/[0.02]" />
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- FAQ Items -->
        <div class="space-y-3">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center text-left p-4 font-medium text-sm"
            >
              <span class="pr-4">{{ item.question }}</span>
              <ChevronDownIcon 
                class="h-5 w-5 transform transition-transform duration-300 text-primary/70"
                :class="{ 'rotate-180': activeFaq === index }"
              />
            </button>
            <div 
              class="overflow-hidden transition-all duration-500 ease-in-out bg-white/50"
              :style="{ maxHeight: activeFaq === index ? '500px' : '0px' }"
            >
              <div class="p-4 pt-0 text-texto-secundario text-sm whitespace-pre-line">
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
          <div class="sticky top-8 h-full flex items-center">
            <div class="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6">
              <!-- Efectos de fondo -->
              <div class="absolute inset-0 bg-gradient-to-br from-primario/10 via-secundario/5 to-transparent rounded-3xl transform rotate-3"></div>
              <div class="absolute inset-0 bg-gradient-to-tr from-secundario/10 via-primario/5 to-transparent rounded-3xl transform -rotate-3"></div>
              
              <!-- Imagen principal -->
              <div class="relative z-10">
                <img 
                  src="/img/faq-illustration2.png" 
                  alt="Ilustración FAQ" 
                  class="w-full h-auto max-w-md mx-auto opacity-80"
                  style="max-height: 450px; object-fit: contain;"
                />
              </div>

              <!-- Elementos decorativos flotantes -->
              <div class="absolute top-0 right-0 -mr-4 -mt-4 transform rotate-12">
                <div class="w-8 h-8 bg-secundario/20 rounded-full"></div>
              </div>
              <div class="absolute bottom-0 left-0 -ml-6 -mb-6 transform -rotate-12">
                <div class="w-12 h-12 bg-primario/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import BackgroundPattern from '../ui/BackgroundPattern.vue'

const activeFaq = ref(null);
const svgContent = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/img/faq-illustration2.svg');
    svgContent.value = await response.text();
  } catch (error) {
    console.error('Error al cargar el SVG:', error);
  }
});

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

const handleSvgError = () => {
  console.error('Error al cargar el SVG como objeto');
  svgError.value = true;
};

const handleImgError = () => {
  console.error('Error al cargar el SVG como imagen');
};

const faqItems = [
  {
    question: '¿Cuál es la diferencia entre una página hecha en WordPress y una hecha desde cero?',
    answer: 'Una página en WordPress incluye un panel donde puedes editar texto, imágenes o productos sin saber programar. Es ideal si quieres autogestionarla fácilmente.\n\nLas páginas hechas desde cero, como las que desarrollo en Vue, son más rápidas, ligeras y 100% personalizadas, pero no tienen panel editable. Son perfectas si no necesitas hacer cambios frecuentes o si quieres algo muy específico a nivel visual o funcional.'
  },
  {
    question: '¿Qué necesito tener listo para empezar?',
    answer: 'Solo necesito que me envíes:\n\n• Nombre de tu negocio o proyecto\n• Logotipo (si ya lo tienes)\n• Textos e imágenes que quieras mostrar\n• Redes sociales y datos de contacto\n• Si tienes alguna referencia visual o web que te guste, mejor aún\n\nCon eso, puedo empezar a trabajar y te voy guiando durante todo el proceso.'
  },
  {
    question: '¿Cuánto tiempo tarda tener lista mi página web?',
    answer: 'Depende del tipo de servicio:\n\n• Landing page: entre 3 a 6 días hábiles\n• Sitio WordPress: de 5 a 10 días\n• Tienda online: entre 15 a 30 días\n• Desarrollo personalizado: de 4 a 8 semanas\n• Automatizaciones: de 1 a 15 horas, según el tipo\n\nSiempre te daré un tiempo estimado antes de empezar y trato de entregar antes de la fecha.'
  },
  {
    question: '¿Ofreces garantía o soporte?',
    answer: 'Sí, todos los proyectos tienen garantía de 1 año por si algo falla o necesitas ayuda técnica.\n\nAdemás, siempre te explico cómo usar tu sitio o plataforma cuando lo entrego, y estoy pendiente si surge algo más adelante. Si el proyecto es más complejo, puedo ofrecer soporte mensual o paquetes personalizados.'
  },
  {
    question: '¿Qué pasa si necesito automatizar tareas o crear herramientas internas?',
    answer: 'También desarrollo automatizaciones y scripts a medida.\n\nSi necesitas ahorrar tiempo con reportes, procesos repetitivos o herramientas internas, puedo ayudarte con scripts en Python, chatbots, formularios inteligentes o integraciones personalizadas.\n\nAnalizo tu caso, te doy opciones y presupuesto justo según lo que necesites.'
  },
  {
    question: '¿Puedo ver ejemplos de otros trabajos tuyos?',
    answer: 'Claro. Tengo un portafolio aparte donde muestro los desarrollos más técnicos que he hecho. Puedes verlo en portafolio.k8labs.dev (en construcción, pero lo actualizaré seguido).\n\nTambién puedo enviarte ejemplos directamente si prefieres algo puntual según tu industria o necesidad.'
  },
  {
    question: '¿Cómo se realiza el pago y cómo funciona el proceso?',
    answer: 'Trabajo con pago en dos partes: 50% para iniciar y 50% al final, antes de publicar o entregar el proyecto.\n\nAcepto pagos por transferencia bancaria o plataformas digitales.\n\nDesde que empiezas, te explico cada paso del proceso, te muestro avances y trabajamos juntas para que el resultado final te encante.'
  }
];
</script>

<style scoped>
/* Scoped styles for FaqSection */
</style> 