<template>
  <div class="relation_index_box layout_content_box">
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
          晨曦通函
        </div>
        <div class="layout_content_into">
          {{ topInfo.title }}
        </div>
        <div class="_bottom">
          <div class="_box">
            <div v-for="(item, index) in TZZGX_List" :key="index">
              <div class="_date">{{ item.entitle }}</div>
              <div class="_b">
                <div class="_title">{{ item.title }}</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
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
      TZZGX_List: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/15`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      //  投资者关系
      this.axios
        .get(`${this.$baseUrl}contentext/id/15`)
        .then(({ data }) => {
          this.TZZGX_List = data.data;
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.relation_index_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "NEWS" !important;
      }
    }
    ._bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: px(80);
      padding-bottom: px(120);
      ._box {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: px(16);
        & > div {
          width: 100%;
          height: px(211);
          background-color: #f8f8f8;
          box-sizing: border-box;
          padding: px(60);
          margin-bottom: px(40);
          ._date {
            height: px(24);
            font-size: px(24);
            color: #7f7f7f;
            line-height: px(24);
          }
          ._b {
            margin-top: px(24);
            display: flex;
            align-items: center;
            justify-content: space-between;
            ._title {
              font-size: px(32);
              color: #333;
              max-width: px(660);
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            ._more {
              cursor: pointer;
              padding: 0 px(24);
              display: inline-block;
              height: px(40);
              border: px(2) solid #599ae5;
              & > div {
                height: 100%;
                display: flex;
                align-items: center;
                span {
                  font-size: px(14);

                  color: #599ae5;
                  display: block;
                  margin-right: px(8);
                }
                i {
                  display: block;
                  width: px(7);
                  height: px(14);
                  background: url("~@/assets/image/arrow_right_active.png")
                    no-repeat center;
                  background-size: cover;
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
