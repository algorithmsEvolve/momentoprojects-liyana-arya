<template>
  <div id="time">
    <!-- MOBILE -->
    <div class="desktop-hide" :class="$mq">
      <div class="countdown-container" data-aos="fade-down" :class="$mq">
        <div class="countdown-wrapper" :class="$mq">
          <div class="count" :class="$mq">
            <div class="time" :class="$mq">
              <div class="label" :class="$mq">Hari</div>
              <div class="value" :class="$mq">{{ hari }}</div>
            </div>
            <div class="separator" :class="$mq">:</div>
            <div class="time" :class="$mq">
              <div class="label" :class="$mq">Jam</div>
              <div class="value" :class="$mq">{{ jam }}</div>
            </div>
            <div class="separator" :class="$mq">:</div>
            <div class="time" :class="$mq">
              <div class="label" :class="$mq">Menit</div>
              <div class="value" :class="$mq">{{ menit }}</div>
            </div>
            <div class="separator" :class="$mq">:</div>
            <div class="time" :class="$mq">
              <div class="label" :class="$mq">Detik</div>
              <div class="value" :class="$mq">{{ detik }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="maps-container" data-aos="fade-up" :class="$mq">
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
      <div class="button-container" data-aos="fade-down" :class="$mq">
        <div class="button-buka-undangan" :class="$mq">
          <a
            href="https://goo.gl/maps/ywPfvwSdxTyZgiD46"
            target="_blank"
            class="button-bu-icon button-a"
            :class="$mq"
          >
            <img
              src="../assets/icons/map-marker-primary.svg"
              alt="map-icon"
              class="button-icon"
              :class="$mq"
            />
            <div class="button-bu-text" :class="$mq">Lihat Arah Lokasi</div>
          </a>
        </div>
      </div>
      <div
        class="prokes-container padding-container"
        data-aos="fade-up"
        :class="$mq"
      >
        <div class="prokes-content-container" :class="$mq">
          <div class="prokes-text-wrapper" :class="$mq">
            <p>
              Acara ini diselenggarakan dengan mematuhi protokol kesehatan yang
              berlaku demi mencegah penyebaran virus Covid-19. Tanpa mengurangi
              rasa hormat, kepada para tamu undangan dimohon kesediaannya untuk
              :
            </p>
          </div>
          <div class="prokes-icons-wrapper" :class="$mq">
            <div class="prokes" :class="$mq">
              <div class="prokes-icon" :class="$mq">
                <img
                  src="../assets/icons/jaga-jarak.svg"
                  alt="map-icon"
                  class="prokes-icon-img"
                  :class="$mq"
                />
              </div>
              <div class="prokes-text" :class="$mq">
                <p>Menjaga<br />Jarak</p>
              </div>
            </div>
            <div class="prokes" :class="$mq">
              <div class="prokes-icon" :class="$mq">
                <img
                  src="../assets/icons/pakai-masker.svg"
                  alt="map-icon"
                  class="prokes-icon-img"
                  :class="$mq"
                />
              </div>
              <div class="prokes-text" :class="$mq">
                <p>Memakai<br />Masker</p>
              </div>
            </div>
            <div class="prokes" :class="$mq">
              <div class="prokes-icon" :class="$mq">
                <img
                  src="../assets/icons/cuci-tangan.svg"
                  alt="map-icon"
                  class="prokes-icon-img"
                  :class="$mq"
                />
              </div>
              <div class="prokes-text" :class="$mq">
                <p>Mencuci<br />Tangan</p>
              </div>
            </div>
            <div class="prokes" :class="$mq">
              <div class="prokes-icon" :class="$mq">
                <img
                  src="../assets/icons/cek-suhu.svg"
                  alt="map-icon"
                  class="prokes-icon-img"
                  :class="$mq"
                />
              </div>
              <div class="prokes-text" :class="$mq">
                <p>Cek<br />Suhu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div class="mobile-hide times-desktop-container" :class="$mq">
      <div class="flex-container" :class="$mq">
        <div class="left" :class="$mq">
          <div class="maps-container" data-aos="fade-up" :class="$mq">
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
          <div class="button-container" data-aos="fade-down" :class="$mq">
            <div class="button-buka-undangan" :class="$mq">
              <a
                href="https://goo.gl/maps/ywPfvwSdxTyZgiD46"
                target="_blank"
                class="button-bu-icon button-a"
                :class="$mq"
              >
                <img
                  src="../assets/icons/map-marker-primary.svg"
                  alt="map-icon"
                  class="button-icon"
                  :class="$mq"
                />
                <div class="button-bu-text" :class="$mq">Lihat Arah Lokasi</div>
              </a>
            </div>
          </div>
        </div>
        <div class="right" :class="$mq">
          <div class="countdown-container" data-aos="fade-down" :class="$mq">
            <div class="countdown-wrapper" :class="$mq">
              <div class="count" :class="$mq">
                <div class="time" :class="$mq">
                  <div class="label" :class="$mq">Hari</div>
                  <div class="value" :class="$mq">{{ hari }}</div>
                </div>
                <div class="separator" :class="$mq">:</div>
                <div class="time" :class="$mq">
                  <div class="label" :class="$mq">Jam</div>
                  <div class="value" :class="$mq">{{ jam }}</div>
                </div>
                <div class="separator" :class="$mq">:</div>
                <div class="time" :class="$mq">
                  <div class="label" :class="$mq">Menit</div>
                  <div class="value" :class="$mq">{{ menit }}</div>
                </div>
                <div class="separator" :class="$mq">:</div>
                <div class="time" :class="$mq">
                  <div class="label" :class="$mq">Detik</div>
                  <div class="value" :class="$mq">{{ detik }}</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="prokes-container padding-container"
            data-aos="fade-up"
            :class="$mq"
          >
            <div class="prokes-content-container" :class="$mq">
              <div class="prokes-text-wrapper" :class="$mq">
                <p>
                  Acara ini diselenggarakan dengan mematuhi protokol kesehatan
                  yang berlaku demi mencegah penyebaran virus Covid-19. Tanpa
                  mengurangi rasa hormat, kepada para tamu undangan dimohon
                  kesediaannya untuk :
                </p>
              </div>
              <div class="prokes-icons-wrapper" :class="$mq">
                <div class="prokes" :class="$mq">
                  <div class="prokes-icon" :class="$mq">
                    <img
                      src="../assets/icons/jaga-jarak.svg"
                      alt="map-icon"
                      class="prokes-icon-img"
                      :class="$mq"
                    />
                  </div>
                  <div class="prokes-text" :class="$mq">
                    <p>Menjaga<br />Jarak</p>
                  </div>
                </div>
                <div class="prokes" :class="$mq">
                  <div class="prokes-icon" :class="$mq">
                    <img
                      src="../assets/icons/pakai-masker.svg"
                      alt="map-icon"
                      class="prokes-icon-img"
                      :class="$mq"
                    />
                  </div>
                  <div class="prokes-text" :class="$mq">
                    <p>Memakai<br />Masker</p>
                  </div>
                </div>
                <div class="prokes" :class="$mq">
                  <div class="prokes-icon" :class="$mq">
                    <img
                      src="../assets/icons/cuci-tangan.svg"
                      alt="map-icon"
                      class="prokes-icon-img"
                      :class="$mq"
                    />
                  </div>
                  <div class="prokes-text" :class="$mq">
                    <p>Mencuci<br />Tangan</p>
                  </div>
                </div>
                <div class="prokes" :class="$mq">
                  <div class="prokes-icon" :class="$mq">
                    <img
                      src="../assets/icons/cek-suhu.svg"
                      alt="map-icon"
                      class="prokes-icon-img"
                      :class="$mq"
                    />
                  </div>
                  <div class="prokes-text" :class="$mq">
                    <p>Cek<br />Suhu</p>
                  </div>
                </div>
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