<template>
  <div>
    <div id="rsvp" class="padding-container">
      <p class="rsvp">RSVP</p>
      <div class="form-rsvp-container">
        <div class="rsvp-header-container">
          <img
            src="../assets/app/lily-3.svg"
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
                    value="true"
                    v-model="kehadiran"
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
                    value="false"
                    v-model="kehadiran"
                  />
                  <label for="tidak_hadir">Maaf, tidak dapat hadir</label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group" v-if="kehadiran == 'true'">
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
                    value="1"
                    checked
                  />
                  <label for="sendiri" class="">Sendiri</label>
                </div>
              </div>
              <div>
                <div class="radio-item">
                  <input type="radio" id="berdua" name="jumlah" value="2" />
                  <label for="berdua">Berdua</label>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <div class="button-buka-undangan" :class="$mq">
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
export default {
  data() {
    return {
      kehadiran: "true",
    };
  },
};
</script>

<style src="@/assets/css/sections/rsvp.css" scoped/>