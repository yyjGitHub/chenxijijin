<template>
  <div class="service_index_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part2" id="SHZP">
        <div class="_c">
          <div class="layout_content_title">
            {{ SHZP_Info.ctitle }}
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div class="_top">
                <span>职位名称</span>
                <span>工作地点</span>
                <span>职位部门</span>
                <span>发布时间</span>
                <span>申请职位</span>
              </div>
              <div class="_bottom">
                <div
                  class="_item"
                  v-for="(item, index) in SHZP_List"
                  :key="index"
                >
                  <div class="_left">
                    <span class="_title">
                      {{ item.title }}
                    </span>
                    <span class="_into">
                      {{ item.name }}
                    </span>
                  </div>
                  <div class="_right">
                    <div class="_top">
                      <span>{{ item.attr }}</span>
                      <span>{{ item.entitle }}</span>
                      <span>{{ item.time.split(" ")[0] }}</span>
                      <span @click="setActive(index)">
                        <div class="apply">
                          <div>
                            {{
                              active_index === index ? "收起详情" : "查看详情"
                            }}
                          </div>
                          <img
                            src="~@/assets/image/arrow_right_active_white.png"
                          />
                        </div>
                      </span>
                    </div>
                    <div
                      class="_into"
                      v-if="item.content !== '<p>无</p>'"
                      v-html="item.content"
                      v-show="active_index === index"
                    ></div>
                  </div>
                </div>
                <div class="show_more" v-if="!get_more" @click="getMore">
                  展开更多
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part1" id="LXWM">
        <div class="_c">
          <div class="layout_content_title">
            {{ HZQT_Info.ctitle }}
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div class="map_wrapper">
                <el-amap
                  ref="map"
                  vid="amapDemo"
                  :amap-manager="amapManager"
                  :center="center"
                  :zoom="zoom"
                  class="amap-demo"
                >
                  <el-amap-marker
                    vid="component-marker"
                    :position="center"
                  ></el-amap-marker>
                </el-amap>
                <!-- <div class="_tooltip">
                  <img
                    src="~@/assets/image/telphone_icon.png"
                    class="_icon"
                    alt=""
                    srcset=""
                  />
                  <span>021-58995866</span>
                  <div class="line"></div>
                  <img
                    src="~@/assets/image/address_icon.png"
                    class="_icon"
                    alt=""
                    srcset=""
                  />
                  <span class="_address"
                    >浦东新区张杨路2389弄置汇旭辉广场C座15楼</span
                  >
                </div> -->
              </div>
              <div class="_form">
                <div class="_top">
                  上海晨曦股权投资<br />
                  基金管理有限公司
                </div>
                <div class="_bottom">
                  <div>
                    <img
                      src="~@/assets/image/address_icon.png"
                      alt=""
                      srcset=""
                    />
                    <div>浦东新区张杨路2389弄<br />置汇旭辉广场C座15楼</div>
                  </div>
                  <div>
                    <img
                      src="~@/assets/image/telphone_icon.png"
                      alt=""
                      srcset=""
                    />
                    <div>021-58995866</div>
                  </div>
                  <div>
                    <img
                      src="~@/assets/image/chuanzhen_icon.png"
                      alt=""
                      srcset=""
                    />
                    <div>58995866-217</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  data() {
    return {
      // amapManager,
      // zoom: "12",
      // center: [121.545101, 31.236498]
      amapManager,
      zoom: 17,
      center: [121.554626, 31.242531],
      mapStyle: "fresh",
      name: "",
      contact: "",
      content: "",
      SHZP_Info: {
        title: "",
        content: "",
        logo: "",
      },
      HZQT_Info: {
        title: "",
        content: "",
        logo: "",
      },
      SHZP_List: [],
      get_more: false,
      active_index: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      //  联系我们
      this.axios
        .get(`${this.$baseUrl}content/id/17`)
        .then(({ data }) => {
          this.SHZP_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/18`)
        .then(({ data }) => {
          this.HZQT_Info = data.data;
        })
        .catch(() => {});
      //  加入我们
      this.axios
        .get(`${this.$baseUrl}contentjob/id/18/p/1/count/2`)
        .then(({ data }) => {
          this.SHZP_List = data.data;
        })
        .catch(() => {});
    },
    postData() {
      this.axios
        .post(`${this.$baseUrl}contact`, {
          name: this.name,
          tel: this.contact,
          content: this.content,
        })
        .then(({ data }) => {
          if (data.status === "1") {
            Message({
              message: "添加成功",
              type: "success",
            });
            this.name = "";
            this.contact = "";
            this.content = "";
          }
        })
        .catch(() => {});
    },
    getMore() {
      this.get_more = true;
      //  加入我们
      this.axios
        .get(`${this.$baseUrl}contentjob/id/18/p/1/count/99999`)
        .then(({ data }) => {
          this.SHZP_List = data.data;
        })
        .catch(() => {});
    },
    setActive(index) {
      if (this.active_index === index) {
        this.active_index = "";
      } else {
        this.active_index = index;
      }
    },
  },
};
</script>

<style lang="scss">
.service_index_box {
  .layout_content_innerbox {
    .part1 {
      .layout_content_line {
        margin-top: px(50);
        width: px(120);
        height: 1px;
        background-color: rgba(0, 0, 0, 0);
      }
      ._bottom {
        width: 100%;
        ._box {
          display: flex;
          padding-bottom: px(120);
          .map_wrapper {
            width: px(838);
            margin-left: px(16);
            height: px(627);
            margin-right: px(24);
            position: relative;
          }
          ._form {
            width: px(403);
            height: px(627);
            background-color: #599ae5;
            box-sizing: border-box;
            padding: px(77) px(59) px(63) px(60);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            ._top {
              font-size: px(35);
              color: rgba(255, 255, 255, 1);
              line-height: px(46);
            }
            ._bottom {
              padding: px(26) 0;
              border: 1px solid #fff;
              border-left: none;
              border-right: none;
              & > div {
                display: flex;
                margin-bottom: px(14);
                &:last-child {
                  margin-bottom: 0;
                }
                img {
                  margin-top: px(6);
                  display: block;
                  width: px(23);
                  height: px(23);
                  margin-right: px(11);
                }
                div {
                  font-size: px(23);
                  color: rgba(255, 255, 255, 1);
                  line-height: px(30);
                }
              }
            }
          }
        }
      }
    }
    .part2 {
      .layout_content_line {
        margin-top: px(50);
        width: px(120);
        height: 1px;
        background-color: rgba(0, 0, 0, 0);
      }
      ._bottom {
        ._box {
          & > ._top {
            width: px(1280);
            height: px(60);
            border: 1px solid #5b9be4;
            display: flex;
            align-items: center;
            margin-bottom: px(24);
            span {
              height: px(28);
              font-size: px(24);
              color: rgba(91, 155, 228, 1);
              line-height: px(28);
              width: px(232);
              border-right: 1px solid #dcdcdc;
              text-align: center;
              &:first-child {
                width: px(347);
              }
              &:last-child {
                border-right: none;
              }
            }
          }
          ._bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            // padding-bottom: px(120);
            ._item {
              width: px(1280);
              display: flex;
              margin-bottom: px(24);
              ._left {
                background-color: #f4f4f4;
                width: px(347);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                span {
                  display: block;
                  text-align: center;
                  &._title {
                    color: #606060;
                    font-size: px(20);
                    line-height: px(24);
                    width: px(247);
                    margin-bottom: px(3);
                    font-weight: bold;
                  }
                  &._into {
                    font-size: px(20);
                    color: rgba(96, 96, 96, 1);
                    width: px(200);
                    line-height: px(24);
                  }
                }
              }
              ._right {
                background-color: #f4f4f4;
                width: px(933);
                ._top {
                  height: px(97);
                  display: flex;
                  align-items: center;
                  & > span {
                    display: block;
                    text-align: center;
                    border-right: 1px solid #dcdcdc;
                    height: px(45);
                    font-size: px(20);
                    font-family: Helvetica;
                    color: rgba(130, 130, 130, 1);
                    line-height: px(45);
                    flex: 1;
                    position: relative;
                    &:nth-child(2) {
                      cursor: pointer;
                      transition: all ease-in 0.4s;
                      &:hover {
                        color: #599ae5;
                      }
                    }
                    &:last-child {
                      border: none;
                    }
                    .apply {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      height: px(45);
                      line-height: px(45);
                      cursor: pointer;
                      padding: 0 px(15);
                      box-sizing: border-box;
                      width: 65%;
                      color: #fff;
                      background-color: #599ae5;
                      & > div {
                        font-size: px(16);
                        height: px(16);
                        line-height: px(16);
                      }
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      img {
                        display: block;
                        width: px(7);
                        height: px(14);
                        margin-left: px(10);
                      }
                    }
                  }
                }
                ._into {
                  padding: px(24) px(98);
                  background-color: #f9f9f9;
                  margin-bottom: px(16);
                  &:last-child {
                    margin-bottom: 0;
                  }
                  b,
                  span,
                  strong,
                  p {
                    color: #828282;
                    display: block;
                    font-size: px(16);
                    line-height: px(23);
                  }
                  b,
                  strong,
                  p {
                    margin-bottom: px(4);
                  }
                }
              }
            }
            .show_more {
              cursor: pointer;
              width: px(240);
              height: px(48);
              border: 1px solid #5b9be4;
              text-align: center;
              line-height: px(48);
              font-size: px(20);
              color: rgba(89, 154, 229, 1);
              margin-top: px(24);
            }
          }
        }
      }
    }
  }
}
</style>
