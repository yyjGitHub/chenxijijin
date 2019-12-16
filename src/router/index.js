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
      }
    ],
    meta: {
      label: "关于晨曦",
      title: "关于晨曦-晨曦基金"
    }
  }
];

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
