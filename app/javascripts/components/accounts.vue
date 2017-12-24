<template>
  <div class="accounts">
    <account-header></account-header>
    <action-bar></action-bar>
    {{transactions}}
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
        'transactions'
      ])
    },

    methods: {
      ...mapActions([
        'setCurrentAccount'
      ])
    }
  }
</script>
