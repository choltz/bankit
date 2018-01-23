<template>
  <input type    = "text"
         :class  = "cssClass"
         :value  = "displayValue"
         @blur   = "update">
  </input>
</template>

<script>
  import * as _    from 'lodash';
  import moment    from 'moment';
  import {toMoney} from '../lib/float.js';

  export default {
    props: {
      initialValue: { default: null },
      cssClass:     { default: '' },
      field:        { default: null }
    },

    data: function() {
      return {
        value: parseFloat(this.initialValue)
      };
    },

    computed: {
      displayValue() {
        return _.isNumber(this.value) ? toMoney(this.value) : '';
      }
    },

    methods: {
      update() {
        if (!_.isEmpty(this.$el.value)) {
          this.value = parseFloat(this.$el.value.replace(/^\$/, ''));
          this.$emit('blur', this.field, this.value);
        }
      }
    }
  };
</script>
