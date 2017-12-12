// Wire all the front-end pieces together. Set up Vue, define routes, initialize
// the app container, etc.

import Vue       from 'vue';
import VueRouter from 'vue-router';
import App       from 'javascripts/app.vue';
import Routes    from 'javascripts/routes.js';
// import Store     from 'javascripts/store.js';
import "vueify/lib/insert-css";

import Vuex      from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    accounts:['test1']
  }
  //,
  // mutations: {
  //   increment (state) {
  //     state.count++;
  //   }
  // }
});

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: Routes,
  mode:   'history'
});

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el:       '#app',
    render:   h => h(App),
    store,
    router
  })
});
