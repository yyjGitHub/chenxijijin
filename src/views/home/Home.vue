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
            <div class="_top">
              <img
                src="~@/assets/image/home_2nd_slide_pic.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="_center">
              <div>
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      2017年4月12日<br />
                      在中国证券基金业协会<br />
                      完成私募基金管理人备案登记
                    </div>
                    <div class="_line line1"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      私募投资基金管理人<br />
                      登记号为P1062335
                    </div>
                    <div class="_line line2"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      以“轻资产运营”为导向
                    </div>
                    <div class="_line line3"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      多元发展地产基金和<br />
                      财富管理等多个业务板块
                    </div>
                    <div class="_line line2"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      集项目研判、结构化<br />
                      产品定制、投资运营、<br />
                      风险控制、资产管理于一体
                    </div>
                    <div class="_line line1"></div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div class="_bottom"></div>
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
              text-align: center;
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
            ._top {
              img {
                display: block;
                width: px(310);
                height: px(61);
              }
            }
            ._center {
              margin-top: px(144);
              width: 100%;
              height: 1px;
              position: relative;
              display: flex;
              align-items: flex-end;
              margin-bottom: px(65);
              &::after,
              &::before {
                content: "";
                display: block;
                position: absolute;
                width: px(12);
                height: px(12);
                box-sizing: border-box;
                border: 1px solid #fff;
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
              }
              &::after {
                right: px(-12);
              }
              &::before {
                left: px(-12);
              }
              & > div {
                display: block;
                flex: 1;
                height: 1px;
                background-color: #fff;
                position: relative;
                ._circle {
                  border: 1px solid #fff;
                  border-radius: 50%;
                  width: px(20);
                  height: px(20);
                  border-radius: 50%;
                  position: absolute;
                  right: px(-10);
                  top: px(-10);
                  &::after {
                    display: block;
                    content: "";
                    width: px(12);
                    height: px(12);
                    background-color: #fff;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  }
                  ._into {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: calc(100% + 0.07rem);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    ._title {
                      text-align: center;
                      font-size: px(14);
                      font-family: Helvetica;
                      color: rgba(255, 255, 255, 1);
                      line-height: px(24);
                      white-space: nowrap;
                      margin-bottom: px(2);
                    }
                    ._line {
                      width: 2px;
                      background-color: rgba(255, 255, 255, 0.6);
                      &.line1 {
                        height: px(20);
                      }
                      &.line2 {
                        height: px(60);
                      }
                      &.line3 {
                        height: px(100);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
