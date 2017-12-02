import Vue from 'vue';
import buh from 'javascripts/buh';
import App from 'javascripts/app.vue';

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', function() {
  // Hook Vue into the page
  new Vue({
    el:       '#app',
    render:   h => h(App)
  })
});
