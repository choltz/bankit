import Vue       from 'vue';
import VueRouter from 'vue-router';
import Budget    from 'javascripts/budget.vue';
import Reports   from 'javascripts/reports.vue';
import Accounts  from 'javascripts/accounts.vue';

Vue.use(VueRouter);

let router = [
  { path: '/',         component: Budget },
  { path: '/budget',   component: Budget },
  { path: '/reports',  component: Reports },
  { path: '/accounts', component: Accounts }
];

export default router;
