<template>
  <div class="about_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/image/about_index_toppic.png"
           alt=""
           srcset="" />
      <div class="_box">
        <div class="_title">面向未来 注重成效</div>
        <div class="_into">
          公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于
          成为房地产综合服务提供商和独具特色的股权投资机构
        </div>
      </div>
    </div>
    <div class="page_bottom_box">
      <div class="part_1">
        <div class="_c">
          <div class="_left">
            <div class="__part_title">
              <div class="title">
                企业简介
              </div>
              <div class="en_title">
                <img src="~@/assets/image/half_circle_icon_1.png"
                     alt="" />
                <span>COMPANY PROFILE</span>
              </div>
            </div>
            <div class="part_into">
              <div class="_title">
                晨曦基金
              </div>
              <div class="_into">
                上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
              </div>
              <div class="_more">
                <div>
                  <span>了解更多</span>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
          <div class="_right">
            <img src="~@/assets/image/about_index_part1_1.png"
                 alt=""
                 srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aaa: "111313131"
    };
  }
};
</script>

<style lang="scss" scoped>
.about_index_box {
  .page_bottom_box {
    .part_1 {
      border-bottom: 1px solid #979797;
      ._c {
        padding-top: px(80);
        display: flex;
        justify-content: space-between;
        padding-bottom: px(80);
        ._left {
          .__part_title {
            margin-bottom: px(40);
          }
          .part_into {
            ._title {
              height: px(33);
              font-size: px(24);
              font-family: Helvetica;
              color: rgba(0, 0, 0, 1);
              line-height: px(29);
              margin-bottom: px(15);
              font-weight: bold;
            }
            ._into {
              width: px(479);
              font-size: px(18);
              font-family: Helvetica;
              color: #7f7f7f;
              line-height: px(25);
              margin-bottom: px(24);
            }
            ._more {
              padding: 0 px(24);
              display: inline-block;
              height: px(40);
              border: px(2) solid rgba(116, 116, 116, 1);
              & > div {
                height: 100%;
                display: flex;
                align-items: center;
                span {
                  font-size: px(14);
                  font-family: Helvetica;
                  color: rgba(116, 116, 116, 1);
                  display: block;
                  margin-right: px(8);
                }
                i {
                  display: block;
                  width: px(7);
                  height: px(14);
                  background: url("~@/assets/image/arrow_right.png") no-repeat
                    center;
                  background-size: cover;
                }
              }
            }
          }
        }
        ._right {
          img {
            display: block;
            width: px(560);
            height: px(326);
          }
        }
      }
    }
  }
}
</style>
