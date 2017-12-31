<template>
  <table class="transaction-grid">
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
    <tr v-for           = "transaction in transactions"
        :class          = "cssClass(transaction.id)"
        :transaction_id = "transaction.id"
        @click          = "onRowClick">
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
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapState }   from 'vuex';
  import Transaction    from '../models/transaction.js';
  import * as _         from 'lodash';

  export default {
    computed: {
      ...mapState([
        'currentTransaction',
        'transactions'
      ])
    },

    methods: {
      ...mapActions([
        'setCurrentTransaction'
      ]),

      cssClass(transactionId) {
        return transactionId == this.currentTransaction.id ? 'selected' : '';
      },

      findTransactionById(transactionId) {
        return _.find(this.transactions, (transaction) => {
          return parseInt(transactionId) == transaction.id;
        });
      },

      onRowClick(event) {
        let transactionId = event.currentTarget.getAttribute('transaction_id');
        let transaction   = this.findTransactionById(transactionId);
        this.setCurrentTransaction(transaction);
      }
    }
  }
</script>

<style>
  .transaction-grid .selected {
    background-color: #00596f;
    color: white;
  }

  .accounts table {
    width: 100%;
    border-spacing: 0px;
  }

  .transaction-grid th,
  .transaction-grid td {
    font-weight:   normal;
    font-size:     .8em;
    border-bottom: 1px solid #dee3e8;
    border-left:   none;
    padding:       .5em;
  }
</style>
