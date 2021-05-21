<template>
  <!-- end vector background -->
  <div class="cover-content overflow-hidden" :class="$mq" data-aos="zoom-in">
    <div class="cover-middle" :class="$mq">
      <h1 class="cover-title" :class="$mq">Undangan Pernikahan</h1>
      <div class="cover-inside" :class="$mq">
        <h1 class="cover-name-1" :class="$mq">Liyana</h1>
        <h1 class="cover-name-and" :class="$mq">&</h1>
        <h1 class="cover-name-2" :class="$mq">Arya</h1>
      </div>
      <div v-if="$route.params.username && loading">
        <LoadingSpinner></LoadingSpinner>
      </div>
      <h1 class="cover-yth" :class="$mq">{{ for_guest }}</h1>
      <div class="button-container" :class="$mq">
        <div
          class="button-buka-undangan"
          :class="$mq"
          @mouseenter="change_email_icon(true)"
          @mouseleave="change_email_icon(false)"
          @click="
            change_email_icon(true);
            open_with_delay();
          "
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
  </div>
</template>

<script>
import LoadingSpinner from "@/components/items/LoadingSpinner";
import firebase from "@/configs/firebaseConfig";
const db = firebase.firestore();
const guestsRef = db.collection("guests");

export default {
  name: "Cover",
  components: { LoadingSpinner },
  data() {
    return {
      loading: false,
      button_hovered: false,
      for_guest: "",
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
    get_guest() {
      this.$cookie.delete("username");

      this.$cookie.delete("name");

      this.$cookie.delete("attendance");

      if (this.$route.params.username) {
        this.loading = true;

        guestsRef
          .doc(this.$route.params.username)
          .get()
          .then((item) => {
            if (item.exists) {
              this.for_guest = "Kepada Yth: " + item.data().name;
              this.$cookie.set("username", item.data().username, 1);
              this.$cookie.set("name", item.data().name, 1);
              this.$cookie.set("attendance", item.data().attendance, 1);
            } else {
              this.$cookie.set("username", "guest", 1);
              this.$cookie.set("name", "guest", 1);
            }

            this.loading = false;
          })
          .catch((error) => {
            this.loading = false;

            console.log("Error getting documents: ", error);
          });
      }
    },
    change_email_icon(bool) {
      this.button_hovered = bool;
    },
    open() {
      var audio = new Audio(
        "https://firebasestorage.googleapis.com/v0/b/liyana-arya-wedding.appspot.com/o/BTS-Answer-Love-Myself-Piano-Cov.mp3?alt=media&token=8fcd605b-bd32-40d6-976d-acdb1d6f401c"
      ); // path to file
      if (typeof audio.loop == "boolean") {
        audio.loop = true;
      } else {
        audio.addEventListener(
          "ended",
          function () {
            this.currentTime = 0;
            this.play();
          },
          false
        );
      }
      audio.play();
      this.$emit("input", true);
    },
    open_with_delay() {
      setTimeout(() => this.open(), 200);
    },
  },
  created() {
    this.get_guest();
  },
};
</script>
<style src="@/assets/css/sections/cover.css" scoped/>
