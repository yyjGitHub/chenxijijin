import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Layout from "@/views/layout/Index";

const _import = file => require(`@/views/${file}.vue`).default;

Vue.use(VueRouter);

const baseroutes = [
  {
    path: "/",
    redirect: "/home"
  }
];

const mainroutes = [
  {
    path: "/home",
    name: "home",
    component: _import("home/Home"),
    meta: {
      label: "首页",
      title: "首页-晨曦基金"
    }
  },
  {
    path: "/about",
    name: "about",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("about/Index"),
        meta: {
          label: "关于晨曦",
          title: "关于晨曦-晨曦基金"
        }
      },
      {
        path: "CompanyProfile",
        name: "CompanyProfile",
        component: _import("about/CompanyProfile"),
        meta: {
          label: "企业简介",
          title: "企业简介-晨曦基金"
        }
      },
      {
        path: "CorporateVision",
        name: "CorporateVision",
        component: _import("about/CorporateVision"),
        meta: {
          label: "企业愿景",
          title: "企业愿景-晨曦基金"
        }
      },
      {
        path: "CorporateHonor",
        name: "CorporateHonor",
        component: _import("about/CorporateHonor"),
        meta: {
          label: "企业荣誉",
          title: "企业荣誉-晨曦基金"
        }
      },
      {
        path: "InvestmentStrategy",
        name: "InvestmentStrategy",
        component: _import("about/InvestmentStrategy"),
        meta: {
          label: "投资策略",
          title: "投资策略-晨曦基金"
        }
      },
      {
        path: "CooperationPartners",
        name: "CooperationPartners",
        component: _import("about/CooperationPartners"),
        meta: {
          label: "合作伙伴",
          title: "合作伙伴-晨曦基金"
        }
      }
    ],
    meta: {
      label: "关于晨曦",
      title: "关于晨曦-晨曦基金"
    }
  },
  {
    path: "/business",
    name: "business",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("business/Index"),
        meta: {
          label: "业务领域",
          title: "业务领域-晨曦基金"
        }
      }
    ],
    meta: {
      label: "业务领域",
      title: "业务领域-晨曦基金"
    }
  },
  {
    path: "/news",
    name: "news",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("news/Index"),
        meta: {
          label: "新闻资讯",
          title: "新闻资讯-晨曦基金"
        }
      },
      {
        path: ":newsID",
        name: "newsietm",
        component: _import("news/Item"),
        meta: {
          label: "新闻资讯",
          title: "新闻资讯-晨曦基金",
          isntShow: true
        }
      }
    ],
    meta: {
      label: "新闻资讯",
      title: "新闻资讯-晨曦基金"
    }
  },
  {
    path: "/relation",
    name: "relation",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("relation/Index"),
        meta: {
          label: "投资者关系",
          title: "投资者关系-晨曦基金"
        }
      }
    ],
    meta: {
      label: "投资者关系",
      title: "投资者关系-晨曦基金"
    }
  },
  {
    path: "/service",
    name: "service",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("service/Index"),
        meta: {
          label: "服务中心",
          title: "服务中心-晨曦基金"
        }
      }
    ],
    meta: {
      label: "服务中心",
      title: "服务中心-晨曦基金"
    }
  }
];
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  loadingroutes: false,
  isCreateMenu: false,
  routes: [...baseroutes, ...mainroutes]
});

router.beforeEach((to, from, next) => {
  if (router.options.isCreateMenu) {
    next();
  } else {
    store.dispatch("saveMenuList", mainroutes).then(() => {
      router.options.isCreateMenu = true;
      next();
    });
  }
});

export default router;
