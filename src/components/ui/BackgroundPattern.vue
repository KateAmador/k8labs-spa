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
    </div>
  </div>
</template>

<script setup>
defineProps({
  pattern: {
    type: String,
    default: 'dots',
    validator: (value) => ['dots', 'grid', 'waves'].includes(value)
  },
  opacity: {
    type: String,
    default: 'text-current/[0.03]'
  }
})
</script> 