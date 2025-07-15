<script setup>
/**
 * Componente de consentimiento de cookies
 * Muestra un popup informativo sobre el uso de cookies y tecnologías similares
 */
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showBanner = ref(false)

onMounted(() => {
  // Verificar si el usuario ya ha dado su consentimiento
  const hasConsented = localStorage.getItem('cookieConsent')
  if (!hasConsented) {
    showBanner.value = true
  } else if (hasConsented === 'accepted') {
    // Si ya había consentimiento, actualizar Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      })
    }
  }
  // Si hasConsented === 'rejected', no mostramos el banner y mantenemos el estado denegado por defecto
})

const acceptCookies = () => {
  // Guardar el consentimiento en localStorage
  localStorage.setItem('cookieConsent', 'accepted')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  
  // Actualizar el estado de consentimiento en Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    })
  }
  
  showBanner.value = false
}

const rejectCookies = () => {
  // Guardar el rechazo en localStorage
  localStorage.setItem('cookieConsent', 'rejected')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  
  // Mantener el estado de consentimiento denegado (ya está configurado por defecto)
  showBanner.value = false
}

const goToPrivacyPolicy = () => {
  router.push('/privacidad')
}
</script>

<template>
  <Transition name="cookie-banner">
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg border-t border-gray-700"
    >
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex-1 text-sm">
          <p>
            Este sitio utiliza cookies y tecnologías similares para mejorar la experiencia de usuario y análisis anónimo del tráfico. 
            Al continuar navegando aceptas nuestra 
            <button 
              @click="goToPrivacyPolicy"
              class="text-blue-400 hover:text-blue-300 underline font-medium"
            >
              Política de Privacidad
            </button>.
          </p>
        </div>
        
        <div class="flex gap-3">
          <button
            @click="rejectCookies"
            class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
          >
            Rechazar
          </button>
          <button
            @click="acceptCookies"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: transform 0.3s ease-out;
}

.cookie-banner-enter-from {
  transform: translateY(100%);
}

.cookie-banner-leave-to {
  transform: translateY(100%);
}
</style> 