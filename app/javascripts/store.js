import Vue       from 'vue';
import Vuex      from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts:['test1']
  },

  mutations: {
    setAccounts(state, payload) {
      state.accounts = payload;
    }
  },

  actions: {
    getAccounts(context) {
    }
  }
});
