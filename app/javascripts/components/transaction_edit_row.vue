<template>
  <tr :class="transactionGridRowClass"
      :transaction_id="transaction.id">
    <td class="small-column"></td>
    <td class="small-column"></td>
    <td class="text-left long-column">
      <textbox :value="formatDate(transaction.transaction_at)"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox :value="transaction.payee"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox :value="transaction.category"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox :value="transaction.memo"></textbox>
    </td>
    <td class="text-right long-column">
      <textbox :value="formatMoney(transaction.outflow)"></textbox>
    </td>
    <td class="text-right long-column">
      <div>
        <textbox :value="formatMoney(transaction.inflow)"></textbox>
      </div>
      <div @click="cancel">
        Cancel
      </div>
    </td>
    <td class="small-column"></td>
  </tr>
</template>

<script>
  import moment         from 'moment';
  import { mapActions } from 'vuex';
  import Transaction    from '../models/transaction.js';
  import Textbox        from './textbox.vue';

  export default {
    components: {
      Textbox
    },

    props: {
      cssClass:    { default: '' },
      transaction: { default: new Transaction() }
    },

    computed: {
      transactionGridRowClass() {
        return 'transaction-edit-row ' + this.cssClass;
      }
    },

    methods: {
      ...mapActions([
        'setTransactionEditMode'
      ]),

      cancel() {
        this.setTransactionEditMode(false);
      },

      formatDate(date) {
        return moment(date).format("YYYY/MM/DD");
      },

      formatMoney(value) {
        return parseInt(value) == 0 ? '' : '$' + value.toFixed(2).toString();
      }
    }
  }
</script>

<style>
  .transaction-edit-row td {
    vertical-align: top;
  }

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
