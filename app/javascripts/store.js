import Vue   from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts:       [],
    currentAccount: null
  },

  mutations: {
    setAccounts(state, payload) {
      state.accounts = payload;
    },

    setCurrentAccount(state, payload) {
      state.currentAccount = payload;
    }
  },

  actions: {
    getAccounts(context) {
      axios.get('/api/accounts/active')
        .then((results) =>{
          context.commit('setAccounts', results.data);
        });
    },

    setCurrentAccount(context, account) {
      context.commit('setCurrentAccount', account);
    }
  }
});
