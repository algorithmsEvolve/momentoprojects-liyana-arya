<template>
  <div class="container bg-vector" :class="$mq">
    <!-- vector-background -->
    <background :opened="opened" />
    <cover v-model="opened" v-if="!opened" />
    <br v-show="opened" />
    <!-- <transition name="fade" mode="in-out"> -->
    <opening v-if="opened" />
    <times v-show="opened" />
    <template v-if="opened">
      <background2 />
      <galleries />
      <rsvp />
      <guest :wishes_data="wishes_data" />
    </template>
    <floating_menu v-if="opened" />
    <!-- </transition> -->
  </div>
</template>

<script>
import firebase from "@/configs/firebaseConfig";
import Background from "../components/Background";
import Background2 from "../components/Background2";
import Cover from "../components/Cover";
import Opening from "../components/Opening";
import Times from "../components/Times";
import Galleries from "../components/Galleries";
import Rsvp from "../components/Rsvp";
import Guest from "../components/Guest";
import FloatingMenu from "../components/items/FloatingMenu";
const db = firebase.firestore();
const wishesRef = db.collection("wishes");

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
    wishes_data: [],
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
  methods: {
    get_wishes() {
      wishesRef
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
          this.wishes_data = [];
          querySnapshot.forEach((doc) => {
            this.wishes_data.push({
              id: doc.id,
              name: doc.data().name,
              message: doc.data().message,
            });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  mounted() {
    var audio = new Audio(require("@/assets/music/bts.mp3")); // path to file
    audio.play();
  },
  created() {
    this.get_wishes();
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