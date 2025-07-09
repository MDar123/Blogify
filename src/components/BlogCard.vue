<template>
    <div class="blog-card">
      <div class="image">
        <h3>{{ props.blog.title }}</h3>
      </div>
      <div class="blog-info">
        <p class="content">{{ props.blog.content.slice(0, 100) }}...</p>
        <p class="meta">Likes: {{ props.blog.likes }} | Comments: {{ blog.comments.length }}</p>
        <p class="date">{{ props.blog.createdAt }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['blog'])
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
  
  .image {
    background: #4f46e5;
    color: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
  }
  
  .blog-info {
    padding: 16px;
  }
  
  .content {
    margin-bottom: 8px;
    color: #374151;
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
  </style>
  