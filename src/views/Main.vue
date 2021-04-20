<template>
  <div class="container bg-vector" :class="$mq">
    <!-- vector-background -->
    <background />
    <cover />
    <opening />
  </div>
</template>

<script>
import Background from "../components/Background";
import Cover from "../components/Cover";
import Opening from "../components/Opening";

export default {
  components: {
    background: Background,
    cover: Cover,
    opening: Opening,
  },
};
</script>

<style src="@/assets/css/app.css"/>