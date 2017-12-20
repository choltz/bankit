// Wire all the front-end pieces together. Set up Vue, define routes, initialize
// the app container, etc.

import Vue       from 'vue';
import App       from 'javascripts/app.vue';
import router    from 'javascripts/routes.js';
import store     from 'javascripts/store.js';
import axios     from 'axios';
import "vueify/lib/insert-css";

Vue.config.productionTip = false;

axios.get('/api/accounts/active')
  .then((results) =>{
    if (document.location.pathname.match(/\/accounts\/\d+/)) {
      let accountId      = document.location.pathname.match(/\/accounts\/(\d+)/)[1];
      let currentAccount = results.data.find((account) => { return account.id == parseInt(accountId); });

      new Vue({
        el:       '#app',
        render:   h => h(App),
        store: store(results.data, currentAccount),
        router
      });
    } else {
      new Vue({
        el:       '#app',
        render:   h => h(App),
        store: store(),
        router
      });
    }
  });
