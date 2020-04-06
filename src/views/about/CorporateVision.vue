<template>
  <div class="corporatevision_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox" id="QYFC">
      <div class="part part1">
        <div class="_c">
          <div class="layout_content_title">
            {{ ZZJG_Info.ctitle }}
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div v-for="(item, index) in ZZJG_List" :key="index">
              <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div class="part part2">
        <div class="_c">
          <div class="layout_content_title">
            {{ GLTD_Info.ctitle }}
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div v-for="(item, index) in GLTD_List" :key="index">
              <div class="_left">
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <div class="_name">{{ item.title }}</div>
                <div class="_zhiwei">{{ item.entitle }}</div>
              </div>
              <div class="_right" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="part part3">
        <div class="_c">
          <div class="layout_content_title">
            {{ QYWH_Info.ctitle }}
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div v-for="(item, index) in QYWH_List" :key="index">
              <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
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
      ZZJG_Info: {
        title: "",
        content: "",
        logo: "",
      },
      ZZJG_List: [],
      GLTD_Info: {
        title: "",
        content: "",
        logo: "",
      },
      GLTD_List: [],
      QYWH_Info: {
        title: "",
        content: "",
        logo: "",
      },
      QYWH_List: [],
    };
  },
  mounted() {
    this.getData();
  },
  updated() {
    this.$nextTick(() => {
      if (this.$route.path.split("/about/CorporateVision/")[1] === ":_sign") {
        return;
      }
      let t_a = $(
        `#${this.$route.path.split("/about/CorporateVision/")[1]}`
      ).offset();
      $("html,body").animate({ scrollTop: t_a.top - 220 + "px" }, 500);
    });
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/26`)
        .then(({ data }) => {
          this.ZZJG_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/26`)
        .then(({ data }) => {
          this.ZZJG_List = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/27`)
        .then(({ data }) => {
          this.GLTD_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/27`)
        .then(({ data }) => {
          this.GLTD_List = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/4`)
        .then(({ data }) => {
          this.QYWH_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/4`)
        .then(({ data }) => {
          this.QYWH_List = data.data;
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss">
.corporatevision_box {
  .layout_content_line {
    margin-top: px(50);
    width: px(120);
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    margin-bottom: px(83);
  }
  .part1,
  .part3 {
    ._bottom {
      position: relative;
      padding-bottom: px(100);
      img {
        display: block;
        width: px(1773);
      }
      p {
        display: block;
      }
    }
  }
  .part2 {
    background-color: #f8f8f8;
    padding-bottom: px(168);
    ._bottom {
      & > div {
        width: px(1280);
        display: flex;
        min-height: px(594);
        margin-bottom: px(127);
        &:last-child {
          margin-bottom: 0;
        }
        ._left {
          height: 100%;
          min-height: px(594);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: px(466);
          margin-right: px(18);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 36px 0px rgba(246, 246, 246, 1);
          border-radius: px(11);
          & > * {
            position: relative;
            top: px(-52);
          }
          img {
            display: block;
            width: px(438);
            height: px(438);
            border-radius: 50%;
          }
          ._name {
            height: px(80);
            font-size: px(56);
            line-height: px(80);
          }
          ._zhiwei {
            font-size: px(32);
          }
        }
        ._right {
          flex: 1;
          min-height: px(594);
          height: 100%;
          box-sizing: border-box;
          padding: px(89) px(74) px(75) px(77);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 36px 0px rgba(246, 246, 246, 1);
          border-radius: px(11);
          display: flex;
          justify-content: center;
          flex-direction: column;
          p {
            display: block;
            font-size: px(26);
            line-height: px(40);
            margin-bottom: px(20);
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .layout_content_innerbox {
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
