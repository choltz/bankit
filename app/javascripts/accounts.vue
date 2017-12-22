<template>
  <div class="accounts">
    <account-header></account-header>
    <action-bar></action-bar>
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
    }
  }
</script>
