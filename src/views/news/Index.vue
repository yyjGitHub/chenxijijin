<template>
  <div class="news_index_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
        <div class="_into" v-html="topInfo.content"></div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part_1" id="CXSJ">
        <div class="_c">
          <div class="layout_content_title">
            晨曦视界
          </div>
          <div class="layout_content_into">
            {{ CXSJ_Info.title }}
          </div>
          <div class="layout_content_intro" v-html="CXSJ_Info.content"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                v-for="(item, index) in CXSJ_List"
                :key="index"
                @click="toitem(item.id)"
              >
                <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                <span class="_title">{{ item.title }}</span>
                <span class="_tiem">{{ item.time.split(" ")[0] }}</span>
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
            企业公告
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div v-for="(item, index) in QYGG_List" :key="index">
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
              <div v-for="(item, index) in CEOTALK_List" :key="index">
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
      CEOTALK_total: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/12`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //  晨曦视界
      this.axios
        .get(`${this.$baseUrl}content/id/23`)
        .then(({ data }) => {
          this.CXSJ_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      this.CEOTALK_change(1);
      this.QYGG_change(1);
      this.CXSJ_change(1);
    },
    toitem(index) {
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
        .catch(response => {
          console.log(response);
        });
    },
    CXSJ_change(p) {
      this.CXSJ_p = p;
      // 晨曦世界
      this.axios
        .get(`${this.$baseUrl}contentext/id/23/p/${this.CXSJ_p}/count/6`)
        .then(({ data }) => {
          this.CXSJ_List = data.data;
          this.CXSJ_total = parseInt(data.count);
        })
        .catch(response => {
          console.log(response);
        });
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
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.news_index_box {
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
