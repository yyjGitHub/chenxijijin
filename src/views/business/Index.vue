<template>
  <div class="business_index_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part_1" id="SYZG">
        <div class="_c">
          <div class="layout_content_title">
            术有专攻
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in SYZG_List"
                @click="toitem(item.url, item.id)"
                :key="index"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <div class="_title">{{ item.title }}</div>
                <span class="_tiem">{{ item.time.split(" ")[0] }}</span>
              </div>
            </div>
            <el-pagination
              background
              @current-change="SYZG_change"
              :page-size="6"
              layout="prev, pager, next"
              :total="SYZG_total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="part_2" id="TZJD">
        <div class="_c">
          <div class="layout_content_title _special">
            投资经典
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in TZJD_List"
                @click="toitem(item.url, item.id)"
                :key="index"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <div>
                  <span class="_time">
                    {{ item.entitle }}
                  </span>
                  <div class="_title">
                    {{ item.title }}
                  </div>
                  <span class="_into" v-html="item.content"> </span>
                </div>
              </div>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="6"
              @current-change="TZJD_change"
              :total="TZJD_total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="part_3" id="SDDC">
        <div class="_c">
          <div class="layout_content_title">
            深度洞察
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in SDDC_List"
                @click="toitem(item.url, item.id)"
                :key="index"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <div>
                  <div class="_time">
                    {{ item.entitle }}
                  </div>
                  <div class="_title">
                    {{ item.title }}
                  </div>
                  <span class="_into" v-html="item.content"> </span>
                </div>
              </div>
            </div>
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="6"
              @current-change="SDDC_change"
              :total="SDDC_total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { EventBus } from "@/bus";
export default {
  data() {
    return {
      topInfo: {
        title: "",
        content: "",
        logo: "",
        contentext: ""
      },
      SYZG_Info: {
        title: "",
        content: "",
        logo: "",
        contentext: ""
      },
      SYZG_List: [],
      TZJD_List: [],
      SDDC_List: [],
      SYZG_p: 1,
      TZJD_p: 1,
      SDDC_p: 1,
      SYZG_total: 0,
      TZJD_total: 0,
      SDDC_total: 0,
      sign: ""
    };
  },
  mounted() {
    EventBus.$on("aaa", res => {
      this.sign = res;
    });
    this.getData();
  },
  updated() {
    if (sessionStorage.getItem("aaa")) {
      this.$nextTick(() => {
        let t_a = $(`#${sessionStorage.getItem("aaa")}`).offset();
        $("html,body").animate({ scrollTop: t_a.top - 220 + "px" }, 500);
      });
    }
  },
  watch: {
    $route: {
      handler() {},
      deep: true,
      immediate: true
    }
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/8`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(() => {});
      //  晨曦视界
      this.axios
        .get(`${this.$baseUrl}content/id/9`)
        .then(({ data }) => {
          this.SYZG_Info = data.data;
        })
        .catch(() => {});
      this.SDDC_change(1);
      this.TZJD_change(1);
      this.SYZG_change(1);
    },
    SDDC_change(p) {
      this.SDDC_p = p;
      // SDDC
      this.axios
        .get(`${this.$baseUrl}contentext/id/11/p/${this.SDDC_p}/count/6`)
        .then(({ data }) => {
          this.SDDC_List = data.data;
          this.SDDC_total = parseInt(data.count);
        })
        .catch(() => {});
    },
    SYZG_change(p) {
      this.SYZG_p = p;
      // 晨曦世界
      this.axios
        .get(`${this.$baseUrl}contentext/id/9/p/${this.SYZG_p}/count/6`)
        .then(({ data }) => {
          this.SYZG_List = data.data;
          this.SYZG_total = parseInt(data.count);
        })
        .catch(() => {});
    },
    toitem(url, index) {
      if (url) {
        window.open(url);
        return;
      }
      this.$router.push(`/news/${index}`);
    },
    TZJD_change(p) {
      this.TZJD_p = p;
      // 企业公告
      this.axios
        .get(`${this.$baseUrl}contentext/id/10/p/${this.TZJD_p}/count/6`)
        .then(({ data }) => {
          this.TZJD_List = data.data;
          this.TZJD_total = parseInt(data.count);
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss">
.business_index_box {
  .layout_content_innerbox {
    .part_1 {
      .layout_content_line {
        margin-top: px(50);
        width: px(120);
        height: 1px;
        background-color: rgba(0, 0, 0, 0.4);
        margin-bottom: px(83);
      }
      padding-bottom: px(120);
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          & > div {
            margin-right: px(64);
            width: px(384);
            margin-bottom: px(56);
            cursor: pointer;
            &:hover {
              ._title {
                color: #599ae5;
              }
            }
            & > img {
              display: block;
              width: px(384);
              height: px(164);
            }
            ._title {
              font-size: px(26);
              color: #333333;
              line-height: px(35);
              font-weight: bold;
              margin-top: px(16);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              margin-bottom: px(20);
              transition: all ease-in-out 0.3s;
            }
            ._tiem {
              height: px(24);
              font-size: px(24);
              color: #7f7f7f;
              line-height: px(24);
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }
    .part_2 {
      background-color: #f8f8f8;
      padding-bottom: px(130);
      .layout_content_line {
        width: px(120);
        height: 1px;
        background: rgba(0, 0, 0, 0.4);
        margin-top: px(50);
        margin-bottom: px(80);
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          width: 100%;
          & > div {
            margin-bottom: px(56);
            width: px(1280);
            height: px(234);
            box-sizing: border-box;
            padding: px(12) px(11);
            display: flex;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            & > img {
              display: block;
              width: px(490);
              height: px(210);
              margin-right: px(40);
            }
            & > div {
              ._title {
                width: px(466);
                font-size: px(34);
                color: rgba(0, 0, 0, 1);
                line-height: px(40);
                margin-bottom: px(4);
                word-wrap: break-word;
                height: px(81);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              & > span {
                display: block;
                &._time {
                  color: #999999;
                  height: px(24);
                  font-size: px(24);
                  line-height: px(24);
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  margin-top: px(25);
                  margin-bottom: px(20);
                }
                &._into {
                  width: 100%;
                  font-size: px(22);
                  color: #7f7f7f;
                  line-height: px(32);
                  height: px(43);
                  line-height: px(46);
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
    .part_3 {
      padding-bottom: px(150);
      .layout_content_line {
        width: px(120);
        height: 1px;
        background: rgba(0, 0, 0, 0.4);
        margin-top: px(50);
        margin-bottom: px(80);
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          width: 100%;
          display: flex;
          padding-bottom: px(56);
          & > div {
            margin-right: px(64);
            cursor: pointer;
            &:nth-child(2n) {
              margin-right: 0;
            }
            width: px(608);
            height: px(500);
            background: #f8f8f8;
            box-sizing: border-box;
            padding: px(40) px(38) px(0) px(38);
            & > img {
              display: block;
              width: px(532);
              height: px(227);
              margin-bottom: px(30);
            }
            & > div {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              & > span {
                display: block;
              }
              ._time {
                height: px(24);
                font-size: px(24);
                line-height: px(24);
                margin-bottom: px(20);
              }
              ._title {
                width: px(466);
                height: px(81);
                font-size: px(34);
                color: #313131;
                line-height: px(40);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: px(4);
                font-weight: bold;
              }
              ._into {
                height: px(43);
                font-size: px(22);
                color: #7f7f7f;
                line-height: px(46);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
}
</style>
