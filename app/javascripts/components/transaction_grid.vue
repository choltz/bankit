<template>
  <table class="transaction-grid">
    <tr>
      <th class="small-column"></th>
      <th class="small-column"></th>
      <th class="text-left long-column">Date</th>
      <th class="text-left">Payee</th>
      <th class="text-left">Category</th>
      <th class="text-left">Memo</th>
      <th class="text-right long-column">Outflow</th>
      <th class="text-right long-column">Inflow</th>
      <th></th>
    </tr>
    <tr v-for           = "transaction in transactions"
        :class          = "cssClass(transaction.id)" :transaction_id = "transaction.id" @click          = "onRowClick">
      <td></td>
      <td></td>
      <td class="text-left">{{transaction.transaction_at | moment("YYYY/MM/DD")}}</td>
      <td class="text-left">{{transaction.payee}}</td>
      <td class="text-left">{{transaction.category}}</td>
      <td class="text-left">{{transaction.memo}}</td>
      <td class="text-right">{{formatMoney(transaction.outflow)}}</td>
      <td class="text-right">{{formatMoney(transaction.inflow)}}</td>
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

      formatMoney(value) {
        return parseInt(value) == 0 ? '' : '$' + value.toFixed(2).toString();
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

    cursor:        pointer;
  }

  .transaction-grid .long-column {
    width: 8em;
  }

  .transaction-grid .small-column {
    width: 2em;
  }
</style>
