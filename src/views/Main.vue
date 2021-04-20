<template>
  <div class="cover-container bg-vector" :class="$mq">
    <!-- vector-background -->
    <cover></cover>
    <opening></opening>
  </div>
</template>

<script>
import Cover from "../components/Cover";
import Opening from "../components/Opening";

export default {
  components: {
    cover: Cover,
    opening: Opening,
  },
};
</script>

<style src="@/assets/css/app.css"/>