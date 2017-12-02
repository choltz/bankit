<template>
  <div>
    <sidebar></sidebar>

    Hi, this is a test.<br/>
    {{words}}!<br/>
    {{text()}}!<br/>
    {{textAgain()}}!
    {{computedWords}}

    <div><a href="">buh</a></div>
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
    computedWords () {
      return 'computed words';
    }
  },

  methods: {
    text () {
      return 'buh';
    },

    textAgain () {
      return 'text again';
    }
  }
}
</script>
