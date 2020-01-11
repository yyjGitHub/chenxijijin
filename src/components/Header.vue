<template>
  <header :class="[isHome ? 'is_home' : '']">
    <img
      class="logo"
      :src="
        is_1st_slide
          ? require('@/assets/image/logo_1st_slide.png')
          : require('@/assets/image/logo.png')
      "
      alt=""
      srcset=""
    />
    <div
      class="menu_list tran-3s"
      :class="[is_1st_slide ? 'home_1st_slide' : '']"
    >
      <div
        class="_item tran-3s"
        :class="[index === active_index ? 'active' : '']"
        v-for="(item, index) in menulist"
        :key="index"
        @click="toPage(item, index)"
      >
        {{ item.meta.label }}
      </div>
      <div
        class="trans_item"
        :style="{ width: trans_width, left: trans_left }"
      ></div>
    </div>
  </header>
</template>
<script>
// import { EventBus } from "@/bus";
import $ from "jquery";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active_index: 0,
      trans_left: "-8px",
      trans_width: 0,
      font_size: 0
    };
  },
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menulist"
    })
    // transLeft(){
    //   return this.transLeft
    // }
  },
  props: {
    is_1st_slide: {
      type: Boolean,
      default: false
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toPage(item) {
      // this.active_index = index;
      console.log(item);
      this.$router.push(item.path);
    },
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth;
      this.font_size = (deviceWidth * 100) / 1920;
    }
  },
  watch: {
    $route: {
      handler(newVal) {
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
                  left += elementj.width() + this.font_size * 0.55;
                } else {
                  this.trans_width = elementj.width() + 16 + "px";
                  this.trans_left = left - 6 + "px";
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
      immediate: true
    }
  }
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
  padding-top: px(60);
  padding-bottom: px(60);
  background-color: #fff;
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
  }
  .menu_list {
    display: flex;
    align-items: center;
    position: relative;
    & > ._item {
      cursor: pointer;
      color: #000000;
      margin-right: px(55);
      font-size: px(18);
      font-family: PingFangSC-Regular, PingFang SC;
      position: relative;
      transition: all ease-in-out 0.6s;
      &.active {
        color: #599ae5;
        // &::after {
        //   content: "";
        //   display: block;
        //   position: absolute;
        //   bottom: px(-8);
        //   left: 0;
        //   width: 100%;
        //   height: px(2);
        //   background-color: #599ae5;
        // }
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
