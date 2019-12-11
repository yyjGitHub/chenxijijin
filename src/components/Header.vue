<template>
  <header>
    <img class="logo home" src="@/assets/image/logo.png" alt="" srcset="" />
    <div class="menu_list">
      <div
        class="_item"
        :class="[index === 0 ? 'active' : '']"
        v-for="(item, index) in menu_list"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menu_list: [
        {
          title: "首页"
        },
        {
          title: "关于晨曦"
        },
        {
          title: "业务领域"
        },
        {
          title: "新闻资讯"
        },
        {
          title: "投资者关系"
        },
        {
          title: "服务中心"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
header {
  width: px(1760);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: px(60);
  .logo {
    width: px(235);
    height: px(40);
    display: block;
    &.home {
    }
  }
  .menu_list {
    display: flex;
    align-items: center;
    & > ._item {
      cursor: pointer;
      color: rgba(255, 255, 255, 0.2);
      margin-right: px(55);
      font-size: px(18);
      font-family: PingFangSC-Regular, PingFang SC;
      position: relative;
      &.active {
        color: #fff;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: px(-8);
          left: 0;
          width: 100%;
          height: px(2);
          background-color: #fff;
        }
      }
    }
  }
}
</style>
