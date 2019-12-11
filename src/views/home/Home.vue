<template>
  <div class="container_box homepage_box">
    <Header :is_1st_slide="active_slide_index" class="header"></Header>
    <div
      class="swiper_box"
      :class="[active_slide_index ? 'home_1st_slide' : '']"
    >
      <swiper
        class="home_swiper"
        ref="mySwiper"
        :options="swiperOption"
        @slideChangeTransitionStart="slideChange"
      >
        <swiper-slide class="home_1st_slide">
          <div class="_box">
            <div>
              <span>忠于所托 成就价值</span>
            </div>
          </div>
          <img
            class="home_bg"
            src="~@/assets/image/home_1st_slide_bg.png"
            alt=""
            srcset=""
          />
        </swiper-slide>
        <swiper-slide class="home_2nd_slide">
          <div class="_box">
            <div class="_title"></div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>
          <Footer></Footer>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
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
        }
      },
      active_slide_index: false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setActiveSlideIndex();
    });
  },
  methods: {
    slideChange() {
      this.setActiveSlideIndex();
    },
    setActiveSlideIndex() {
      if (this.swiper.activeIndex === 0) {
        this.active_slide_index = true;
      } else {
        this.active_slide_index = false;
      }
    }
  },
  components: { Footer, Header }
};
</script>

<style lang="scss">
.homepage_box {
  .header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .swiper_box {
    &.home_1st_slide {
      .home_swiper {
        .swiper-pagination-bullet {
          border: 1px solid #fff;
          &:active {
            border: 1px solid #fff;
          }
          &.swiper-pagination-bullet-active {
            background: #fff !important;
            &::after {
              background: url("~@/assets/image/swiper_pagination_bullet_home_1st_icon.png")
                no-repeat center;
            }
          }
        }
      }
    }
    .home_swiper {
      height: 100vh;
      background: url("~@/assets/image/other_slide_bg.png") no-repeat center;
      background-size: cover;
      &.swiper-container-vertical > .swiper-pagination-bullets {
        right: px(91) !important;
      }
      .swiper-pagination-bullet {
        width: 0.06rem !important;
        height: 0.06rem !important;
        position: relative;
        background: rgba(0, 0, 0, 0) !important;
        opacity: 1 !important;
        border: 1px solid #599ae5;
        margin: px(24) 0 !important;
        &:active {
          border: 1px solid #599ae5;
        }
        &.swiper-pagination-bullet-active {
          background: #599ae5 !important;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: px(-15);
            left: px(-7);
            width: px(27);
            height: px(27);
            background: url("~@/assets/image/swiper_pagination_bullet_home_icon.png")
              no-repeat center;
            background-size: cover;
          }
        }
      }
      .swiper-slide {
        position: relative;
        &.home_1st_slide {
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
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            z-index: 77;
            & > div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 77;
              height: px(275);
              width: px(623);
              background: url("~@/assets/image/home_1st_slide_logo.png")
                no-repeat center;
              background-size: cover;
              span {
                display: inline-block;
                margin: 0 auto;
                margin-top: px(130);
                margin-bottom: px(55);
                font-size: px(64);
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
        &.home_2nd_slide {
          ._box {
            background: url("~@/assets/image/home_2nd_slide_bg.png") no-repeat
              center;
            background-size: cover;
            width: px(1520);
            height: px(560);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            padding: px(60) px(120) px(0) px(120);
          }
        }
      }
    }
  }
}
</style>
