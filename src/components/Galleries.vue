<template>
  <div
    class="padding-container"
    @mouseenter="isPaused = false"
    @mouseover="isPaused = false"
    @mousemove="isPaused = false"
    @mouseup="isPaused = false"
    @mousewheel="isPaused = false"
  >
    <div class="gallery-container">
      <div class="kisah-kami-text" data-aos="fade-down">
        <p>Kisah Kami</p>
      </div>
      <div class="kisah-kami-slider-container" data-aos="fade-up">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, index) in kisah_kami_icon" :key="index">
            <KisahKamiCard
              :text="item.text"
              :src="item.icon"
              :index="item.index"
            />
          </div>
        </VueSlickCarousel>
      </div>
      <div
        class="photo-gallery-container"
        v-viewer="options"
        @click="isPaused = true"
        id="gallery"
      >
        <div class="two-photo">
          <transition name="fade" mode="out-in">
            <img
              :src="require('../assets/app/gallery/' + selected[0].image)"
              alt="photo-1"
              :key="selected[0].image"
              class="two-photo-img"
              :class="$mq"
            />
          </transition>
          <transition name="fade" mode="out-in">
            <img
              :src="require('../assets/app/gallery/' + selected[1].image)"
              :key="selected[1].image"
              alt="photo-2"
              class="two-photo-img padding-left"
              :class="$mq"
            />
          </transition>
        </div>
        <div class="one-photo">
          <transition name="fade" mode="out-in">
            <img
              :src="require('../assets/app/gallery/' + selected[2].image)"
              :key="selected[2].image"
              alt="photo-3"
              class="one-photo-img"
              :class="$mq"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-duration: 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import KisahKamiCard from "../components/items/KisahKamiCard";
export default {
  components: {
    VueSlickCarousel,
    KisahKamiCard,
  },
  data() {
    return {
      kisah_kami_icon: [
        {
          icon: "kisah_kami1.png",
          text:
            "Kami merupakan teman sekelas di matematika undip dan lebih saling mengenal karena pernah satu kepanitiaan",
        },
        {
          icon: "kisah_kami2.png",
          text:
            "Kami ternyata satu organisasi, di sini Liyana mulai iseng deketin Arya, tapi Aryanya sok cuek",
        },
        {
          icon: "kisah_kami3.png",
          text:
            "Kala itu justru Arya mulai deketin Liyana. Arya nemenin Liyana ke bengkel, dan ternyata momen itu bikin kami lebih dekat",
        },
        {
          icon: "kisah_kami4.png",
          text: "Di puncak gunung andong, kami resmi berpacaran",
        },
        {
          icon: "kisah_kami5.png",
          text:
            "Kami mulai menjalani hubungan jarak jauh dikarenakan kami bekerja di kota yang berbeda",
        },
        {
          icon: "kisah_kami6.png",
          text:
            "3 tahun berlalu, rasa yg kami miliki tetap sama. Kami memutuskan utk ke jenjang yang lebih serius, yaitu menikah.",
        },
      ],
      settings: {
        dots: false,
        infinite: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 6000,
      },
      indicator_img_change: true,
      selected: [
        {
          image: "tp1.jpeg",
        },
        {
          image: "tp2.jpeg",
        },
        {
          image: "op1.jpeg",
        },
      ],
      images: [
        {
          image: "tp3.jpeg",
        },
        {
          image: "tp4.jpeg",
        },
        {
          image: "op2.jpeg",
        },
        {
          image: "tp1.jpeg",
        },
        {
          image: "tp2.jpeg",
        },
        {
          image: "op1.jpeg",
        },
      ],
      isPaused: false,
    };
  },
  methods: {
    changeImage() {
      if (this.indicator_img_change == true) {
        this.selected[0].image = this.images[0].image;
        this.selected[1].image = this.images[1].image;
        this.selected[2].image = this.images[2].image;
        this.indicator_img_change = false;
      } else {
        this.selected[0].image = this.images[3].image;
        this.selected[1].image = this.images[4].image;
        this.selected[2].image = this.images[5].image;
        this.indicator_img_change = true;
      }
    },
  },
  created() {
    setInterval(() => {
      if (!this.isPaused) {
        this.changeImage();
      }
    }, 8000);
  },
};
</script>

<style src="@/assets/css/sections/gallery.css" scoped/>