<template>
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-fondo-oscuro"></div>
    <div class="relative w-full h-full grid grid-cols-8 md:grid-cols-12 gap-2 p-8">
      <div 
        v-for="index in 96" 
        :key="index"
        class="animate-block"
        :style="{
          animationDelay: `${index * 0.1}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.animate-block {
  width: 100%;
  aspect-ratio: 1;
  background: rgba(46, 100, 251, 0.1);
  border: 1px solid rgba(46, 100, 251, 0.3);
  border-radius: 4px;
  animation: blockAnimation 4s infinite;
}

@keyframes blockAnimation {
  0% {
    opacity: 0.1;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.1;
    transform: scale(0.95);
  }
}
</style> 