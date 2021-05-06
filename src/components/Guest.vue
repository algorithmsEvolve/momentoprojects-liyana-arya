<template>
  <div id="live">
    <div class="padding-container">
      <p class="guest-title" data-aos="fade-down">Live Streaming</p>
      <div class="youtube-video" data-aos="fade-up">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZbC7hvPVYYg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="ucapan-doa">
        <div class="ud-line-img">
          <img
            src="../assets/app/line-2.png"
            alt="line2-icon"
            class="line2-icon"
            :class="$mq"
          />
        </div>
        <p class="guest-title" data-aos="fade-down">Ucapan & Doa</p>
        <div data-aos="fade-up" class="ud-container">
          <template v-if="wishes_data.length">
            <template v-for="wish in wishes_data">
              <div class="ud-wrapper" :key="wish.id">
                <div class="nama">{{ wish.name }}</div>
                <div class="ucapan">{{ wish.message }}</div>
              </div>
            </template>
          </template>
          <template v-else>
            <div class="ud-wrapper">
              <div class="ucapan">Belum ada ucapan.</div>
            </div>
          </template>
        </div>
      </div>
      <div class="guest-line-bottom">
        <img
          src="../assets/app/lily-5.png"
          alt="lily5-icon"
          class="lily5-icon"
          :class="$mq"
        />
      </div>
      <div class="form-ucapan-wrapper" data-aos="fade-up">
        <div class="form-group">
          <div class="rsvp-label">
            <p>Nama</p>
          </div>
          <div class="rsvp-input">
            <input
              type="text"
              name="nama"
              placeholder="Masukkan nama anda..."
              v-model="input_form.name"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="rsvp-label">
            <p>Pesan</p>
          </div>
          <div class="rsvp-input">
            <textarea
              type="text"
              name="nama"
              placeholder="Tulis pesanmu..."
              cols="30"
              rows="5"
              wrap="off"
              @keyup="change_message_length"
              v-model="input_form.message"
            />
            <div class="text-length">
              <p>{{ message_length }}/ 200</p>
            </div>
          </div>
        </div>
        <div class="button-container">
          <div class="button-buka-undangan" :class="$mq" @click="submit_wish()">
            <div class="button-bu-icon" :class="$mq">
              <div class="button-bu-text" :class="$mq">Kirim</div>
            </div>
          </div>
        </div>
        <div class="powered">
          <p>Powered by: Azeg</p>
        </div>
      </div>
    </div>
    <div class="powered-lily-bottom" style="position: relative">
      <img
        src="../assets/app/lily-6.png"
        alt="lily6-icon"
        class="lily6-icon"
        :class="$mq"
      />
    </div>
  </div>
</template>

<script>
import firebase from "@/configs/firebaseConfig";
const db = firebase.firestore();
const wishesRef = db.collection("wishes");
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default {
  props: ["wishes_data"],
  data() {
    return {
      id: null,
      input_form: {
        name: null,
        message: null,
        createdAt: timestamp,
      },
      message_length: 0,
      wishes_data: [],
    };
  },
  methods: {
    change_message_length() {
      this.message_length = this.input_form.message.length;
    },
    get_id() {
      wishesRef
        .orderBy("createdAt", "desc")
        .limit(1)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((item) => {
            this.id = "" + (parseInt(item.id) + 1);
          });
        });
    },
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
    submit_wish() {
      this.check_data();
      wishesRef
        .doc(this.id)
        .set(this.input_form)
        .then(() => {
          alert("Document successfully written!");
          this.get_id();
          this.clear_wish_form();
          this.get_wishes();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    clear_wish_form() {
      this.input_form = {
        name: null,
        message: null,
        createdAt: timestamp,
      };
    },
    check_data() {
      this.input_form.name =
        this.input_form.name.slice(0, 0) +
        this.input_form.name.charAt(0).toUpperCase() +
        this.input_form.name.slice(1);
      this.input_form.message =
        this.input_form.message.slice(0, 0) +
        this.input_form.message.charAt(0).toUpperCase() +
        this.input_form.message.slice(1);
    },
  },
  created() {
    this.get_id();
  },
};
</script>

<style src="@/assets/css/sections/guest.css" scoped/>