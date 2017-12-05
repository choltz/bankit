import Vue       from 'vue';
import VueRouter from 'vue-router';
import buh       from 'javascripts/buh';
import App       from 'javascripts/app.vue';
import Budget    from 'javascripts/budget.vue';
import "vueify/lib/insert-css";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/budget', component: Budget }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el:       '#app',
    router,
    render:   h => h(App)
  })
});
