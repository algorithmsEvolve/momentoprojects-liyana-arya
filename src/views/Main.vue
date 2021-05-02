<template>
  <div class="container bg-vector" :class="$mq">
    <!-- vector-background -->
    <background :opened="opened" />
    <transition name="fade1" mode="out-in">
      <cover v-model="opened" v-if="!opened" />
    </transition>
    <br v-show="opened" />
    <!-- <transition name="fade" mode="in-out"> -->
    <transition name="fade2" mode="out-in">
      <opening v-show="opened" />
    </transition>
    <times v-show="opened" />
    <template v-if="opened">
      <background2 />
      <galleries />
      <rsvp />
      <guest />
    </template>
    <transition name="fade3" mode="out-in">
      <floating_menu v-if="opened" />
    </transition>
    <!-- </transition> -->
  </div>
</template>

<script>
import Background from "../components/Background";
import Background2 from "../components/Background2";
import Cover from "../components/Cover";
import Opening from "../components/Opening";
import Times from "../components/Times";
import Galleries from "../components/Galleries";
import Rsvp from "../components/Rsvp";
import Guest from "../components/Guest";
import FloatingMenu from "../components/items/FloatingMenu";

export default {
  components: {
    background: Background,
    background2: Background2,
    cover: Cover,
    opening: Opening,
    times: Times,
    galleries: Galleries,
    rsvp: Rsvp,
    guest: Guest,
    floating_menu: FloatingMenu,
  },
  watch: {
    opened: function () {
      import("@/assets/css/styling/overflow_scroll.css");
    },
  },
  data() {
    return {
      opened: false,
      test: "hidden",
    };
  },
};
</script>

<style src="@/assets/css/app.css"/>
<style>
.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0;
  transition-duration: 1s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0;
  transition-delay: 1s;
  transition-duration: 3s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade3-enter-active,
.fade3-leave-active {
  transition: opacity 0;
  transition-delay: 1s;
  transition-duration: 1s;
}
.fade3-enter, .fade3-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>