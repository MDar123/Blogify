<template>
    <ul class="nav-menu">
      <li v-for="item in navItemsList">
          <span v-html="item.icon"></span>
          <RouterLink :to="item.link " class="nav-link" >
            {{ item.name }}
          </RouterLink>

      </li>
    </ul>
  </template>
  
<script setup>
import { computed,ref } from 'vue';
import 'primeicons/primeicons.css'
import { isUserLogin } from '@/data/CheckUserLogin';

const navItems = ref([]);

 const navItemsList = computed( ()=> {
  if(!isUserLogin.status){
   return navItems.value = [
      {
        name : "Login" , link : "/login"
      },
    ]
  } else {
    return  navItems.value = [ 
      {
        name : "Write a Blog" , link : "" , icon : '<span class="pi pi-pencil"></span>'
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
  