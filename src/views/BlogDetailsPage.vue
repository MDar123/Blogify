<template>

<div class="blog-detail-container">
  <div class="blog-header">
    <h1 class="blog-title"> {{ blogData.title }} </h1>
    <div class="blog-meta">
      <span>•</span>
      <span>Likes: {{ blogData.likes }} </span>
      <span>•</span>
      <span>Comments: {{ blogData.comments.length }} </span>
      <span>•</span>
      <span>Posted on:  {{ blogData.createdAt }} </span>
    </div>
  </div>

  <div class="blog-content">
    <p> {{ blogData.content }} </p>
  </div>

  <!-- <div class="comments-section">
    <h2>Comments</h2>
    <div class="comment">
      <p class="comment-text">"Loved this explanation!"</p>
      <span class="comment-user">- User ID: 2</span>
    </div>
    <div class="comment">
      <p class="comment-text">"Very helpful, thanks!"</p>
      <span class="comment-user">- User ID: 3</span>
    </div>
  </div> -->
</div>

</template>

<script setup>
import getCurrentBlog from '@/data/Blogs';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const blogData = ref({})
blogData.value = getCurrentBlog(route.params.id)

</script>

<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  min-height: 80vh;
  margin-top: 100px;
}

.blog-header {
  margin-bottom: 20px;
}

.blog-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 10px;
}

.blog-meta {
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.blog-content {
  font-size: 1.1rem;
  color: #374151;
  margin-bottom: 30px;
}

.comments-section {
  border-top: 1px solid #e5e7eb;
  padding-top: 20px;
}

.comments-section h2 {
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: #1f2937;
}

.comment {
  margin-bottom: 16px;
}

.comment-text {
  font-size: 1rem;
  color: #111827;
  margin-bottom: 4px;
}

.comment-user {
  font-size: 0.85rem;
  color: #6b7280;
}

</style>