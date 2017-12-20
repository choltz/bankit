import Vue     from 'vue';
import Vuex    from 'vuex';
import axios   from 'axios';
import Account from 'javascripts/models/account.js';

Vue.use(Vuex);

function builder(accounts, currentAccount) {
  return new Vuex.Store({
    state: {
      accounts:       accounts,
      currentAccount: currentAccount || new Account({})
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
      setCurrentAccount(context, account) {
        context.commit('setCurrentAccount', account);
      }
    }
  });
}

export default builder;
