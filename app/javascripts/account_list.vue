<template>
  <div class="account-list">
    <div class="title">BUDGET</div>
    <ul v-for="account in accounts">
      <li>
        <router-link :to="accountPath(account)">{{account.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState   } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'accounts'
      ])
    },

    methods: {
      accountPath: function(account) {
        return '/accounts/' + account.id;
      },
      ...mapActions([
        'getAccounts'
      ])
    },

    mounted: function() {
      this.$nextTick (() => {
        this.getAccounts();
      })
    }
  }
</script>

<style>
  .account-list .title {
    font-size: .8em;
  }

  .account-list li {
    font-size: 1em;
  }
</style>
