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
import { EventBus } from "@/bus";
import Header from "@/components/Header";
import SubMenu from "./sub/SubMenu.vue";
import Footer from "@/components/Footer";
export default {
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
