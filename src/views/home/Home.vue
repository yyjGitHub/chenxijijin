<template>
  <div class="container_box">
    <swiper class="home_swiper" :options="swiperOption">
      <swiper-slide class="home_1st_slide">
        <Header></Header>
        <div class="_box"></div>
        <img
          class="home_bg"
          src="~@/assets/image/home_1st_slide_bg.png"
          alt=""
          srcset=""
        />
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
          clickable: false
        },
        on: {
          change: function() {
            //some code
            console.log();
          }
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
  .swiper-pagination-bullet {
    width: 0.06rem !important;
    height: 0.06rem !important;
    background: rgba(0, 0, 0, 0) !important;
    opacity: 1 !important;
    border: 1px solid #fff;
    &:active {
      border: 1px solid #fff;
    }
    &.swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
  .swiper-slide {
    position: relative;
    &.home_1st_slide {
      header {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
      }
      .home_bg {
        position: absolute;
        z-index: 66;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      ._box {
        height: 100%;
        width: 100%;
        background: url("~@/assets/image/home_1st_slide_bg.png") no-repeat
          center;
        background-size: cover;
      }
    }
  }
}
</style>
