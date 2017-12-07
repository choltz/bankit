<template>
  <div class="app">
    <aside>
      <sidebar></sidebar>
    </aside>
    <main>
      <message></message>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Message from './message.vue';
  import Sidebar from './sidebar.vue';

  export default {
    components: {
      Message,
      Sidebar
    }
  }
</script>
