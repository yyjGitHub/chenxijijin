import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAMap from "vue-amap";
import store from "./store";
import "normalize.css";
import animated from "animate.css";
import axios from "axios";
import VueAxios from "vue-axios";

import { Pagination, Input } from "element-ui";
import "./styles/app.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(VueAMap);

Vue.use(animated);

Vue.use(VueAxios, axios);

Vue.prototype.$baseUrl = "http://fund.xjcode.top/Home/index/";
Vue.prototype.$basePicUrl = "http://fund.xjcode.top/Public/Uploads/";

VueAMap.initAMapApiLoader({
  key: "1787da644b789c9eb13218cc6b404a26",
  plugin: ["AMap.Scale"],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11"
});

Vue.config.productionTip = false;

// Vue.use(ElementUI);
Vue.use(Pagination);
Vue.use(Input);
Vue.pro;

new Vue({
  router,
  store,
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
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
  },
  render: h => h(App)
}).$mount("#app");
