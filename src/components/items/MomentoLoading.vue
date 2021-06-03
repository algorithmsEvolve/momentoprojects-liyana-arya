<template>
  <div>
    <div class="spinner">
      <img
        src="@/assets/momentospin.png"
        class="spin-logo"
        alt="momento loading"
        width="100"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner {
  position: absolute;
  left: 0;
  margin: auto;
  bottom: 50vh;
  right: 0;
  z-index: 100;
}

.spin-logo {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>