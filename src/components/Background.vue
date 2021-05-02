<template>
  <div class="vector">
    <template v-if="!opened">
      <img
        src="../assets/app/lily-1.png"
        alt="lily1-vector"
        class="lily1"
        :class="$mq"
      />
      <img
        src="../assets/app/butterflies-1.png"
        alt="butterfly1-vector"
        class="butterfly1"
        :class="$mq"
      />
      <img
        src="../assets/app/butterflies-2.png"
        alt="butterfly2-vector"
        class="butterfly2"
        :class="$mq"
      />
    </template>
    <img
      src="../assets/app/butterflies-3.png"
      alt="butterfly3-vector"
      :class="[$mq, opened ? 'butterfly3-opened' : 'butterfly3']"
    />
    <img
      src="../assets/app/lily-2.png"
      alt="lily2-vector"
      class=""
      :class="[$mq, opened ? 'lily2-opened' : 'lily2']"
    />
  </div>
</template>

<script>
export default {
  props: ["opened"],
};
</script>

<style src="@/assets/css/app.css" scoped/>