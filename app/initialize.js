import Vue from 'vue'
import buh from 'javascripts/buh';
import App from 'javascripts/app.vue';

// Vue.config.productionTip = false


document.addEventListener('DOMContentLoaded', function() {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    // components: { App },
    render: h => h(App)
  })

  // do your setup here
  console.log('Initialized app');
  // console.log(test);
});
