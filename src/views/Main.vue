<template>
  <div class="container bg-vector" :class="$mq">
    <!-- vector-background -->
    <background />
    <cover />
    <opening />
    <times />
    <background2 />
    <galleries />
    <rsvp />
    <guest />
    <floating_menu />
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
};
</script>

<style src="@/assets/css/app.css"/>