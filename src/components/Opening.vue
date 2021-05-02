<template>
  <div id="opening">
    <div class="opening-logo-wrapper">
      <img
        data-aos="zoom-in"
        src="../assets/app/LA.png"
        alt="LA logo"
        class="LA-logo"
        :class="$mq"
      />
    </div>

    <div class="opening-quotes">
      <div class="opening-quote-text">
        <p data-aos="fade-up" data-aos-delay="400">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda bagi kaum yang berfikir.”
        </p>
        <p class="opening-surat" data-aos="fade-up" data-aos-delay="400">
          (Ar-Rum: 21)
        </p>
      </div>
      <div>
        <div class="opening-photo-wrapper">
          <div
            class="opening-photo-container"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img
              src="../assets/app/opening-liyana.png"
              alt="LA logo"
              class="opening-photo"
              :class="$mq"
            />
            <h6 class="opening-nama">Liyana Adhiningrum</h6>
            <h6 class="opening-nama2">Putri Pertama:</h6>
            <h6 class="opening-nama2">Mudjijadi & Lilis Suryanti (Alm.)</h6>
          </div>
          <div
            class="opening-photo-container"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <img
              src="../assets/app/opening-arya.png"
              alt="LA logo"
              class="opening-photo"
              :class="$mq"
            />
            <h6 class="opening-nama">Arya Ghiri</h6>
            <h6 class="opening-nama2">Putra Kedua:</h6>
            <h6 class="opening-nama2">Sumarmo & Budi Rahayu</h6>
          </div>
        </div>
      </div>
      <div class="opening-tanggal">
        <h6 class="opening-nama" data-aos="fade-down" data-aos-delay="800">
          yang diselenggarakan pada :
        </h6>
        <div class="opening-tanggal-content" data-aos="fade-up">
          <div class="opening-event-group">
            <div class="opening-tanggal-group">
              <img
                src="../assets/icons/calendar.svg"
                alt="calendar-icon"
                class="opening-icon"
              />
              <h6 class="opening-tanggal-font">Sabtu, 05 Juni 2021</h6>
            </div>
            <div class="opening-tanggal-group">
              <img
                src="../assets/icons/clock.svg"
                alt="clock-icon"
                class="opening-icon"
              />
              <h6 class="opening-tanggal-font">12.00 - 14.00 WIB</h6>
            </div>
            <div class="opening-tanggal-group">
              <div class="opening-icon-top">
                <img
                  src="../assets/icons/map-marker.svg"
                  alt="map-marker-icon"
                  class="opening-icon"
                />
              </div>
              <h6 class="opening-tanggal-font">
                Saung Makan Jagarawa<br />Jl. KH Hasyim Ashari No.99,
                RT.002/RW.009, Cipondoh, Kota Tangerang
              </h6>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <div class="button-buka-undangan" :class="$mq">
            <div class="button-bu-icon" :class="$mq">
              <img
                src="../assets/icons/clipboard.svg"
                alt="clipboard-icon"
                class="button-icon"
                :class="$mq"
              />
              <div class="button-bu-text" :class="$mq">Catat di Calendar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/sections/opening.css" scoped/>