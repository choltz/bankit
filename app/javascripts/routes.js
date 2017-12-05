import Budget    from 'javascripts/budget.vue';
import Reports   from 'javascripts/reports.vue';
import Accounts  from 'javascripts/accounts.vue';

export default function() {
  return [
    { path: '/',         component: Budget },
    { path: '/budget',   component: Budget },
    { path: '/reports',  component: Reports },
    { path: '/accounts', component: Accounts }
  ];
};
