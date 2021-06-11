<template>
  <div id="live">
    <!--MOBILE -->
    <div v-if="$mq == 'mobile'" class="guest-mobile" :class="$mq">
      <div class="padding-container" :class="$mq">
        <p class="guest-title" data-aos="fade-down" :class="$mq">
          Live Streaming
        </p>
        <div class="youtube-video" data-aos="fade-up" :class="$mq">
          <iframe
            width="560"
            height="315"
            :src="youtube"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="ucapan-doa" :class="$mq">
          <div class="ud-line-img" :class="$mq">
            <img
              src="../assets/app/line-2.png"
              alt="line2-icon"
              class="line2-icon"
              :class="$mq"
            />
          </div>
          <p class="guest-title" data-aos="fade-down" :class="$mq">
            Ucapan & Doa
          </p>
          <div data-aos="fade-up" class="ud-container" :class="$mq">
            <template v-if="wishes_data.length">
              <template v-for="wish in wishes_data">
                <div class="ud-wrapper" :key="wish.id" :class="$mq">
                  <div class="nama" :class="$mq">{{ wish.name }}</div>
                  <div class="ucapan" :class="$mq">{{ wish.message }}</div>
                </div>
              </template>
            </template>
            <template v-else>
              <div class="ud-wrapper" :class="$mq">
                <div class="ucapan" :class="$mq">Belum ada ucapan.</div>
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
        <div class="form-ucapan-wrapper" data-aos="fade-up" :class="$mq">
          <!--
          <div class="form-group" :class="$mq">
            <div class="rsvp-label" :class="$mq">
              <p>Nama</p>
            </div>
            <div class="rsvp-input" :class="$mq">
              <input
                autocomplete="off"
                type="text"
                name="nama"
                placeholder="Masukkan nama anda..."
                class="input-gold-hover"
                :class="$mq"
                v-model="input_form.name"
              />
            </div>
          </div>
          -->
          <!--
          <div class="form-group" :class="$mq">
            <div class="rsvp-label" :class="$mq">
              <p>Pesan</p>
            </div>
            <div class="rsvp-input" :class="$mq">
              <textarea
                type="text"
                name="nama"
                placeholder="Tulis pesanmu..."
                cols="30"
                rows="5"
                wrap="off"
                class="input-gold-hover"
                :class="$mq"
                @keyup="change_message_length"
                v-model="input_form.message"
              />
              <div class="text-length" :class="$mq">
                <p>{{ message_length }} / 200</p>
              </div>
            </div>
          </div>
          <div v-if="loading">
            <LoadingSpinner></LoadingSpinner>
          </div>
          <div class="button-container" :class="$mq">
            <div
              class="button-buka-undangan"
              :class="$mq"
              @click="submit_wish()"
            >
              <div class="button-bu-icon" :class="$mq">
                <div class="button-bu-text" :class="$mq">Kirim</div>
              </div>
            </div>
          </div>
          -->
          <div class="powered" :class="$mq">
            <a :href="mail_to" :class="$mq">
              <img
                src="../assets/logo.svg"
                alt="momentoprojects-logo"
                class="momentoprojects-logo"
                :class="$mq"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="powered-lily-bottom" :class="$mq" style="position: relative">
        <img
          src="../assets/app/lily-6.png"
          alt="lily6-icon"
          class="lily6-icon"
          :class="$mq"
        />
      </div>
    </div>

    <!-- DESKTOP -->
    <div v-if="$mq == 'desktop'" class="guest-desktop" :class="$mq">
      <div class="padding-container" :class="$mq">
        <p class="guest-title" data-aos="fade-down" :class="$mq">
          Live Streaming
        </p>
        <div class="live-streaming-bg" :class="$mq">
          <img
            src="../assets/app/line-1.png"
            alt="line1-icon"
            class="line1-icon-flip"
            :class="$mq"
          />
        </div>
        <div class="youtube-video" data-aos="fade-up" :class="$mq">
          <iframe
            width="795"
            height="448"
            :src="youtube"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="ucapan-doa" :class="$mq">
          <div class="ud-line-img" :class="$mq">
            <img
              src="../assets/app/line-1.png"
              alt="line1-icon"
              class="line1-icon"
              :class="$mq"
            />
          </div>
          <p class="guest-title" data-aos="fade-down" :class="$mq">
            Ucapan & Doa
          </p>
          <div class="flex-ud">
            <div data-aos="fade-up" class="ud-container" :class="$mq">
              <div class="ud-scroll" :class="$mq">
                <template v-if="wishes_data.length">
                  <template v-for="wish in wishes_data">
                    <div class="ud-wrapper" :key="wish.id" :class="$mq">
                      <div class="nama" :class="$mq">{{ wish.name }}</div>
                      <div class="ucapan" :class="$mq">{{ wish.message }}</div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <div class="ud-wrapper" :class="$mq">
                    <div class="ucapan" :class="$mq">Belum ada ucapan.</div>
                  </div>
                </template>
              </div>
            </div>
            <!--
            <div>
              <div class="form-ucapan-wrapper" data-aos="fade-up" :class="$mq">
                <div class="form-group" :class="$mq">
                  <div class="rsvp-label" :class="$mq">
                    <p>Nama</p>
                  </div>
                  <div class="rsvp-input" :class="$mq">
                    <input
                      autocomplete="off"
                      type="text"
                      name="nama"
                      placeholder="Masukkan nama anda..."
                      class="input-gold-hover"
                      :class="$mq"
                      v-model="input_form.name"
                    />
                  </div>
                </div>
                <div class="form-group" :class="$mq">
                  <div class="rsvp-label" :class="$mq">
                    <p>Pesan</p>
                  </div>
                  <div class="rsvp-input" :class="$mq">
                    <textarea
                      type="text"
                      name="nama"
                      placeholder="Tulis pesanmu..."
                      cols="30"
                      rows="5"
                      wrap="off"
                      class="input-gold-hover"
                      :class="$mq"
                      @keyup="change_message_length"
                      v-model="input_form.message"
                    />
                    <div class="text-length" :class="$mq">
                      <p>{{ message_length }} / 200</p>
                    </div>
                  </div>
                </div>
                <div v-if="loading">
                  <LoadingSpinner></LoadingSpinner>
                </div>
                <div class="button-container" :class="$mq">
                  <div
                    class="button-buka-undangan"
                    :class="$mq"
                    @click="submit_wish()"
                  >
                    <div class="button-bu-icon" :class="$mq">
                      <div class="button-bu-text" :class="$mq">Kirim</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                -->
          </div>
        </div>
        <div class="powered" :class="$mq">
          <a :href="mail_to" :class="$mq">
            <img
              src="../assets/logo.svg"
              alt="momentoprojects-logo"
              class="momentoprojects-logo"
              :class="$mq"
            />
          </a>
        </div>
        <div class="guest-line-bottom">
          <img
            src="../assets/app/lily-5.png"
            alt="lily5-icon"
            class="lily5-icon"
            :class="$mq"
          />
        </div>
      </div>
    </div>
    <div class="powered-lily-bottom" :class="$mq" style="position: relative">
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
import LoadingSpinner from "@/components/items/LoadingSpinner";
import firebase from "@/configs/firebaseConfig";
const db = firebase.firestore();
const wishesRef = db.collection("wishes");
const livestreamRef = db.collection("livestream");
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default {
  components: { LoadingSpinner },
  data() {
    return {
      loading: false,
      id: null,
      input_form: {
        username: this.$cookie.get("username"),
        name: "",
        message: "",
        createdAt: timestamp,
      },
      youtube: "https://www.youtube.com/embed/pXjpXQwvYAI",
      message_length: 0,
      wishes_data: [],
      mail_to:
        "mailto:momentoprojects.id@gmail.com?subject=Halo, Momento Projects ID! Mau nanya nih!",
    };
  },
  methods: {
    get_livestream() {
      livestreamRef
        .doc("youtube")
        .get()
        .then((item) => {
          if (item.exists) {
            this.youtube = item.data().url;
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
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

      if (this.id == null) {
        this.id = "1";
      }
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
      this.loading = true;

      this.check_data();

      let validate = this.wish_form_validation();

      if (validate.status == true) {
        wishesRef
          .doc(this.id)
          .set(this.input_form)
          .then(() => {
            this.$swal({
              icon: "success",
              html: "<h5>Liyana & Arya Wedding</h5><h6>Terimakasih atas doa dan ucapannya :)</h6>",
              showConfirmButton: true,
              confirmButtonColor: "#3F6D97",
              iconColor: "#3F6D97",
            });

            this.loading = false;

            this.clear_wish_form();

            this.get_id();

            this.get_wishes();
          })
          .catch((error) => {
            this.$swal({
              icon: "error",
              html: "<h6>Terjadi kesalahan. Mohon ulangi beberapa menit lagi :(</h6>",
              showConfirmButton: true,
            });

            this.loading = false;
          });
      } else {
        this.$swal({
          icon: "error",
          html: validate.message,
          showConfirmButton: true,
        });

        this.loading = false;
      }
    },
    clear_wish_form() {
      this.input_form = {
        name: null,
        message: null,
        createdAt: timestamp,
        username: this.$cookie.get("username"),
      };
    },
    wish_form_validation() {
      let validate = {
        status: true,
        message: "",
      };
      if (this.message_length > 200) {
        validate.status = false;
        validate.message =
          validate.message +
          "<h6>Pesan yang anda masukkan tidak boleh lebih dari 200 karakter.</h6>";
      }
      if (!this.input_form.name.length) {
        validate.status = false;
        validate.message =
          validate.message + "<h6>Harap masukkan nama Anda.</h6>";
      }
      if (!this.input_form.message.length) {
        validate.status = false;
        validate.message = validate.message + "<h6>Harap masukkan pesan.</h6>";
      }
      return validate;
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
    this.get_livestream();
    this.get_wishes();
    this.get_id();
  },
};
</script>

<style src="@/assets/css/sections/guest.css" scoped/>