<template>
  <header :class="[isHome ? 'is_home' : '']">
    <img @click="toHome"
         class="logo"
         :src="require('@/assets/image/logo.png')"
         alt=""
         srcset="" />
    <div class="menu_list tran-3s">
      <div class="_item tran-3s"
           :class="[index === active_index ? 'active' : '']"
           v-for="(item, index) in menulist"
           :key="index"
           @click="toPage(item, index)">
        {{ item.meta.label }}
      </div>
      <div class="trans_item"
           :style="{ width: trans_width, left: trans_left }"></div>
    </div>
  </header>
</template>
<script>
// import { EventBus } from "@/bus";
import $ from "jquery";
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      active_index: 0,
      trans_left: "-8px",
      trans_width: 0,
      font_size: 0,
    };
  },
  mounted () {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        window.location.reload();
        _this.resetFontsize();
      })();
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menulist",
    }),
    // transLeft(){
    //   return this.transLeft
    // }
  },
  props: {
    is_1st_slide: {
      type: Boolean,
      default: false,
    },
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toHome () {
      this.$router.push("/home");
    },
    toPage (item) {
      // this.active_index = index;
      sessionStorage.clear();
      this.$router.push(item.path);
    },
    resetFontsize () {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 2304
          ? 2304
          : rootHtml.clientWidth < 1228.8
            ? 1228.8
            : rootHtml.clientWidth;
      this.font_size = (deviceWidth * 100) / 2304;
    },
  },
  watch: {
    $route: {
      handler (newVal) {
        for (let i = 0; i < this.menulist.length; i++) {
          const element = this.menulist[i];
          if (newVal.path.includes(element.path)) {
            this.active_index = i;
            this.$nextTick(() => {
              let arr = $("header.header .menu_list ._item");
              let left = 0;
              for (let j = 0; j < arr.length; j++) {
                const elementj = arr.eq(j);
                if (!elementj.hasClass("active")) {
                  left += elementj.width() + this.font_size * 0.46;
                } else {
                  this.trans_width = elementj.width() + 0 + "px";
                  this.trans_left = left - 0 + "px";
                  break;
                }
              }
            });
            // EventBus.$emit("sendSubMenu", {
            //   path: element.path,
            //   children: element.children
            // });
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  box-sizing: border-box;
  padding: 0 px(80);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: px(37);
  padding-bottom: px(37);
  background-color: #fff;
  position: fixed;
  z-index: 999;
  &.is_home {
    background: rgba(0, 0, 0, 0);
    position: relative;
    z-index: 99;
    // position: fixed;
    // left: 50%;
    // top: 0;
    // transform: translateX(-50%);
    z-index: 1001;
  }
  .logo {
    width: px(235);
    height: px(40);
    display: block;
    cursor: pointer;
  }
  .menu_list {
    display: flex;
    align-items: center;
    position: relative;
    & > ._item {
      cursor: pointer;
      color: #000000;
      margin-right: px(46);
      font-size: px(24);
      font-family: PingFangSC-Regular, PingFang SC;
      position: relative;
      transition: all ease-in-out 0.6s;
      &.active {
        color: #599ae5;
      }
    }
    .trans_item {
      transition: all cubic-bezier(0.09, 0.31, 0.05, 1.14) 0.6s;
      position: absolute;
      bottom: -0.08rem;
      left: 0;
      height: 0.02rem;
      background-color: #599ae5;
    }
    &.home_1st_slide {
      & > ._item {
        color: rgba(255, 255, 255, 0.2);
        &.active {
          color: #fff;
          &::after {
            background-color: #fff;
          }
        }
      }
      .trans_item {
        background-color: #fff;
      }
    }
  }
}
</style>
