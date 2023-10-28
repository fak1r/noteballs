<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop">
    <router-view></router-view>
  </div>
</template>

<script setup>

  import NavBar from '@/components/layout/NavBar.vue'
  import { useStoreAuth } from '@/stores/storeAuth'
  import { onMounted } from 'vue';

  const storeAuth = useStoreAuth();

  onMounted(() => {
    storeAuth.init();
  })

</script>

<style>
@import '/node_modules/bulma/css/bulma.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #779ef2;
}

a{
  font-weight: bold;
}


</style>
