<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // let _this = this;
    this.resetFontsize();
    window.addEventListener("resize", () => this.resetFontsize(), false);
    // window.onresize = () => {
    // };
  },
  methods: {
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 1920 + "px";
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/fun.scss";
#app {
  font-family: AlibabaPuHuiTiR;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: px(18);
}
</style>
