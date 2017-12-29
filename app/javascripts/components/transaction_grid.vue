<template>
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
</template>

<script>
  import { mapState   } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'currentTransaction',
        'transactions'
      ])
    },

    methods: {
      selectTransaction() {
        alert('buh');
      }
    }
  }
</script>
