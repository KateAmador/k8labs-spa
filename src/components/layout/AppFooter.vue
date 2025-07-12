<template>
  <footer id="footer" class="relative py-12 bg-fondo-oscuro text-texto-claro">
    <div class="container mx-auto px-4 text-center">
      <div class="flex flex-wrap justify-center gap-6 mb-6">
        <!-- WhatsApp -->
        <a 
          href="https://wa.link/4bm659"
          target="_blank" 
          rel="noopener noreferrer"
          class="text-white hover:text-primario hover:scale-110 transition-all duration-300 flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span class="sr-only">WhatsApp</span>
        </a>

        <!-- Facebook -->
        <a 
          href="https://web.facebook.com/K8Labs/"
          target="_blank" 
          rel="noopener noreferrer"
          class="text-white hover:text-primario hover:scale-110 transition-all duration-300 flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 01.353.052v3.46l-1.813.001c-1.744 0-2.251.829-2.251 2.059v1.883h4.145l-.54 3.667h-3.605v7.98H9.101z"/>
          </svg>
          <span class="sr-only">Facebook</span>
        </a>

        <!-- Google Business -->
        <a 
          href="https://g.co/kgs/YYcHpLT"
          target="_blank" 
          rel="noopener noreferrer"
          class="text-white hover:text-primario hover:scale-110 transition-all duration-300 flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.78 17.275c-2.866 0-5.195-2.329-5.195-5.195s2.329-5.195 5.195-5.195c1.412 0 2.575.526 3.485 1.376l-1.412 1.412c-.386-.375-.957-.812-2.073-.812-1.771 0-3.213 1.464-3.213 3.219 0 1.771 1.442 3.219 3.213 3.219 2.055 0 2.836-1.479 2.955-2.238h-2.955V11.05h4.921c.045.263.091.526.091.876.001 2.986-2.001 5.349-5.012 5.349z"/>
          </svg>
          <span class="sr-only">Google Business</span>
        </a>
      </div>
      <p class="text-texto-secundario">&copy; 2025 K8Labs | Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
a:hover svg {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style> 