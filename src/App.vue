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
      // window.location.reload();
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 2304
          ? 2304
          : rootHtml.clientWidth < 1228.8
          ? 1228.8
          : rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 2304 + "px";
    },
  },
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
