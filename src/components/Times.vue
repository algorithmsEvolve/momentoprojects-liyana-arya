<template>
  <div id="time">
    <div class="countdown-container">
      <div class="countdown-wrapper">
        <div class="count">
          <div class="time">
            <div class="label">Hari</div>
            <div class="value">{{ hari }}</div>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <div class="label">Jam</div>
            <div class="value">{{ jam }}</div>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <div class="label">Menit</div>
            <div class="value">{{ menit }}</div>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <div class="label">Detik</div>
            <div class="value">{{ detik }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="maps-container">
      <div class="maps" :class="$mq">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5206170996235!2d106.67241895032382!3d-6.194826995493306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f909b90630f5%3A0xf90500cba8965a0b!2sJagarawa!5e0!3m2!1sen!2sid!4v1619213762491!5m2!1sen!2sid"
          class="g-maps"
          :class="$mq"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="button-container">
      <div class="button-buka-undangan" :class="$mq">
        <div class="button-bu-icon" :class="$mq">
          <img
            src="../assets/icons/map-marker-primary.svg"
            alt="map-icon"
            class="button-icon"
            :class="$mq"
          />
          <div class="button-bu-text" :class="$mq">Lihat Arah Lokasi</div>
        </div>
      </div>
    </div>
    <div class="prokes-container padding-container">
      <div class="prokes-content-container">
        <div class="prokes-text-wrapper">
          <p>
            Acara ini diselenggarakan dengan mematuhi protokol kesehatan yang
            berlaku demi mencegah penyebaran virus Covid-19. Tanpa mengurangi
            rasa hormat, kepada para tamu undangan dimohon kesediaannya untuk :
          </p>
        </div>
        <div class="prokes-icons-wrapper">
          <div class="prokes">
            <div class="prokes-icon">
              <img
                src="../assets/icons/jaga-jarak.svg"
                alt="map-icon"
                class="prokes-icon-img"
                :class="$mq"
              />
            </div>
            <div class="prokes-text">
              <p>Menjaga<br />Jarak</p>
            </div>
          </div>
          <div class="prokes">
            <div class="prokes-icon">
              <img
                src="../assets/icons/pakai-masker.svg"
                alt="map-icon"
                class="prokes-icon-img"
                :class="$mq"
              />
            </div>
            <div class="prokes-text">
              <p>Memakai<br />Masker</p>
            </div>
          </div>
          <div class="prokes">
            <div class="prokes-icon">
              <img
                src="../assets/icons/cuci-tangan.svg"
                alt="map-icon"
                class="prokes-icon-img"
                :class="$mq"
              />
            </div>
            <div class="prokes-text">
              <p>Mencuci<br />Tangan</p>
            </div>
          </div>
          <div class="prokes">
            <div class="prokes-icon">
              <img
                src="../assets/icons/cek-suhu.svg"
                alt="map-icon"
                class="prokes-icon-img"
                :class="$mq"
              />
            </div>
            <div class="prokes-text">
              <p>Cek<br />Suhu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Times",
  data() {
    return {
      hari: null,
      jam: null,
      menit: null,
      detik: null,
    };
  },
  methods: {
    get_count_down() {
      let countDownDate = new Date("Jun 5, 2021 12:00:00").getTime();
      let now = new Date().getTime();

      let distance = countDownDate - now;
      if (distance >= 0) {
        setTimeout(() => {
          // Time calculations for days, hours, minutes and seconds
          this.hari = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.jam = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.detik = Math.floor((distance % (1000 * 60)) / 1000);
          this.get_count_down();
        }, 1000);
      }
    },
  },
  created() {
    this.get_count_down();
  },
};
</script>

<style src="@/assets/css/sections/times.css" scoped/>