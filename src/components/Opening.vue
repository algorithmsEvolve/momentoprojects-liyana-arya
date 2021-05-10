<template>
  <div id="opening">
    <div class="opening-logo-wrapper" :class="$mq">
      <img
        data-aos="zoom-in"
        src="../assets/app/LA.png"
        alt="LA logo"
        class="LA-logo"
        :class="$mq"
      />
    </div>

    <div class="opening-quotes" :class="$mq">
      <div class="opening-padding-wrapper" :class="$mq">
        <div class="opening-quote-text" :class="$mq">
          <p data-aos="fade-up" data-aos-delay="400">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.”
          </p>
          <p
            class="opening-surat"
            :class="$mq"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            (Ar-Rum: 21)
          </p>
        </div>
      </div>
      <div>
        <div class="opening-photo-wrapper" :class="$mq">
          <div
            class="opening-photo-container left"
            :class="$mq"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img
              src="../assets/app/opening-liyana.png"
              alt="LA logo"
              class="opening-photo photo-left"
              :class="$mq"
            />
            <h6 class="opening-nama" :class="$mq">Liyana Adhiningrum</h6>
            <h6 class="opening-nama2" :class="$mq">Putri Pertama:</h6>
            <h6 class="opening-nama2" :class="$mq">
              Mudjijadi<br />&<br />Lilis Suryanti (Alm.)
            </h6>
          </div>
          <div
            class="opening-photo-container right"
            :class="$mq"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <img
              src="../assets/app/opening-arya.png"
              alt="LA logo"
              class="opening-photo photo-right"
              :class="$mq"
            />
            <h6 class="opening-nama" :class="$mq">Arya Ghiri</h6>
            <h6 class="opening-nama2" :class="$mq">Putra Kedua:</h6>
            <h6 class="opening-nama2" :class="$mq">
              Sumarsono<br />&<br />Budi Rahayu
            </h6>
          </div>
        </div>
      </div>
      <div class="opening-padding-wrapper" :class="$mq">
        <div class="opening-tanggal" :class="$mq">
          <h6 class="opening-nama" :class="$mq" data-aos="fade-down">
            yang diselenggarakan pada :
          </h6>
          <div class="opening-tanggal-content" :class="$mq" data-aos="fade-up">
            <div class="opening-event-group" :class="$mq">
              <div class="opening-desktop-wrapper" :class="$mq">
                <div class="opening-tanggal-group" :class="$mq">
                  <img
                    src="../assets/icons/calendar.svg"
                    alt="calendar-icon"
                    class="opening-icon"
                    :class="$mq"
                  />
                  <h6 class="opening-tanggal-font" :class="$mq">
                    Sabtu, 05 Juni 2021
                  </h6>
                </div>
                <div class="opening-tanggal-group" :class="$mq">
                  <img
                    src="../assets/icons/clock.svg"
                    alt="clock-icon"
                    class="opening-icon"
                    :class="$mq"
                  />
                  <h6 class="opening-tanggal-font" :class="$mq">
                    12.00 - 14.00 WIB
                  </h6>
                </div>
              </div>
              <div class="opening-tanggal-group alamat" :class="$mq">
                <div class="opening-icon-top" :class="$mq">
                  <img
                    src="../assets/icons/map-marker.svg"
                    alt="map-marker-icon"
                    class="opening-icon"
                    :class="$mq"
                  />
                </div>
                <h6 class="opening-tanggal-font alamat" :class="$mq">
                  Saung Makan Jagarawa<br />Jl. KH Hasyim Ashari No.99,
                  RT.002/RW.009, Cipondoh, Kota Tangerang
                </h6>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div class="button-buka-undangan opening-desktop-hide" :class="$mq">
              <a
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MWRjN3RhbmtzMXEzOGgyN2djYnVrNnJ1aTYgbW9tZW50b3Byb2plY3RzLmlkQG0&tmsrc=momentoprojects.id%40gmail.com"
                target="_blank"
                class="button-bu-icon button-a"
                :class="$mq"
              >
                <img
                  src="../assets/icons/clipboard.svg"
                  alt="clipboard-icon"
                  class="button-icon"
                  :class="$mq"
                />
                <div class="button-bu-text" :class="$mq">Catat di Calendar</div>
              </a>
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