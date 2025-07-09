<template>
<Header />
<RouterView />
<Footer />
</template>

<script setup>
import { provide, ref } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

const isUserLoggedIn = ref(false)

function chekUserLoggedIn(state){
  isUserLoggedIn.value = state
}

provide("userstatus",{chekUserLoggedIn})

</script>