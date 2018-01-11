import Vue       from 'vue';
import VueRouter from 'vue-router';
import Budget    from 'javascripts/components/budget.vue';
import Reports   from 'javascripts/components/reports.vue';
import Account   from 'javascripts/components/account.vue';

Vue.use(VueRouter);

let routes = [
  { path: '/',             redirect: '/budget' },
  { path: '/budget',       component: Budget },
  { path: '/reports',      component: Reports },
  { path: '/accounts',     component: Account },
  { path: '/accounts/:id', component: Account }
];

export default new VueRouter({
  routes: routes,
  mode:   'history'
});
