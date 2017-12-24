// Wire all the front-end pieces together. Set up Vue, define routes, initialize
// the app container, etc.

import Vue       from 'vue';
import App       from 'javascripts/components/app.vue';
import VueMoment from 'vue-moment';
import router    from 'javascripts/routes.js';
import store     from 'javascripts/store.js';
import axios     from 'axios';
import moment    from 'moment';
import Account   from 'javascripts/models/account.js';

import * as _ from 'lodash';
import "vueify/lib/insert-css";

Vue.use(VueMoment);

Vue.config.productionTip = false;

// In order to ensure initialization data is loaded before vuex renders the page,
// get the data first, then initialize view with the data.
axios.get('/api/accounts/active')
  .then((results) => {
    // unfortunately, vue router isn't available yet, so we need to get calcualte
    // the account id the hard way at first.
    let accountId      = Account.accountIdFromPath();
    let currentAccount = results.data.find((account) => { return account.id == parseInt(accountId); });

    new Vue({
      el:     '#app',
      render: h => h(App),
      store:  store(results.data, currentAccount),
      router
    });
  });
