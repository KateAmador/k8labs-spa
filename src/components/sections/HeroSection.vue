<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-k-dark-blue text-k-text-light overflow-hidden">
    <!-- Logo K8Labs -->
    <div class="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-30">
      <img src="/favicon.svg" alt="K8Labs" class="w-12 h-12">
      <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-k-cyan to-k-magenta">K8Labs</span>
    </div>
    
    <!-- Patrones de fondo tech -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 text-6xl text-k-cyan font-mono">&lt;/&gt;</div>
      <div class="absolute top-40 right-20 text-4xl text-k-magenta font-mono">{ }</div>
      <div class="absolute bottom-40 left-20 text-5xl text-k-cyan font-mono">( )</div>
      <div class="absolute top-60 left-1/3 text-3xl text-k-magenta font-mono">[ ]</div>
      <div class="absolute bottom-60 right-1/4 text-4xl text-k-cyan font-mono">&lt; &gt;</div>
      <div class="absolute top-80 right-10 text-3xl text-k-magenta font-mono">= &gt;</div>
    </div>
    
    <!-- Círculos decorativos flotantes -->
    <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-k-cyan rounded-full animate-pulse"></div>
    <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-k-magenta rounded-full animate-pulse delay-1000"></div>
    <div class="absolute bottom-1/4 left-1/3 w-4 h-4 bg-k-cyan rounded-full animate-pulse delay-2000"></div>
    <div class="absolute bottom-1/3 right-1/4 w-2 h-2 bg-k-magenta rounded-full animate-pulse delay-500"></div>
    
    <!-- Líneas conectoras animadas -->
    <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-k-cyan to-transparent opacity-20"></div>
    <div class="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-k-magenta to-transparent opacity-10"></div>
    
    <BackgroundGrid />
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center px-4 relative z-10"
    >
      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-k-cyan to-k-magenta">
        Transforma tu presencia digital.
      </h1>
      <h2 class="text-2xl md:text-3xl font-light leading-tight mb-8 text-k-text-light">
        Diseño sitios web modernos y automatizaciones que hacen crecer tu negocio.
      </h2>
      <p class="max-w-3xl mx-auto text-k-text-dark mb-8">
        Con experiencia como Full-Stack Developer, ofrezco soluciones web a medida que combinan un diseño atractivo con un rendimiento excepcional. Desde landing pages hasta complejas aplicaciones web, mi objetivo es llevar tu proyecto al siguiente nivel.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <a href="#proyectos" class="bg-k-cyan text-k-dark-blue hover:bg-opacity-80 font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-k-cyan/20 cursor-pointer relative z-20">
          Mis Proyectos
        </a>
        <a href="#contacto" @click="scrollToContact" class="bg-transparent border-2 border-k-cyan text-k-cyan hover:bg-k-cyan hover:text-k-dark-blue font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative z-20">
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundGrid from '../ui/BackgroundGrid.vue'

const scrollToContact = (event) => {
  event.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style> 