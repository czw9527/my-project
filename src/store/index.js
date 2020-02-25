 /* jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin :false
  },
  mutations: {
    changeIsLogin(state,msg) {
      state.isLogin = msg;
    }
  },
  actions: {
  },
  modules: {
  }
});
