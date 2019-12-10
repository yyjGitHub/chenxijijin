import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "@/views/layout/Index";

const _import = file => require(`@/views/${file}.vue`).default;

Vue.use(VueRouter);

const mainroutes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: _import("home/Home"),
    meta: {
      label: "主页",
      title: "主页-人工智能",
      icon: "home",
      ismenu: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  loadingroutes: false,
  routes: mainroutes
});

export default router;
