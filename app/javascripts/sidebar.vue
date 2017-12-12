<template>
  <div class="sidebar">
    <div class="budget-dropdown">My Budget</div>
    <ul class="nav-main" >
      <li>
        <i class="material-icons"> mail </i>
        <router-link to="/budget">Budget</router-link>
      </li>
      <li>
        <i class="material-icons">assessment</i>
        <router-link to="/reports">Reports</router-link>
      </li>
      <li>
        <i class="material-icons">account_balance</i>
        <router-link to="/accounts">All Accounts</router-link>
      </li>
    </ul>
    {{accounts}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: 'snaize'
    };
  },

  computed: {
    accounts() {
      /* debugger*/
      return 'computed words';
    }
  },

  methods: {
  }
}
</script>

<style>
  .sidebar {
    padding: .5em 0;
    font-size:   1.2em;
    font-weight: bold;
  }

  .sidebar .budget-dropdown {
    padding: 0 .5em;
  }

  .sidebar li {
    color:                  white;
    padding:                .5em .5em;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing:         normal;
    word-spacing:           normal;
    text-rendering:         auto;
  }

  .sidebar li:hover {
    background-color: #1E889C;
    cursor: pointer;
  }

  .sidebar li a {
    text-decoration: none;
    color: white;
  }

  .sidebar ul {
    list-style: none;
    padding:    0px;
    margin:     0px;
  }

  .sidebar .nav-main {
    font-weight: 300;
  }

  .sidebar .nav-main .material-icons {
    vertical-align: middle;
  }

  .sidebar .nav-main a {
    display: inline-block;
    padding-top: .05em;
    margin: -.05em .375em 0 .375em;
    line-height: 2em;
    vertical-align: middle;
  }
</style>
