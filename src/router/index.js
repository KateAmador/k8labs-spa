import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import SupportPage from '../components/pages/SupportPage.vue'
import ThankYouPage from '../components/pages/ThankYouPage.vue'
import TermsAndConditionsPage from '../components/pages/TermsAndConditionsPage.vue'
import PrivacyPolicyPage from '../components/pages/PrivacyPolicyPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'K8Labs - Desarrollo Web Profesional y Consultoría Tecnológica',
      description: 'Servicios profesionales de desarrollo web, aplicaciones móviles y consultoría tecnológica. Especialistas en Vue.js, React, Node.js y soluciones cloud.',
      keywords: 'desarrollo web, aplicaciones móviles, consultoría tecnológica, Vue.js, React, Node.js, cloud computing',
      priority: 1.0,
      changefreq: 'weekly'
    }
  },
  {
    path: '/soporte',
    name: 'support',
    component: SupportPage,
    meta: {
      title: 'Soporte Técnico - K8Labs',
      description: 'Obtén soporte técnico profesional para tus proyectos. Contacta con nuestro equipo de expertos en desarrollo web y tecnología.',
      keywords: 'soporte técnico, ayuda desarrollo web, consultoría tecnológica, asistencia técnica',
      priority: 0.8,
      changefreq: 'monthly'
    }
  },
  {
    path: '/gracias',
    name: 'thanks',
    component: ThankYouPage,
    meta: {
      title: 'Gracias por Contactarnos - K8Labs',
      description: 'Gracias por contactar con K8Labs. Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo pronto.',
      keywords: 'gracias, contacto, K8Labs, mensaje recibido',
      priority: 0.3,
      changefreq: 'yearly',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/terminos-y-condiciones',
    name: 'terms',
    component: TermsAndConditionsPage,
    meta: {
      title: 'Términos y Condiciones - K8Labs',
      description: 'Términos y condiciones de uso de los servicios de K8Labs. Información legal sobre el uso de nuestra plataforma y servicios.',
      keywords: 'términos condiciones, legal, uso servicios, K8Labs',
      priority: 0.4,
      changefreq: 'yearly'
    }
  },
  {
    path: '/politica-de-privacidad',
    name: 'privacy',
    component: PrivacyPolicyPage,
    meta: {
      title: 'Política de Privacidad - K8Labs',
      description: 'Política de privacidad de K8Labs. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
      keywords: 'política privacidad, protección datos, GDPR, privacidad usuario',
      priority: 0.4,
      changefreq: 'yearly'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

// Navegación con metadatos SEO
router.beforeEach((to, from, next) => {
  // Actualizar título de la página
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Actualizar metadatos SEO si están disponibles
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
  
  if (to.meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', to.meta.keywords)
    }
  }
  
  // Actualizar robots meta tag si es necesario
  if (to.meta.robots) {
    let metaRobots = document.querySelector('meta[name="robots"]')
    if (metaRobots) {
      metaRobots.setAttribute('content', to.meta.robots)
    }
  }
  
  next()
})

export default router; 