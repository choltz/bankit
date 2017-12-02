<template>
  <div>
    Hi, this is a test.<br/>
    {{words}}!<br/>
    {{text()}}!<br/>
    {{textAgain()}}!
    {{computedWords}}
  </div>
</template>

<script>
export default {
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
