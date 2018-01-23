<template>
  <tr :class="transactionGridRowClass"
      :transaction_id="transaction.id"
      @click         ="onClick"
      @dblclick      ="onDblClick">
    <td class="small-column"></td>
    <td class="small-column"></td>
    <td class="text-left long-column">{{transaction.transaction_at | moment("MM/DD/YYYY")}}</td>
    <td class="text-left medium-column">{{transaction.payee}}</td>
    <td class="text-left medium-column">{{transaction.category}}</td>
    <td class="text-left medium-column">{{transaction.memo}}</td>
    <td class="text-right long-column">{{toMoney(transaction.outflow)}}</td>
    <td class="text-right long-column">{{toMoney(transaction.inflow)}}</td>
    <td class="small-column"></td>
  </tr>
</template>

<script>
  import Transaction from '../models/transaction.js';
  import {toMoney}   from '../lib/float.js';

  export default {
    props: {
      cssClass:    { default: '' },
      transaction: { default: new Transaction() }
    },

    computed: {
      transactionGridRowClass() {
        return 'transaction-grid-row ' + this.cssClass;
      }
    },

    methods: {
      toMoney: toMoney,

      onClick(event) {
        this.$emit('select', this.transaction);
      },

      onDblClick(event) {
        this.$emit('edit', this.transaction);
      }
    }
  }
</script>

<style>
  .transaction-grid-row td .long-column {
    width: 8em;
  }

  .transaction-grid-row td .medium-column {
    width: 20%;
  }

  .transaction-grid-row td .small-column {
    width: 1.5em;
  }
</style>
