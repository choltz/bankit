<template>
  <input type    = "text"
         :class  = "cssClass"
         v-model = "value">
  </input>
</template>

<script>
  export default {
    props: {
      initialValue: { default: null },
      cssClass:     { default: '' }
    },

    data: function() {
      return {
        value: this.initialValue
      };
    }
  };
</script>
