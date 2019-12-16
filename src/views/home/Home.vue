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
        :options="homeSwiperOption"
        @slideChangeTransitionStart="homeSlideChange"
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
        <swiper-slide class="home_3rd_slide">
          <div class="_box">
            <div class="left_box">
              <div class="top_box">
                <div class="_box">
                  <div>
                    <div class="_top">
                      <img
                        class="pic"
                        src="~@/assets/image/home_3rd_slide_logo.png"
                        alt=""
                        srcset=""
                      />
                      <div class="more">
                        <span>了解更多</span>
                        <img
                          src="~@/assets/image/arrow_right_active.png"
                          class="arrow_right"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    <div class="_center">
                      上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
                    </div>
                    <div class="_bottom">
                      <div>
                        <div class="label_title">时间：</div>
                        <div class="label_value">
                          成立于<br />
                          2016-10-28
                        </div>
                      </div>
                      <div>
                        <div class="label_title">资本：</div>
                        <div class="label_value">
                          注册资本<br />
                          一亿人民币
                        </div>
                      </div>
                      <div>
                        <div class="label_title">实力：</div>
                        <div class="label_value">
                          上海旭辉企业<br />
                          控股的子公司
                        </div>
                      </div>
                      <div>
                        <div class="label_title">伙伴：</div>
                        <div class="label_value">
                          旭辉“房地产+”<br />
                          核心成员之一
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom_box">
                <div class="_other other1">
                  <div>
                    <div class="_title">
                      企业荣誉
                    </div>
                    <div class="_entitle">
                      COMPANY HONOR
                    </div>
                  </div>
                </div>
                <div class="_other other2">
                  <div>
                    <div class="_title">
                      企业愿景
                    </div>
                    <div class="_entitle">
                      COMPANY VISION
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right_box"></div>
          </div>
        </swiper-slide>
        <swiper-slide class="home_4th_slide">
          <div class="_box">
            <div class="_top">
              <img
                src="~@/assets/image/home_4th_slide_logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="_bottom">
              <div>
                <div class="_top">
                  <div class="title">
                    地产基金
                  </div>
                  <div class="entitle">
                    REAL ESTATE FUNDS
                  </div>
                </div>
                <div class="_into">扩宽投资途径</div>
                <div class="pic_box">
                  <img
                    class="_pic"
                    src="~@/assets/image/home_3rd_slide_pic1.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div>
                <div class="_top">
                  <div class="title">
                    机构业务
                  </div>
                  <div class="entitle">
                    AGENCY BUSINESS
                  </div>
                </div>
                <div class="_into">专业团队持续跟踪和深入研究</div>
                <div class="pic_box">
                  <img
                    class="_pic"
                    src="~@/assets/image/home_4th_slide_pic2.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div>
                <div class="_top">
                  <div class="title">
                    财富管理
                  </div>
                  <div class="entitle">
                    WEALTH MANAGEMENT
                  </div>
                </div>
                <div class="_into">专业团队持续跟踪和深入研究</div>
                <div class="pic_box">
                  <img
                    class="_pic"
                    src="~@/assets/image/home_4th_slide_pic3.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home_5th_slide">
          <div class="_box">
            <div class="_top">
              <img
                src="~@/assets/image/home_5th_slide_logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="_bottom">
              <div class="_left">
                <img
                  class="topic_img"
                  src="~@/assets/image/home_5th_slide_pic1.png"
                  alt=""
                  srcset=""
                />
                <div class="topic_title">
                  旭辉晨曦斩获中国最佳房地产股权投资机构TOP10
                </div>
                <div class="topic_into">
                  由融资中国、中国风投委联合主办的“产业投资的2.0时代”第五届融资中国2019股权投资产业峰会，于2019年7月17-18日在北京四季酒店举行……
                </div>
                <div class="topic_time">
                  2019-07-18
                </div>
              </div>
              <div class="_right">
                <swiper
                  class="sub_swiper"
                  ref="subSwiper"
                  :options="subSwiperOption"
                  @slideChangeTransitionStart="subSlideChange"
                >
                  <swiper-slide>
                    <div class="left_box">
                      <span class="day">22</span>
                      <span class="year">2019-07</span>
                    </div>
                    <div class="right_box">
                      <div class="_title">
                        旭辉晨曦斩获中国最佳房地产股权投资机构TOP10
                      </div>
                      <div class="_into">
                        由融资中国、中国风投委联合主办的“产业投资的2.0时代”第五届融资中国2019股权……
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    111
                  </swiper-slide>
                  <swiper-slide>
                    111
                  </swiper-slide>
                  <swiper-slide>
                    222
                  </swiper-slide>
                  <swiper-slide>
                    222
                  </swiper-slide>
                  <swiper-slide>
                    222
                  </swiper-slide>
                  <div class="subswiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
            </div>
          </div>
          <Footer :isHome="true"></Footer>
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
      homeSwiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        initialSlide: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: false
        }
      },
      active_slide_index: false,
      subSwiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        // loop: true,
        // loopFillGroupWithBlank: true,
        height:
          2.73 *
          ((document.documentElement.clientWidth > 1920
            ? 1920
            : document.documentElement.clientWidth < 1366
            ? 1366
            : document.documentElement.clientWidth * 100) /
            1920),
        pagination: {
          el: ".subswiper-pagination",
          clickable: false
        }
      }
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
    homeSlideChange() {
      this.setActiveSlideIndex();
    },
    subSlideChange() {},
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
.trs3 {
  transition: all ease-in-out 0.3s;
}
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
        &.home_3rd_slide {
          & > ._box {
            width: px(1280);
            height: px(600);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: flex-end;
            .left_box {
              width: px(720);
              height: px(600);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
              z-index: 99;
              & > .top_box {
                width: 100%;
                height: px(372);
                & > ._box {
                  width: px(900);
                  height: px(372);
                  box-sizing: border-box;
                  border: px(3) solid rgba(91, 155, 228, 1);
                  & > div {
                    width: px(860);
                    height: px(332);
                    margin: px(20);
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: px(40) px(60) px(44) px(40);
                    display: flex;
                    flex-direction: column;
                    & > ._top {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: px(25);
                      .pic {
                        width: px(290);
                        height: px(34);
                        display: block;
                      }
                      & > .more {
                        width: px(120);
                        height: px(40);
                        border: 2px solid rgba(83, 150, 228, 1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > span {
                          font-size: px(14);
                          font-family: Helvetica;
                          color: rgba(83, 150, 228, 1);
                          margin-right: px(8);
                        }
                        .arrow_right {
                          display: block;
                          width: px(7);
                          height: px(14);
                        }
                      }
                    }
                    & > ._center {
                      font-size: px(14);
                      font-family: Helvetica;
                      color: rgba(0, 0, 0, 1);
                      line-height: px(23);
                      margin-bottom: px(53);
                    }
                    & > ._bottom {
                      display: flex;
                      align-items: center;
                      width: px(832);
                      flex: 1;
                      & > div {
                        height: 100%;
                        width: px(208);
                        box-sizing: border-box;
                        border-left: px(2) solid rgba(91, 155, 228, 0.4);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding-left: px(16);
                        .label_title {
                          font-size: px(18);
                          font-family: Helvetica;
                          color: rgba(91, 155, 228, 1);
                        }
                        .label_value {
                          max-width: px(120);
                          font-size: px(16);
                          font-family: Helvetica;
                          color: rgba(0, 0, 0, 1);
                          line-height: px(19);
                          color: #7f7f7f;
                        }
                      }
                    }
                  }
                }
              }
              .bottom_box {
                height: px(148);
                display: flex;
                ._other {
                  width: px(320);
                  height: px(148);
                  margin-right: px(40);
                  background-color: #c7e3f1;
                  display: flex;
                  align-items: center;
                  & > div {
                    margin-left: px(60);
                    ._title {
                      height: px(33);
                      font-size: px(24);
                      font-family: Helvetica;
                      color: #6f777b;
                      line-height: px(29);
                    }
                    ._entitle {
                      height: px(22);
                      font-size: px(16);
                      font-family: Helvetica;
                      color: #b1bfc3;
                      line-height: px(19);
                    }
                  }
                  &.other1 {
                    background: url("~@/assets/image/home_3rd_slide_pic1.png")
                      no-repeat center;
                    background-size: cover;
                  }
                  &.other2 {
                    background: url("~@/assets/image/home_3rd_slide_pic2.png")
                      no-repeat center;
                    background-size: cover;
                  }
                }
              }
            }
            .right_box {
              margin-right: 0;
              flex: 1;
              min-width: 0;
              height: px(600);
              background: url("~@/assets/image/home_3rd_slide_pic3.png")
                no-repeat center;
              background-size: cover;
            }
          }
        }
        &.home_4th_slide {
          & > ._box {
            height: px(473);
            width: px(1280);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            & > ._top {
              margin-bottom: px(60);
              img {
                display: block;
                width: px(295);
                height: px(33);
              }
            }
            & > ._bottom {
              height: px(376);
              display: flex;
              align-items: center;
              & > div {
                width: 33.333%;
                height: 100%;
                border-left: 2px solid rgba(0, 0, 0, 0.2);
                padding-left: px(30);
                padding-right: px(32);
                overflow: hidden;
                display: flex;
                transition: all ease-in-out 0.3s;
                cursor: pointer;
                flex-direction: column;
                &:hover {
                  width: px(544);
                  border-color: #5396e4;
                  & > ._top {
                    .title {
                      color: #5396e4;
                    }
                    .entitle {
                      color: #a9cbf2;
                    }
                  }
                  & > ._into {
                    color: #000000;
                  }
                  & > .pic_box {
                    ._pic {
                      -webkit-filter: grayscale(0%);
                      -moz-filter: grayscale(0%);
                      -ms-filter: grayscale(0%);
                      -o-filter: grayscale(0%);
                      filter: grayscale(0%);
                      filter: rgba(0, 0, 0, 0);
                    }
                  }
                }
                & > ._top {
                  margin-bottom: px(64);
                  .title {
                    transition: all ease-in-out 0.3s;
                    font-size: px(28);
                    font-family: Helvetica;
                    color: #000;
                    line-height: px(34);
                    margin-bottom: px(4);
                  }
                  .entitle {
                    transition: all ease-in-out 0.3s;
                    font-size: px(18);
                    font-family: Helvetica;
                    color: #7f7f7f;
                    line-height: px(22);
                  }
                }
                & > ._into {
                  transition: all ease-in-out 0.3s;
                  font-size: px(24);
                  font-family: Helvetica;
                  color: #7f7f7f;
                  line-height: px(29);
                  margin-bottom: px(16);
                }
                & > .pic_box {
                  flex: 1;
                  display: flex;
                  align-items: flex-end;
                  overflow: hidden;
                  ._pic {
                    transition: all ease-in-out 0.3s;
                    display: block;
                    width: px(480);
                    height: px(200);
                    -webkit-filter: grayscale(100%);
                    -moz-filter: grayscale(100%);
                    -ms-filter: grayscale(100%);
                    -o-filter: grayscale(100%);
                    filter: grayscale(100%);
                    filter: gray;
                  }
                }
              }
            }
          }
        }
        &.home_5th_slide {
          & > ._box {
            width: px(1280);
            height: px(441);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            ._top {
              img {
                display: block;
                width: px(316);
                height: px(33);
              }
              margin-bottom: px(40);
            }
            & > ._bottom {
              display: flex;
              & > ._left {
                width: px(560);
                margin-right: px(60);
                .topic_img {
                  display: block;
                  width: 100%;
                  height: px(245);
                }
                .topic_title {
                  height: px(27);
                  font-size: px(20);
                  font-family: Helvetica;
                  color: rgba(0, 0, 0, 1);
                  line-height: px(24);
                  margin-top: px(20);
                  margin-bottom: px(6);
                  padding-right: px(10);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .topic_into {
                  font-size: px(16);
                  font-family: Helvetica;
                  color: #333333;
                  line-height: px(22);
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  margin-bottom: px(6);
                }
                .topic_time {
                  color: #7f7f7f;
                  font-size: px(14);
                  font-family: Helvetica;
                }
              }
              ._right {
                width: px(660);
                height: px(273);
                .sub_swiper {
                  height: px(273);
                  .swiper-wrapper {
                    height: px(273);
                    .swiper-slide {
                      color: #7f7f7f;
                      &::after {
                        content: "";
                        display: block;
                        clear: both;
                      }
                      display: flex;
                      align-items: center;
                      // &:nth-child(3n) {
                      //   border-bottom: none;
                      // }
                      border-bottom: px(2) solid #5b9be4;
                      .left_box {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        margin-right: px(32);
                        span {
                          display: block;
                        }
                        .day {
                          height: px(32);
                          font-size: px(32);
                          line-height: px(32);
                        }
                        .year {
                          height: px(16);
                          margin-top: px(1);
                          font-size: px(16);
                          line-height: px(16);
                        }
                      }
                      .right_box {
                        flex: 1;
                        max-width: px(547);
                        ._title {
                          height: px(25);
                          font-size: px(18);
                          font-family: Helvetica;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
                          line-height: px(22);
                        }
                        ._into {
                          height: px(20);
                          font-size: px(14);
                          line-height: px(17);
                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
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
}
</style>
