<template>
  <div class="account-list">
    <div class="title">BUDGET</div>
    <ul v-for="account in accounts">
      <li>
        <router-link :to="accountPath(account)">{{account.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      calculateCurrentAccount: function() {
        let account = this.accounts.find((account) => {
          return account.id == this.$route.params.id
        });

        return account || { id: null, name: 'All Accounts' }
      },

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
    },

    mounted: function() {
      // Get accounts and then set the current account based on the route
      this.$nextTick (() => {
        this.getAccounts()
            .then(() => {
              this.setCurrentAccount(this.calculateCurrentAccount);
            });
      })
    }
  }
</script>

<style>
  .account-list .title {
    font-size: .8em;
  }

  .account-list li {
    font-size: 1em;
  }
</style>
