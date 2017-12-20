<template>
  <div class="app">
    <aside>
      <sidebar></sidebar>
    </aside>
    <main>
      <message></message>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapState   } from 'vuex';
  import Message   from './message.vue';
  import Sidebar   from './sidebar.vue';

  export default {
    components: {
      Message,
      Sidebar
    },

    computed: {
      calculateCurrentAccount: function() {
        let account = this.accounts.find((account) => {
          return account.id == this.$route.params.id
        });

        return account || { id: null, name: 'All Accounts' }
      },

      ...mapState([
        'accounts',
        'currentAccount'
      ])
    },

    methods: {
      ...mapActions([
        'getAccounts',
        'setCurrentAccount'
      ])
    }
  }
</script>
