<template>
  <div class="accounts">
    <account-header></account-header>
    <action-bar></action-bar>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>Date</th>
        <th>Payee</th>
        <th>Category</th>
        <th>Memo</th>
        <th>Outflow</th>
        <th>Inflow</th>
        <th></th>
      </tr>
      <tr v-for  = "transaction in transactions"
          @click = "selectTransaction">
        <td></td>
        <td></td>
        <td>{{transaction.transaction_at | moment("YYYY/MM/DD")}}</td>
        <td>{{transaction.payee}}</td>
        <td>{{transaction.category}}</td>
        <td>{{transaction.memo}}</td>
        <td>{{transaction.outflow}}</td>
        <td>{{transaction.inflow}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';
  import * as moment    from 'moment';
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
        'currentTransaction',
        'transactions'
      ])
    },

    methods: {
      ...mapActions([
        'setCurrentAccount',
        'setCurrentTransaction'
      ]),

      selectTransaction() {
        alert('buh');
      }
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
