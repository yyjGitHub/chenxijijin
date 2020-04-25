<template>
  <div class="cooperationpartners_box layout_content_box">
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="layout_content_title">
          {{ pageInfo.ctitle }}
        </div>
        <div class="layout_content_line"></div>
        <div class="_bottom">
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
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/7`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}contentext/id/7/sortTime/desc`)
        .then(({ data }) => {
          this.pageList = data.data;
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.cooperationpartners_box {
  .layout_content_line {
    margin-top: px(50);
    width: px(120);
    height: 1px;
    background-color: rgba(0, 0, 0, 0);
  }
  .layout_content_innerbox {
    ._bottom {
      width: 100%;
      padding-bottom: px(68);
      display: flex;
      flex-wrap: wrap;
      & > div {
        width: px(302);
        height: px(200);
        margin-right: px(24);
        &:nth-child(4n) {
          margin-right: 0;
        }
        margin-bottom: px(24);
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
