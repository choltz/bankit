<template>
  <tr :class="transactionGridRowClass"
      :transaction_id="transaction.id">
    <td class="small-column"></td>
    <td class="small-column"></td>
    <td class="text-left long-column">
      <textbox field          = "transactionAt"
               :initial-value = "formatDate(transaction.transaction_at)"
               @blur          = "updateField"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox field          = "payee"
               :initial-value = "transaction.payee"
               @blur          = "updateField"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox field          = "category"
               :initial-value = "transaction.category"
               @blur          = "updateField"></textbox>
    </td>
    <td class="text-left medium-column">
      <textbox field          = "memo"
               :initial-value = "transaction.memo"
               @blur          = "updateField"></textbox>
    </td>
    <td class="text-right long-column">
      <currencybox field          = "outflow"
                   css-class      = "text-right width-100-p"
                   :initial-value = "transaction.outflow"
                   @blur          = "updateField">
      </currencybox>
    </td>
    <td class="text-right long-column">
      <div>
        <currencybox field          = "inflow"
                     css-class      = "text-right width-100-p"
                     :initial-value = "transaction.inflow"
                     @blur          = "updateField">
        </currencybox>
      </div>
      <div class="flex flex-right">
        <div @click="save" class="block-padding-5">
          Save
        </div>
        <div @click="cancel" class="block-padding-5">
          Cancel
        </div>
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
  import Currencybox    from './currencybox.vue';
  import {toMoney}      from '../lib/float.js';

  export default {
    components: {
      Currencybox,
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
        return moment(date).format("MM/DD/YYYY");
      },

      save() {
        console.log(this.transaction)
        this.setTransactionEditMode(false);
      },

      updateField(field, value) {
        this.transaction[field] = value;
      }
    },

    mounted: function() {
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
