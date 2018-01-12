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
  import Message        from './message.vue';
  import Sidebar        from './sidebar.vue';
  import Account        from 'javascripts/models/account.js';

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

        return account || Account.allAccounts();
      },

      ...mapState([
        'accounts'
      ])
    },

    methods: {
      ...mapActions([
        'getAccounts',
        'setCurrentAccount',
        'setTransactionEditMode'
      ]),

      // If this current path is an account path, then set the current account
      setCurrentAccountIfAccountPath() {
        if (this.$route.path.match(/^\/accounts/)) {
          this.setCurrentAccount(this.calculateCurrentAccount);
        }
      }
    },

    watch: {
      // Update the current account when the route changes
      '$route' (to, from) {
        this.setCurrentAccountIfAccountPath();
        this.setTransactionEditMode(false);
      }
    },

    mounted: function() {
      this.setCurrentAccountIfAccountPath();
    }
  }
</script>
