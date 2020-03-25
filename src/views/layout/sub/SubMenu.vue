<template>
  <div class="submenu_box">
    <div class="_box">
      <div
        class="tran-3s"
        @click="toPage(menu_path, item, index)"
        v-for="(item, index) in submenu_list"
        :key="index"
        v-show="!item.meta.isntShow"
        :class="[
          item.name === 'index' ? 'line' : '',
          subactive_index === index ? 'active' : ''
        ]"
      >
        {{ item.meta.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/bus";
import $ from "jquery";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menu_path: "",
      submenu_list: [],
      subactive_index: 0
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menulist"
    })
  },
  mounted() {},
  watch: {
    $route: {
      handler(newVal) {
        let activePath = "/" + newVal.path.split("/")[1];
        if (activePath === "/home") {
          return;
        }
        this.$nextTick(() => {
          for (let i = 0; i < this.menulist.length; i++) {
            const element = this.menulist[i];
            if (element.path === activePath) {
              this.menu_path = activePath;
              this.submenu_list = element.children;
              for (let j = 0; j < element.children.length; j++) {
                const elementj = element.children[j];
                if (newVal.path.includes(elementj.path)) {
                  this.subactive_index = j;
                }
              }
            }
          }
        });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    toPage(path, item, index) {
      if (item.hasOwnProperty("component")) {
        this.$router.push(path + "/" + item.path);
      } else {
        if (path === "/relation") {
          EventBus.$emit("GG", item.name);
          this.subactive_index = index;
          return;
        }
        let t_a = $(`#${item.path}`).offset();
        $("html,body").animate({ scrollTop: t_a.top + "px" }, 500);
      }
      this.subactive_index = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu_box {
  position: fixed;
  top: px(160);
  left: 0;
  width: 100%;
  height: px(57);
  z-index: 98;
  background-color: #fff;
  border-top: 1px solid #cbcbcb;
  ._box {
    height: px(57);
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 px(80);
    margin: 0 auto;
    & > div {
      height: px(57);
      font-size: px(18);

      color: #7f7f7f;
      line-height: px(57);
      position: relative;
      margin-right: px(48);
      cursor: pointer;
      &.active {
        color: rgba(89, 154, 229, 1);
      }
      &.line {
        color: rgba(89, 154, 229, 1);
        &::after {
          position: absolute;
          right: px(-24);
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: block;
          width: 1px;
          height: px(25);
          background-color: #979797;
        }
      }
    }
  }
}
</style>
