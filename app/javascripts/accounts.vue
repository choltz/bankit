<template>
  <div class="accounts">
    <account-header></account-header>
    <action-bar></action-bar>
    {{currentAccount.name}}<br/>
    These are the accounts
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';
  import AccountHeader  from './account_header.vue';
  import ActionBar      from './action_bar.vue';

  export default {
    components: {
      AccountHeader,
      ActionBar
    },

    computed: {
      calculateCurrentAccount: function() {
        let account = this.accounts.find((account) => {
          return account.id == this.$route.params.id
        });

        return account || { id: null, name: 'All Accounts' }
      },

      ...mapState([
        'accounts',
        'currentAccount',
        'getCurrentAccount'
      ])
    },

    methods: {
      ...mapActions([
        'setCurrentAccount'
      ])
    },

    watch: {
      // Update the current account when the route changes
      '$route' (to, from) {
        // TODO: need a condition here to only update the current account
        // if the new route is a dynamic account route (/accounts/:id)
        this.setCurrentAccount(this.calculateCurrentAccount);
      }
    }
  }
</script>
