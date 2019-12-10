// import { login } from "@/api/login";
import {
  // setUserName,
  // removeUserName,
  setToken,
  removeToken
} from "@/utils/cookie";

const user = {
  state: {
    name: "",
    token: ""
  },

  mutations: {
    SET_NAME: (state, username) => {
      state.name = username;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.name.trim();
      return new Promise(resolve => {
        // login(username, userInfo.password, userInfo.captcha, userInfo.redisKey)
        //   .then(response => {
        // 用延时模拟数据请求
        setTimeout(() => {
          commit("SET_NAME", username);
          // setUserName(username);
          //设置token response.token
          setToken("12345").then(response => {
            commit("SET_TOKEN", "12345");
            resolve(response);
          });
        }, 2000);
        // })
        // .catch(error => {
        //   reject(error);
        // });
      });
    },
    // 退出
    Logout({ commit }) {
      commit("SET_NAME", "");
      commit("SET_TOKEN", "");
      // removeUserName();
      removeToken();
      return new Promise(resolve => {
        resolve(true);
      });
    }
  }
};

export default user;
