<template>
  <HomePage />
</template>

<script setup>

import { provide, ref } from 'vue';
import HomePage from './views/HomePage.vue';

const isUserLoggedIn = ref(false)

function chechUserLoggedIn(state){
  isUserLoggedIn.value = state
}

provide("userstatus",chechUserLoggedIn)

</script>