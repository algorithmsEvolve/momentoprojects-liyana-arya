<template>
  <div class="component-blocker">
    <div class="vector">
      <img
        src="../assets/app/lily-1.svg"
        alt="lily1-vector"
        class="lily1"
        :class="$mq"
      />
      <img
        src="../assets/app/butterflies-1.svg"
        alt="butterfly1-vector"
        class="butterfly1"
        :class="$mq"
      />
      <img
        src="../assets/app/butterflies-2.svg"
        alt="butterfly2-vector"
        class="butterfly2"
        :class="$mq"
      />
      <img
        src="../assets/app/butterflies-3.svg"
        alt="butterfly3-vector"
        class="butterfly3"
        :class="$mq"
      />
      <img
        src="../assets/app/lily-2.svg"
        alt="lily2-vector"
        class="lily2"
        :class="$mq"
      />
    </div>
    <!-- end vector background -->
    <div class="cover-content overflow-hidden" :class="$mq">
      <h1 class="cover-title" :class="$mq">Undangan Pernikahan</h1>
      <div class="cover-inside" :class="$mq">
        <h1 class="cover-name-1" :class="$mq">Liyana</h1>
        <h1 class="cover-name-and" :class="$mq">&</h1>
        <h1 class="cover-name-2" :class="$mq">Arya</h1>
      </div>
      <h1 class="cover-yth" :class="$mq">Kepada Yth: nama tamu</h1>
      <div
        class="button-buka-undangan"
        :class="$mq"
        @mouseenter="change_email_icon(true)"
        @mouseleave="change_email_icon(false)"
      >
        <div class="button-bu-icon" :class="$mq">
          <img
            :src="email_icon"
            alt="email-icon"
            :class="[
              $mq,
              button_hovered ? 'cover-email-icon-open' : 'cover-email-icon',
            ]"
          />
          <div class="button-bu-text" :class="$mq">Buka Undangan</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Cover",
  data() {
    return {
      button_hovered: false,
    };
  },
  computed: {
    email_icon() {
      return this.button_hovered == false
        ? require(`../assets/icons/email.svg`)
        : require(`../assets/icons/email-open.svg`);
    },
  },
  methods: {
    change_email_icon(bool) {
      this.button_hovered = bool;
    },
  },
};
</script>
<style src="@/assets/css/sections/cover.css" scoped/>
