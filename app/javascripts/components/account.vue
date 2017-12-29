<template>
  <div class="accounts">
    <account-header></account-header>
    <action-bar></action-bar>
    <transaction-grid></transaction-grid>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';
  import * as moment    from 'moment';
  import AccountHeader  from './account_header.vue';
  import ActionBar      from './action_bar.vue';
  import TransactionGrid from './transaction_grid.vue';

  export default {
    components: {
      AccountHeader,
      ActionBar,
      TransactionGrid
    },

    computed: {
      ...mapState([
        'currentAccount'
      ])
    },

    methods: {
      ...mapActions([
        'setCurrentAccount',
        'setCurrentTransaction'
      ])

    }
  }
</script>

<style>
  .accounts table {
    width: 100%;
    border-spacing: 0px;
  }

  .accounts th,
  .accounts td {
    font-weight:   normal;
    font-size:     .8em;
    border-bottom: 1px solid #dee3e8;
    border-left:   1px solid #dee3e8;
    padding:       .5em;
  }
</style>
