<template>
  <div class="about_index_box layout_content_box">
    <div class="page_bottom_box">
      <div class="part_1">
        <div class="_c">
          <div class="_left">
            <div class="__part_title">
              <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
              <div class="title">
                企业简介
              </div>
            </div>
            <div class="part_into">
              <div class="_title">
                晨曦基金
              </div>
              <!-- <div class="_into" v-html="part_1Info.content"></div> -->
              <div class="_into">
                上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿元人民币。于2017年4月12日，在中国证券投资基金业协会，完成私募基金管理人备案登记（私募投资基金管理人登记号为P1062335）
              </div>
              <div
                class="_more more_hover"
                @click="toPage('/about/CompanyProfile')"
              >
                <div>
                  <span>了解更多</span>
                  <i class="arrow_right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="_right">
            <img :src="`${$basePicUrl}${part_1Info.logo}`" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div class="part_2">
        <div class="_c">
          <div class="__part_title">
            <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
            <div class="title">
              企业治理
            </div>
          </div>
          <div class="_box">
            <img :src="`${$basePicUrl}${part_2Info.logo}`" alt="" srcset="" />
            <div>
              <div
                class="more_hover big left"
                @click="toPage('/about/CorporateVision/QYWH')"
              >
                <div class="YJ"></div>
                <span class="title">企业文化</span>
              </div>
              <img
                v-for="(item, index) in part_2List"
                :key="index"
                :src="`${$basePicUrl}${item.logo}`"
                alt=""
                srcset=""
              />
              <div class="more_hover big right" @click="toQYRY">
                <div class="RY"></div>
                <span class="title">企业荣誉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part_3">
        <div
          class="_box"
          :style="{
            'background-image': `url(${$basePicUrl}${part_3Info.logo})`,
          }"
        >
          <div class="_c">
            <div>
              <div class="_left">
                <span>业务介绍</span>
                <div class="_more" @click="toPage('/about/InvestmentStrategy')">
                  <div>
                    <span>了解更多</span>
                    <i class="arrow_right"></i>
                  </div>
                </div>
              </div>
              <div class="_right">
                <div @click="toPage('InvestmentStrategy', 'TZLN')">
                  <div class="top">
                    <span>{{ TZLN_Info.ctitle }}</span>
                  </div>
                  <div class="bottom" v-html="TZLN_Info.content"></div>
                </div>
                <div @click="toPage('InvestmentStrategy', 'TZCL')">
                  <div class="top">
                    <span>{{ TZCL_Info.ctitle }}</span>
                  </div>
                  <div class="bottom" v-html="TZCL_Info.content"></div>
                </div>
                <div @click="toPage('InvestmentStrategy', 'FXKZ')">
                  <div class="top">
                    <span>{{ FXKZ_Info.ctitle }}</span>
                  </div>
                  <div class="bottom" v-html="FXKZ_Info.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part_4">
        <div class="_c">
          <div class="_top">
            <div class="__part_title">
              <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
              <div class="title">
                合作伙伴
              </div>
            </div>
            <div
              class="_more more_hover"
              @click="toPage('/about/CooperationPartners')"
            >
              <div>
                <span>了解更多</span>
                <i class="arrow_right"></i>
              </div>
            </div>
          </div>
          <div class="_bottom">
            <div v-for="(item, index) in part_4List" :key="index">
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
        logo: "",
      },
      part_1Info: {
        title: "",
        content: "",
        logo: "",
      },
      part_2Info: {
        title: "",
        content: "",
        logo: "",
      },
      part_3Info: {
        title: "",
        content: "",
        logo: "",
      },
      part_4List: [],
      part_2List: [],
      pageList: [],
      TZLN_Info: {
        title: "",
        content: "",
        logo: "",
      },
      TZCL_Info: {
        title: "",
        content: "",
        logo: "",
      },
      FXKZ_Info: {
        title: "",
        content: "",
        logo: "",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    toPage(url, query = "") {
      if (query) {
        this.$router.push({
          name: url,
          params: { activeDIV: query },
        });
      } else {
        this.$router.push(url);
      }
    },
    toQYRY() {
      sessionStorage.setItem("GG", "QYRY");
      this.$router.push("/about/CompanyProfile");
    },
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/2`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/3`)
        .then(({ data }) => {
          this.part_1Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/19`)
        .then(({ data }) => {
          this.part_2Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/4`)
        .then(({ data }) => {
          this.part_2List.push(data.data);
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/5`)
        .then(({ data }) => {
          this.part_2List.push(data.data);
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/6`)
        .then(({ data }) => {
          this.part_3Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/7`)
        .then(({ data }) => {
          this.part_4List = data.data.slice(0, 8);
        })
        .catch(() => {});
      // 投资理念
      this.axios
        .get(`${this.$baseUrl}content/id/20`)
        .then(({ data }) => {
          this.TZLN_Info = data.data;
        })
        .catch(() => {});
      //投资策略
      this.axios
        .get(`${this.$baseUrl}content/id/21`)
        .then(({ data }) => {
          this.TZCL_Info = data.data;
        })
        .catch(() => {});
      //风险控制
      this.axios
        .get(`${this.$baseUrl}content/id/22`)
        .then(({ data }) => {
          this.FXKZ_Info = data.data;
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
.about_index_box {
  .page_bottom_box {
    .part_1 {
      background-color: #f8f8f8;
      ._c {
        padding-top: px(80);
        display: flex;
        justify-content: space-between;
        padding-bottom: px(80);
        ._left {
          .__part_title {
            margin-bottom: px(40);
          }
          .part_into {
            ._title {
              height: px(33);
              font-size: px(24);

              color: rgba(0, 0, 0, 1);
              line-height: px(29);
              margin-bottom: px(15);
              font-weight: bold;
            }
            ._into {
              width: px(479);
              font-size: px(20);

              color: #7f7f7f;
              line-height: px(32);
              margin-bottom: px(24);
            }
            ._more {
              cursor: pointer;
              padding: 0 px(24);
              display: inline-block;
              height: px(40);
              border: 1px solid rgba(116, 116, 116, 1);
              & > div {
                height: 100%;
                display: flex;
                align-items: center;
                span {
                  font-size: px(14);

                  color: rgba(116, 116, 116, 1);
                  display: block;
                  margin-right: px(8);
                }
                i {
                  display: block;
                  width: px(7);
                  height: px(14);
                  background: url("~@/assets/image/arrow_right.png") no-repeat
                    center;
                  background-size: cover;
                }
              }
            }
          }
        }
        ._right {
          img {
            display: block;
            width: px(560);
            height: px(326);
          }
        }
      }
    }
    .part_2 {
      height: px(837);
      box-sizing: border-box;
      width: 100%;
      padding-top: px(80);
      ._box {
        margin-top: px(35);
        display: flex;
        width: 100%;
        & > img {
          display: block;
          width: px(720);
          height: px(560);
        }
        & > div {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          & > * {
            display: block;
            width: px(280);
            height: px(280);
          }
          & > div {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f8f8f8;
            div {
              display: block;
              width: px(82);
              height: px(80);
              margin-bottom: px(25);
              &.YJ {
                width: px(86);
                background: url("~@/assets/image/about_index_part2_icon1.png")
                  no-repeat center;
                background-size: cover;
              }
              &.RY {
                width: px(80);
                background: url("~@/assets/image/about_index_part2_icon2.png")
                  no-repeat center;
                background-size: cover;
              }
              transition: all ease-in-out 0.3s;
            }
            span {
              &.title {
                height: px(33);
                font-size: px(24);
                font-family: Helvetica;
                font-weight: bold;
                color: #313131;
                line-height: px(29);
              }
            }
          }
        }
      }
    }
    .part_3 {
      height: px(707);
      background: rgba(248, 248, 248, 1);
      box-sizing: border-box;
      padding-top: px(80);
      ._box {
        margin: 0 auto;
        margin-top: px(60);
        width: px(1600);
        height: px(418);
        background: url("~@/assets/image/about_index_part3_1.png") no-repeat
          center;
        background-size: cover;
        ._c {
          height: 100%;
          & > div {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > ._left {
              & > span {
                display: block;
                color: rgba(255, 255, 255, 1);
                &:first-child {
                  height: px(72);
                  font-size: px(52);
                  line-height: px(72);
                  margin-bottom: px(22);
                }
              }
              ._more {
                cursor: pointer;
                padding: 0 px(24);
                display: inline-block;
                height: px(40);
                margin-bottom: px(80);
                background: #5b9be4;
                & > div {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  span {
                    font-size: px(14);

                    color: #fff;
                    display: block;
                    margin-right: px(8);
                  }
                  i {
                    display: block;
                    width: px(7);
                    height: px(14);
                    background: url("~@/assets/image/arrow_right_active_white.png")
                      no-repeat center;
                    background-size: cover;
                  }
                }
              }
            }
            & > ._right {
              width: px(560);
              height: px(560);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              & > div {
                &:hover {
                  .top {
                    span {
                      color: #5b9be4 !important;
                    }
                  }
                }
                cursor: pointer;
                width: px(560);
                height: px(140);
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
                padding: px(32) px(60) 0 px(101);
                .top {
                  display: flex;
                  align-items: flex-end;
                  position: relative;
                  &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: px(-43);
                    top: 50%;
                    transform: translateY(-50%);
                    width: px(23);
                    height: px(11);
                    background: url("~@/assets/image/half_circle_icon_1.png")
                      no-repeat center;
                    background-size: cover;
                  }
                  span {
                    transition: all ease-in-out 0.3s;
                    &:first-child {
                      height: px(33);
                      font-size: px(24);
                      color: rgba(0, 0, 0, 1);
                      line-height: px(33);
                    }
                  }
                }
                .bottom {
                  height: px(24);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: px(18);
                  color: #7f7f7f;
                  line-height: px(24);
                  margin-top: px(13);
                  p {
                    height: px(24);
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: px(18);
                    color: #7f7f7f;
                    line-height: px(24);
                  }
                }
              }
            }
          }
        }
      }
    }
    .part_4 {
      height: px(741);
      box-sizing: border-box;
      padding-top: px(80);
      ._c {
        ._top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: px(11);
          ._more {
            cursor: pointer;
            padding: 0 px(24);
            display: inline-block;
            height: px(40);
            border: 1px solid rgba(116, 116, 116, 1);
            & > div {
              height: 100%;
              display: flex;
              align-items: center;
              span {
                font-size: px(14);

                color: rgba(116, 116, 116, 1);
                display: block;
                margin-right: px(8);
              }
              i {
                display: block;
                width: px(7);
                height: px(14);
                background: url("~@/assets/image/arrow_right.png") no-repeat
                  center;
                background-size: cover;
              }
            }
          }
        }
        ._bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          & > div {
            width: px(302);
            height: px(200);
            margin-top: px(24);
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
