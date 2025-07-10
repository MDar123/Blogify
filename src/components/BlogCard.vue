<template>
    <div class="blog-card">
      <div class="image-placeholder">
        <h3>{{ props.blog.title }}</h3>
      </div>
  
      <div class="blog-info">
        <p class="content">{{ props.blog.content.slice(0, 100) }}...</p>
        <p class="meta">Likes: {{ props.blog.likes }} | Comments: {{ props.blog.comments.length }}</p>
        <p class="date">{{ props.blog.createdAt }}</p>
        <RouterLink :to="`/blog/${props.blog.id}`" class="read-more">Read More</RouterLink>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['blog']);
  </script>
  
  <style scoped>
  .blog-card {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .blog-card:hover {
    transform: translateY(-4px);
  }
  
  .image-placeholder {
    background-color: #d1d5db; /* light grey */
    padding: 30px;
    text-align: center;
    color: #1f2937;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .blog-info {
    padding: 16px;
  }
  
  .content {
    margin-bottom: 10px;
    color: #374151;
    font-size: 0.95rem;
    line-height: 1.4;
  }
  
  .meta {
    font-size: 0.9rem;
    color: #6b7280;
  }
  
  .date {
    margin-top: 6px;
    font-size: 0.8rem;
    color: #9ca3af;
  }
  
  .read-more {
    margin-top: 12px;
    display: inline-block;
    padding: 8px 16px;
    background-color: #4f46e5;
    color: white;
    font-weight: 500;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease;
  }
  
  .read-more:hover {
    background-color: #4338ca;
  }
  </style>
  