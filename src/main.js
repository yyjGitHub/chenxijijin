import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAMap from 'vue-amap'
import store from './store'
import 'normalize.css'
import { Pagination, Input } from 'element-ui'
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import './styles/app.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '1787da644b789c9eb13218cc6b404a26',
  plugin: ['AMap.Scale'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11'
})

Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(Pagination)
Vue.use(Input)

new Vue({
  router,
  store,
  mounted() {
    let _this = this
    this.resetFontsize()
    window.onresize = () => {
      return (() => {
        _this.resetFontsize()
      })()
    }
  },
  methods: {
    resetFontsize() {
      let rootHtml = document.documentElement
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth
      rootHtml.style.fontSize = (deviceWidth * 100) / 1920 + 'px'
    }
  },
  render: h => h(App)
}).$mount('#app')
