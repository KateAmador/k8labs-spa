<template>
  <div class="absolute inset-0 overflow-hidden" :class="opacity">
    <div class="relative w-full h-full">
      <div v-if="pattern === 'dots'" class="absolute inset-0">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px); background-size: 24px 24px;"></div>
      </div>
      
      <div v-if="pattern === 'grid'" class="absolute inset-0">
        <div class="absolute inset-0" style="background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px); background-size: 32px 32px;"></div>
      </div>

      <div v-if="pattern === 'waves'" class="absolute inset-0">
        <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z" />
        </svg>
      </div>

      <div v-if="pattern === 'circuits'" class="absolute inset-0">
        <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit-board" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M0 10h5m5 0h5M5 5v5m5-5v5" stroke="currentColor" stroke-width="0.5" />
              <circle cx="5" cy="10" r="1.5" fill="currentColor" fill-opacity="0.3" />
              <circle cx="15" cy="10" r="1.5" fill="currentColor" fill-opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-board)" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pattern: {
    type: String,
    default: 'dots',
    validator: (value) => ['dots', 'grid', 'waves', 'circuits'].includes(value)
  },
  opacity: {
    type: String,
    default: 'text-current/[0.03]'
  }
})
</script> 