<template>
  <div class="action-bar">
    Actions: {{type}}
  </div>
</template>

<script>
  export default {
    computed: {
      // Calculate the action bar type based on the route
      //
      // Examples: 'accounts', 'budget', 'reports'
      type() {
        return this.$route
                   .path
                   .replace(/\/[^$+]$/, '')
                   .replace(/^\//, '');
      }
    }
  }
</script>

<style>
  .action-bar {
    background-color: white;
    border-bottom:    1px solid #dfe4e9;

    padding: .5em;
  }
</style>
