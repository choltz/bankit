<template>
  <input type    = "text"
         :class  = "cssClass"
         :value  = "displayValue"
         @blur   = "update">
  </input>
</template>

<script>
  import * as _ from 'lodash';
  import moment from 'moment';

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
        if (_.isNumber(this.value)) {
          return this.formatMoney(this.value);
        }
        else {
          return '';
        }
      }
    },

    methods: {
      formatMoney(value) {
        if (typeof(value) == 'string') {
          return parseInt(value.replace(/^\$/, ''));
        }
        else {
          return parseInt(value) == 0 ? '' : '$' + value.toFixed(2).toString();
        }
      },

      update() {
        if (!_.isEmpty(this.$el.value)) {
          this.value = parseFloat(this.$el.value.replace(/^\$/, ''));
          this.$emit('blur', this.field, this.value);
        }
      }
    }
  };
</script>
