<template>
  <div class="news_index_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part_1" id="CXSJ">
        <div class="_c">
          <div class="layout_content_title">
            新闻动态
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in CXSJ_List"
                :key="index"
                @click="toitem(item.url, item.id)"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <span class="_title">{{ item.title }}</span>
                <span class="_tiem">{{ item.update_time.split(" ")[0] }}</span>
              </div>
            </div>
            <el-pagination
              background
              @current-change="CXSJ_change"
              :page-size="6"
              layout="prev, pager, next"
              :total="CXSJ_total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="part_2" id="QYGG">
        <div class="_c">
          <div class="layout_content_title _special">
            团队建设
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in QYGG_List"
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
              @current-change="QYGG_change"
              :total="QYGG_total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="part_3" id="CEOTALK">
        <div class="_c">
          <div class="layout_content_title">
            CEO TALK
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in CEOTALK_List"
                @click="toitem(item.url, item.id)"
                :key="index"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <div>
                  <div class="_time">{{ item.entitle }}</div>
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
              @current-change="CEOTALK_change"
              :total="CEOTALK_total"
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
      CXSJ_Info: {
        title: "",
        content: "",
        logo: "",
        contentext: ""
      },
      CXSJ_List: [],
      QYGG_List: [],
      CEOTALK_List: [],
      CXSJ_p: 1,
      QYGG_p: 1,
      CEOTALK_p: 1,
      CXSJ_total: 0,
      QYGG_total: 0,
      CEOTALK_total: 0,
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
    if (this.sign) {
      this.$nextTick(() => {
        let t_a = $(`#${this.sign}`).offset();
        $("html,body").animate({ scrollTop: t_a.top - 220 + "px" }, 500);
      });
    }
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/12`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(() => {});
      //  晨曦视界
      this.axios
        .get(`${this.$baseUrl}content/id/23`)
        .then(({ data }) => {
          this.CXSJ_Info = data.data;
        })
        .catch(() => {});
      this.CEOTALK_change(1);
      this.QYGG_change(1);
      this.CXSJ_change(1);
    },
    toitem(url, index) {
      if (url) {
        window.open(url);
        return;
      }
      this.$router.push(`/news/${index}`);
    },
    CEOTALK_change(p) {
      this.CEOTALK_p = p;
      // CEOTALK
      this.axios
        .get(`${this.$baseUrl}contentext/id/14/p/${this.CEOTALK_p}/count/6`)
        .then(({ data }) => {
          this.CEOTALK_List = data.data;
          this.CEOTALK_total = parseInt(data.count);
        })
        .catch(() => {});
    },
    CXSJ_change(p) {
      this.CXSJ_p = p;
      // 晨曦世界
      this.axios
        .get(
          `${this.$baseUrl}contentext/id/23/p/${this.CXSJ_p}/count/6/sortTime/desc`
        )
        .then(({ data }) => {
          this.CXSJ_List = data.data;
          this.CXSJ_total = parseInt(data.count);
        })
        .catch(() => {});
    },
    QYGG_change(p) {
      this.QYGG_p = p;
      // 企业公告
      this.axios
        .get(`${this.$baseUrl}contentext/id/13/p/${this.QYGG_p}/count/6`)
        .then(({ data }) => {
          this.QYGG_List = data.data;
          this.QYGG_total = parseInt(data.count);
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.news_index_box {
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
              & > span {
                &._title {
                  color: #599ae5;
                }
              }
            }
            & > img {
              display: block;
              width: px(384);
              height: px(164);
            }
            & > span {
              &._title {
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
                &._title {
                  width: px(466);
                  font-size: px(34);
                  color: rgba(0, 0, 0, 1);
                  line-height: px(40);
                  margin-bottom: px(4);
                  min-height: px(81);
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
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
                min-height: px(81);
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
