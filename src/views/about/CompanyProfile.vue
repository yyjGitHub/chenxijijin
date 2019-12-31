<template>
  <div class="companyprofile_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
        <div class="_into" v-html="topInfo.content"></div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="_top">
          <div class="layout_content_title">
            晨曦基金
          </div>
          <div class="layout_content_into">
            {{ pageInfo.title }}
          </div>
          <div class="layout_content_intro" v-html="pageInfo.content"></div>
        </div>
        <div class="_bottom">
          <div v-for="(item, index) in pageList" :key="index">
            <img :src="`${$basePicUrl}${topInfo.sm_logo}`" alt="" />
            <div>
              <span>{{ item.title }}</span>
              <div v-html="item.content"></div>
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
        .get(`${this.$baseUrl}content/id/3`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      this.axios
        .get(`${this.$baseUrl}contentext/id/3`)
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
.companyprofile_box {
  .layout_content_innerbox {
    ._bottom {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: px(120);
      & > div {
        width: px(302);
        height: px(560);
        background: rgba(248, 248, 248, 1);
        display: flex;
        flex-direction: column;
        & > img {
          display: block;
          width: px(302);
          height: px(320);
        }
        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          & > span {
            height: px(42);
            font-size: px(30);

            color: rgba(0, 0, 0, 1);
            line-height: px(36);
            margin-bottom: px(16);
          }
          & > div {
            text-align: center;
            font-size: px(20);

            color: #454545;
            line-height: px(24);
            p {
              margin: 0;
              text-align: center;
              font-size: px(20);

              color: #454545;
              line-height: px(24);
            }
          }
        }
      }
    }
  }
}
</style>
