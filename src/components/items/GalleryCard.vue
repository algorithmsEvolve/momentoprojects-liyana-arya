<template>
  <div class="gallery-card-wrapper">
    <div class="gallery-card-content">
      <div class="gallery-card-img">
        <img
          :src="require('../../assets/app/gallery/' + src)"
          :alt="'gallery' + index"
          class="gallery-icon"
          :class="$mq"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "index"],
};
</script>

<style src="@/assets/css/items/gallery_card.css" scoped/>