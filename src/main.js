import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import { Pagination } from "element-ui";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./styles/app.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

// Vue.use(ElementUI);
Vue.use(Pagination);

new Vue({
  router,
  store,
  mounted () {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
  },
  methods: {
    resetFontsize () {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1366
            ? 1366
            : rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 1920 + "px";
    }
  },
  render: h => h(App)
}).$mount("#app");
