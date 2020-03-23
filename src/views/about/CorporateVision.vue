<template>
  <div class="corporatevision_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
        <div class="_into" v-html="topInfo.content"></div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="layout_content_title _special">
          晨曦愿景
        </div>
        <div class="layout_content_into _special">
          {{ pageInfo.title }}
        </div>
        <div class="layout_content_intro" v-html="pageInfo.content"></div>
        <div class="_bottom">
          <div class="top_part" id="QYFC">
            <div class="_left">
              <div class="_title">晨曦基金</div>
              <div class="_entitle">
                <img
                  src="~@/assets/image/half_circle_icon_1.png"
                  alt=""
                  srcset=""
                />
                <span>{{ QYYJ_INFO.title }}</span>
              </div>
              <div class="_into" v-html="QYYJ_INFO.content"></div>
            </div>
            <div class="_right">
              <img :src="`${$basePicUrl}${QYYJ_INFO.logo}`" alt="" srcset="" />
            </div>
          </div>
          <div class="bottom_part" id="QYRY">
            <div v-for="(item, index) in pageList" :key="index">
              <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      QYYJ_INFO: {
        title: "",
        content: "",
        logo: ""
      },
      pageList: []
    };
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
        .get(`${this.$baseUrl}content/id/19`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      this.axios
        .get(`${this.$baseUrl}contentext/id/4`)
        .then(({ data }) => {
          this.QYYJ_INFO = data.data[0];
        })
        .catch(response => {
          console.log(response);
        });
      this.axios
        .get(`${this.$baseUrl}contentext/id/5`)
        .then(({ data }) => {
          this.pageList = data.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.corporatevision_box {
  .layout_content_innerbox {
    .layout_content_title {
      &._special {
        margin-bottom: 0;
      }
      &::before {
        content: "VISION" !important;
      }
    }
    .layout_content_into {
      &._special {
        margin-bottom: px(24);
        margin-top: px(82);
        font-weight: bold;
        &::after {
          top: px(-40);
        }
      }
    }
    ._bottom {
      .top_part {
        width: px(1280);
        height: px(466);
        background: rgba(248, 248, 248, 1);
        margin-bottom: px(64);
        box-sizing: border-box;
        padding: px(60) px(40) px(60) px(80);
        display: flex;
        justify-content: space-between;
        ._left {
          width: px(665);
          ._title {
            height: px(65);
            font-size: px(48);

            color: #636363;
            line-height: px(58);
            font-weight: bold;
            margin-bottom: px(24);
          }
          ._entitle {
            display: flex;
            align-items: center;
            margin-bottom: px(24);
            img {
              display: block;
              width: px(23);
              height: px(11);
              margin-right: px(13);
            }
            span {
              height: px(33);
              font-size: px(24);

              color: rgba(89, 154, 229, 1);
              line-height: px(33);
            }
          }
          ._into {
            font-size: px(20);

            line-height: px(43);
            color: #636363;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
        }
        ._right {
          width: px(455);
          height: px(346);
          img {
            display: block;
            width: 100%;
          }
        }
      }
      .bottom_part {
        padding-bottom: px(120);
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        & > div {
          width: px(384);
          height: px(248);
          background: rgba(248, 248, 248, 1);
          display: flex;
          flex-direction: column;
          margin-top: px(20);
          & > img {
            display: block;
            width: px(384);
            height: px(248);
          }
          & > div {
            flex: 1;
            min-height: 0;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 px(40);
            span {
              text-align: center;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: px(24);

              color: #363636;
              line-height: px(34);
            }
          }
        }
      }
    }
  }
}
</style>
