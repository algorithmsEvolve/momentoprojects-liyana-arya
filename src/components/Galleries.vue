<template>
  <div class="padding-container">
    <div class="gallery-container">
      <div class="kisah-kami-text">
        <p>Kisah Kami</p>
      </div>
      <!-- vue slider -->
      <!-- Make a div wrapped slider,set height and width -->
      <div class="kisah-kami-slider-container">
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
      <!-- end vue slider -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
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
          icon: "kisah_kami1.svg",
          text:
            "Kami merupakan teman sekelas di matematika undip dan lebih saling mengenal karena pernah satu kepanitiaan",
        },
        {
          icon: "kisah_kami2.svg",
          text:
            "Kami ternyata satu organisasi, di sini Liyana mulai iseng deketin Arya, tapi Aryanya sok cuek",
        },
        {
          icon: "kisah_kami3.svg",
          text:
            "Kala itu justru Arya mulai deketin Liyana. Arya nemenin Liyana ke bengkel, dan ternyata momen itu bikin kami lebih dekat",
        },
        {
          icon: "kisah_kami4.svg",
          text: "Di puncak gunung andong, kami resmi berpacaran",
        },
        {
          icon: "kisah_kami5.svg",
          text:
            "Kami mulai menjalani hubungan jarak jauh dikarenakan kami bekerja di kota yang berbeda",
        },
        {
          icon: "kisah_kami6.svg",
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
      },
    };
  },
};
</script>

<style src="@/assets/css/sections/gallery.css" scoped/>