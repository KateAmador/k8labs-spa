import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/soporte',
    name: 'Support',
    component: () => import('../components/pages/SupportPage.vue')
  },
  {
    path: '/gracias',
    name: 'ThankYou',
    component: () => import('../components/pages/ThankYouPage.vue')
  },
];

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