<template>
  <div class="sidebar">
    <div class="budget-dropdown">My Budget</div>
    <ul class="nav-main">
      <sidebar-navlink icon  = "mail"
                       route = "/budget"
                       text  = "Budget">
      </sidebar-navlink>
      <sidebar-navlink icon  = "assessment"
                       route = "/reports"
                       text  = "Reports">
      </sidebar-navlink>
      <sidebar-navlink icon  = "account_balance"
                       route = "/accounts"
                       text  = "All Accounts">
      </sidebar-navlink>
    </ul>

    <account-list></account-list>
  </div>
</template>

<script>
  import AccountList    from './account_list.vue';
  import SidebarNavlink from './sidebar_navlink.vue';

  export default {
    components: {
      AccountList,
      SidebarNavlink
    }
  }
</script>

<style>
  .sidebar {
    padding:     .5em 0;
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
    text-decoration: none;
    vertical-align: middle;
  }

  .sidebar .nav-main li {
    padding: em 0;
  }

  .sidebar .nav-main i {
    padding-right: .5em;
  }

  .account-list {
    padding-top:  1em;
  }
</style>
