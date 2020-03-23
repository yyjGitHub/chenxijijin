<template>
  <div class="investmentstrategy_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
        <div class="_into" v-html="topInfo.content"></div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="layout_content_title">
          业务介绍
        </div>
        <div class="layout_content_into">
          {{ pageInfo.title }}
        </div>
        <div class="_bottom">
          <div class="part part1" id="TZLN">
            <div
              class="top_pic"
              :style="{
                'background-image': `url(${$basePicUrl}${TZLN_Info.logo})`
              }"
            >
              <div class="_title">
                {{ TZLN_Info.ctitle }}
              </div>
              <div class="_subtitle">
                {{ TZLN_Info.title }}
              </div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in TZLN_List" :key="index">
                <div class="_title">
                  <img
                    src="~@/assets/image/half_circle_icon_1.png"
                    alt=""
                    srcset=""
                  />
                  <span>{{ item.title }} | {{ item.entitle }}</span>
                </div>
                <div class="_into" v-html="item.content"></div>
              </div>
            </div>
          </div>
          <div class="part part2" id="TZCL">
            <div
              class="top_pic"
              :style="{
                'background-image': `url(${$basePicUrl}${TZCL_Info.logo})`
              }"
            >
              <div class="_title">
                {{ TZCL_Info.ctitle }}
              </div>
              <div class="_subtitle">
                {{ TZCL_Info.title }}
              </div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in TZCL_List" :key="index">
                <div class="_title">
                  <img
                    src="~@/assets/image/half_circle_icon_1.png"
                    alt=""
                    srcset=""
                  />
                  <span>{{ item.title }} | {{ item.entitle }}</span>
                </div>
                <div class="_into" v-html="item.content"></div>
              </div>
            </div>
          </div>
          <div class="part part2" id="FXKZ">
            <div
              class="top_pic"
              :style="{
                'background-image': `url(${$basePicUrl}${FXKZ_Info.logo})`
              }"
            >
              <div class="_title">
                {{ FXKZ_Info.ctitle }}
              </div>
              <div class="_subtitle">
                {{ FXKZ_Info.title }}
              </div>
            </div>
            <div class="bottom_text">
              <div class="item" v-for="(item, index) in FXKZ_List" :key="index">
                <div class="_title">
                  <img
                    src="~@/assets/image/half_circle_icon_1.png"
                    alt=""
                    srcset=""
                  />
                  <span>{{ item.title }} | {{ item.entitle }}</span>
                </div>
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
        logo: ""
      },
      pageInfo: {
        title: "",
        content: "",
        logo: ""
      },
      TZLN_Info: {
        title: "",
        content: "",
        logo: ""
      },
      TZLN_List: [],
      TZCL_Info: {
        title: "",
        content: "",
        logo: ""
      },
      TZCL_List: [],
      FXKZ_Info: {
        title: "",
        content: "",
        logo: ""
      },
      FXKZ_List: []
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        if (newVal.params.hasOwnProperty("activeDIV")) {
          this.$nextTick(() => {
            let rootHtml = document.documentElement;
            let deviceWidth =
              rootHtml.clientWidth > 1920
                ? 1920
                : rootHtml.clientWidth < 1024
                ? 1024
                : rootHtml.clientWidth;
            let t_a = $(`#${newVal.params.activeDIV}`).offset();
            $("html,body").animate(
              {
                scrollTop: t_a.top - ((deviceWidth * 100) / 1920) * 1.2 + "px"
              },
              500
            );
          });
        }
      },
      deep: true,
      immediate: true
    }
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
        .catch(response => {
          console.log(response);
        });

      this.axios
        .get(`${this.$baseUrl}content/id/6`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 投资理念
      this.axios
        .get(`${this.$baseUrl}content/id/20`)
        .then(({ data }) => {
          this.TZLN_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 投资理念
      this.axios
        .get(`${this.$baseUrl}contentext/id/20`)
        .then(({ data }) => {
          this.TZLN_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //投资策略
      this.axios
        .get(`${this.$baseUrl}content/id/21`)
        .then(({ data }) => {
          this.TZCL_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //投资策略
      this.axios
        .get(`${this.$baseUrl}contentext/id/21`)
        .then(({ data }) => {
          this.TZCL_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //风险控制
      this.axios
        .get(`${this.$baseUrl}content/id/22`)
        .then(({ data }) => {
          this.FXKZ_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //风险控制
      this.axios
        .get(`${this.$baseUrl}contentext/id/22`)
        .then(({ data }) => {
          this.FXKZ_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // this.axios
      //   .get(`${this.$baseUrl}contentext/id/4`)
      //   .then(({ data }) => {
      //     this.QYYJ_INFO = data.data[0];
      //   })
      //   .catch(response => {
      //     console.log(response);
      //   });
    }
  }
};
</script>
<style lang="scss">
.investmentstrategy_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "STRATEGY";
      }
    }
    ._bottom {
      .part {
        margin-bottom: px(120);
        &.part1 {
          .top_pic {
            background: url("~@/assets/image/about_investmentstrategy_pic3.png")
              no-repeat center;
          }
        }
        &.part2 {
          .top_pic {
            background: url("~@/assets/image/about_investmentstrategy_pic1.png")
              no-repeat center;
          }
        }
        &.part3 {
          .top_pic {
            background: url("~@/assets/image/about_investmentstrategy_pic2.png")
              no-repeat center;
          }
        }
        .top_pic {
          width: px(1280);
          height: px(300);
          margin-bottom: px(16);
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          ._title {
            height: px(60);
            font-size: px(60);

            color: rgba(255, 255, 255, 1);
            line-height: px(60);
            margin-bottom: px(16);
          }
          ._subtitle {
            height: px(24);
            font-size: px(24);

            color: rgba(255, 255, 255, 1);
            line-height: px(24);
            letter-spacing: px(4);
          }
        }
        .bottom_text {
          .item {
            padding-top: px(24);
            ._title {
              display: flex;
              align-items: center;
              margin-bottom: px(8);
              & > img {
                display: block;
                width: px(23);
                height: px(11);
                margin-right: px(16);
                position: relative;
                top: px(-2);
              }
              & > span {
                height: px(33);
                font-size: px(24);
                font-weight: bold;
                color: #333333;
                line-height: px(33);
              }
            }
            ._into {
              span {
                display: block;
                font-size: px(20);
                color: #7f7f7f;
                line-height: px(40);
                b.wrap {
                  display: block;
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
