<template>
  <div class="padding-container" id="gallery">
    <!-- MOBILE -->
    <div
      v-if="$mq == 'mobile'"
      class="desktop-hide gallery-container"
      :class="$mq"
    >
      <div class="kisah-kami-text" data-aos="fade-down" :class="$mq">
        <p>Kisah Kami</p>
      </div>
      <div
        :class="$mq"
        class="kisah-kami-slider-container hoverable"
        data-aos="fade-up"
        v-view="viewHandler"
        view-in
      >
        <VueSlickCarousel v-bind="settings" v-viewer>
          <div v-for="(item, index) in kisah_kami_icon" :key="index">
            <KisahKamiCard :src="item.icon" :index="item.index" />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="photo-gallery-container hoverable" :class="$mq">
        <VueSlickCarousel v-bind="gallery_settings" v-viewer>
          <div v-for="(item, index) in gallery_img" :key="index">
            <GalleryCard :src="item.img" :index="index" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      v-if="$mq == 'desktop'"
      class="mobile-hide gallery-container"
      :class="$mq"
    >
      <div class="kisah-kami-container" :class="$mq">
        <div class="kisah-kami-desktop-wrapper" :class="$mq">
          <div class="kisah-kami-text" data-aos="fade-down" :class="$mq">
            <p>Kisah Kami</p>
          </div>
          <div
            data-aos="fade-down"
            class="kisah-kami-picture scrollbox"
            ref="story"
            @click="scrollnow($event)"
          >
            <img
              src="../assets/app/kisah_kami/story.png"
              alt="kisah-kami-story"
              class="kisah-kami-img scrollbox-content"
            />
          </div>
        </div>
        <div
          class="photo-gallery-container hoverable"
          :class="$mq"
          data-aos="fade-up"
        >
          <VueSlickCarousel v-bind="gallery_settings" v-viewer>
            <div v-for="(item, index) in gallery_img" :key="index">
              <GalleryCard :src="item.img" :index="index" />
            </div>
          </VueSlickCarousel>
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scrollbox {
  width: 10em;
  height: 10em;
  overflow: hidden;
  visibility: hidden;
}

.scrollbox-content,
.scrollbox:hover,
.scrollbox:focus {
  overflow-y: overlay;
  visibility: visible;
}
</style>

<style lang="scss">
.slick-dots:not(#_) {
  button:before {
    color: #b1b1b1;
    opacity: 1;
  }

  display: flex !important;
  left: 50%;
  top: 90%;
  transform: translateX(-50%);
  border-radius: 1rem;
  width: auto;
  margin: 0 auto;
  padding: 0.25rem;
}

.slick-dots li.slick-active button:before {
  color: white !important;
}

.slick-dots li button:before {
  font-size: 18px;
}
</style>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import KisahKamiCard from "../components/items/KisahKamiCard";
import GalleryCard from "../components/items/GalleryCard";
export default {
  components: {
    VueSlickCarousel,
    KisahKamiCard,
    GalleryCard,
  },
  data() {
    return {
      kisah_kami_icon: [
        {
          icon: "kisah_kami1.png",
          // text:
          //   "Kami merupakan teman sekelas di matematika undip dan lebih saling mengenal karena pernah satu kepanitiaan",
        },
        {
          icon: "kisah_kami2.png",
          // text:
          //   "Kami ternyata satu organisasi, di sini Liyana mulai iseng deketin Arya, tapi Aryanya sok cuek",
        },
        {
          icon: "kisah_kami3.png",
          // text:
          //   "Kala itu justru Arya mulai deketin Liyana. Arya nemenin Liyana ke bengkel, dan ternyata momen itu bikin kami lebih dekat",
        },
        {
          icon: "kisah_kami4.png",
          // text: "Di puncak gunung andong, kami resmi berpacaran",
        },
        {
          icon: "kisah_kami5.png",
          // text:
          //   "Kami mulai menjalani hubungan jarak jauh dikarenakan kami bekerja di kota yang berbeda",
        },
        {
          icon: "kisah_kami6.png",
          // text:
          //   "3 tahun berlalu, rasa yg kami miliki tetap sama. Kami memutuskan utk ke jenjang yang lebih serius, yaitu menikah.",
        },
      ],
      gallery_img: [
        {
          img: "gallery_1.jpg",
        },
        {
          img: "gallery_2.jpg",
        },
        {
          img: "gallery_3.jpg",
        },
        {
          img: "gallery_4.jpg",
        },
        {
          img: "gallery_5.jpg",
        },
        {
          img: "gallery_6.jpg",
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
        autoplay: false,
        autoplaySpeed: 6000,
      },
      gallery_settings: {
        accessibility: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 6000,
        cssEase: "linear",
      },
      autoplay_indicator: 0,
      indicator_img_change: true,
      story_scroll: 0,
    };
  },
  methods: {
    scrollnow(event) {
      if (this.story_scroll >= 495) {
        this.story_scroll = 0;
      } else {
        this.story_scroll += 165;
      }
      this.$refs.story.scrollTo({
        top: this.story_scroll,
        behavior: "smooth",
      });
    },
    viewHandler() {
      if (this.autoplay_indicator > 2) {
        this.settings.autoplay = true;
      } else {
        this.autoplay_indicator++;
      }
    },
  },
  created() {
    setInterval(() => {
      this.scrollnow();
    }, 6000);
  },
};
</script>

<style src="@/assets/css/sections/gallery.css" scoped/>