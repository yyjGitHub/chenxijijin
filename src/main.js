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

let baseurl = "";
let basepicurl = "";
const ishttps = "https:" == document.location.protocol ? true : false;
if (ishttps) {
  // alert("这是一个https请求");
  baseurl = "https://chenxifunds.com/Home/index/";
  basepicurl = "https://chenxifunds.com/Public/Uploads/";
} else {
  //  alert("http");
  baseurl = "http://chenxifunds.com/Home/index/";
  basepicurl = "http://chenxifunds.com/Public/Uploads/";
}

Vue.prototype.$baseUrl = baseurl;
Vue.prototype.$basePicUrl = basepicurl;

// Vue.prototype.$baseUrl = "http://taomaidian.cn/Home/index/";
// Vue.prototype.$basePicUrl = "http://taomaidian.cn/Public/Uploads/";

VueAMap.initAMapApiLoader({
  key: "1787da644b789c9eb13218cc6b404a26",
  plugin: ["AMap.Scale"],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11",
});

Vue.config.productionTip = false;

// Vue.use(ElementUI);
Vue.use(Pagination);
Vue.use(Input);
Vue.pro;

new Vue({
  router,
  store,
  created() {
    if (!this.IsPC()) {
      window.location.href = location.protocol + "//" + location.host + "/m/#/";
    }
  },
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        window.location.reload();
        _this.resetFontsize();
      })();
    };
  },
  methods: {
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 2304
          ? 2304
          : rootHtml.clientWidth < 1228.8
          ? 1228.8
          : rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 2304 + "px";
    },
    IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
      ];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
  },
  render: (h) => h(App),
}).$mount("#app");
