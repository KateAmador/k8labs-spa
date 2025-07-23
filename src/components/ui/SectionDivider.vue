<template>
  <div class="relative" :style="{ color: color }">
    <div class="absolute inset-0" :class="inverted ? 'transform rotate-180' : ''">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="w-full h-auto block fill-current">
        <path d="M1440 100H0V0h1440v100z" class="opacity-0"></path>
        <path d="M0 0h1440v20c-26.6-4.9-56.6-10.1-90-15-103.1-15.1-226.6-29.9-360-25-125.1 4.5-245.2 24.3-360 25-112.5.7-220.3-13.4-330-25C203.1-1.3 103.1-1.3 0 0v0z" class="opacity-10"></path>
        <path d="M0 0h1440v40c-26.6-9.9-56.6-20.1-90-30-103.1-30.1-226.6-59.9-360-50-125.1 9.5-245.2 49.3-360 50-112.5.7-220.3-26.6-330-50C203.1 4.7 103.1 4.7 0 10v-10z" class="opacity-10"></path>
        <path d="M0 0h1440v60c-26.6-14.9-56.6-30.1-90-45-103.1-45.1-226.6-89.9-360-75-125.1 14.5-245.2 74.3-360 75-112.5.7-220.3-39.8-330-75C203.1 9.7 103.1 9.7 0 20v-20z" class="opacity-10"></path>
        <path d="M0 0h1440v80c-26.6-19.8-56.6-40.1-90-60-103.1-60.1-226.6-119.9-360-100-125.1 19.5-245.2 99.3-360 100-112.5.7-220.3-53.1-330-100C203.1 14.7 103.1 14.7 0 30v-30z" class="opacity-10"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#0a192f' // k-dark-blue
  },
  inverted: {
    type: Boolean,
    default: false
  }
})
</script> 