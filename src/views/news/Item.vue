<template>
  <div class="news_item_box layout_content_box">news_item_box</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal.params.newsID);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.news_item_box {
}
</style>
