import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import SupportPage from '../components/pages/SupportPage.vue'
import ThankYouPage from '../components/pages/ThankYouPage.vue'
import TermsAndConditionsPage from '../components/pages/TermsAndConditionsPage.vue'
import PrivacyPolicyPage from '../components/pages/PrivacyPolicyPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/soporte', component: SupportPage },
  { path: '/gracias', component: ThankYouPage },
  { path: '/terminos-y-condiciones', component: TermsAndConditionsPage },
  { path: '/politica-de-privacidad', component: PrivacyPolicyPage }
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

export default router; 