<template>
  <section id="proyectos" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center"
      >
        <h2 class="text-4xl font-bold mb-4">Proyectos Destacados</h2>
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
          class="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.name" class="w-full h-auto transform group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-white text-lg font-bold">Ver Proyecto</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 group-hover:text-primario transition-colors">{{ project.name }}</h3>
            <p class="text-texto-secundario mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" class="bg-gris-suave text-texto-secundario text-sm font-semibold px-3 py-1 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </a>
      </div>
      <div class="text-center mt-12 hidden">
        <a href="https://portafolio.k8labs.dev" target="_blank" class="text-primario font-bold hover:underline">
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
/* Scoped styles for ProjectsSection */
</style> 