<template>
<Header />
<RouterView />
<Footer />
</template>

<script setup>
import { provide, ref } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

</script>