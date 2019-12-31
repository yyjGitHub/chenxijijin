import Vue from "vue";
//自动加载global目录下的.js结尾的文件
const componentsContext = require.context("./global", true, /\.js$/);
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  /**
   *兼容importexport和requiremodule.export两种规范
   */
  const ctrl = componentConfig.default || componentConfig;
  Vue.component(ctrl.name, ctrl);
});
