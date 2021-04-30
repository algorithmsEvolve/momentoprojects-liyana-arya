<template>
  <div class="sticky-wrapper">
    <div class="fb-container">
      <img
        src="../../assets/icons/wedding-day.svg"
        alt="wedding-day-icon"
        class="fb-icon"
        :class="$mq"
        v-scroll-to="'#opening'"
      />
      <img
        src="../../assets/icons/house.svg"
        alt="house"
        class="fb-icon"
        :class="$mq"
        v-scroll-to="'#time'"
      />
      <img
        src="../../assets/icons/picture.svg"
        alt="picture"
        class="fb-icon"
        :class="$mq"
        v-scroll-to="'#gallery'"
      />
      <img
        src="../../assets/icons/wedding-planning.svg"
        alt="wedding-planning"
        class="fb-icon"
        :class="$mq"
        v-scroll-to="'#rsvp'"
      />
      <img
        src="../../assets/icons/live-streaming.svg"
        alt="live-streaming"
        class="fb-icon"
        :class="$mq"
        v-scroll-to="'#live'"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/items/floating_menu.css" scoped/>