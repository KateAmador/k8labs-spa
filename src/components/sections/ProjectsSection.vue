<template>
  <section id="proyectos" class="py-20 bg-gray-900 text-white relative overflow-hidden">
    <!-- Rejilla futurista de fondo -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>
    
    <!-- Elementos tech flotantes -->
    <div class="absolute top-20 left-1/4 text-3xl text-k-cyan/20 font-mono animate-pulse">01</div>
    <div class="absolute top-40 right-1/4 text-2xl text-k-magenta/20 font-mono animate-pulse delay-1000">10</div>
    <div class="absolute bottom-32 left-1/3 text-xl text-green-400/20 font-mono animate-pulse delay-2000">11</div>
    <div class="absolute bottom-20 right-1/3 text-2xl text-yellow-400/20 font-mono animate-pulse delay-500">00</div>
    
    <!-- Líneas de conexión -->
    <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-k-cyan/30 to-transparent"></div>
    <div class="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-k-magenta/30 to-transparent"></div>
    
    <!-- Formas geométricas tech -->
    <div class="absolute top-32 right-20 w-8 h-8 border border-k-cyan/30 transform rotate-45"></div>
    <div class="absolute bottom-40 left-20 w-6 h-6 bg-k-magenta/30 rounded-full"></div>
    <div class="absolute top-1/2 left-16 w-4 h-4 bg-green-400/30"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center"
      >
        <h2 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-k-cyan via-white to-k-magenta">Proyectos Destacados</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <a
          v-for="(project, index) in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: index * 200, duration: 500 } }"
          class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 hover:shadow-2xl"
          :class="{
            'hover:border-k-cyan hover:shadow-k-cyan/20': index === 0,
            'hover:border-k-magenta hover:shadow-k-magenta/20': index === 1
          }"
        >
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.name" class="w-full h-auto transform group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-lg font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Ver Proyecto</span>
            </div>
          </div>
          <div class="p-6">
            <h3 
              class="text-2xl font-bold mb-2 transition-colors"
              :class="{
                'text-white group-hover:text-k-cyan': index === 0,
                'text-white group-hover:text-k-magenta': index === 1
              }"
            >{{ project.name }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, i) in project.technologies" 
                :key="tech" 
                class="text-sm font-semibold px-3 py-1 rounded-full transition-colors"
                :class="{
                  'bg-k-cyan/20 text-k-cyan': i % 3 === 0,
                  'bg-k-magenta/20 text-k-magenta': i % 3 === 1,
                  'bg-green-400/20 text-green-400': i % 3 === 2
                }"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-12 hidden">
        <a href="https://portafolio.k8labs.dev" target="_blank" class="text-k-cyan font-bold hover:underline">
          Ver más proyectos &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Respira Run',
    description: 'Plataforma web de gestión de eventos deportivos y venta de tickets online.',
    image: '/img/portfolio/respira.run-portafolio.png',
    technologies: ['Django', 'Vue.js', 'PostgreSQL', 'Docker', 'Redis'],
    url: 'https://respira.run'
  },
  {
    name: 'Creados Eternidad',
    description: 'Landing page ministerial desarrollada con WordPress.',
    image: '/img/portfolio/creadoseternidad.org-portafolio.png',
    technologies: ['WordPress', 'Elementor'],
    url: 'https://creadoseternidad.org'
  },
];
</script>

<style scoped>
.project-card-container {
  position: relative;
  background: linear-gradient(to right, theme('colors.k-cyan'), theme('colors.k-magenta'));
  padding: 3px;
  box-shadow: 0 0 30px theme('colors.k-cyan' / 0.2);
}

.project-card-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(to right, theme('colors.k-cyan'), theme('colors.k-magenta'));
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  filter: blur(15px);
  z-index: -1;
}

.project-card-container:hover::before {
  opacity: 0.8;
}

.project-card-container > div {
  background-color: theme('colors.k-dark-blue');
  border-radius: 6px; /* slightly smaller than parent to show border */
}
</style> 