import Vue     from 'vue';
import Vuex    from 'vuex';
import axios   from 'axios';
import Account from 'javascripts/models/account.js';

Vue.use(Vuex);

function builder(accounts, currentAccount) {
  return new Vuex.Store({
    state: {
      accounts:       accounts,
      currentAccount: currentAccount || new Account.allAccounts(),
      transactions:   []
    },

    mutations: {
      setAccounts(state, payload) {
        state.accounts = payload;
      },

      setCurrentAccount(state, payload) {
        state.currentAccount = payload;
      },

      setTransactions(state, payload) {
        state.transactions = payload;
      }
    },

    actions: {
      setCurrentAccount({commit, dispatch}, account) {
        axios.get('/api/transactions/' + account.id)
          .then((results) => {
            commit('setCurrentAccount', account);
            commit('setTransactions',   results.data);
          })
          .catch((results) => {
            debugger
          });
      }
    }
  });
}

export default builder;
