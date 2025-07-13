<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-fondo-oscuro text-texto-claro overflow-hidden">
    <BackgroundGrid />
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-center px-4 relative z-10"
    >
      <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Transforma tu presencia digital. <br />
      </h1>
      <h3 class="text-2xl md:text-3xl font-bold leading-tight mb-4">
        Diseño sitios web modernos y automatizaciones que hacen crecer tu negocio.
      </h3>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <a href="#servicios" @click="scrollToServices" class="bg-primario hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative z-20">
          Ver servicios
        </a>
        <a href="#contacto" @click="scrollToContact" class="bg-secundario hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative z-20">
          Contáctame
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundGrid from '../ui/BackgroundGrid.vue'

const scrollToContact = (event) => {
  console.log('Hero scrollToContact called', event);
  event.preventDefault();
  const contactSection = document.getElementById('contacto');
  console.log('Hero contactSection found:', contactSection);
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToServices = (event) => {
  console.log('Hero scrollToServices called', event);
  event.preventDefault();
  const servicesSection = document.getElementById('servicios');
  console.log('Hero servicesSection found:', servicesSection);
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* Scoped styles for HeroSection */
</style> 