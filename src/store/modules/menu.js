const menu = {
  state: {
    menulist: []
  },
  mutations: {
    SAVE_MENULIST: (state, list) => {
      state.menulist = list;
    }
  },
  actions: {
    saveMenuList({ commit }, list) {
      commit("SAVE_MENULIST", list);
    }
  }
};

export default menu;
