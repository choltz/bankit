import Vue       from 'vue';
import VueRouter from 'vue-router';
import Budget    from 'javascripts/budget.vue';
import Reports   from 'javascripts/reports.vue';
import Accounts  from 'javascripts/accounts.vue';

Vue.use(VueRouter);

let routes = [
  { path: '/',             component: Budget },
  { path: '/budget',       component: Budget },
  { path: '/reports',      component: Reports },
  { path: '/accounts',     component: Accounts },
  { path: '/accounts/:id', component: Accounts }
];

export default new VueRouter({
  routes: routes,
  mode:   'history'
});
