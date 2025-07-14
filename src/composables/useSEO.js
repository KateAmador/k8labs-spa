import { inject, onMounted, watch } from 'vue'

/**
 * Composable para manejar SEO en componentes Vue
 * Proporciona una interfaz reactiva para configurar metadatos
 */
export function useSEO() {
  const setSEO = inject('seo')

  const configureSEO = (config) => {
    if (setSEO) {
      setSEO(config)
    }
  }

  // Configuración SEO reactiva
  const useSEOConfig = (configOrRef) => {
    const applyConfig = () => {
      const config = typeof configOrRef === 'function' ? configOrRef() : configOrRef
      configureSEO(config)
    }

    onMounted(() => {
      applyConfig()
    })

    // Si es una referencia reactiva, observar cambios
    if (configOrRef && typeof configOrRef.value !== 'undefined') {
      watch(configOrRef, applyConfig, { immediate: true })
    }
  }

  return {
    configureSEO,
    useSEOConfig
  }
}

// Configuraciones predefinidas por página
export const seoConfigs = {
  home: {
    title: 'K8Labs - Desarrollo Web Profesional y Consultoría Tecnológica',
    description: 'Servicios profesionales de desarrollo web, aplicaciones móviles y consultoría tecnológica. Especialistas en Vue.js, React, Node.js y soluciones cloud.',
    keywords: 'desarrollo web, aplicaciones móviles, consultoría tecnológica, Vue.js, React, Node.js, cloud computing',
    type: 'website'
  },
  support: {
    title: 'Soporte Técnico - K8Labs',
    description: 'Obtén soporte técnico profesional para tus proyectos. Contacta con nuestro equipo de expertos en desarrollo web y tecnología.',
    keywords: 'soporte técnico, ayuda desarrollo web, consultoría tecnológica, asistencia técnica',
    type: 'website'
  },
  thanks: {
    title: 'Gracias por Contactarnos - K8Labs',
    description: 'Gracias por contactar con K8Labs. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo pronto.',
    keywords: 'gracias, contacto, K8Labs, mensaje recibido',
    type: 'website'
  },
  terms: {
    title: 'Términos y Condiciones - K8Labs',
    description: 'Términos y condiciones de uso de los servicios de K8Labs. Información legal sobre el uso de nuestra plataforma y servicios.',
    keywords: 'términos condiciones, legal, uso servicios, K8Labs',
    type: 'website'
  },
  privacy: {
    title: 'Política de Privacidad - K8Labs',
    description: 'Política de privacidad de K8Labs. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
    keywords: 'política privacidad, protección datos, GDPR, privacidad usuario',
    type: 'website'
  }
} 