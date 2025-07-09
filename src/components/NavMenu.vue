<template>
    <ul class="nav-menu">
      <li v-for="item in navItems">
          <span v-html="item.icon"></span>
          {{ item.name }}

      </li>
    </ul>
  </template>
  
<script setup>
import { onMounted, ref } from 'vue';
import 'primeicons/primeicons.css'
import { isUserLoggedIn } from '@/utils/CheckUserLogin';


const navItems = ref([
])

onMounted( ()=> {
  const isUserLogin = isUserLoggedIn();

  if(!isUserLogin){
    navItems.value = [
      {
        name : "Sign in" , link : ""
      },
      {
        name : "Sign out" , link : ""
      }
    ]
  } else {
    navItems.value = [ 
      {
        name : "Write a post" , link : "" , icon : '<span class="pi pi-pencil"></span>'
      },
      {
        name : "User Profile" , link : "" , icon : '<span class="pi pi-user"></span>'
      }
    ]
  }
} )
</script>

<style scoped>
  .nav-menu {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-menu li {
    font-size: 0.95rem;
    color: #374151;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background 0.2s ease;
  }
  
  .nav-menu li:hover {
    background-color: #f3f4f6;
  }
</style>
  