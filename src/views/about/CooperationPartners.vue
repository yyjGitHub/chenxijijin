<template>
  <div class="cooperationpartners_box layout_content_box">
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
          合作伙伴
        </div>
        <div class="layout_content_into">
          {{ pageInfo.title }}
        </div>
        <div class="layout_content_intro" v-html="pageInfo.content"></div>
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
        .get(`${this.$baseUrl}content/id/7`)
        .then(({ data }) => {
          this.pageInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      this.axios
        .get(`${this.$baseUrl}contentext/id/7`)
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
.cooperationpartners_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "STRATEGY";
      }
    }
    ._bottom {
      width: 100%;
      padding-bottom: px(96);
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
