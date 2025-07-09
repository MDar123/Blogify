<template>
  <div class="blog-list-container">
    <h1 class="heading">All Blogs</h1>
    <div class="grid">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
      />
    </div>
  </div>
</template>

<script setup>

import { blogs } from '@/data/Blogs';
import BlogCard from './BlogCard.vue'
</script>

<style scoped>
.blog-list-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #111827;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
