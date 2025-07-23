<template>
  <footer id="footer" class="relative bg-k-deep-purple pt-12 pb-8">
    <SectionDivider color="#0a192f" inverted="true" class="absolute -top-1 w-full h-24 md:h-32" />
    <div class="container mx-auto px-4 text-center relative z-20">
      <div class="flex justify-center gap-6 mb-8">
        <!-- Social Icons -->
        <a 
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank" 
          rel="noopener noreferrer"
          class="text-white hover:text-k-cyan transition-all duration-300 transform hover:-translate-y-1 p-2"
          :aria-label="social.name"
        >
          <font-awesome-icon :icon="social.icon" class="w-8 h-8" />
          <span class="sr-only">{{ social.name }}</span>
        </a>
      </div>
      <div class="flex justify-center items-center space-x-4 mb-4 text-k-text-light">
        <router-link to="/terminos-y-condiciones" class="text-sm hover:text-k-cyan transition-colors duration-300">Términos y Condiciones</router-link>
        <span class="text-k-border">|</span>
        <router-link to="/politica-de-privacidad" class="text-sm hover:text-k-cyan transition-colors duration-300">Política de Privacidad</router-link>
      </div>
      <p class="text-sm text-k-text-light">© {{ new Date().getFullYear() }} k8labs.dev. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import SectionDivider from '../ui/SectionDivider.vue'

const socialLinks = [
  { name: 'WhatsApp', url: 'https://wa.link/4bm659', icon: ['fab', 'whatsapp'] },
  { name: 'Facebook', url: 'https://web.facebook.com/K8Labs/', icon: ['fab', 'facebook-f'] },
  { name: 'Google Business', url: 'https://g.co/kgs/YYcHpLT', icon: ['fab', 'google'] },
]
</script>

<style scoped>
/* Estilos para los iconos sociales */
.social-icon {
  @apply transition-all duration-300;
}

.social-icon:hover {
  filter: drop-shadow(0 0 0.5rem theme('colors.k-cyan'));
}
</style> 