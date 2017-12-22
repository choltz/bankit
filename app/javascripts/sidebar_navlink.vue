<template>
  <div class="sidebar-navlink">
    <router-link :to="path">
      <li :class="iconDisplayClass">
        <i class="material-icons"> {{icon}} </i>
        {{text}}
      </li>
    </router-link>
  </div>
</template>

<script>
  import * as _ from 'lodash';

  export default {
    // icon        - material icon name to use in this link
    // iconDisplay - always or hover
    // path        - url this link navigates to
    // text        - link text
    props: {
      icon:        { default:  '' },
      iconDisplay: { default:  'always' },
      path:        { default : '' },
      text:        { default:  '' }
    },

   computed: {
      // Return whether or not this link has an icon
      hasIcon() {
        return !_.isEmpty(this.icon);
      },

      // Build the icon behavior classes based on the iconDisplay property
      iconDisplayClass() {
        if (this.iconDisplay == 'always') {
          return this.selectedClass + ' sidebar-navlink-item sidebar-navlink-alwasy-visible';
        }

        return this.selectedClass + ' sidebar-navlink-item sidebar-navlink-visible-on-hover';
      },

      // Returns whether or not the link has been selected
      isSelected() {
        return this.path == this.$route.path;
      },

      // Return the class to manage the selected status of the link
      selectedClass() {
        return this.isSelected ? 'sidebar-navlink-selected' : '';
      }
    }
  }
</script>

<style>
  .sidebar-navlink-item {
    color:                  white;
    padding:                .5em;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing:         normal;
    word-spacing:           normal;
    text-rendering:         auto;
  }

  .sidebar-navlink-item:hover {
    background-color: #1E889C;
    cursor: pointer;
  }

  .sidebar-navlink-selected {
    background-color: #00596f;
  }

  .sidebar-navlink-visible-on-hover:hover i {
    visibility: visible;
  }

  .sidebar-navlink-visible-on-hover i {
    visibility: hidden;
  }

  .sidebar-navlink-always-visible i {
    visibility: visible;
  }

  .sidebar-navlink a {
    text-decoration: none;
    color: white;
    font-weight: 300;
  }

  .sidebar-navlink  .material-icons {
    vertical-align: middle;
  }

  .sidebar-navlink  i {
    padding-right: .5em;
  }
</style>
