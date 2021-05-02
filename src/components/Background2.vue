<template>
  <div>
    <div class="vector">
      <img
        src="../assets/app/line-1.png"
        class="line1"
        alt="line1-vector"
        :class="$mq"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vector {
  position: absolute;
}

.line1.mobile {
  width: 45vw;
  padding: 0 0 0 0.5rem;
}
</style>