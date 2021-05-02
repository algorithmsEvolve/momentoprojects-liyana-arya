<template>
  <div>
    <div id="rsvp" class="padding-container">
      <p class="rsvp" data-aos="fade-down">RSVP</p>
      <div class="form-rsvp-container" data-aos="fade-up">
        <div class="rsvp-header-container">
          <img
            src="../assets/app/lily-3.png"
            alt="lily3-icon"
            class="lily3-icon"
            :class="$mq"
          />
          <p class="rsvp-title">
            Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan
            hadir atau memberikan doa bila berhalangan. Atas kehadiran dan
            doanya, kami ucapkan terimakasih.
          </p>
        </div>
        <div class="form-rsvp-wrapper">
          <div class="form-group">
            <div class="rsvp-label">
              <p>Nama</p>
            </div>
            <div class="rsvp-input">
              <input
                autocomplete="off"
                type="text"
                name="nama"
                placeholder="Masukkan nama anda..."
                v-model="input_form.name"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="rsvp-label">
              <p>No. Handphone</p>
            </div>
            <div class="rsvp-input">
              <input
                autocomplete="off"
                type="text"
                name="nama"
                placeholder="Masukkan nomor handphone..."
                v-model="input_form.phone"
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
                v-model="input_form.message"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="rsvp-label">
              <p>Apa kamu akan hadir?</p>
            </div>
            <div class="rsvp-radio-input">
              <div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="hadir"
                    name="kehadiran"
                    :value="boolean.true"
                    v-model="input_form.attendance"
                  />
                  <label for="hadir" class="">Aku akan hadir</label>
                </div>
              </div>
              <div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="tidak_hadir"
                    name="kehadiran"
                    :value="boolean.false"
                    v-model="input_form.attendance"
                  />
                  <label for="tidak_hadir">Maaf, tidak dapat hadir</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group" v-if="input_form.attendance === true">
            <div class="rsvp-label">
              <p>Bagaimana kamu akan hadir?</p>
            </div>
            <div class="rsvp-radio-input">
              <div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="sendiri"
                    name="jumlah"
                    :value="how.sendiri"
                    v-model="input_form.how"
                  />
                  <label for="sendiri" class="">Sendiri</label>
                </div>
              </div>
              <div>
                <div class="radio-item">
                  <input
                    type="radio"
                    id="berdua"
                    name="jumlah"
                    :value="how.berdua"
                    v-model="input_form.how"
                  />
                  <label for="berdua">Berdua</label>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <div
              @click="submit_rsvp()"
              class="button-buka-undangan"
              :class="$mq"
            >
              <div class="button-bu-icon" :class="$mq">
                <div class="button-bu-text" :class="$mq">Kirim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/configs/firebaseConfig";
const db = firebase.firestore();
const rsvpsRef = db.collection("rsvps");
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default {
  data() {
    return {
      id: null,
      boolean: {
        true: true,
        false: false,
      },
      how: {
        sendiri: 1,
        berdua: 2,
      },
      input_form: {
        name: null,
        phone: null,
        message: null,
        attendance: true,
        how: 1,
        createdAt: timestamp,
      },
    };
  },
  methods: {
    get_id() {
      rsvpsRef
        .orderBy("createdAt", "desc")
        .limit(1)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((item) => {
            this.id = "" + (parseInt(item.id) + 1);
          });
        });
    },
    submit_rsvp() {
      this.check_data();
      rsvpsRef
        .doc(this.id)
        .set(this.input_form)
        .then(() => {
          alert("Document successfully written!");
          this.get_id();
          this.clear_rsvp_form();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    clear_rsvp_form() {
      this.input_form = {
        name: null,
        phone: null,
        message: null,
        attendance: true,
        how: 1,
        createdAt: timestamp,
      };
    },
    check_data() {
      if (!this.attendance) {
        this.input_form.how = 0;
      }
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

<style src="@/assets/css/sections/rsvp.css" scoped/>