<template>
  <div class="kisah-kami-card-wrapper">
    <div class="kisah-card">
      <div class="kisah-card-content">
        <div class="kisah-card-img">
          <img
            :src="require('../../assets/app/kisah_kami/' + src)"
            :alt="'kisah-kami' + index"
            class="kisah-kami-icon"
            :class="$mq"
          />
        </div>
        <div class="kisah-card-text">
          <p>
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "text", "index"],
};
</script>

<style src="@/assets/css/items/kisah_kami_card.css" scoped/>