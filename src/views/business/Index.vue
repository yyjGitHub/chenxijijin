<template>
  <div class="business_index_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
        <div class="_into" v-html="topInfo.content"></div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part_1" id="SYZG">
        <div class="_c">
          <div class="layout_content_title">
            术有专攻
          </div>
          <div class="layout_content_into">
            {{ SYZG_Info.title }}
          </div>
          <div class="layout_content_intro" v-html="SYZG_Info.content"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in SYZG_List"
                @click="toitem(item.url, item.id)"
                :key="index"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <span class="_title">{{ item.title }}</span>
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
                  <span class="_title">
                    {{ item.title }}
                  </span>
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
                  <span class="_title">
                    {{ item.title }}
                  </span>
                  <span class="_line"></span>
                  <span class="_into" v-html="item.content"> </span>
                  <span class="_more">
                    <span>查看详情</span>
                    <img
                      src="~@/assets/image/arrow_right_active.png"
                      alt=""
                      srcset=""
                    />
                  </span>
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
      console.log(res);
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
      handler(newVal) {
        console.log(newVal);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/8`)
        .then(({ data }) => {
          console.log(data);
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //  晨曦视界
      this.axios
        .get(`${this.$baseUrl}content/id/9`)
        .then(({ data }) => {
          this.SYZG_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
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
        .catch(response => {
          console.log(response);
        });
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
        .catch(response => {
          console.log(response);
        });
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
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style lang="scss">
.business_index_box {
  .layout_content_innerbox {
    .part_1 {
      padding-bottom: px(120);
      .layout_content_title {
        &::before {
          content: "NEWS";
        }
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          padding-bottom: px(120);
          & > div {
            margin-right: px(64);
            width: px(384);
            margin-bottom: px(56);
            cursor: pointer;
            &:hover {
              & > span {
                &._title {
                  color: #599ae5;
                }
              }
            }
            & > img {
              display: block;
              width: px(384);
              height: px(280);
            }
            & > span {
              &._title {
                font-size: px(24);
                color: #333333;
                line-height: px(33);
                font-weight: bold;
                margin-top: px(24);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: px(8);
                transition: all ease-in-out 0.3s;
              }
              &._tiem {
                height: px(24);
                font-size: px(24);

                color: #7f7f7f;
                line-height: px(24);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
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
      padding-bottom: px(120);
      .layout_content_title {
        &._special {
          &::before {
            content: "NOTICE";
            color: #f1eff2;
          }
        }
      }
      .layout_content_line {
        width: px(120);
        height: 2px;
        background: rgba(0, 0, 0, 0.4);
        margin-top: px(32);
        margin-bottom: px(76);
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          width: 100%;
          & > div {
            margin-top: px(4);
            margin-bottom: px(56);
            width: px(1280);
            height: px(327);
            box-sizing: border-box;
            padding: px(40) px(60) px(40) px(40);
            display: flex;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            & > img {
              display: block;
              width: px(460);
              height: px(247);
              margin-right: px(60);
            }
            & > div {
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
                  margin-top: px(20);
                  margin-bottom: px(24);
                }
                &._title {
                  height: px(43);
                  font-size: px(32);
                  color: rgba(0, 0, 0, 1);
                  line-height: px(32);
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  margin-bottom: px(8);
                }
                &._into {
                  font-size: px(18);
                  color: #7f7f7f;
                  line-height: px(32);
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
    .part_3 {
      padding-bottom: px(120);
      .layout_content_title {
        &::before {
          content: "NOTICE";
        }
      }
      .layout_content_line {
        width: px(120);
        height: 2px;
        background: rgba(0, 0, 0, 0.4);
        margin-top: px(32);
        margin-bottom: px(76);
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
            height: px(350);
            background: #f8f8f8;
            box-sizing: border-box;
            padding: px(40);
            display: flex;
            & > img {
              display: block;
              width: px(200);
              height: px(270);
              margin-right: px(40);
            }
            & > div {
              width: px(288);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              & > span {
                display: block;
              }
              ._title {
                height: px(24);
                font-size: px(24);
                color: #313131;
                line-height: px(24);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                position: relative;
                margin-bottom: px(24);
                font-weight: bold;
              }
              ._line {
                width: px(60);
                height: 2px;
                background-color: rgba(0, 0, 0, 0.4);
                margin-bottom: px(24);
              }
              ._into {
                font-size: px(18);
                color: #7f7f7f;
                line-height: px(24);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 6;
                overflow: hidden;
              }
              ._more {
                cursor: pointer;
                display: flex;
                align-items: center;
                span {
                  display: block;
                  margin-right: px(8);
                  height: px(20);
                  font-size: px(14);
                  color: rgba(89, 154, 229, 1);
                  line-height: px(20);
                }
                img {
                  display: block;
                  width: px(7);
                  height: px(14);
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
