<template>
  <div id="rsvp">
    <!-- MOBILE -->
    <div
      v-if="$mq == 'mobile'"
      class="desktop-hide padding-container"
      :class="$mq"
    >
      <p class="rsvp" data-aos="fade-down" :class="$mq">RSVP</p>
      <div class="form-rsvp-container" data-aos="fade-up" :class="$mq">
        <div class="rsvp-header-container" :class="$mq">
          <img
            src="../assets/app/lily-3.png"
            alt="lily3-icon"
            class="lily3-icon"
            :class="$mq"
          />
          <p
            class="rsvp-title"
            :class="$mq"
            v-if="$cookie.get('attendance') == 0 || edit_rsvp"
          >
            Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan
            hadir atau memberikan doa bila berhalangan. Atas kehadiran dan
            doanya, kami ucapkan terimakasih.
          </p>
          <p class="rsvp-title" :class="$mq" v-else>
            Terimakasih telah mengisi kehadiran pada halaman ini. Apabila
            Bapak/Ibu/Saudara/i ingin mengubah data kehadiran yang diisi,
            silahkan klik tombol dibawah ini.<br />Terimakasih
          </p>
        </div>
        <template v-if="$cookie.get('attendance') == 0 || edit_rsvp">
          <div class="form-rsvp-wrapper" :class="$mq">
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
                <p>No. Handphone</p>
              </div>
              <div class="rsvp-input" :class="$mq">
                <input
                  autocomplete="off"
                  type="text"
                  name="nama"
                  placeholder="Masukkan nomor handphone..."
                  class="input-gold-hover"
                  :class="$mq"
                  v-model="input_form.phone"
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
                  v-model="input_form.message"
                />
              </div>
            </div>
            <div class="form-group" :class="$mq">
              <div class="rsvp-label" :class="$mq">
                <p>Apa kamu akan hadir?</p>
              </div>
              <div class="rsvp-radio-input" :class="$mq">
                <div>
                  <div class="radio-item" :class="$mq">
                    <input
                      type="radio"
                      id="hadir"
                      name="kehadiran"
                      :value="boolean.true"
                      v-model="input_form.attendance"
                    />
                    <label for="hadir">Aku akan hadir</label>
                  </div>
                </div>
                <div>
                  <div class="radio-item" :class="$mq">
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
            <div
              class="form-group"
              :class="$mq"
              v-if="input_form.attendance === true"
            >
              <div class="rsvp-label" :class="$mq">
                <p>Bagaimana kamu akan hadir?</p>
              </div>
              <div class="rsvp-radio-input" :class="$mq">
                <div>
                  <div class="radio-item" :class="$mq">
                    <input
                      type="radio"
                      id="sendiri"
                      name="jumlah"
                      :value="how.sendiri"
                      v-model="input_form.how"
                    />
                    <label for="sendiri">Sendiri</label>
                  </div>
                </div>
                <div>
                  <div class="radio-item" :class="$mq">
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
            <div v-if="loading">
              <LoadingSpinner></LoadingSpinner>
            </div>
            <div class="button-container" :class="$mq">
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
            <div class="rsvp-footer-img" :class="$mq">
              <img
                src="../assets/app/lily-4.png"
                alt="lily4-icon"
                class="lily4-icon"
                :class="$mq"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="form-rsvp-wrapper" :class="$mq">
            <div v-if="loading">
              <LoadingSpinner></LoadingSpinner>
            </div>
            <div class="button-container" :class="$mq">
              <div
                @click="change_attendance()"
                class="button-buka-undangan"
                :class="$mq"
              >
                <div class="button-bu-icon" :class="$mq">
                  <div class="button-bu-text" :class="$mq">Ubah Kehadiran</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      v-if="$mq == 'desktop'"
      class="mobile-hide padding-container"
      :class="$mq"
    >
      <img
        src="../assets/app/lily-3.png"
        alt="lily3-icon"
        class="lily3-icon"
        :class="$mq"
      />

      <div class="rsvp-header-container" :class="$mq">
        <p class="rsvp" data-aos="fade-down" :class="$mq">RSVP</p>
        <p class="rsvp-title" data-aos="fade-down" :class="$mq">
          Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan hadir
          atau memberikan doa bila berhalangan. Atas kehadiran dan doanya, kami
          ucapkan terimakasih.
        </p>
      </div>
      <div class="form-rsvp-container" data-aos="fade-up" :class="$mq">
        <div class="photo-rsvp" :class="$mq">
          <img
            src="../assets/app/gallery/rsvp.jpg"
            alt="rsvp-img"
            class="rsvp-img"
            :class="$mq"
          />
        </div>
        <template v-if="$cookie.get('attendance') == 0 || edit_rsvp">
          <div class="form-rsvp-wrapper" :class="$mq">
            <div class="flex" :class="$mq">
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
                    class="input-gold-hover input-flex"
                    :class="$mq"
                    v-model="input_form.name"
                  />
                </div>
              </div>
              <div class="form-group" :class="$mq">
                <div class="rsvp-label" :class="$mq">
                  <p>No. Handphone</p>
                </div>
                <div class="rsvp-input" :class="$mq">
                  <input
                    autocomplete="off"
                    type="text"
                    name="nama"
                    placeholder="Masukkan nomor handphone..."
                    class="input-gold-hover input-flex"
                    :class="$mq"
                    v-model="input_form.phone"
                  />
                </div>
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
                  v-model="input_form.message"
                />
              </div>
            </div>
            <div class="form-group" :class="$mq">
              <div class="rsvp-label" :class="$mq">
                <p>Apa kamu akan hadir?</p>
              </div>
              <div class="rsvp-radio-input" :class="$mq">
                <div>
                  <div class="radio-item" :class="$mq">
                    <input
                      type="radio"
                      id="hadir"
                      name="kehadiran"
                      :value="boolean.true"
                      v-model="input_form.attendance"
                    />
                    <label for="hadir">Aku akan hadir</label>
                  </div>
                </div>
                <div>
                  <div class="radio-item" :class="$mq">
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
            <div
              class="form-group"
              :class="$mq"
              v-if="input_form.attendance === true"
            >
              <div class="rsvp-label" :class="$mq">
                <p>Bagaimana kamu akan hadir?</p>
              </div>
              <div class="rsvp-radio-input" :class="$mq">
                <div>
                  <div class="radio-item" :class="$mq">
                    <input
                      type="radio"
                      id="sendiri"
                      name="jumlah"
                      :value="how.sendiri"
                      v-model="input_form.how"
                    />
                    <label for="sendiri">Sendiri</label>
                  </div>
                </div>
                <div>
                  <div class="radio-item" :class="$mq">
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
            <div v-if="loading">
              <LoadingSpinner></LoadingSpinner>
            </div>
            <div class="button-container" :class="$mq">
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
        </template>
        <template v-else>
          <div class="rsvp-inserted" :class="$mq">
            <div class="rsvp-inserted-wrapper">
              <p class="rsvp-title inserted" data-aos="fade-down" :class="$mq">
                Terimakasih telah mengisi kehadiran pada halaman ini. Apabila
                Bapak/Ibu/Saudara/i ingin mengubah data kehadiran yang diisi,
                silahkan klik tombol dibawah ini.<br />Terimakasih
              </p>
              <div v-if="loading">
                <LoadingSpinner></LoadingSpinner>
              </div>
              <div class="button-container" :class="$mq">
                <div
                  @click="change_attendance()"
                  class="button-buka-undangan"
                  :class="$mq"
                >
                  <div class="button-bu-icon" :class="$mq">
                    <div class="button-bu-text" :class="$mq">
                      Ubah Kehadiran
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/items/LoadingSpinner";
import firebase from "@/configs/firebaseConfig";
const db = firebase.firestore();
const rsvpsRef = db.collection("rsvps");
const guestsRef = db.collection("guests");
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default {
  components: { LoadingSpinner },
  data() {
    return {
      id: null,
      edit_rsvp: false,
      loading: false,
      boolean: {
        true: true,
        false: false,
      },
      how: {
        sendiri: 1,
        berdua: 2,
      },
      input_form: {
        username: this.$cookie.get("username"),
        name: "",
        phone: "",
        message: "",
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

      if (this.id == null) {
        this.id = "1";
      }
    },
    submit_rsvp() {
      this.loading = true;

      this.check_data();

      let validate = this.rsvp_form_validation();

      if (validate.status == true) {
        let data = {
          attendance: this.input_form.attendance == true ? 1 : 2,
        };

        rsvpsRef
          .doc(this.id)
          .set(this.input_form)
          .then(() => {
            guestsRef

              .doc(this.$route.params.username)

              .update(data)

              .catch((error) => {
                console.log(error);
              });

            this.clear_rsvp_form();

            this.edit_rsvp = false;

            this.$swal({
              icon: "success",
              html:
                "<h5>Liyana & Arya Wedding</h5><h6>Terimakasih Atas Konfirmasinya :)</h6>",
              showConfirmButton: true,
              confirmButtonColor: "#3F6D97",
              iconColor: "#3F6D97",
            });

            this.loading = false;
          })
          .catch((error) => {
            this.$swal({
              icon: "error",
              html:
                "<h6>Terjadi kesalahan. Mohon ulangi beberapa menit lagi :(</h6>",
              showConfirmButton: true,
            });

            this.loading = false;
          });
      } else {
        this.input_form.how = 1;

        this.$swal({
          icon: "error",
          html: validate.message,
          showConfirmButton: true,
        });

        this.loading = false;
      }
    },
    rsvp_form_validation() {
      let validate = {
        status: true,
        message: "",
      };
      if (this.input_form.message.length > 200) {
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

      if (!this.input_form.phone.length) {
        validate.status = false;
        validate.message =
          validate.message + "<h6>Harap masukkan nomor handphone Anda.</h6>";
      }

      if (!this.input_form.message.length) {
        validate.status = false;
        validate.message = validate.message + "<h6>Harap masukkan pesan.</h6>";
      }

      return validate;
    },
    clear_rsvp_form() {
      this.input_form = {
        name: null,
        phone: null,
        message: null,
        attendance: true,
        how: 1,
        createdAt: timestamp,
        username: this.$cookie.get("username"),
      };
    },
    check_data() {
      if (!this.input_form.attendance) {
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
    change_attendance() {
      this.loading = true;

      rsvpsRef
        .where("username", "==", this.input_form.username)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((item) => {
            if (item.exists) {
              this.id = item.id;

              this.input_form = {
                name: item.data().name,
                phone: item.data().phone,
                message: item.data().message,
                attendance: item.data().attendance,
                how: item.data().how == 0 ? 1 : item.data().how,
                createdAt: timestamp,
                username: item.data().username,
              };
            }
          });

          this.loading = false;

          this.edit_rsvp = true;
        })
        .catch((error) => {
          this.loading = false;

          console.log("Error getting documents: ", error);
        });
    },
  },
  created() {
    this.get_id();
  },
};
</script>

<style src="@/assets/css/sections/rsvp.css" scoped/>