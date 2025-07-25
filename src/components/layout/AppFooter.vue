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
          <component :is="social.icon" class="w-8 h-8" />
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
import { defineComponent } from 'vue'

// Iconos SVG simples como componentes Vue
const WhatsAppIcon = defineComponent({
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  `
})

const FacebookIcon = defineComponent({
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  `
})

const GoogleIcon = defineComponent({
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  `
})

const socialLinks = [
  { name: 'WhatsApp', url: 'https://wa.link/4bm659', icon: WhatsAppIcon },
  { name: 'Facebook', url: 'https://web.facebook.com/K8Labs/', icon: FacebookIcon },
  { name: 'Google Business', url: 'https://g.co/kgs/YYcHpLT', icon: GoogleIcon },
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