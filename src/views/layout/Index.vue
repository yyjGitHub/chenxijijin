<template>
  <div class="layout_box">
    <Header
      :is_1st_slide="active_slide_index"
      :isHome="isHome"
      class="header"
    ></Header>
    <sub-menu v-if="!isHome"></sub-menu>
    <div class="sub_routerview" :class="[isHome ? 'is_home' : '']">
      <router-view></router-view>
    </div>
    <Footer v-if="!isHome"></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import { EventBus } from "@/bus";
import Header from "@/components/Header";
import SubMenu from "./sub/SubMenu.vue";
import Footer from "@/components/Footer";
var mixin = {
  data() {
    return {
      sign_: "",
      fzz: ""
    };
  },
  watch: {
    $route: {
      handler() {
        if (sessionStorage.getItem("GG")) {
          this.sign_ = sessionStorage.getItem("GG");
        } else {
          this.sign_ = "";
        }
      },
      deep: true,
      immediate: true
    }
  },
  updated() {
    this.$nextTick(() => {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth;
      this.fzz = (deviceWidth * 100) / 1920 / 100;
      setTimeout(() => {
        if (!this.sign_) {
          return;
        }
        if (!$(`#${this.sign_}`)) {
          return;
        }
        let t_a = $(`#${this.sign_}`).offset();
        if (!t_a) {
          return;
        }
        $("html,body").animate(
          { scrollTop: t_a.top - 225 * this.fzz + "px" },
          500
        );
      }, 500);
    });
  }
};
export default {
  mixins: [mixin],
  name: "layout",
  data() {
    return {
      loading: false,
      isHome: false,
      active_slide_index: false
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        if (newVal.path === "/home") {
          this.isHome = true;
        } else {
          this.active_slide_index = false;
          this.isHome = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    EventBus.$on("sendSlideIndex", res => {
      this.active_slide_index = res;
    });
  },
  methods: {},
  components: { Header, SubMenu, Footer }
};
</script>

<style lang="scss"></style>
