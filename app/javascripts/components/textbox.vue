<template>
  <input type   = "text"
         :class = "cssClass"
         :value = "value">
  </input>
</template>

<script>
  export default {
    props: {
      value:    { default: null },
      cssClass: { default: '' }
    }
  };
</script>
