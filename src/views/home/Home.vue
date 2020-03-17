<template>
  <div class="container_box homepage_box">
    <div class="swiper_box">
      <div class="page_index__box">
        <div
          class="page_index_box"
          :class="[active_slide_index ? 'active' : '']"
        >
          <span class="active_index">
            <div
              class="_box"
              :style="{
                transform: `translateY(-${(parseInt(active_slide_indexnum) -
                  1) *
                  0.36 *
                  fz}px)`
              }"
            >
              <div>{{ active_slide_indexnum }}</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
            </div> </span
          ><span class="total_index">/05</span>
        </div>
      </div>
      <div
        class="main_swiper_pagination"
        :class="[active_slide_index ? 'home_1st_slide' : '']"
      >
        <div
          class="active"
          :style="{ top: (active_slide_indexnum - 1) * (24 + 8) + 'px' }"
        >
          <div>
            <span :class="[!isTrans ? 's_active' : '']">
              <div :class="[!isTrans ? 'a_active' : 'b_active']"></div>
            </span>
            <span :class="[!isTrans ? 's_active' : '']">
              <div :class="[!isTrans ? 'a_active' : 'b_active']"></div>
            </span>
          </div>
        </div>
        <div @click="toSlide(0)"></div>
        <div @click="toSlide(1)"></div>
        <div @click="toSlide(2)"></div>
        <div @click="toSlide(3)"></div>
        <div @click="toSlide(4)"></div>
      </div>
      <!-- :class="[active_slide_index ? "home_1st_slide" : ""]" -->
      <swiper
        class="home_swiper"
        ref="mySwiper"
        :options="homeSwiperOption"
        @slideChangeTransitionStart="homeSlideChangeStart"
        @slideChangeTransitionEnd="homeSlideChangeEnd"
      >
        <swiper-slide class="home_1st_slide">
          <div
            class="_box animated"
            :class="[
              active_slide_tonext && active_slide_indexnum !== '01'
                ? 'fadeOutUp'
                : '',
              active_slide_indexnum === '01' ? 'fadeInUp' : ''
            ]"
          >
            <div>
              <div>
                <div>忠于所托</div>
                <div>成就价值</div>
              </div>
            </div>
          </div>
          <img
            class="home_bg"
            src="~@/assets/image/home_1st_slide_bg.png"
            alt=""
            srcset=""
          />
        </swiper-slide>
        <swiper-slide class="home_2nd_slide animated">
          <div
            class="_box animated"
            :class="[
              active_slide_tonext && active_slide_indexnum !== '02'
                ? 'fadeOutUp'
                : '',
              active_slide_indexnum === '02' ? 'fadeInUp' : ''
            ]"
          >
            <div class="left_box">
              <div class="top_box">
                <div class="_box">
                  <div>
                    <div class="_top">
                      <div class="_cbox">
                        <img
                          src="~@/assets/image/half_circle_icon_1.png"
                          alt=""
                          srcset=""
                        />
                        <div class="_title">企业简介</div>
                        <div class="_entitle">COMPANY PROFILE</div>
                      </div>
                      <!-- <img
                        class="pic"
                        src="~@/assets/image/home_3rd_slide_logo.png"
                        alt=""
                        srcset=""
                      /> -->
                      <div
                        @click="toPage('/about/CompanyProfile')"
                        class="more _more more_hover"
                      >
                        <span>了解更多</span>
                        <div class="arrow_right"></div>
                      </div>
                    </div>
                    <div class="_center" v-html="QYJJ_Info.content"></div>
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
                <div
                  class="_other"
                  @click="toPage('/about/CorporateVision/QYFC')"
                >
                  <div>
                    <div class="_title">
                      企业荣誉
                    </div>
                    <div class="_entitle">
                      COMPANY HONOR
                    </div>
                  </div>
                  <img
                    class="_img"
                    src="~@/assets/image/home_3rd_slide_pic1.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  class="_other"
                  @click="toPage('/about/CorporateVision/QYRY')"
                >
                  <div>
                    <div class="_title">
                      企业愿景
                    </div>
                    <div class="_entitle">
                      COMPANY VISION
                    </div>
                  </div>
                  <img
                    class="_img"
                    src="~@/assets/image/home_3rd_slide_pic2.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <div class="right_box"></div>
          </div>
        </swiper-slide>
        <swiper-slide class="home_3rd_slide">
          <div
            class="_box animated"
            :class="[
              active_slide_tonext && active_slide_indexnum !== '03'
                ? 'fadeOutUp'
                : '',
              active_slide_indexnum === '03' ? 'fadeInUp' : ''
            ]"
          >
            <div class="_top">
              <img
                src="~@/assets/image/home_2nd_slide_pic.png"
                alt=""
                srcset=""
              />
              <!-- <div class="_cbox"></div> -->
            </div>
            <div class="_center">
              <div class="active1">
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
              <div class="active2">
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
              <div class="active3">
                <div class="_circle">
                  <div class="_into">
                    <div class="_title">
                      以“轻资产运营”为导向
                    </div>
                    <div class="_line line3"></div>
                  </div>
                </div>
              </div>
              <div class="active4">
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
              <div class="active5">
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
              <div class="active6"></div>
            </div>
            <div class="_bottom">
              <div
                class="active1"
                :class="'active' + (index + 1)"
                v-for="(item, index) in ZYGLR_List"
                :key="index"
              >
                <div class="img_box">
                  <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                </div>
                <div class="_content">
                  <div>
                    <div class="_title">
                      <img
                        src="~@/assets/image/half_circle_icon.png"
                        alt=""
                        srcset=""
                      />
                      <span>{{ index + 1 }}</span>
                    </div>
                    <div class="_into">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home_4th_slide">
          <div
            class="_box animated"
            :class="[
              active_slide_tonext && active_slide_indexnum !== '04'
                ? 'fadeOutUp'
                : '',
              active_slide_indexnum === '04' ? 'fadeInUp' : ''
            ]"
          >
            <div class="_top">
              <div class="_cbox">
                <img
                  src="~@/assets/image/half_circle_icon_1.png"
                  alt=""
                  srcset=""
                />
                <div class="_title">企业领域</div>
                <div class="_entitle">BUSIJNESS DOMAIN</div>
              </div>
            </div>
            <div class="_bottom">
              <div
                v-for="(item, index) in YWLY_List"
                @click="tobusiness(index)"
                :key="index"
              >
                <div class="_top">
                  <div class="title">
                    {{ item.title }}
                  </div>
                  <div class="entitle">
                    {{ item.entitle }}
                  </div>
                </div>
                <div class="_into" v-html="item.content"></div>
                <div class="pic_box">
                  <img
                    class="_pic"
                    :src="`${$basePicUrl}${item.logo}`"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home_5th_slide">
          <div
            class="_box animated"
            :class="[
              active_slide_tonext && active_slide_indexnum !== '05'
                ? 'fadeOutUp'
                : '',
              active_slide_indexnum === '05' ? 'fadeInUp' : ''
            ]"
          >
            <div class="_top">
              <div class="_cbox">
                <img
                  src="~@/assets/image/half_circle_icon_1.png"
                  alt=""
                  srcset=""
                />
                <div class="_title">新闻资讯</div>
                <div class="_entitle">NEWS INFORMATION</div>
              </div>
            </div>
            <div class="_bottom">
              <div class="_left">
                <img
                  class="topic_img"
                  :src="`${$basePicUrl}${XWZX_List[subActiveIndex + 1].logo}`"
                  alt=""
                  srcset=""
                />
                <div
                  class="topic_title"
                  @click="toNewItem(XWZX_List[subActiveIndex + 1].id)"
                >
                  {{ XWZX_List[subActiveIndex + 1].title }}
                </div>
                <div
                  @click="toNewItem(XWZX_List[subActiveIndex + 1].id)"
                  class="topic_into"
                  v-html="XWZX_List[subActiveIndex + 1].content"
                ></div>
                <div
                  class="topic_time"
                  @click="toNewItem(XWZX_List[subActiveIndex + 1].id)"
                >
                  {{ XWZX_List[subActiveIndex + 1].time.split(" ")[0] }}
                </div>
              </div>
              <div class="_right">
                <swiper
                  class="sub_swiper"
                  ref="subSwiper"
                  :options="subSwiperOption"
                  @slideChangeTransitionStart="subSlideChange"
                >
                  <swiper-slide
                    v-for="(item, index) in XWZX_List"
                    @click.native="toNewItem(item.id)"
                    :key="index"
                  >
                    <div>
                      <div class="left_box">
                        <span class="day">{{
                          item.time.split(" ")[0].substring(8, 10)
                        }}</span>
                        <span class="year">{{
                          item.time.split(" ")[0].substring(0, 7)
                        }}</span>
                      </div>
                      <div class="right_box">
                        <div class="_title">
                          {{ item.title }}
                        </div>
                        <div class="_into" v-html="item.content"></div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
                <div @click="subswiperPrev" class="own_swiper_btn_prev">
                  <img
                    src="~@/assets/image/own_swiper_btn.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div @click="subswiperNext" class="own_swiper_btn_next">
                  <img
                    src="~@/assets/image/own_swiper_btn.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer :isHome="true"></Footer>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/bus";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      homeSwiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        // loop: true,
        initialSlide: 0,
        simulateTouch: false,
        speed: 800,
        effect: "fade",
        width:
          19.2 *
          ((document.documentElement.clientWidth > 1920
            ? 1920
            : document.documentElement.clientWidth < 1366
            ? 1366
            : document.documentElement.clientWidth * 100) /
            1920),
        height: window.innerHeight
      },
      isTrans: false,
      active_slide_indexnum: 0,
      active_slide_tonext: false,
      active_slide_to3: false,
      active_slide_index: false,
      subSwiperOption: {
        direction: "vertical",
        slidesPerView: 3
      },
      subActiveIndex: 0,
      fz: 0,
      QYJJ_Info: {
        title: "",
        content: "",
        logo: ""
      },
      ZYGLR_List: [],
      YWLY_List: [],
      XWZX_List: [
        {
          title: "",
          content: "",
          logo: "",
          time: ""
        },
        {
          title: "",
          content: "",
          logo: "",
          time: ""
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    subSwiper() {
      return this.$refs.subSwiper.swiper;
    }
  },
  watch: {
    active_slide_index: {
      handler(newVal) {
        EventBus.$emit("sendSlideIndex", newVal);
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
    this.$nextTick(() => {
      this.getData();
      this.setActiveSlideIndex();
    });
  },
  methods: {
    getData() {
      // 企业简介
      this.axios
        .get(`${this.$baseUrl}content/id/3`)
        .then(({ data }) => {
          this.QYJJ_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 专业私募管理人
      this.axios
        .get(`${this.$baseUrl}contentext/id/24`)
        .then(({ data }) => {
          this.ZYGLR_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 业务领域
      this.axios
        .get(`${this.$baseUrl}contentext/id/25`)
        .then(({ data }) => {
          this.YWLY_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 新闻资讯
      this.axios
        .get(`${this.$baseUrl}contentext/id/23`)
        .then(({ data }) => {
          // this.XWZX_List = data.data;
          for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i];
            let ar = element.content.split("<p>");
            for (let j = 0; j < ar.length; j++) {
              const elementj = ar[j];
              if (!elementj.includes("<img") && elementj !== "") {
                data.data[i].content = ar[j];
                break;
              }
            }
          }
          this.XWZX_List = data.data;
          this.subSwiper.update();
          this.subSwiper.slideNext();
        })
        .catch(response => {
          console.log(response);
        });
    },
    tobusiness(index) {
      if (index === 0) {
        this.$router.push({
          path: "/business"
          // params: {
          //   div: "DCJJ"
          // }
        });
        EventBus.$emit("aaa", "DCJJ");
      }
      if (index === 1) {
        this.$router.push({
          path: "/business"
          // params: {
          //   div: "JGYW"
          // }
        });
        EventBus.$emit("aaa", "JGYW");
      }
      if (index === 2) {
        this.$router.push({
          path: "/business"
          // params: {
          //   div: "CFGL"
          // }
        });
        EventBus.$emit("aaa", "CFGL");
      }
    },
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth;
      this.fz = (deviceWidth * 100) / 1920;
    },
    homeSlideChangeStart() {
      this.active_slide_tonext = true;
      this.isTrans = true;
      this.setActiveSlideIndex();
      setTimeout(() => {
        this.isTrans = false;
      }, 300);
      setTimeout(() => {
        this.active_slide_tonext = false;
      }, 500);
    },
    homeSlideChangeEnd() {},
    subSlideChange() {
      this.subActiveIndex = this.subSwiper.realIndex;
    },
    setActiveSlideIndex() {
      this.active_slide_indexnum = "0" + (this.swiper.activeIndex + 1);
      if (this.swiper.activeIndex === 0) {
        this.active_slide_index = true;
      } else {
        this.active_slide_index = false;
      }
    },
    subswiperNext() {
      this.subSwiper.slideNext();
    },
    subswiperPrev() {
      this.subSwiper.slidePrev();
    },
    toSlide(index) {
      this.swiper.slideTo(index);
    },
    toPage(url) {
      this.$router.push(url);
    },
    toNewItem(id) {
      this.$router.push(`/news/${id}`);
    }
  },
  components: { Footer }
};
</script>

<style lang="scss">
@-webkit-keyframes circleProgressLoad_right_a {
  0% {
    opacity: 0.1;
    -webkit-transform: rotate(-45deg);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(45deg);
  }
}
@-webkit-keyframes circleProgressLoad_left_a {
  0% {
    opacity: 0.1;
    -webkit-transform: rotate(45deg);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(-45deg);
  }
}
@-webkit-keyframes circleProgressLoad_right_b {
  0% {
    opacity: 1;
    -webkit-transform: rotate(45deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-45deg);
    opacity: 0;
  }
}
@-webkit-keyframes circleProgressLoad_left_b {
  0% {
    opacity: 1;
    -webkit-transform: rotate(-45deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
    opacity: 0;
  }
}
.trs5 {
  transition: all ease-in-out 0.5s;
}
.homepage_box {
  // position: fixed;
  position: relative;
  // overflow: hidden;
  margin-top: px(-160);
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100vh;
  .header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .page_index__box {
    z-index: 999;
    position: absolute;
    right: px(0);
    bottom: px(0);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 6.4rem);
    height: px(180);
    .page_index_box {
      display: flex;
      align-items: flex-end;
      &.active {
        color: #fff;
      }
      font-family: Helvetica;
      color: #333333;
      .active_index {
        font-size: 0.36rem;
        line-height: 0.36rem;
        height: 0.36rem;
        overflow: hidden;
        ._box {
          transition: all ease-in-out 0.3s;
          & > div {
            line-height: 0.36rem;
            height: 0.36rem;
          }
        }
      }
      .total_index {
        transition: all ease-in-out 0.3s;
        font-size: 0.2rem;
        height: 0.36rem;
        line-height: 0.46rem;
      }
    }
  }
  .main_swiper_pagination {
    width: 8px;
    height: 136px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: px(91);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 99;
    &.home_1st_slide {
      & > div:not(.active) {
        border-color: #fff;
      }
      .active {
        border-color: #fff;
        background-color: #fff;
        & > div {
          & > span {
            &:first-child {
              div {
                border-top: 4px solid #fff;
                border-right: 4px solid #fff;
              }
            }
            &:last-child {
              div {
                border-top: 4px solid #fff;
                border-left: 4px solid #fff;
              }
            }
          }
        }
      }
    }
    & > div:not(.active) {
      cursor: pointer;
      display: block;
      width: 8px;
      height: 8px;
      box-sizing: border-box;
      border: 1px solid #599ae5;
      border-radius: 50%;
      transition: all ease-in-out 0.5s;
    }
    .active {
      cursor: pointer;
      width: 8px;
      height: 8px;
      box-sizing: border-box;
      border: 1px solid #599ae5;
      border-radius: 50%;
      background-color: #599ae5;
      position: absolute;
      left: 0;
      transition: all ease-in-out 0.5s;
      & > div {
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(45deg);
        background: transparent;
        border-radius: 50%;
        overflow: hidden;
        & > span {
          width: 14px;
          height: 28px;
          position: absolute;
          top: 0;
          overflow: hidden;
          // &.s_active {
          //   width: 14px;
          // }
          &:first-child {
            left: 0;
            & > div {
              transform: rotate(45deg);
              opacity: 0;
              border-top: 6px solid #5b9be4;
              border-right: 6px solid #5b9be4;
              left: 0;
              &.a_active {
                -webkit-animation: circleProgressLoad_left_a 0.3s linear
                  forwards;
                animation-delay: 0.15s;
                -webkit-animation-delay: 0.15s;
              }
              &.b_active {
                -webkit-animation: circleProgressLoad_left_b 0.2s linear
                  forwards;
              }
            }
          }
          &:last-child {
            right: 0;
            & > div {
              opacity: 0;
              transform: rotate(-45deg);
              border-top: 6px solid #5b9be4;
              border-left: 6px solid #5b9be4;
              right: 0;
              &.a_active {
                -webkit-animation: circleProgressLoad_right_a 0.3s linear
                  forwards;
                animation-delay: 0.15s;
                -webkit-animation-delay: 0.15s;
              }
              &.b_active {
                -webkit-animation: circleProgressLoad_right_b 0.2s linear
                  forwards;
              }
            }
          }
          & > div {
            width: 28px;
            height: 28px;
            border: 6px solid rgba(0, 0, 0, 0);
            border-radius: 50%;
            position: absolute;
            top: 0;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .swiper_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .home_swiper {
      height: 100vh;
      background: url("~@/assets/image/other_slide_bg.png") no-repeat center;
      background-size: cover;
      & > .swiper-wrapper > .swiper-slide {
        position: relative;
        background: url("~@/assets/image/other_slide_bg.png") no-repeat center;
        background-size: cover;
        background-color: #fff;
        & > ._box {
          opacity: 0;
        }
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
              & > div {
                margin: 0 auto;
                top: px(130);
                font-size: px(64);
                position: absolute;
                color: #1c294b;
                font-weight: 100;
                left: 50%;
                transform: translateX(-50%);
                width: 110%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                letter-spacing: 15px;
              }
            }
          }
        }
        &.home_3rd_slide {
          ._box {
            opacity: 0;
            background: url("~@/assets/image/home_2nd_slide_bg.png") no-repeat
              center;
            background-size: cover;
            width: px(1520);
            height: px(560);
            position: absolute;
            top: 50%;
            left: 50%;
            // transform: translate(-50%, -50%);
            margin-left: px(-760);
            margin-top: px(-280);
            box-sizing: border-box;
            padding: px(60) px(120) px(0) px(120);
            &.fadeInUp {
              ._center,
              ._bottom {
                & > div {
                  transition: all ease-in 0.8s;
                  &.active1 {
                    opacity: 1;
                    transition-delay: 0;
                    .line1 {
                      height: px(20) !important;
                    }
                  }
                  &.active2 {
                    opacity: 1;
                    transition-delay: 0.2s;
                    .line2 {
                      height: px(60) !important;
                    }
                  }
                  &.active3 {
                    opacity: 1;
                    transition-delay: 0.4s;
                    .line3 {
                      height: px(100) !important;
                    }
                  }
                  &.active4 {
                    opacity: 1;
                    transition-delay: 0.6s;
                    .line2 {
                      height: px(60) !important;
                    }
                  }
                  &.active5 {
                    opacity: 1;
                    transition-delay: 0.8s;
                    .line1 {
                      height: px(20) !important;
                    }
                  }
                  &.active6 {
                    opacity: 1;
                    transition-delay: 1s;
                  }
                }
              }
            }
            ._top {
              img {
                display: block;
                width: px(320);
                height: px(61);
              }
              // ._cbox {
              //   height: px(61);
              //   .top {
              //     display: flex;
              //     align-items: flex-end;
              //   }
              // }
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
                opacity: 0;
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

                      color: rgba(255, 255, 255, 1);
                      line-height: px(24);
                      white-space: nowrap;
                      margin-bottom: px(2);
                    }
                    ._line {
                      width: 2px;
                      height: 0;
                      transition: all 1.2s ease-in;
                      background-color: rgba(255, 255, 255, 0.6);
                    }
                  }
                }
              }
            }
            ._bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              & > div {
                opacity: 0;
                width: px(280);
                height: px(320);
                cursor: pointer;
                background: rgba(255, 255, 255, 1);
                & > .img_box {
                  display: block;
                  width: px(280);
                  height: px(168);
                  overflow: hidden;
                  &:hover {
                    img {
                      transform: scale(1.2);
                    }
                  }
                  img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    transition: all ease-in-out 0.5s;
                  }
                }
                & > div._content {
                  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
                  height: px(152);
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  justify-content: center;
                  ._title {
                    display: flex;
                    align-items: center;
                    margin-bottom: px(8);
                    img {
                      display: block;
                      width: px(17);
                      height: px(36);
                      margin-right: px(8);
                    }
                    span {
                      font-size: px(48);

                      color: rgba(0, 0, 0, 1);
                      line-height: px(48);
                    }
                  }
                  ._into {
                    font-size: px(24);

                    color: #7f7f7f;
                    line-height: px(29);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
              }
            }
          }
        }
        &.home_2nd_slide {
          opacity: 0;
          // &.leave {
          //   opacity: 0;
          //   transform: translateY(-30px) !important;
          // }
          // transition: all ease-out 0.8s;
          & > ._box {
            transition: all 0.3s ease-out;
            width: px(1280);
            height: px(600);
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: px(-640);
            margin-top: px(-300);
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
                margin-top: px(40);
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
                      & > ._cbox {
                        height: px(34);
                        display: flex;
                        align-items: flex-end;
                        img {
                          width: px(29);
                          height: px(14);
                          display: block;
                          position: relative;
                          top: px(-7);
                        }
                        ._title {
                          height: px(33);
                          font-size: px(24);
                          color: #333;
                          line-height: px(33);
                          margin-left: px(12);
                        }
                        ._entitle {
                          height: px(22);
                          font-size: px(16);
                          line-height: px(22);
                          margin-left: px(8);
                        }
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

                          color: rgba(83, 150, 228, 1);
                          margin-right: px(8);
                        }
                        .arrow_right {
                          display: block;
                          width: px(7);
                          height: px(14);
                          background: url("~@/assets/image/arrow_right_active.png")
                            no-repeat center;
                          background-size: cover;
                        }
                      }
                    }
                    & > ._center {
                      font-size: px(14);

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

                          color: rgba(91, 155, 228, 1);
                        }
                        .label_value {
                          max-width: px(120);
                          font-size: px(16);

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
                  overflow: hidden;
                  margin-right: px(40);
                  background-color: #c7e3f1;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  position: relative;
                  &:hover {
                    ._title,
                    ._entitle {
                      color: #5b9be4;
                    }
                    ._img {
                      transform: scale(1.2);
                    }
                  }
                  & > div {
                    position: relative;
                    z-index: 2;
                    margin-left: px(60);
                    ._title {
                      height: px(33);
                      font-size: px(24);
                      color: #6f777b;
                      line-height: px(29);
                      transition: all ease-in-out 0.5s;
                    }
                    ._entitle {
                      height: px(22);
                      font-size: px(16);
                      color: #b1bfc3;
                      line-height: px(19);
                      transition: all ease-in-out 0.5s;
                    }
                  }
                  ._img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    transition: all ease-in-out 0.5s;
                  }
                  // &.other1 {
                  //   background: url("~@/assets/image/home_3rd_slide_pic1.png")
                  //     no-repeat center;
                  //   background-size: cover;
                  // }
                  // &.other2 {
                  //   background: url("~@/assets/image/home_3rd_slide_pic2.png")
                  //     no-repeat center;
                  //   background-size: cover;
                  // }
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
            margin-left: px(-640);
            margin-top: px(-236.5);
            & > ._top {
              margin-bottom: px(60);
              & > ._cbox {
                height: px(34);
                display: flex;
                align-items: flex-end;
                img {
                  width: px(29);
                  height: px(14);
                  display: block;
                  position: relative;
                  top: px(-7);
                }
                ._title {
                  height: px(33);
                  font-size: px(24);
                  color: #333;
                  line-height: px(33);
                  margin-left: px(12);
                }
                ._entitle {
                  height: px(22);
                  font-size: px(16);
                  line-height: px(22);
                  margin-left: px(8);
                }
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
                transition: all ease-in-out 0.5s;
                cursor: pointer;
                flex-direction: column;
                justify-content: space-between;
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
                      transform: scale(1.2);
                    }
                  }
                }
                & > ._top {
                  margin-bottom: px(64);
                  .title {
                    transition: all ease-in-out 0.5s;
                    font-size: px(28);
                    color: #000;
                    line-height: px(34);
                    margin-bottom: px(4);
                  }
                  .entitle {
                    transition: all ease-in-out 0.5s;
                    font-size: px(18);
                    color: #7f7f7f;
                    line-height: px(22);
                  }
                }
                & > ._into {
                  transition: all ease-in-out 0.5s;
                  font-size: px(24);
                  color: #7f7f7f;
                  line-height: px(29);
                  margin-bottom: px(16);
                }
                & > .pic_box {
                  display: flex;
                  align-items: flex-end;
                  overflow: hidden;
                  width: 100%;
                  height: px(200);
                  position: relative;
                  ._pic {
                    position: absolute;
                    left: 0;
                    top: 0;
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
            margin-left: px(-640);
            margin-top: px(-220.5);
            ._top {
              & > ._cbox {
                height: px(34);
                display: flex;
                align-items: flex-end;
                img {
                  width: px(29);
                  height: px(14);
                  display: block;
                  position: relative;
                  top: px(-7);
                }
                ._title {
                  height: px(33);
                  font-size: px(24);
                  color: #333;
                  line-height: px(33);
                  margin-left: px(12);
                }
                ._entitle {
                  height: px(22);
                  font-size: px(16);
                  line-height: px(22);
                  margin-left: px(8);
                }
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
                  cursor: pointer;
                }
                .topic_title {
                  cursor: pointer;
                  height: px(27);
                  font-size: px(20);
                  font-weight: bold;
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
                  cursor: pointer;
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
                  cursor: pointer;
                }
              }
              ._right {
                width: px(660);
                height: px(273);
                position: relative;
                .own_swiper_btn_prev,
                .own_swiper_btn_next {
                  cursor: pointer;
                  display: block;
                  width: px(33);
                  height: px(17);
                  position: absolute;
                  left: 50%;
                  margin-left: px(-8.5);
                  img {
                    display: block;
                    width: 100%;
                  }
                }
                .own_swiper_btn_prev {
                  top: px(-48);
                  img {
                    transform: rotateZ(180deg);
                  }
                }
                .own_swiper_btn_next {
                  bottom: px(-48);
                }
                .sub_swiper {
                  // margin-top: calc(2.73rem / 3);
                  height: px(273);
                  position: relative;
                  &::after,
                  &::before {
                    content: "";
                    display: block;
                    height: 1px;
                    width: 100%;
                    position: absolute;
                    background-color: #5b9be4;
                    left: 0;
                    z-index: 55;
                  }
                  &::after {
                    bottom: px(91);
                  }
                  &::before {
                    top: px(91);
                  }
                  .swiper-wrapper {
                    .swiper-slide {
                      & > div {
                        color: #7f7f7f;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        height: 100%;
                        width: 100%;
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
                            transition: all ease-in-out 0.5s;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            line-height: px(22);
                            margin-bottom: px(6);
                          }
                          ._into {
                            height: px(20);
                            font-size: px(14);
                            line-height: px(17);
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            p {
                              text-overflow: ellipsis;
                              overflow: hidden;
                              white-space: nowrap;
                            }
                          }
                        }
                      }
                      &.swiper-slide-next {
                        // &.swiper-slide-active {
                        .left_box {
                          span {
                            &.day {
                              color: #000;
                            }
                            &.year {
                              color: #333;
                            }
                          }
                        }
                        .right_box {
                          ._title {
                            color: #5b9be4;
                          }
                        }
                      }
                      // &.swiper-slide-active {
                      //   &:hover {
                      //     .right_box {
                      //       ._title {
                      //         color: #5b9be4 !important;
                      //       }
                      //     }
                      //   }
                      // }
                      // &:hover {
                      //   .right_box {
                      //     ._title {
                      //       color: #5b9be4 !important;
                      //     }
                      //   }
                      // }
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
