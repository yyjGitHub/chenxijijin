<template>
  <div class="companyprofile_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_box">
        <div class="_title">{{ topInfo.title }}</div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="_top">
          <div class="layout_content_title">
            {{ pageInfo.ctitle }}
          </div>
          <div class="layout_content_into">
            {{ pageInfo.title }}
          </div>
          <div class="layout_content_intro" v-html="pageInfo.content"></div>
        </div>
        <div class="_bottom" id="QYRY">
          <div v-for="(item, index) in pageList" :key="index">
            <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
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
      pageInfo: {
        title: "",
        content: "",
        logo: "",
      },
      pageList: [],
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
        .catch((response) => {});

      this.axios
        .get(`${this.$baseUrl}content/id/3`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch((response) => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/3`)
        .then(({ data }) => {
          this.pageList = data.data;
        })
        .catch(() => {});
      // this.axios
      //   .get(`${this.$baseUrl}contentext/id/3`)
      //   .then(({ data }) => {
      //     this.pageList = data.data;
      //   })
      //   .catch(response => {});
    },
  },
};
</script>
<style lang="scss">
.companyprofile_box {
  .layout_content_innerbox {
    .layout_content_intro {
      width: px(1280) !important;
      p {
        width: px(1280) !important;
      }
    }
    ._bottom {
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
</style>
