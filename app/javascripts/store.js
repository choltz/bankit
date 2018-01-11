import Vue         from 'vue';
import Vuex        from 'vuex';
import axios       from 'axios';
import Account     from 'javascripts/models/account.js';
import Transaction from 'javascripts/models/transaction.js';
import * as _      from 'lodash';

Vue.use(Vuex);

function builder(accounts, currentAccount) {
  return new Vuex.Store({
    state: {
      accounts:           accounts,
      currentAccount:     currentAccount || new Account.allAccounts(),
      currentTransaction: new Transaction(),
      transactions:       []
    },

    mutations: {
      setAccounts(state, payload) {
        state.accounts = payload;
      },

      setCurrentAccount(state, payload) {

      },

      setCurrentTransaction(state, payload) {
        state.currentTransaction = payload;
      },

      setTransactions(state, payload) {
        state.transactions = payload;
      }
    },

    actions: {
      // Public: Return the transaction model that corresponds with the given
      // transaction id
      findTransactionById({commit, dispatch}, transactionId) {
        return _.find(this.state.transactions, (transaction) => {
          return parseInt(transactionId) == transaction.id;
        });
      },

      setCurrentAccount({commit, dispatch}, account) {
        axios.get('/api/transactions/' + account.id)
          .then((results) => {
            commit('setCurrentAccount', account);
            commit('setTransactions', _.map(results.data, (item) => {
              return new Transaction(item);
            }));
          })
          .catch((results) => {
            debugger
          });
      },

      setCurrentTransaction({commit, dispatch}, transaction) {
        commit('setCurrentTransaction', transaction);
      }
    }
  });
}

export default builder;
