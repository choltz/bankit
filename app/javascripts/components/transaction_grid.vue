<template>
  <div class="transaction-grid">
    <div class="transaction-grid table-header">
      <table>
        <tr>
          <th class="small-column"></th>
          <th class="small-column"></th>
          <th class="text-left long-column"><div class="column-text">DATE</div></th>
          <th class="text-left medium-column"><div class="column-text">PAYEE</div></th>
          <th class="text-left medium-column"><div class="column-text">CATEGORY</div></th>
          <th class="text-left medium-column"><div class="column-text">MEMO</div></th>
          <th class="text-right long-column"><div class="column-text">OUTFLOW</div></th>
          <th class="text-right long-column"><div class="column-text">INFLOW</div></th>
          <th class="small-column"></th>
        </tr>
      </table>
    </div>
    <div class="transaction-grid table-body">
      <table>
        <tr v-for           = "transaction in transactions"
            :class          = "cssClass(transaction.id)"
            :transaction_id = "transaction.id"
            @click          = "onRowClick">
          <td class="small-column"></td>
          <td class="small-column"></td>
          <td class="text-left long-column">{{transaction.transaction_at | moment("YYYY/MM/DD")}}</td>
          <td class="text-left medium-column">{{transaction.payee}}</td>
          <td class="text-left medium-column">{{transaction.category}}</td>
          <td class="text-left medium-column">{{transaction.memo}}</td>
          <td class="text-right long-column">{{formatMoney(transaction.outflow)}}</td>
          <td class="text-right long-column">{{formatMoney(transaction.inflow)}}</td>
          <td class="small-column"></td>
        </tr>
      </table>
    </div>
  </div>
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
        'findTransactionById',
        'setCurrentTransaction'
      ]),

      cssClass(transactionId) {
        return transactionId == this.currentTransaction.id ? 'selected' : '';
      },

      formatMoney(value) {
        return parseInt(value) == 0 ? '' : '$' + value.toFixed(2).toString();
      },

      onRowClick(event) {
        let transactionId = event.currentTarget.getAttribute('transaction_id');

        this.findTransactionById(transactionId)
            .then((transaction) => {
              this.setCurrentTransaction(transaction);
            });
      },

      resizeGrid() {
        let height = window.innerHeight - this.$el.offsetTop - 2;
        this.$el.style.height = height + 'px';
      }
    },

    mounted: function() {
      this.$nextTick(function() {
        // set the grid size and set an event to resize the grid when the
        // window is resized
        this.resizeGrid();
        window.addEventListener('resize',this.resizeGrid);
      });
    }
  }
</script>

<style>
  .transaction-grid {
    display: flex;
    flex-direction: column;
  }

  .transaction-grid table {
    width: 100%;
    table-layout: fixed;
    margin: 0;
    border-spacing: 0px;
  }

  .transaction-grid  .table-header {
    flex: 0 100% auto;
    overflow-y: scroll;
  }

  .transaction-grid  .table-body {
    height: 500px;
    flex: 1;
    overflow-y: scroll;
  }

  .transaction-grid .table-footer {
    flex: 1 100% auto;
  }

  .transaction-grid table td {
    overflow: hidden;
  }

  .transaction-grid table th {
    color: #4c7079;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
  }

  .transaction-grid table th .column-text {
    font-size: .9em ;
  }

  .transaction-grid table .selected {
    background-color: #00596f;
    color:            white;
  }

  .transaction-grid table th,
  .transaction-grid table td {
    font-weight:   normal;
    font-size:     .8em;
    border-bottom: 1px solid #dee3e8;
    padding:       .5em;
    cursor:        pointer;
  }

  .transaction-grid table .long-column {
    width: 8em;
  }

  .transaction-grid table .medium-column {
    width: 20%;
  }

  .transaction-grid table .small-column {
    width: 1.5em;
  }
</style>
