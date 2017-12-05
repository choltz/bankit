<template>
  <div class="app">
    <aside>
      <sidebar></sidebar>
    </aside>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './sidebar.vue';

  export default {
    components: {
      Sidebar
    }
  }
</script>
