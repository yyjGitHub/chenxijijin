<template>
  <div class="submenu_box">
    <div class="_box">
      <div
        @click="toPage(menu_path + '/' + item.path)"
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
  watch: {
    $route: {
      handler(newVal) {
        let activePath = "/" + newVal.path.split("/")[1];
        if (activePath === "/home") {
          return;
        }
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
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    toPage(url) {
      // console.log(url);
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu_box {
  width: 100%;
  height: px(57);
  border-top: 1px solid #979797;
  ._box {
    height: px(57);
    display: flex;
    align-items: center;
    width: px(1760);
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
