<template>
  <div>
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