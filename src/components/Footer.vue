<template>
  <footer :class="[isHome ? 'isHome' : '']">
    <div class="_box">
      <div class="_left">
        <div class="_top">
          <div v-for="(item, index) in menulist" :key="index">
            <!-- <div @click="toPage(item.path, item, index)">
              {{ item.meta.label }}
            </div> -->
            <div
              @click="toPage(item.path, sitem, sindex)"
              v-for="(sitem, sindex) in item.children"
              :key="sindex"
              v-show="!sitem.meta.isntShow"
            >
              {{ sitem.meta.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="_right">
        <div class="_left">
          <div class="_company">
            Copyright©️ 上海晨曦股权投资基金管理有限公司
          </div>
          <div class="_beian">备案号：泸ICP18001865号</div>
        </div>
        <img src="~@/assets/image/company_qrcode.png" alt="" srcset="" />
      </div>
    </div>
  </footer>
</template>
<script>
import { EventBus } from "@/bus";
import $ from "jquery";
export default {
  data() {
    return {
      menulist: this.$store.getters.menulist.filter((item) => {
        return item.name !== "home";
      }),
    };
  },
  created() {},
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toPage(path, item) {
      if ("/" + this.$route.path.split("/")[1] === path) {
        if (item.hasOwnProperty("component")) {
          this.$router.push(path + "/" + item.path);
          return;
        }
        let t_a = $(`#${item.path}`).offset();
        $("html,body").animate({ scrollTop: t_a.top + "px" }, 500);
        return;
      }
      if (item.hasOwnProperty("component") && item.hasOwnProperty("children")) {
        this.$router.push(path);
      } else if (
        item.hasOwnProperty("component") &&
        !item.hasOwnProperty("children")
      ) {
        this.$router.push(path + "/" + item.path);
      } else {
        sessionStorage.setItem("GG", item.name);
        this.$router.push(path);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  background-color: #f8f8f8;
  ._box {
    width: px(1280);
    height: px(281);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ._left {
      display: flex;
      flex-direction: column;
      color: #868686;
      font-size: px(14);
      line-height: px(17);
      ._top {
        display: flex;
        align-items: flex-start;
        & > div {
          font-size: px(16);
          margin-right: px(76);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          & > div {
            margin-bottom: px(8);
            height: px(23);
            font-size: px(16);
            line-height: px(22);
            &:first-child {
              height: px(25);
              font-size: px(20);
              line-height: px(27);
              margin-bottom: px(14);
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    ._right {
      height: px(149);
      border-left: 1px solid #979797;
      display: flex;
      align-items: center;
      ._left {
        margin-right: px(30);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-left: px(83);
        ._company {
          height: px(28);
          font-size: px(18);
          color: #868686;
          line-height: px(25);
        }
        ._beian {
          height: px(25);
          font-size: px(18);
          color: #868686;
          line-height: px(25);
        }
      }
      img {
        width: px(100);
        height: px(100);
        display: block;
      }
    }
  }
}
</style>
