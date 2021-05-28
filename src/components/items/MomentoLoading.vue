<template>
  <div>
    <div class="spinner">
      <img src="@/assets/momentospin.gif" alt="momento loading" width="150" />
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
</style>