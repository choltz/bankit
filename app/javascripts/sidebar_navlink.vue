<template>
  <div class="sidebar-navlink">
    <router-link :to="route">
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
    // route       - url this link navigates to
    // text        - link text
    props: {
      icon:        { default:  '' },
      iconDisplay: { default:  'always' },
      route:       { default : '' },
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
          return "sidebar-navlink-item sidebar-navlink-alwasy-visible";
        } else {
          return "sidebar-navlink-item sidebar-navlink-visible-on-hover";
        }
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
