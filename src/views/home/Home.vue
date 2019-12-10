<template>
  <div class="container_box">
    <swiper class="home_swiper" :options="swiperOption">
      <swiper-slide>
        <Header></Header>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>
        <Footer></Footer>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: { Footer, Header }
};
</script>

<style lang="scss">
.home_swiper {
  height: 100vh;
  .swiper-slide {
    // height: 100vh;
  }
}
</style>
