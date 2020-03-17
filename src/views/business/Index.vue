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
      <div class="part_1" id="DCJJ">
        <div class="_c">
          <div class="layout_content_title">
            晨曦领域
          </div>
          <div class="layout_content_into">
            {{ topInfo.title }}
          </div>
          <div class="layout_content_intro" v-html="topInfo.contentext"></div>
          <div class="_bottom">
            <div class="_box">
              <div
                class="title_box"
                :style="{
                  'background-image': `url(${$basePicUrl}${DCJJ_Info.logo})`
                }"
              >
                <div class="_title">{{ DCJJ_Info.ctitle }}</div>
                <div class="_subtitle">
                  {{ DCJJ_Info.title }}
                </div>
              </div>
              <div class="into_box">
                <div v-html="DCJJ_Info.content"></div>
                <div class="column_list">
                  <div v-for="(item, index) in DCJJ_List" :key="index">
                    <div class="_title">
                      <img
                        src="~@/assets/image/half_circle_icon_1.png"
                        alt=""
                        srcset=""
                      />
                      <span>{{ item.title }}</span>
                    </div>
                    <div class="_into" v-html="item.content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part_2" id="JGYW">
        <div class="_c">
          <div class="_box">
            <div class="title_box">
              <div class="_title">{{ JGYW_Info.ctitle }}</div>
              <div class="_subtitle">
                {{ JGYW_Info.title }}
              </div>
            </div>
            <div class="_bottom">
              <img
                class="_left"
                :src="`${$basePicUrl}${JGYW_Info.logo}`"
                alt=""
                srcset=""
              />
              <div class="_right" v-html="JGYW_Info.content"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="part_3"
        id="CFGL"
        :style="{
          'background-image': `url(${$basePicUrl}${CFGL_Info.logo})`
        }"
      >
        <div class="_title">
          {{ CFGL_Info.ctitle }}
        </div>
        <div class="_into">
          {{ CFGL_Info.title }}
        </div>
        <div class="_info" v-html="CFGL_Info.content"></div>
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
      DCJJ_Info: {
        title: "",
        content: "",
        logo: "",
        contentext: ""
      },
      DCJJ_List: [],
      JGYW_Info: {
        title: "",
        content: "",
        logo: ""
      },
      CFGL_Info: {
        title: "",
        content: "",
        logo: ""
      }
    };
  },
  mounted() {
    this.getData();
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
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //  地产基金
      this.axios
        .get(`${this.$baseUrl}content/id/9`)
        .then(({ data }) => {
          this.DCJJ_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //  地产基金
      this.axios
        .get(`${this.$baseUrl}contentext/id/9`)
        .then(({ data }) => {
          this.DCJJ_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 机构业务
      this.axios
        .get(`${this.$baseUrl}content/id/10`)
        .then(({ data }) => {
          this.JGYW_Info = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      // 财富管理
      this.axios
        .get(`${this.$baseUrl}content/id/11`)
        .then(({ data }) => {
          this.CFGL_Info = data.data;
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
          content: "BUSINESS";
        }
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          width: 100%;
          .title_box {
            width: px(1280);
            height: px(300);
            background: url("~@/assets/image/business_index_pic1.png") no-repeat
              center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: px(40);
            ._title {
              height: px(60);
              font-size: px(60);
              color: rgba(255, 255, 255, 1);
              line-height: px(60);
            }
            ._subtitle {
              height: px(24);
              font-size: px(24);
              color: rgba(255, 255, 255, 1);
              line-height: px(24);
              letter-spacing: px(4);
              margin-top: px(16);
              position: relative;
              // &::before{
              //   display: block;
              //   content: '';
              //   position: absolute;
              //   top: 50%;
              //   transform: translateY(-50%);
              //   left: px(-);
              // }
            }
          }
          .into_box {
            .__into {
              font-size: px(20);
              color: #7f7f7f;
              line-height: px(40);
              margin-bottom: px(40);
            }
            .row_list {
              display: flex;
              margin-bottom: px(40);
              & > div {
                width: 50%;
                display: flex;
                align-items: center;
                position: relative;
                &::after {
                  display: block;
                  content: "";
                  height: px(64);
                  width: 1px;
                  background-color: #979797;
                  position: absolute;
                  right: 0%;
                  top: 50%;
                  transform: translateY(-50%);
                }
                &:nth-child(2n-1) {
                  padding-right: px(71);
                  ._left {
                    background: url("~@/assets/image/business_index_icon1.png")
                      no-repeat center;
                    background-size: cover;
                  }
                }
                &:nth-child(2n) {
                  padding-left: px(71);
                  ._left {
                    background: url("~@/assets/image/business_index_icon2.png")
                      no-repeat center;
                    background-size: cover;
                  }
                  &::after {
                    display: none;
                  }
                }
                ._left {
                  width: px(96);
                  height: px(72);
                  display: block;
                  margin-right: px(24);
                }
                ._right {
                  ._title {
                    height: px(33);
                    font-size: px(24);
                    color: rgba(0, 0, 0, 1);
                    line-height: px(29);
                    margin-bottom: px(8);
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  }
                  ._subinto {
                    font-size: px(18);
                    color: #7f7f7f;
                    line-height: px(24);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                  }
                }
              }
            }
            .column_list {
              & > div {
                width: px(1280);
                background-color: #f8f8f8;
                margin-bottom: px(40);
                &:last-child {
                  margin-bottom: 0;
                }
                box-sizing: border-box;
                padding: px(40);
                ._title {
                  display: flex;
                  align-items: center;
                  margin-bottom: px(8);
                  img {
                    display: block;
                    width: px(23);
                    height: px(11);
                    margin-right: px(13);
                    position: relative;
                    top: 0;
                  }
                  span {
                    height: px(33);
                    font-size: px(24);
                    font-weight: bold;
                    color: #333;
                    line-height: px(33);
                  }
                }
                ._into {
                  span {
                    font-size: px(18);
                    color: #7f7f7f;
                    line-height: px(32);
                    display: block;
                  }
                }
              }
            }
          }
        }
      }
    }
    .part_2 {
      background-color: #f8f8f8;
      padding-bottom: px(120);
      ._c {
        padding-top: px(80);
        ._box {
          .title_box {
            width: px(1280);
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: px(60);
            ._title {
              height: px(60);
              font-size: px(60);
              color: #636363;
              line-height: px(60);
            }
            ._subtitle {
              height: px(24);
              font-size: px(24);
              color: #636363;
              line-height: px(24);
              letter-spacing: px(4);
              margin-top: px(16);
              position: relative;
              // &::before{
              //   display: block;
              //   content: '';
              //   position: absolute;
              //   top: 50%;
              //   transform: translateY(-50%);
              //   left: px(-);
              // }
            }
          }
          ._bottom {
            display: flex;
            align-items: center;
            ._left {
              width: px(620);
              height: px(344);
              display: block;
              margin-right: px(60);
            }
            ._right {
              font-size: px(20);
              color: #7f7f7f;
              line-height: px(40);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 9;
              overflow: hidden;
            }
          }
        }
      }
    }
    .part_3 {
      width: 100%;
      height: px(520);
      background: url("~@/assets/image/business_index_pic3.png") no-repeat
        center;
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
      ._into {
        height: px(24);
        font-size: px(24);
        color: rgba(255, 255, 255, 1);
        line-height: px(24);
        letter-spacing: px(4);
        margin-bottom: px(60);
      }
      ._info {
        width: px(1280);
        font-size: px(20);
        color: rgba(255, 255, 255, 1);
        line-height: px(40);
        text-align: center;
      }
    }
  }
}
</style>
