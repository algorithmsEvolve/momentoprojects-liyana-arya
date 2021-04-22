<template>
  <div class="container bg-vector" :class="$mq">
    <!-- vector-background -->
    <background />
    <cover />
    <opening />
    <times />
  </div>
</template>

<script>
import Background from "../components/Background";
import Cover from "../components/Cover";
import Opening from "../components/Opening";
import Times from "../components/Times.vue";

export default {
  components: {
    background: Background,
    cover: Cover,
    opening: Opening,
    times: Times,
  },
};
</script>

<style src="@/assets/css/app.css"/>