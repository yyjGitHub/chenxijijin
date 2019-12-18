<template>
  <div class="business_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/image/business_index_toppic.png" alt="" srcset="" />
      <div class="_box">
        <div class="_title">三大板块 保驾护航</div>
        <div class="_into">
          公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于
          成为房地产综合服务提供商和独具特色的股权投资机构
        </div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part_1">
        <div class="_c">
          <div class="layout_content_title">
            晨曦领域
          </div>
          <div class="layout_content_into">
            三大板块 保驾护航
          </div>
          <div class="layout_content_intro">
            结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式主要是理解全球发展规律，抓住中国独特的结构性机会，坚持独立的价值投资方式并提供后续关键的服务。
          </div>
          <div class="_bottom">
            <div class="_box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.business_index_box {
  .layout_content_innerbox {
    .part_1 {
      padding-bottom: px(120);
      .layout_content_title {
        &::before {
          content: "BUSINESS";
        }
      }
      ._bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._box {
          width: 100%;
          padding-bottom: px(120);
        }
      }
    }
  }
}
</style>
