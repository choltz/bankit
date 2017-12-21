<template>
  <div class="sidebar-navlink">
    <router-link :to="route">
      <li>
        <i class="material-icons"> {{icon}} </i>
        {{text}}
      </li>
    </router-link>
  </div>
</template>

<script>
  import * as _ from 'lodash';

  export default {
    props: {
      icon:  { default: '' },
      route: { default : '' },
      text:  { default: '' }
    },

    computed: {
      hasIcon() {
        return !_.isEmpty(this.icon);
      }
    }
  }
</script>

<style>
  .sidebar-navlink li {
    color:                  white;
    padding:                .5em;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing:         normal;
    word-spacing:           normal;
    text-rendering:         auto;
  }

  .sidebar-navlink li:hover {
    background-color: #1E889C;
    cursor: pointer;
  }

  .sidebar-navlink li:hover i {
    visibility: visible;
  }

  .sidebar-navlink li i {
    visibility: hidden;
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
