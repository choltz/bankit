<template>
  <div class="action-bar">
    <component :is="actionbarName"></component>
  </div>
</template>

<script>
  import AccountsActionbar from './actionbars/accounts_actionbar.vue';
  import BudgetActionbar   from './actionbars/budget_actionbar.vue';
  import ReportsActionbar  from './actionbars/reports_actionbar.vue';
  import * as _            from 'lodash';

  export default {
    components: {
      AccountsActionbar,
      BudgetActionbar,
      ReportsActionbar
    },

    computed: {
      // Determine the actionbar component name based on the type
      actionbarName() {
        return this.type + '-actionbar';
      },

      // Calculate the action bar type based on the route
      //
      // Examples: 'accounts', 'budget', 'reports'
      type() {
        let type = this.$route
                       .path
                       .replace(/\/[^$+]$/, '')
                       .replace(/^\//, '');
        return _.isEmpty(type) ? 'budget' : type;
      }
    }
  }
</script>

<style>
  .action-bar {
    background-color: white;
    border-bottom:    1px solid #dfe4e9;

    padding: .5em;
  }
</style>
