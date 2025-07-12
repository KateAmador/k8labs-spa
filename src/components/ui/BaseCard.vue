<template>
  <div
    class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group flex flex-col relative h-full"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { delay: delay, duration: 500 } }"
  >
    <div v-if="highlighted" class="absolute top-0 right-0 bg-secundario text-white px-4 py-1 text-sm font-medium z-10">
      <slot name="highlight-badge">Popular</slot>
    </div>
    
    <!-- Efecto hover movido aquí para que cubra toda la tarjeta -->
    <div class="absolute inset-0 bg-gradient-to-br from-primario/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>

    <div class="p-8 relative flex-grow">
      <div class="relative">
        <div v-if="$slots.icon" class="mb-6">
          <slot name="icon"></slot>
        </div>

        <div v-if="$slots.header" class="mb-4">
          <slot name="header"></slot>
        </div>

        <slot></slot> <!-- Default slot for main content -->
      </div>
    </div>

    <div v-if="$slots.footer" class="mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  delay: {
    type: Number,
    default: 0
  },
  highlighted: {
    type: Boolean,
    default: false
  }
})
// @vueuse/motion is used in the template via the v-motion directive
</script> 