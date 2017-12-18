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
        return this.accounts.find((account) => {
          return account.id == this.$route.params.id
        })
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
      '$route' (to, from) {
        this.setCurrentAccount(this.calculateCurrentAccount);
      }
    }
  }
</script>
