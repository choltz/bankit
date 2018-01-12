<template>
  <input type="text" :value="value"></input>
</template>

<script>
  export default {
    props: {
      value: { default: null }
    }
  };
</script>
