import Vue   from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts:       [],
    // TODO: relace this with an account model
    currentAccount: { id: null, name: 'All Accounts' }
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
      return new Promise((resolve) => {
        axios.get('/api/accounts/active')
          .then((results) =>{
            context.commit('setAccounts', results.data);
            resolve();
          });
      });
    },

    setCurrentAccount(context, account) {
      context.commit('setCurrentAccount', account);
    }
  }
});
