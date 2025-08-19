<template>
    <header class="main-header">
      <div class="logo">Blogify</div>
  
      <div class="search-wrapper">
        <SearchBar v-if="checkUser" />
      </div>
  
      <nav class="nav-wrapper">
        <NavMenu />
      </nav>
    </header>
  </template>
  
  <script setup>
  import SearchBar from '@/components/SearchBar.vue'
  import NavMenu from '@/components/NavMenu.vue'
  import { isUserLoggedIn } from '@/utils/CheckUserLogin';
import { ref } from 'vue';

  const checkUser = ref(false)
  const isUserLogin = isUserLoggedIn();
  checkUser.value = isUserLogin

  </script>
  
<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    z-index: 1000;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4f46e5;
  }
  
  .search-wrapper {
    flex: 1;
    max-width: 400px;
    margin: 0 30px;
  }
  
  .nav-wrapper {
    display: flex;
    gap: 20px;
  }
</style>
  