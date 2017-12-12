// Wire all the front-end pieces together. Set up Vue, define routes, initialize
// the app container, etc.

import Vue       from 'vue';
import App       from 'javascripts/app.vue';
import router    from 'javascripts/routes.js';
import store     from 'javascripts/store.js';
import "vueify/lib/insert-css";

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el:       '#app',
    render:   h => h(App),
    store,
    router
  })
});
