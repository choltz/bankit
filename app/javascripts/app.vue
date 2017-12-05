<template>
  <div class="app">
    <aside>
      <sidebar></sidebar>
    </aside>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar.vue';

export default {
  components: {
    sidebar
  },

  data() {
    return {
      words: 'snaize'
    };
  },

  computed: {
    computedWords() {
      return 'computed words';
    }
  },

  methods: {
    text() {
      return 'buh';
    },

    textAgain () {
      return 'text again';
    }
  }
}
</script>
