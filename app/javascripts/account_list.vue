<template>
  <div class="account-list">
    <div class="title">My Accounts</div>
    <ul>
      <sidebar-navlink v-for  = "account in accounts"
                       icon   = "mode_edit"
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
    padding-left: .5em;
  }

  .account-list li {
    font-size: 1em;
    font-weight: 300;
   }
</style>
