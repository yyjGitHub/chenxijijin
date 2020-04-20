<template>
  <div class="investmentstrategy_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_bottom">
        <div class="part part1" id="TZLN">
          <div class="_c">
            <div class="_top">
              <div class="_title">
                {{ TZLN_Info.ctitle }}
              </div>
              <div class="_subtitle">
                {{ TZLN_Info.title }}
              </div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in TZLN_List" :key="index">
                <div class="_top">
                  <img
                    src="~@/assets/image/half_circle_icon.png"
                    alt=""
                    srcset=""
                  />
                  <div>{{ item.title }}</div>
                </div>
                <div class="_bottom" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="part part2" id="TZCL">
          <div class="_c">
            <div class="_top">
              <div class="_title">
                {{ TZCL_Info.ctitle }}
              </div>
              <div class="_subtitle">
                {{ TZCL_Info.title }}
              </div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in TZCL_List" :key="index">
                <div class="_top">{{ item.title }}</div>
                <div class="_bottom" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="part part3" id="FXKZ">
          <div class="_c">
            <div class="_top">
              <div class="layout_content_title">
                {{ FXKZ_Info.ctitle }}
              </div>
              <div class="layout_content_line"></div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in FXKZ_List" :key="index">
                <div class="_into" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      topInfo: {
        title: "",
        content: "",
        logo: "",
      },
      pageInfo: {
        title: "",
        content: "",
        logo: "",
      },
      TZLN_Info: {
        title: "",
        content: "",
        logo: "",
      },
      TZLN_List: [],
      TZCL_Info: {
        title: "",
        content: "",
        logo: "",
      },
      TZCL_List: [],
      FXKZ_Info: {
        title: "",
        content: "",
        logo: "",
      },
      FXKZ_List: [],
      sign: "",
      interval: "",
      num: 0,
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        if (newVal.params.hasOwnProperty("activeDIV")) {
          this.sign = newVal.params.activeDIV;
        } else {
          this.sign = "";
        }
      },
      deep: true,
      immediate: true,
    },
  },
  updated() {
    let num = 0;
    let interval = setInterval(() => {
      num += 1000;
      if (num < 2000) {
        return;
      }
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 2304
          ? 2304
          : rootHtml.clientWidth < 1228.8
          ? 1228.8
          : rootHtml.clientWidth;
      let fzz = (deviceWidth * 100) / 2304 / 100;
      this.$nextTick(() => {
        if (!this.sign) {
          clearInterval(interval);
          num = 0;
          return;
        }
        let t_a = $(`#${this.sign}`).offset();
        clearInterval(interval);
        num = 0;
        if (t_a.hasOwnProperty("top")) {
          $("html,body").animate(
            { scrollTop: t_a.top - 170 * fzz + "px" },
            500
          );
        }
      });
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval);
    this.num = 0;
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/2`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(() => {});

      this.axios
        .get(`${this.$baseUrl}content/id/6`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(() => {});
      // 投资理念
      this.axios
        .get(`${this.$baseUrl}content/id/20`)
        .then(({ data }) => {
          this.TZLN_Info = data.data;
        })
        .catch(() => {});
      // 投资理念
      this.axios
        .get(`${this.$baseUrl}contentext/id/20`)
        .then(({ data }) => {
          this.TZLN_List = data.data;
        })
        .catch(() => {});
      //投资策略
      this.axios
        .get(`${this.$baseUrl}content/id/21`)
        .then(({ data }) => {
          this.TZCL_Info = data.data;
        })
        .catch(() => {});
      //投资策略
      this.axios
        .get(`${this.$baseUrl}contentext/id/21`)
        .then(({ data }) => {
          this.TZCL_List = data.data;
        })
        .catch(() => {});
      //风险控制
      this.axios
        .get(`${this.$baseUrl}content/id/22`)
        .then(({ data }) => {
          this.FXKZ_Info = data.data;
        })
        .catch(() => {});
      //风险控制
      this.axios
        .get(`${this.$baseUrl}contentext/id/22`)
        .then(({ data }) => {
          this.FXKZ_List = data.data;
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss">
.investmentstrategy_box {
  .layout_content_innerbox {
    ._c {
      padding-top: 0 !important;
    }
    .layout_content_title {
      font-weight: bold;
    }
    .layout_content_line {
      margin-top: px(50);
      width: px(120);
      height: 1px;
      background-color: rgba(0, 0, 0, 0);
    }
    ._bottom {
      .part {
        &:first-child {
          padding-top: px(130);
        }
        padding-top: px(173);
        padding-bottom: px(180);
        ._c {
          & > * {
            width: 100%;
          }
          & > ._top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            ._title {
              height: px(80);
              font-size: px(80);
              line-height: px(80);
              margin-bottom: px(26);
              color: #599ae5;
              font-weight: bold;
            }
            ._subtitle {
              height: px(30);
              color: #605d60;
              font-size: px(30);
              line-height: px(30);
              letter-spacing: px(6);
              position: relative;
              margin-bottom: px(132);
              &::after {
                position: absolute;
                bottom: px(-50);
                width: px(120);
                height: 2px;
                content: "";
                background-color: #989598;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0.4;
              }
            }
          }
        }

        &:nth-child(2n) {
          background-color: #f8f8f8;
        }
        &.part1 {
          .bottom_text {
            display: flex;
            align-items: center;
            & > div {
              width: px(395);
              height: px(340);
              background: rgba(250, 250, 250, 1);
              box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
              box-sizing: border-box;
              padding: px(23) px(51) px(0) px(53);
              margin-right: px(48);
              &:nth-child(3n) {
                margin-right: px(0);
              }
              ._top {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #979797;
                width: px(291);
                height: px(133);
                div {
                  height: px(55);
                  font-size: px(40);
                  line-height: px(55);
                }
                img {
                  display: block;
                  width: px(15);
                  height: px(30);
                  margin-right: px(20);
                }
              }
              ._bottom {
                margin-top: px(40);
                font-size: px(26);
                line-height: px(35);
                color: #69666a;
                p {
                  font-size: px(26);
                  line-height: px(35);
                  margin-bottom: px(10);
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
          }
        }
        &.part2 {
          .bottom_text {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            & > div {
              width: px(617);
              height: px(274);
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
              margin-right: px(46);
              box-sizing: border-box;
              padding: px(45) px(64) 0 px(63);
              &:nth-child(2n) {
                margin-right: px(0);
              }
              margin-top: px(46);
              &:nth-child(1),
              &:nth-child(2) {
                margin-top: 0;
              }
              position: relative;
              &::before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: px(10);
                height: px(185);
                background-color: #5b9be4;
              }
              ._top {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #979797;
                padding-bottom: px(19);
                width: px(490);
                height: px(55);
                font-size: px(40);
                line-height: px(55);
                color: #5b9be4;
              }
              ._bottom {
                margin-top: px(20);
                font-size: px(28);
                line-height: px(42);
                color: #69666a;
                p {
                  font-size: px(28);
                  line-height: px(42);
                  margin-bottom: px(10);
                  &:last-child {
                    margin-bottom: 0;
                  }
                }
              }
            }
          }
        }
        &.part3 {
          .bottom_text {
            ._into {
              display: flex;
              align-items: center;
              & > div {
                &:first-child {
                  width: px(1000);
                  img {
                    display: block;
                    width: 100%;
                  }
                  margin-right: px(20);
                }
              }
            }

            p {
              font-size: px(30);
              line-height: px(46);
              margin-bottom: px(30);
              color: #5f5c5f;
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
