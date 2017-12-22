<template>
  <div class="account-header">
    <div class="title">
      {{currentAccount.name}}
    </div>
    <div class="details">Cleared Balance</div>
    <div class="details">Uncleared Balance</div>
    <div class="details">Working Balance</div>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'currentAccount',
      ])
    }
  }
</script>

<style>
  .account-header {
    display:          flex;
    color:            white;
    background-color: #003540;
    padding: .5em;
  }

  .account-header .title {
    color: white;
    background-color: #16A336;
    display: table-cell;
    vertical-align: middle;
    padding: .5em;
    border-radius: 5px;
    font-weight: 300;
    font-size: 1.3em;
  }

  .account-header .details {
    padding: .5em;
    display: table-cell;
    vertical-align: middle;
  }
</style>
