<template>
  <div class="account-list">
    <div class="title">BUDGET</div>
    <ul v-for="account in accounts">
      <sidebar-navlink icon   = ""
                       :route = "accountPath(account)"
                       :text  = "account.name">
      </sidebar-navlink>
    </ul>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';
  import SidebarNavlink from './sidebar_navlink.vue';

  export default {
    components: {
      SidebarNavlink
    },

    computed: {
      /* calculateCurrentAccount: function() {
       *   let account = this.accounts.find((account) => {
       *     return account.id == this.$route.params.id
       *   });

       *   return account || { id: null, name: 'All Accounts' }
       * },
       */
      ...mapState([
        'accounts',
        'currentAccount'
      ])
    },

    methods: {
      accountPath: function(account) {
        return '/accounts/' + account.id;
      },
      ...mapActions([
        'getAccounts',
        'setCurrentAccount'
      ])
    }
  }
</script>

<style>
  .account-list .title {
    font-size: .7em;
    font-weight: 500;
  }

  .account-list li {
    font-size: 1em;
    font-weight: 300;
  }
</style>
