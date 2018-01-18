<template>
  <input type    = "text"
         :class  = "cssClass"
         v-model = "value"
         @blur   = "update">
  </input>
</template>

<script>
  export default {
    props: {
      initialValue: { default: null },
      cssClass:     { default: '' },
      field:        { default: null }
    },

    data: function() {
      return {
        value: this.initialValue
      };
    },

    methods: {
      update() {
        this.$emit('blur', this.field, this.value);
      }
    }
  };
</script>
