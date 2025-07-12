<template>
  <div class="animated-grid-background absolute inset-0 overflow-hidden">
    <div class="grid-lines"></div>
  </div>
</template>

<style scoped>
.animated-grid-background {
  pointer-events: none;
  z-index: 0;
}

.grid-lines {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: moveGrid 20s linear infinite;
}

@keyframes moveGrid {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50px, -50px);
  }
}
</style> 